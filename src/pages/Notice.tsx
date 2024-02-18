import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem, IonList, IonLabel, IonFooter} from '@ionic/react';
import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
const Notice: React.FC = () => {

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
        <IonCardTitle color={'dark'} >Notice</IonCardTitle>
        <IonCardSubtitle color={'dark'}>Notice Published for Guards and Duty</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <IonList>
      <IonItem>
        <IonLabel>Eligibility Condition and Job Requirement.</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pay, Perks and Other Benefits.</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>List of Documents.</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Medical Standards</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Final Enrolment Medical Examination</IonLabel>
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

export default Notice;
