import React, { useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem, IonList, IonSelect, IonSelectOption, IonFooter} from '@ionic/react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

// import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
const Logout: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [lang, setLang] = useState<string>('');
  const { i18n } = useTranslation();
  const history = useHistory();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleLogin = async () => {
    try {
      if (username === '8090' && password === '12345'){
      // const response = await fetch('YOUR_API_ENDPOINT', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ username, password }),
      // });

      // const data = await response.json();

      console.log("username", username);
      console.log("password", password);
      console.log("lang", lang);


      if (true) {
        if (lang === 'en' && username === '8090' && password === '12345') {
          changeLanguage(lang);
          history.push('/pages/Dashboard');
        } else {
          changeLanguage(lang);
          history.push('/pages/Dashboard');
        }
      } else {
      
      }
    }else{
      alert('xxx');
    }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButtons>
            <IonMenuButton />
          </IonButtons> */}
          <IonImg class='header-image' src="./assets/imgs/logo.jpg" alt="header" style={{display:'flex',height:'100px',width:'100%',margin:'7px'}}/>
          <IonTitle>{name}</IonTitle>          
        </IonToolbar>
        
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader  collapse="condense">
        <IonTitle>{name}</IonTitle>
        </IonHeader>        
        <IonCard className='ion-text-center ion-margin'>      
      <IonCardHeader>
        <IonCardTitle color={'dark'} >Log In</IonCardTitle>
        <IonCardSubtitle color={'dark'}>Welcome to Gurad Commaner</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <IonList>
      <IonItem className='ion-margin-bottom'>
        {/* <IonInput placeholder="Employee ID" type='text' fill='solid' className='ion-padding' clearInput></IonInput> */}
        <IonInput
          type="text"
          value={username}
          placeholder="Employee ID"
          onIonChange={(e) => setUsername(e.detail.value!)}
        />
      </IonItem>
      <IonItem className='ion-margin-bottom'>
        {/* <IonInput placeholder="Employee Password" type='password' fill='solid' className='ion-padding'></IonInput> */}
        <IonInput
          type="password"
          value={password}
          placeholder="Employee Password"
          onIonChange={(e) => setPassword(e.detail.value!)}
        />
      </IonItem>
      <IonItem className='ion-margin-bottom'>
                {/* <IonSelect placeholder="Select Language" fill='solid'>
                <IonSelectOption value="english">English</IonSelectOption>
                <IonSelectOption value="hindi">Hindi</IonSelectOption>
                </IonSelect> */}
                <IonSelect
                  value={lang}
                  placeholder="Select Language"
                  onIonChange={(e) => setLang(e.detail.value)}
                >
                  <IonSelectOption value="en">English</IonSelectOption>
                  <IonSelectOption value="hi">Hindi</IonSelectOption>
                </IonSelect>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
        <IonButton expand="block" color="secondary" size="default" onClick={handleLogin}>Login</IonButton>
      </IonItem>      
    </IonList>
      </IonCardContent>
    </IonCard>
    <div className='footer'>
    <IonTitle className='footer ion-text-center'>Helpline | +91 90999 XXXXX</IonTitle>
      </div>
    {/* <IonFooter style={{"background-color": "yellow"}}>
        <IonToolbar className="footer">
          <IonTitle className='footer ion-text-center'>Helpline | +91 90999 XXXXX</IonTitle>
          <IonImg class='header-image' src="./assets/imgs/footer.jpg" alt="header" style={{display:'flex',height:'100px',width:'100%',margin:'7px'}}/> 
        </IonToolbar>
      </IonFooter> */}
      </IonContent>
    </IonPage>
  );
};

export default Logout;