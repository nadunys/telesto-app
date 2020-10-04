import React, { Component } from "react";
import Globe from "react-globe.gl";
import LocationsService from "../../services/locations.service";
import Alert from "./alert";

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
};

type Props = {};

export default class GlobeContainer extends Component<Props, State> {
  locationsService = new LocationsService();
  ref: React.RefObject<any> = React.createRef();

  constructor(props: any) {
    super(props);
    this.state = {
      observatories: [],
      showAlert: false,
      alertData: undefined,
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
        <Globe
          ref={this.ref}
          globeImageUrl="https://dsuarezv.github.io/satellite-tracker/earthmap-high.602450bd.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          hexBinPointsData={this.state.observatories}
          hexBinPointWeight="pop"
          hexAltitude={(d) => d.sumWeight * 6e-8}
          hexBinResolution={3}
          hexBinMerge={false}
          hexTopColor={() => "#FF0000"}
          enablePointerInteraction={true}
          onHexClick={(hex, event) =>
            this.setState({ alertData: hex.points[0], showAlert: true })
          }
        />
        {this.state.showAlert && (
          <Alert showAlert={this.state.showAlert} data={this.state.alertData} />
        )}
      </>
    );
  }
}
