import { IonCard, IonContent, IonImg, IonTitle } from "@ionic/react";
import React, { Component } from "react";
import "./DetailsCard.css";

export default class DetailsCard extends Component {
  render() {
    return (
      <IonContent
        style={{
          position: "absolute",
          zIndex: 10000,
        }}
      >
        <IonCard>
          <IonImg src="https://media.wired.com/photos/5b52582f59269e342890a45a/1:1/w_1800,h_1800,c_limit/Satellite_FHM56J.jpg" />
        </IonCard>

        <IonCard color="dark" className="odd-card">
          <IonTitle className="title">Version</IonTitle>
          <IonContent id="version">Version</IonContent>
        </IonCard>
        <IonCard className="even-card">
          <IonTitle className="title">Description</IonTitle>
          <IonContent id="description">ajshdhguaydguag</IonContent>
        </IonCard>
        <IonCard color="dark" className="odd-card">
          <IonTitle className="title">Release Date</IonTitle>
          <IonContent id="date">00/00/0000</IonContent>
        </IonCard>
        <IonCard className="even-card">
          <IonTitle className="title">Location</IonTitle>
          <IonContent id="location">the place/ orbital</IonContent>
        </IonCard>
      </IonContent>
    );
  }
}
