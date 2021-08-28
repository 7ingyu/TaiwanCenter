import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem } from '@ionic/react';

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
          <IonItem href='/home'>Home</IonItem>
          <IonItem href='/about'>About</IonItem>
          <IonItem href='/contact'>Contact</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  </>
)

export default Menu;