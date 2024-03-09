import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonCol, IonGrid, IonRow, IonDatetime, IonFooter, IonList, IonItem, IonProgressBar} from '@ionic/react';
import { useParams } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
// import ExploreContainer from '../components/ExploreContainer';
import { usePhotoGallery } from '../../src/hooks/usePhotoGallery';
import './Page.css';
import { log } from 'console';
const Dashboard: React.FC = () => {

  const [duty, setDuty] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);


  const { name } = useParams<{ name: string; }>();
  const { t } = useTranslation();
  const { takePhoto } = usePhotoGallery();
  let res;
  const handleDutyStart = () => {
    res = takePhoto();
    intervalRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
    setIsRunning(true);

    // setDuty(true);
  }

  const handleDutyEnd = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    // setDuty(false);
  }

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

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(
      minutes
    ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return formattedTime;
  };

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
          <IonCardTitle>{emp.name + " " + emp.username}</IonCardTitle>         

        </IonCardHeader>
      </IonCard>
      <IonGrid className='ion-margin ion-text-center'>
        <IonRow>
          {/* <IonCol size="6" size-md="4" size-lg="6"><IonTitle>Shift Timing Details</IonTitle></IonCol> */}

          {isRunning ? (
            <IonCol size="12" size-md="12" size-lg="6"><IonTitle>{t('Elapsed Time')}: {formatTime(elapsedTime)}</IonTitle></IonCol>
          ) : (
            <IonCol size="6" size-md="12" size-lg="6"><IonTitle>{t('shiftTimingDetails')}</IonTitle></IonCol>
          )}
          {/* <IonCol size="6" size-md="4" size-lg="6"><IonButton color="secondary" shape='round' size="small">Punch In</IonButton></IonCol> */}
          <IonCol size="6" size-md="4" size-lg="6">
        
            {isRunning ? (
            <IonButton onClick={() => handleDutyEnd()} color="danger" shape='round' size="small">{t('punchOut')}</IonButton>
            ) : 
            (
              <IonButton onClick={() => handleDutyStart()} color="secondary" shape='round' size="small">{t('punchIn')}</IonButton>
            )}
            {/* <IonButton onClick={() => handleDutyStart()} color="secondary" shape='round' size="small">{t('punchIn')}</IonButton> */}
          </IonCol>

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
            {
              isRunning ? (
                <IonItem className='ion-margin ion-text-center'>
                  <IonTitle size='small'>10:00am</IonTitle>
                    <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar>
                  <IonTitle size='small'>07:00pm</IonTitle>
              </IonItem>
              ) : null
            }
            </IonList>      
      <IonGrid className='ion-margin ion-text-center'>
        <IonRow>
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
