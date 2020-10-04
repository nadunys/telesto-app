import { IonAlert } from "@ionic/react";
import React, { useState } from "react";

export default function Alert(props: {
  showAlert: boolean;
  data: any;
}) {
  const [showAlert, setshowAlert] = useState(props.showAlert);
  console.log(props.data)
  return (
    <IonAlert
      isOpen={showAlert}
      onDidDismiss={() => setshowAlert(false)}
      header={props.data.name}
      subHeader={`Longitude: ${props.data.lon}, Latitude: ${props.data.lat}`}
      //   message={"This is an alert message."}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
          handler: (blah) => {},
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ]}
    />
  );
}
