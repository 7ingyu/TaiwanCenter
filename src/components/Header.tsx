import { IonApp, IonRouterOutlet, IonItem, IonLabel, IonContent, IonHeader, IonFooter,
  IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonSelect, IonSelectOption, useIonActionSheet,
  IonIcon, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { LangContext } from '../App';
import languages from '../variables/languages';
import orgName from '../variables/orgName';

const Header = ({ setLang }) => {
  const [present, dismiss] = useIonActionSheet();

  return (
    <LangContext.Consumer>
      {(lang) => (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{orgName[lang]}</IonTitle>
            <IonButtons slot="end">
              <IonButton
                onClick={() => {
                  present({
                    buttons: languages.map(language => (
                      { text: language.toUpperCase(),
                        handler: () => setLang(language)
                      })),
                    header: 'Languages'
                  });
                  setTimeout(dismiss, 3000);
                }}
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