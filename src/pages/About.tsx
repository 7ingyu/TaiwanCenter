import { IonItem, IonCard, IonCardHeader, IonHeader, IonFooter,
  IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonList,
  IonIcon, IonMenuButton, IonGrid, IonRow, IonText, IonCardTitle, IonCardContent
} from '@ionic/react';
// import { LangContext } from '../App';
import './About.css';

import about from '../data/about';


const About = ({ lang }) => {
  return (
    // <LangContext.Consumer>
    //   {(lang) => (
        <>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>About</IonCardTitle>
            </IonCardHeader>
          </IonCard>
              {about[lang].map((info, i) => {
              if (typeof info === 'string') {
                return (
                  <IonCard key={i}>
                    <IonCardContent>
                      {info}
                    </IonCardContent>
                  </IonCard>
                );
              } else {
                for (let section of info) {
                  return null;
                }
              }
            })}
        </>
    //   )}
    // </LangContext.Consumer>

  );
};

export default About;
