import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import "./Tab3.css";
import AboutUs from '../components/about-us/AboutUs';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <h2>About Us</h2>
          <br />
          <IonButtons color="danger">
            <IonBackButton text="buttonText" icon="buttonIcon" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <AboutUs>
        </AboutUs>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
