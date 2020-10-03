import { IonCard, IonCol, IonContent, IonGrid, IonImg, IonRow, IonTitle } from '@ionic/react'
import React, { Component } from 'react'

export default class DetailsCard extends Component {
    render() {
        return (
            <div>
                <IonCard>
                    <IonImg src="https://media.wired.com/photos/5b52582f59269e342890a45a/1:1/w_1800,h_1800,c_limit/Satellite_FHM56J.jpg" />
                </IonCard>
                
                <IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonTitle>Version</IonTitle>
                            <IonContent id="version">Version</IonContent>
                        </IonRow>
                        <IonRow>
                            <IonTitle>Description</IonTitle>
                            <IonContent id="description"></IonContent>
                        </IonRow>
                        <IonRow>
                            <IonTitle>Release Date</IonTitle>
                            <IonContent id="date"></IonContent>
                        </IonRow>
                        <IonRow>
                            <IonTitle>Location/ Observetory Region</IonTitle>
                            <IonContent id="location"></IonContent>  
                        </IonRow>
                    </IonGrid>
                </IonCard>
            </div>
        )
    }
}
