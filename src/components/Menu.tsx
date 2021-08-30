import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem } from '@ionic/react';
import { LangContext } from '../App';
import pages from '../pages';

export const Menu: React.FC = () => {

  return (
    <LangContext.Consumer>
    {(lang) => (
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

              {pages.map(page => (
                <IonItem href={`/${page.en.toLowerCase()}`}>
                  {page[lang]}
                </IonItem>
              ))}

            </IonList>
          </IonContent>
        </IonMenu>
      </>
    )}
    </LangContext.Consumer>
  );
};

export default Menu;