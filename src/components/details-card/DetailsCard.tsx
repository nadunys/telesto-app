import { IonCard, IonContent, IonImg, IonTitle, IonLoading, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton } from "@ionic/react";
import React, { Component } from "react";
import { Observatory } from "../../services/models";
import LocationsService from "../../services/locations.service";
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { arrowBackCircle, camera } from "ionicons/icons";
import Tab1 from "../../pages/Tab1";
import Tab2 from "../../pages/Tab2";

type Props = {
  obsId: string;
}

type State = {
  observatoryData: Observatory;
}
export default class DetailsCard extends Component<Props, State> {

  locationsService = new LocationsService();

  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    try {
      const data = (await this.locationsService.getObservatoryDetails(this.props.obsId)).data;
      this.setState({ observatoryData: data.observatory });
      console.log(this.state.observatoryData)
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <>
        {this.state && (<IonContent style={{
          position: "absolute",
          zIndex: 10000,
        }}>

          <IonTabBar color="dark">
          <IonRouterOutlet>
          </IonRouterOutlet>
          <IonTabButton href="/tab1">
            <IonIcon icon={arrowBackCircle} />
          </IonTabButton>
          <IonTabButton href="/tab2">
            <IonIcon icon={camera} />            
          </IonTabButton>
          
        </IonTabBar>
          <IonCard>
            <IonImg src="https://media.wired.com/photos/5b52582f59269e342890a45a/1:1/w_1800,h_1800,c_limit/Satellite_FHM56J.jpg" />
          </IonCard>

          <IonCard color="dark" className="odd-card">
            <IonCardHeader>Name</IonCardHeader>
            <IonCardContent className="title">{this.state.observatoryData.name}</IonCardContent>
          </IonCard>
          {this.state.observatoryData.moreData &&
            this.state.observatoryData.moreData.ResourceHeader &&
            this.state.observatoryData.moreData.ResourceHeader.Description && <IonCard color="dark" className="even-card">
              <IonCardHeader>Description</IonCardHeader>
              <IonCardContent className="title">{this.state.observatoryData.moreData.ResourceHeader.Description}</IonCardContent>
            </IonCard>
          }
          <IonCard color="dark" className="odd-card">
            <IonCardHeader>Start Date</IonCardHeader>
            <IonCardContent className="title">{new Date(this.state.observatoryData.startTime).toString()}</IonCardContent>
          </IonCard>
          <IonCard color="dark" className="odd-card">
            <IonCardHeader>End Date</IonCardHeader>
            <IonCardContent className="title">{new Date(this.state.observatoryData.endTime).toString()}</IonCardContent>
          </IonCard>
          {/* <IonCard color="dark" className="even-card">
        <IonCardHeader className="title">Location</IonCardHeader>
        <IonCardContent id="location">
          {this.state.observatoryData.coordinates && this.state.observatoryData.coordinates.map((coordinate,id) =>
            <IonGrid key = {id}>
              <IonRow>
                <IonCol>
                  <div>Longitude</div>
                </IonCol>
                <IonCol>
                  <div>Latitude</div>
                </IonCol>
                <IonCol>
                  <div>x</div>
                </IonCol>
                <IonCol>
                  <div>y</div>
                </IonCol>
                <IonCol>
                  <div>z</div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div>{coordinate.longitude}</div>
                </IonCol>
                <IonCol>
                  <div>{coordinate.latitude}</div>
                </IonCol>
                <IonCol>
                  <div>{coordinate.x}</div>
                </IonCol>
                <IonCol>
                  <div>{coordinate.y}</div>
                </IonCol>
                <IonCol>
                  <div>{coordinate.z}</div>
                </IonCol>
              </IonRow>
            </IonGrid>)}
        </IonCardContent>
        </IonCard> */}
          <IonCard className="odd-card">
            <IonCardHeader></IonCardHeader>
            <IonCardContent className="title"></IonCardContent>
          </IonCard>
        </IonContent>)}
      </>
    );
  }
}
