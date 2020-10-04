import React from 'react';
import { IonContent, IonPage} from '@ionic/react';
import GlobeContainer from '../components/globe-container';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <GlobeContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
