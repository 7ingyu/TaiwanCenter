import { IonItem, IonLabel, IonList, IonListHeader, IonIcon,
  IonCard, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';
import { call, mail, locate } from 'ionicons/icons';
import contact from '../data/contact';

import './Contact.css';
import { LangContext } from '../App';

const Contact = () => {
  return (
    <LangContext.Consumer>
    {(lang) => (
      <>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{contact.title[lang]}</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon slot="start" icon={call}/>
                <IonLabel>{contact.phone}</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={mail}/>
                <IonLabel>{contact.email}</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={locate}/>
                <IonLabel>{contact.address1}, {contact.address2}</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </>
    )}
    </LangContext.Consumer>
  );
};

export default Contact;
