import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonItem, IonLabel, IonContent, IonHeader, IonFooter,
  IonPage, IonTitle, IonToolbar, IonButtons, IonButton,
  IonIcon, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

export const LangContext = React.createContext(`en`);

const App: React.FC = () => {

  const [ lang, setLang ] = useState(`en`);

  return (
    // <LangContext.Provider value={lang}>
      <IonPage>
        <IonReactRouter>
          <Menu />
          <IonRouterOutlet id="ion-router-outlet">
            <IonContent fullscreen={true}>
              <Header lang={lang} setLang={setLang} collapse={undefined}/>
              <Route exact path="/home">
                <Home lang={lang}/>
              </Route>
              <Route exact path="/about">
                <About lang={lang}/>
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Footer lang={lang}/>
            </IonContent>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonPage>
    // </LangContext.Provider>
  );
};

export default App;
