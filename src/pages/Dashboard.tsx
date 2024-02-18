import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonCol, IonGrid, IonRow, IonDatetime, IonFooter, IonList, IonItem} from '@ionic/react';
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
        <IonCard color="medium" className='ion-margin-bottom ion-text-center'>
        <IonCardHeader>
          <IonCardTitle>Employee Name and ID</IonCardTitle>         
        </IonCardHeader>
      </IonCard>
      <IonGrid className='ion-margin ion-text-center'>
        <IonRow>
          <IonCol size="6" size-md="4" size-lg="6"><IonTitle>Shift Timing Details</IonTitle></IonCol>
          <IonCol size="6" size-md="4" size-lg="6"><IonButton color="secondary" shape='round' size="small">Punch In</IonButton></IonCol>
        </IonRow>
      </IonGrid>
      <IonList >
        <IonItem className='ion-margin ion-text-center'>
      <IonDatetime className='ion-margin ion-text-center'
              presentation="date"
              // value="2024-02-01"
              highlightedDates={[
                {
                  date: '2024-02-05',
                  textColor: '#800080',
                  backgroundColor: '#FF0000',
                },
                {
                  date: '2024-02-06',
                  textColor: '#09721b',
                  backgroundColor: '#90EE90',
                },
                {
                  date: '2024-02-07',
                  textColor: '#09721b',
                  backgroundColor: '#90EE90',
                },
                {
                  date: '2024-02-08',
                  textColor: '#09721b',
                  backgroundColor: '#90EE90',
                },
              ]}
            ></IonDatetime>
            </IonItem>
            </IonList>      
      <IonGrid className='ion-margin ion-text-center'>
        <IonRow>
          <IonCol size="4" size-md="4" size-lg="4"><IonTitle><IonButton color="secondary" size="small">Ticket</IonButton></IonTitle></IonCol>
          <IonCol size="4" size-md="4" size-lg="4"><IonButton color="warning" size="small">Leave</IonButton></IonCol>
          <IonCol size="4" size-md="4" size-lg="4"><IonButton color="danger" size="small">SOS</IonButton></IonCol>
        </IonRow>
      </IonGrid>
      
          
          
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
