import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem, IonList, IonFooter} from '@ionic/react';
import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
const Register: React.FC = () => {

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
        <IonCardTitle color={'dark'} >Register</IonCardTitle>
        <IonCardSubtitle color={'dark'}>Welcome to Gurad Commander</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <IonList>
      <IonItem className='ion-margin-bottom'>
        <IonInput placeholder="Roll Number" type='text' fill='solid' className='ion-padding' clearInput></IonInput>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
      <IonButton expand="block" color="primary" shape='round'>Verify</IonButton>
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

export default Register;
