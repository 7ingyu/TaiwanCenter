import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonContent, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
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

export const LangContext = React.createContext('en');

const App: React.FC = () => {

  const [ lang, setLang ] = useState(`en`);

  useEffect(() => {
    console.log(`useEffect:`, lang)
  }, [lang]);

  return (
    <LangContext.Provider value={lang}>
      <IonPage>
        <IonReactRouter>
          <Menu />
          <IonRouterOutlet id="ion-router-outlet">
            <IonContent>
              <Header changeLang={setLang} collapse={undefined}/>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Footer />
            </IonContent>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonPage>
    </LangContext.Provider>
  );
};

export default App;
