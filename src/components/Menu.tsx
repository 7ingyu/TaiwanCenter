import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

export const Menu: React.FC = () => (
  <>
    <IonMenu
      side="start"
      menuId="first"
      type="overlay"
      contentId="ion-router-outlet"
      onIonDidClose={() => {}}
      onIonDidOpen={() => {}}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Navigation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Home</IonItem>
          <IonItem>About</IonItem>
          <IonItem>Contact</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  </>
)

export default Menu;