import React, { useState, useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem, IonList, IonSelect, IonSelectOption, IonFooter} from '@ionic/react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import './Page.css';
const LanguageSelector: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const { i18n } = useTranslation();
  const history = useHistory();

  const [lang, setLang] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<any>(null);


  useEffect(() => {
    // Load data from local storage when the component mounts
    const storedData = localStorage.getItem('isLoggedIn');
    
    if (storedData == "true") {
      setIsLoggedIn(storedData);
      history.push('/pages/Dashboard');
    }
  }, []);


  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleLanguageUpdate = async () => {
    try {

        if (lang === 'en' || lang === 'hi') {
            changeLanguage(lang);
            history.push('/pages/Login');
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
                    <IonCardTitle color={'dark'} >Select Language / भाषा चुने</IonCardTitle>
                    <IonCardSubtitle color={'dark'}>Welcome to Gurad Commaner</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonList>
                        <IonItem className='ion-margin-bottom'>
                                    <IonSelect
                                    value={lang}
                                    placeholder="Select Language / भाषा चुने"
                                    onIonChange={(e) => setLang(e.detail.value)}
                                    >
                                    <IonSelectOption value="en">English</IonSelectOption>
                                    <IonSelectOption value="hi">हिंदी</IonSelectOption>
                                    </IonSelect>
                        </IonItem>
                        <IonItem className='ion-margin-bottom'>
                            <IonButton expand="block" color="secondary" size="default" onClick={handleLanguageUpdate}>Confirm / पुष्टि करना</IonButton>
                        </IonItem>      
                    </IonList>
                </IonCardContent>
            </IonCard>
            <div className='footer'>
                <IonTitle className='footer ion-text-center'>Helpline | +91 90999 XXXXX</IonTitle>
            </div>
        </IonContent>
    </IonPage>
  );
};

export default LanguageSelector;
