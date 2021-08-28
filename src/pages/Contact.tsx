import { IonItem, IonLabel, IonContent, IonHeader, IonFooter,
  IonPage, IonTitle, IonToolbar, IonButtons, IonButton,
  IonIcon, IonMenuButton, IonGrid, IonRow, IonCol
} from '@ionic/react';
import { LangContext } from '../App';

import './Contact.css';

const Contact = () => {
  return (
    <LangContext.Consumer>
      {(lang) => (
        null
      )}
    </LangContext.Consumer>

  );
};

export default Contact;
