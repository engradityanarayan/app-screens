import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonCol, IonGrid, IonRow, IonDatetime, IonFooter, IonList, IonItem} from '@ionic/react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
// import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
const Dashboard: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonImg class='header-image' src="./assets/imgs/logo.jpg" alt="header" style={{display:'flex',height:'100px',width:'100%'}}/>
          <IonTitle>{name}</IonTitle>          
        </IonToolbar>
        
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader  collapse="condense">
        <IonTitle>{name}</IonTitle>
        </IonHeader>        
        <IonCard color="medium" className='ion-margin-bottom ion-text-center'>
        <IonCardHeader>
          {/* <IonCardTitle>Employee Name and ID</IonCardTitle>   */}
          <IonCardTitle>{t('employeeNameAndID')}</IonCardTitle>         

        </IonCardHeader>
      </IonCard>
      <IonGrid className='ion-margin ion-text-center'>
        <IonRow>
          {/* <IonCol size="6" size-md="4" size-lg="6"><IonTitle>Shift Timing Details</IonTitle></IonCol> */}
          <IonCol size="6" size-md="4" size-lg="6"><IonTitle>{t('shiftTimingDetails')}</IonTitle></IonCol>

          {/* <IonCol size="6" size-md="4" size-lg="6"><IonButton color="secondary" shape='round' size="small">Punch In</IonButton></IonCol> */}
          <IonCol size="6" size-md="4" size-lg="6"><IonButton color="secondary" shape='round' size="small">{t('punchIn')}</IonButton></IonCol>

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
          {/* <IonCol size="4" size-md="4" size-lg="4"><IonTitle><IonButton color="secondary" size="small">Ticket</IonButton></IonTitle></IonCol>
          <IonCol size="4" size-md="4" size-lg="4"><IonButton color="warning" size="small">Leave</IonButton></IonCol>
          <IonCol size="4" size-md="4" size-lg="4"><IonButton color="danger" size="small">SOS</IonButton></IonCol> */}
          <IonCol size="4" size-md="4" size-lg="4"><IonTitle><IonButton color="secondary">{t('ticket')}</IonButton></IonTitle></IonCol>
          <IonCol size="4" size-md="4" size-lg="4"><IonButton color="warning">{t('leave')}</IonButton></IonCol>
          <IonCol size="4" size-md="4" size-lg="4"><IonButton color="danger">{t('sos')}</IonButton></IonCol>
        </IonRow>
      </IonGrid>
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

export default Dashboard;
