import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem, IonList, IonFooter} from '@ionic/react';
import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
const Accountupd: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const openFileDialog = () => {
    (document as any).getElementById("file-upload").click();
 };

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
      <img alt="Logo" src="./assets/imgs/user.jpeg"/>
      <input type="file" id="file-upload" style={{ display: "none" }}/>
      <IonButton onClick={openFileDialog}>Update Image</IonButton>
      <IonCardHeader>
        <IonCardTitle color={'dark'} >Profile</IonCardTitle>
        <IonCardSubtitle color={'dark'}>Update Profile</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <IonList>
      <IonItem className='ion-margin-bottom'>
      <IonInput aria-label="Name" value="Dummy Guard" type='text'></IonInput>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
      <IonInput aria-label="Contact" value="8090096328" type='tel'></IonInput>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
      <IonInput aria-label="Email" value="dummy@guard.com" type='email'></IonInput>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
      <IonInput aria-label="Address" value="6777, First Floor, Indira Nagar" type='email'></IonInput>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
      <IonInput aria-label="City" value="hLucknow" type='text'></IonInput>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
      <IonInput aria-label="State" value="Uttar Pradesh" type='text'></IonInput>
      </IonItem>
      <IonItem className='ion-margin-bottom'>
      <IonInput aria-label="Email" value="226016" type='number'></IonInput>
      </IonItem>
      <IonItem className='ion-margin-bottom ion-text-center'>
      <IonButton expand="block" color="primary" shape='round'>Update</IonButton>
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

export default Accountupd;
