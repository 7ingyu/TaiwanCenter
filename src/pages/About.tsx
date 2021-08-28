import { IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/react';
import './About.css';

import about from '../data/about';


const About = ({ lang }) => {
  return (
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
  );
};

export default About;
