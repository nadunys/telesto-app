import React from 'react';
import {  IonContent, IonHeader,  IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage className="page">
      <IonHeader>
        <IonToolbar>
          <IonTitle id="satName">Sat Name</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        
      <IonHeader collapse="condense">-
        <IonToolbar>
          <IonTitle size="large">Sat Name</IonTitle>
        </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
