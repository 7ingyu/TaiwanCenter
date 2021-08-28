import { IonItem, IonLabel, IonContent, IonHeader, IonFooter,
  IonPage, IonTitle, IonToolbar, IonButtons, IonButton,
  IonIcon, IonMenuButton, IonGrid, IonRow, IonCol
} from '@ionic/react';
import { school, logoFacebook, logoYoutube } from 'ionicons/icons';
import externalLinks from '../variables/externalLinks';
import './Home.css';

const footerLeft = {
  position: 'absolute'
}

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>北加州台灣會館</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle size="large">北加州台灣會館</IonTitle>
          </IonToolbar>
        </IonHeader>


        </IonContent>
        <IonFooter>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol className="footer">
                <IonButtons>
                  <IonButton>
                    <div className="f-left">
                      Taiwanese American Center of Northern California<br/>
                      北加州台灣會館<br/>
                      4413 Fortran Court. San Jose, CA 95134<br/>
                    </div>
                  </IonButton>
                </IonButtons>
            </IonCol>
            <IonCol>
              <div className="footer">
                <IonButtons>
                  <IonButton onClick={() => {window.location.assign(externalLinks.facebook)}}>
                    <IonIcon slot="icon-only" icon={logoFacebook} />
                  </IonButton>
                  <IonButton onClick={() => {window.location.assign(externalLinks.youtube)}}>
                    <IonIcon slot="icon-only" icon={logoYoutube} />
                  </IonButton>
                  <IonButton onClick={() => {window.location.assign(externalLinks.school)}}>
                    <IonIcon slot="icon-only" icon={school} />
                  </IonButton>
                </IonButtons>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
    </IonPage>
  );
};

export default Home;
