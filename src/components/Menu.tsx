import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, calendarClearOutline, cameraOutline, documentAttachOutline, fingerPrintOutline, folderOpenOutline, handLeftOutline, heartOutline, heartSharp, informationCircleOutline, logInOutline, mailOutline, mailSharp, mapOutline, newspaperOutline, paperPlaneOutline, paperPlaneSharp, thumbsUpOutline, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import { useTranslation } from 'react-i18next';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  // {
  //   title: 'Loader',
  //   url: '/',
  //   iosIcon: informationCircleOutline,
  //   mdIcon: informationCircleOutline
  // },
  // {
  //   title: 'Login',
  //   url: '/pages/Login',
  //   iosIcon: logInOutline,
  //   mdIcon: logInOutline
  // },
  // {
  //   title: 'Register',
  //   url: '/pages/Register',
  //   iosIcon: newspaperOutline,
  //   mdIcon: newspaperOutline
  // },
  // {
  //   title: 'Recruitment',
  //   url: '/pages/Recruitment',
  //   iosIcon: handLeftOutline,
  //   mdIcon: handLeftOutline
  // },
  {
    title: 'Dashboard',
    url: '/pages/Dashboard',
    iosIcon: calendarClearOutline,
    mdIcon: calendarClearOutline
  },
  // {
  //   title: 'Face Recognition',
  //   url: '/pages/Face',
  //   iosIcon: cameraOutline,
  //   mdIcon: cameraOutline
  // },
  // {
  //   title: 'Password',
  //   url: '/pages/Account',
  //   iosIcon: fingerPrintOutline,
  //   mdIcon: fingerPrintOutline
  // },
  {
    title: 'Profile',
    url: '/pages/Accountupd',
    iosIcon: folderOpenOutline,
    mdIcon: folderOpenOutline
  },
  // {
  //   title: 'Attendance',
  //   url: '/pages/Attendance',
  //   iosIcon: thumbsUpOutline,
  //   mdIcon: thumbsUpOutline
  // },
  {
    title: 'Notice',
    url: '/pages/Notice',
    iosIcon: documentAttachOutline,
    mdIcon: documentAttachOutline
  },
  // {
  //   title: 'Routes',
  //   url: '/pages/Routes',
  //   iosIcon: mapOutline,
  //   mdIcon: mapOutline
  // },
  // {
  //   title: 'Routes Live',
  //   url: '/pages/Routeslive',
  //   iosIcon: mapOutline,
  //   mdIcon: mapOutline
  // },
  // {
  //   title: 'Routes Report',
  //   url: '/pages/Routesreport',
  //   iosIcon: mapOutline,
  //   mdIcon: mapOutline
  // },
  // {
  //   title: 'Routes End',
  //   url: '/pages/Routesend',
  //   iosIcon: mapOutline,
  //   mdIcon: mapOutline
  // }
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Guard App</IonListHeader>
          <IonNote>Hi User</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
