import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonIcon, IonChip, IonLabel, IonItemGroup, IonItemDivider, IonItem, IonBackButton, IonButton, IonMenuButton,  IonItemOptions, IonItemOption, IonButtons, IonList, IonCol, IonCardHeader} from '@ionic/react';
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

      <IonContent>
      <IonCol>

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
      
      <p>Main perpose</p>
      

      <h5>The long</h5>
      
      <p>Full description</p>
      

      <h5>Get in touch</h5>
      
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
      

      
      </IonItemGroup>
      </IonCol>
      </IonContent>
      
    </IonPage>
  );
};

export default Tab3;
