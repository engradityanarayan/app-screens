import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem, IonList, IonSelect, IonSelectOption, IonFooter} from '@ionic/react';
import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
const Login: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonImg class='header-image' src="./assets/imgs/header.png" alt="header" style={{display:'flex',height:'100px',width:'100%',margin:'7px'}}/>
          <IonTitle>{name}</IonTitle>          
        </IonToolbar>
        
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader  collapse="condense">
        <IonTitle>{name}</IonTitle>
        </IonHeader>        
        <IonCard className='ion-text-center ion-margin'>
      <img alt="Logo" src="./assets/imgs/logo.jpg"/>
      <IonCardHeader>
        <IonCardTitle color={'dark'} >Log In</IonCardTitle>
        <IonCardSubtitle color={'dark'}>Welcome to Gurad Commaner</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <IonList>
      <IonItem className='ion-margin-bottom'>
        <IonInput placeholder="Employee ID" type='text' fill='solid' className='ion-padding' clearInput></IonInput>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
        <IonInput placeholder="Employee Password" type='password' fill='solid' className='ion-padding'></IonInput>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
                <IonSelect placeholder="Select Language" fill='solid'>
                <IonSelectOption value="english">English</IonSelectOption>
                <IonSelectOption value="hindi">Hindi</IonSelectOption>
                </IonSelect>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
      <IonButton expand="block" color="secondary" shape='round'>Login</IonButton>
      </IonItem>      
    </IonList>
      </IonCardContent>
    </IonCard>
    <IonFooter>
        <IonToolbar>
          <IonTitle className='ion-text-center ion-margin'>Copyright | Guard App</IonTitle>
        </IonToolbar>
      </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Login;
