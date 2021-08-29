import './Footer.css';
import { IonFooter, IonToolbar, IonButtons, IonButton,
  IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { school, logoFacebook, logoYoutube } from 'ionicons/icons';
import externalLinks from '../data/externalLinks';
import orgName from '../data/orgName';

import { LangContext } from '../App';

const Footer = () => (
  <LangContext.Consumer>
  {(lang) => (
    <IonFooter translucent={true}>
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