import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonLabel, IonItem } from '@ionic/react';

const DocumentUpload: React.FC = () => {
  const [document1, setDocument1] = useState<File | null>(null);
  const [document2, setDocument2] = useState<File | null>(null);
  const [documentsUploaded, setDocumentsUploaded] = useState<boolean>(false);

  const handleDocument1Change = (event: CustomEvent) => {
    // const fileInput = event.target as HTMLInputElement;
    // const file = fileInput?.files?.[0];
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      setDocument1(file);
    }
    console.log('file', file);
    setDocument1(file || null);
  };

  const handleDocument2Change = (event: CustomEvent) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput?.files?.[0];
    setDocument2(file || null);
  };

  const handleSubmit = () => {
    // Add your logic to handle document upload here
    console.log('Document 1:', document1);
    console.log('Document 2:', document2);

    // Check if both documents are uploaded
    if (document1 && document2) {
      setDocumentsUploaded(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {!documentsUploaded && (
          <>
            <IonItem>
                <IonLabel>Select Document 1</IonLabel>
                <IonInput
                    type="file"
                    accept=".jgp,.jpeg,.png"
                    onIonChange={(e) => handleDocument1Change(e)}
                />
            </IonItem>
            <IonItem>
                <IonLabel>Select Document 2</IonLabel>
                <IonInput type="file" accept=".jgp,.jpeg,.png" onIonChange={handleDocument2Change} />
            </IonItem>

            <IonButton expand="full" onClick={handleSubmit}>
              Upload Documents
            </IonButton>
          </>
        )}

        {documentsUploaded && <p>Documents uploaded!</p>}
      </IonContent>
    </IonPage>
  );
};

export default DocumentUpload;
