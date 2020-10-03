import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonIcon, IonChip, IonLabel, IonItemGroup, IonItemDivider, IonItem, IonBackButton, IonButton, IonMenuButton,  IonItemOptions, IonItemOption, IonButtons, IonList, IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>

    <IonHeader>
      <IonToolbar>
        <h2>About Us</h2><br />
        <IonButtons color="danger">
          <IonBackButton text="buttonText" icon="buttonIcon" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

      <IonContent fullscreen>

      <h1>name of app</h1>

      <IonItemGroup>

      <IonItemDivider>
      
        <IonAvatar>
          <IonCol>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"/>
          </IonCol>
        </IonAvatar>
      
      </IonItemDivider>

      <h5>The Short</h5>
      <IonItem>
      <p>Main perpose</p>
      </IonItem>

      <h5>The long</h5>
      <IonItem>
      <p>Full description</p>
      </IonItem>

      <h5>Get in touch</h5>
      <IonItem>
      <p>Mail us<br/>jayan.jayatissa@gmail.com<br/>
      <br/>Contact us
      <br/>+94719610650<br/>
      <br/>Address
      <IonCol class="ion-float-left">
      First line
      <br/>Second line
      <br/>Third line
      </IonCol>
      </p>
      </IonItem>

      
      </IonItemGroup>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
