import './Footer.css';
import { IonApp, IonRouterOutlet, IonItem, IonLabel, IonContent, IonHeader, IonFooter,
  IonPage, IonTitle, IonToolbar, IonButtons, IonButton,
  IonIcon, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { school, logoFacebook, logoYoutube } from 'ionicons/icons';
import { LangContext } from '../App';
import externalLinks from '../variables/externalLinks';
import orgName from '../variables/orgName';

const Footer = () => (
  <LangContext.Consumer>
    {(lang) => (
    <IonFooter>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol className="footer f-left">
              <IonButtons>
                <IonButton>
                  <div className="f-text">
                    {orgName[lang]}<br/>
                    4413 Fortran Court. San Jose, CA 95134<br/>
                  </div>
                </IonButton>
              </IonButtons>
            </IonCol>
            <IonCol>
              <div className="footer f-right">
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
    )}
  </LangContext.Consumer>
);

export default Footer;