import { IonCard, IonImg, IonContent, IonTitle } from "@ionic/react";
import React, { Component } from "react";
import "./AboutUs.css";

export default class AboutUs extends Component {
    render() {
        return(
            <IonCard color="dark">
                <IonImg src="assets\icon\icon.png" className="icon"/>
              
                <IonTitle>What is Telesto?</IonTitle>
              
              <p className="para">
              A huge number of satellites in Earth's orbit support our day-to-day life on the ground. 
              Our challenge was to develop a method to improve public knowledge of these satellites, 
              with an eye towards driving user engagement, enthusiasm, and exploration. As the reault 
              of huge number of hours of preperation, research and development, we present you <b>Telesto</b>. 
              </p>
          </IonCard> 
        )
    }
}


