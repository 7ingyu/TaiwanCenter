import { IonApp, IonRouterOutlet, IonItem, IonLabel, IonContent, IonHeader, IonFooter, IonPopover, IonList,
  IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonSelect, IonSelectOption, useIonActionSheet,
  IonIcon, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import { close } from 'ionicons/icons';
import { LangContext } from '../App';
import languages from '../variables/languages';
import orgName from '../variables/orgName';

const Header = ({ setLang }) => {
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });

  return (
    <LangContext.Consumer>
      {(lang) => (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{orgName[lang]}</IonTitle>

            <IonPopover
              event={popoverState.event}
              isOpen={popoverState.showPopover}
              onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
            >
              <IonList>
                {languages.map(language => (
                  <IonItem button onClick={() => setLang(language)}>
                    {language}
                  </IonItem>
                ))}
                <IonItem button onClick={() => setShowPopover({ showPopover: false, event: undefined })}>
                  <IonIcon slot="end" icon={close} />
                </IonItem>
              </IonList>
            </IonPopover>

            <IonButtons slot="end">
              <IonButton
                onClick={
                  (e: any) => {
                    e.persist();
                    setShowPopover({ showPopover: true, event: e })
                  }
                }
              >
                {lang}
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      )}
    </LangContext.Consumer>
  );
}

export default Header