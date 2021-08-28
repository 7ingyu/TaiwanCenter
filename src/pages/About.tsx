import { IonItem, IonLabel, IonContent, IonHeader, IonFooter,
  IonPage, IonTitle, IonToolbar, IonButtons, IonButton,
  IonIcon, IonMenuButton, IonGrid, IonRow, IonCol
} from '@ionic/react';
import { LangContext } from '../App';

import './Home.css';

const footerLeft = {
  position: 'absolute'
}

const Home = () => {
  return (
    <LangContext.Consumer>
      {(lang) => (
        <IonContent>
        </IonContent>
      )}
    </LangContext.Consumer>

  );
};

export default Home;
