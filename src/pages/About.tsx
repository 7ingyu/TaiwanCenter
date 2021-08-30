import { IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList} from '@ionic/react';
import './About.css';

import about from '../data/about';
import { LangContext } from '../App';

const About = () => {
  return (
    <LangContext.Consumer>
    {(lang) => (
      <>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>About</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonList>
              
              {about[lang].map((info, i) => {
                if (typeof info === 'string') {
                  return (
                    <IonItem key={i}>
                      <p>
                        {info}
                      </p>
                    </IonItem>
                  );
                } else {
                  for (let section of info) {
                    return null;
                  }
                }
              })}

            </IonList>
          </IonCardContent>
        </IonCard>
      </>
    )}
    </LangContext.Consumer>
  );
};

export default About;
