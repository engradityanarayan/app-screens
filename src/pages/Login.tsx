import React, { useState, useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem, IonList, IonSelect, IonSelectOption, IonFooter} from '@ionic/react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { usePhotoGallery } from '../../src/hooks/usePhotoGallery';

// import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
const Login: React.FC = () => {
  const { t } = useTranslation();
  const { name } = useParams<{ name: string; }>();
  const { i18n } = useTranslation();
  const history = useHistory();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [lang, setLang] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<any>(null);

  const { photos, takePhoto } = usePhotoGallery();

  useEffect(() => {
    // Load data from local storage when the component mounts
    const storedData = localStorage.getItem('isLoggedIn');
    
    if (storedData == "true") {
      setIsLoggedIn(storedData);
      history.push('/pages/Dashboard');
    }
  }, []);

  const saveToStorage = () => {    
    // Save data to local storage
    localStorage.setItem('isLoggedIn', "true");

    // Update state
    setIsLoggedIn("true");
  };

  const emp = {
    username: "1001",
    password: "12345",
    name: "Dummy Guard",
    mobile: 8090096328,
    email: "dummy@guard.com",
    address: "6777, First Floor, Indira Nagar",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: 226010
  };

  // const changeLanguage = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // };

  const handleLogin = async () => {
    try {
      if (username === emp.username && password === emp.password) {
        // const response = await fetch('YOUR_API_ENDPOINT', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ username, password }),
        // });

        // const data = await response.json();

        if (photos && photos.filepath == null) {
          takePhoto();
        }

        if (true) {
          if (photos && photos.filepath == null) {
            alert('Please click a photo and Before logging in');
          } else {
            saveToStorage();
            history.push('/pages/Dashboard');
          }
          
          // if (lang === 'en') {
          //   // changeLanguage(lang);
          //   saveToStorage();
          //   history.push('/pages/Dashboard');
          // } else {
          //   // changeLanguage(lang);
          //   history.push('/pages/Dashboard');
          // }
        } 
      } else {
        alert('Wrong User Name or Password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
        <IonCardTitle color={'dark'} >{t('LogIn')}</IonCardTitle>
        <IonCardSubtitle color={'dark'}>{t('WelcomeGaurd')}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <IonList>
      <IonItem className='ion-margin-bottom ion-margin-top'>
        <IonInput
          type="text"
          value={username}
          placeholder={t('Employee ID')}
          onIonChange={(e) => setUsername(e.detail.value!)}
        />
      </IonItem>
      <IonItem className='ion-margin-bottom'>
        <IonInput
          type="password"
          value={password}
          placeholder={t('Employee Password')}
          onIonChange={(e) => setPassword(e.detail.value!)}
        />
      </IonItem>
      {/* <IonItem className='ion-margin-bottom'>
                <IonSelect
                  value={lang}
                  placeholder="Select Language"
                  onIonChange={(e) => setLang(e.detail.value)}
                >
                  <IonSelectOption value="en">English</IonSelectOption>
                  <IonSelectOption value="hi">Hindi</IonSelectOption>
                </IonSelect>
      </IonItem> */}
      <IonItem className='ion-margin-bottom'>
        <IonButton expand="block" color="secondary" size="default" onClick={handleLogin}>{t('Login')}</IonButton>
      </IonItem>      
    </IonList>
      </IonCardContent>
    </IonCard>
    <div className='footer'>
    <IonTitle className='footer ion-text-center'>{t('Helpline')} | +91 90999 XXXXX</IonTitle>
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

export default Login;
