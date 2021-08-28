import { IonApp, IonRouterOutlet, IonItem, IonLabel, IonContent, IonHeader, IonFooter,
  IonPage, IonTitle, IonToolbar, IonButtons, IonButton,
  IonIcon, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';

const Header = () => (
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>北加州台灣會館</IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default Header