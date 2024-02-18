import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Loader from './pages/Loader';

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
import Login from './pages/Login';
import Recruitment from './pages/Recruitment';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Face from './pages/Face';
import Accountupd from './pages/Accountupd';
import Attendance from './pages/Attendance';
import Notice from './pages/Notice';
import Routes from './pages/Routes';
import Routeslive from './pages/Routeslive';
import Routesend from './pages/Routesend';
import Routesreport from './pages/Routesreport';
setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route exact path="/" component={Loader}/>
            <Route exact path="/pages/Login" component={Login}/>
            <Route exact path="/pages/Register" component={Register}/>
            <Route exact path="/pages/Recruitment" component={Recruitment}/>
            <Route exact path="/pages/Dashboard" component={Dashboard}/>
            <Route exact path="/pages/Account" component={Account}/>
            <Route exact path="/pages/Face" component={Face}/>
            <Route exact path="/pages/Accountupd" component={Accountupd}/>
            <Route exact path="/pages/Attendance" component={Attendance}/>
            <Route exact path="/pages/Notice" component={Notice}/>
            <Route exact path="/pages/Routes" component={Routes}/>
            <Route exact path="/pages/Routeslive" component={Routeslive}/>
            <Route exact path="/pages/Routesend" component={Routesend}/>
            <Route exact path="/pages/Routesreport" component={Routesreport}/>            
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
