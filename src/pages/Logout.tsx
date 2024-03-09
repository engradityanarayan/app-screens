import React, { useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem, IonList, IonSelect, IonSelectOption, IonFooter} from '@ionic/react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Login from './Login';

// import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
const Logout: React.FC = () => {
  localStorage.setItem('isLoggedIn', "false");

  return (
   <>
   <Login/>
   </>
  );
};

export default Logout;
