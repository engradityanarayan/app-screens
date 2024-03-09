import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem, IonList, IonFooter} from '@ionic/react';
import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { usePhotoGallery } from '../../src/hooks/usePhotoGallery';
import { log } from 'console';

const Accountupd: React.FC = () => {

  const { photos, takePhoto } = usePhotoGallery();

  const { name } = useParams<{ name: string; }>();
  const openFileDialog = () => {
    (document as any).getElementById("file-upload").click();
 };

 const updateProfile = () => {
  alert("Profile updated successfully")
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
  let photosComponent;
  if (photos && photos.filepath != null && photos.webviewPath != null) {
    const imgStyle = {
      width: '100px',
      height: '100px',
    };
    
    photosComponent = (<>
        {/* <IonImg src={photos.webviewPath} style={imgStyle}/> */}
        <img alt="Logo" src={photos.webviewPath} style={imgStyle}/>
    </>);
  } else {
    photosComponent = (<>
      <img alt="Logo" src="./assets/imgs/user.jpeg"/>
  </>);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonImg class='header-image' src="./assets/imgs/logo.jpg" alt="header" style={{display:'flex',height:'100px',width:'100%',margin:'7px'}}/>
          <IonTitle>{name}</IonTitle>          
        </IonToolbar>
        
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader  collapse="condense">
        <IonTitle>{name}</IonTitle>
        </IonHeader>        
        <IonCard className='ion-text-center ion-margin'>
          {photosComponent}
          {/* <img alt="Logo" src="./assets/imgs/user.jpeg"/> */}
          <input type="file" id="file-upload" style={{ display: "none" }}/>
          <IonButton onClick={() => takePhoto()}>Update Image</IonButton>
          {/* <IonButton onClick={openFileDialog}>Update Image</IonButton> */}
          <IonCardHeader>
            <IonCardTitle color={'dark'} >Profile</IonCardTitle>
            <IonCardSubtitle color={'dark'}>Update Profile</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem className='ion-margin-bottom'>
                <IonInput aria-label="Name" value={emp.name} type='text'></IonInput>
              </IonItem>
              <IonItem className='ion-margin-bottom'>
                <IonInput aria-label="Contact" value={emp.mobile} type='tel'></IonInput>
              </IonItem>
              <IonItem className='ion-margin-bottom'>
                <IonInput aria-label="Email" value={emp.email} type='email'></IonInput>
              </IonItem>
              <IonItem className='ion-margin-bottom'>
                <IonInput aria-label="Address" value={emp.address} type='email'></IonInput>
              </IonItem>
              <IonItem className='ion-margin-bottom'>
                <IonInput aria-label="City" value={emp.city} type='text'></IonInput>
              </IonItem>
              <IonItem className='ion-margin-bottom'>
                <IonInput aria-label="State" value={emp.state} type='text'></IonInput>
              </IonItem>
              <IonItem className='ion-margin-bottom'>
                <IonInput aria-label="pincode" value={emp.pincode} type='number'></IonInput>
              </IonItem>
              <IonItem className='ion-margin-bottom ion-text-center'>
                <IonButton expand="block" color="primary" shape='round' onClick={() => updateProfile()}>Update</IonButton>
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

export default Accountupd;
