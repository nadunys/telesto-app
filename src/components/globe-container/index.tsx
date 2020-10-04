import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
} from "@ionic/react";
import React, { Component, ReactNode } from "react";
import Globe from "react-globe.gl";
import LocationsService from "../../services/locations.service";
import DetailsCard from "../details-card/DetailsCard";

type State = {
  observatories: Array<{
    id: string;
    name: string;
    lat: number;
    lng: number;
    pop: number;
    radius: number;
    color: string;
  }>;
  alertData: any;
  showAlert: boolean;
  showDetails: boolean;
};

type Props = {};

type ReadonlyProps = {
  children?: ReactNode;
};

export default class GlobeContainer extends Component<
  Props & ReadonlyProps,
  State
> {
  locationsService = new LocationsService();
  ref: React.RefObject<any> = React.createRef();

  constructor(props: any) {
    super(props);
    this.state = {
      observatories: [],
      showAlert: false,
      alertData: undefined,
      showDetails: false,
    };
  }

  async componentDidMount() {
    try {
      const data = (await this.locationsService.getMinifiedObservatories()).data
        .minifiedObservatories;
      const observatories: Array<{
        id: string;
        name: string;
        lat: number;
        lng: number;
        pop: number;
        radius: number;
        color: string;
      }> = [];
      for (const d of data) {
        if (d.coordinate) {
          const coord = d.coordinate;
          const temp = {
            id: d.id,
            name: d.name,
            lat: coord.latitude,
            lng: coord.longitude,
            pop: this.getAlt(coord.x, coord.y, coord.z) * 100,
            radius: Math.random() * 5,
            color: ["red", "white", "blue", "green"][
              Math.round(Math.random() * 3)
            ],
          };

          observatories.push(temp);
        }
      }
      this.setState({ observatories });
    } catch (error) {
      console.log(error.message);
    }
  }

  getAlt(x: number, y: number, z: number) {
    const height = Math.sqrt(x * x + y * y + z * z);
    return height;
  }

  render() {
    return (
      <>
        {this.state.showAlert && (
          <IonCard
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              zIndex: 1000,
            }}
            color="dark"
          >
            <IonCardHeader style={{ marginBottom: "-15px" }}>
              <IonCardHeader>{this.state.alertData.name}</IonCardHeader>
            </IonCardHeader>

            <IonCardContent>
              {`Longitude: ${this.state.alertData.lng}, Latitude: ${this.state.alertData.lat}`}
              <br />
              <IonButton
                color="danger"
                onClick={() => this.setState({ showAlert: false })}
              >
                Cancel
              </IonButton>
              <IonButton
                color="primary"
                onClick={() => this.setState({ showDetails: true })}
              >
                View More
              </IonButton>
            </IonCardContent>
          </IonCard>
        )}
        {this.state.showDetails && <DetailsCard obsId={this.state.alertData.id} />}
        <Globe
          globeImageUrl="https://dsuarezv.github.io/satellite-tracker/earthmap-high.602450bd.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          hexBinPointsData={this.state.observatories}
          hexBinPointWeight="pop"
          hexAltitude={(d) => d.sumWeight * 6e-8}
          hexBinResolution={2}
          hexBinMerge={false}
          hexTopColor={() => "#ffffff"}
          hexSideColor={() => "#383a3e00"}
          enablePointerInteraction={true}
          onHexClick={(hex, event) =>
            this.setState({ alertData: hex.points[0], showAlert: true })
          }
          animateIn={true}
          waitForGlobeReady={true}
        />
      </>
    );
  }
}
