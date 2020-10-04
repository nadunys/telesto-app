import { IonCard, IonContent, IonImg, IonTitle, IonLoading } from "@ionic/react";
import React, { Component } from "react";
import "./DetailsCard.css";
import { Observatory } from "../../services/models";
import LocationsService from "../../services/locations.service";

type Props={
  obsId: string;
}

type State={
  observatoryData: Observatory;
}
export default class DetailsCard extends Component <Props, State> {

  locationsService = new LocationsService();
  
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    try {
      const data = (await this.locationsService.getObservatoryDetails(this.props.obsId)).data;
      this.setState({observatoryData: data.observatory});
      console.log(this.state.observatoryData)
    }catch(error){
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
        <IonCard>
          <IonImg src="https://media.wired.com/photos/5b52582f59269e342890a45a/1:1/w_1800,h_1800,c_limit/Satellite_FHM56J.jpg" />
        </IonCard>

        <IonCard color="dark" className="odd-card">
          <IonTitle className="title">{this.state.observatoryData.name}</IonTitle>
          <IonContent id="name"></IonContent>
        </IonCard>
        <IonCard className="even-card">
          <IonTitle className="title"></IonTitle>
          <IonContent id="description">ajshdhguaydguag</IonContent>
        </IonCard>
        <IonCard color="dark" className="odd-card">
          <IonTitle className="title">Start Date</IonTitle>
          <IonContent id="date">{this.state.observatoryData.startTime}</IonContent>
        </IonCard>
        <IonCard color="dark" className="odd-card">
          <IonTitle className="title">End Date</IonTitle>
          <IonContent id="date">{this.state.observatoryData.endTime}</IonContent>
        </IonCard>
        <IonCard color="dark" className="even-card">
          <IonTitle className="title">Location</IonTitle>
          <IonContent id="location"></IonContent>
        </IonCard>
      </IonContent>)}
      </>
    );
  }
}
