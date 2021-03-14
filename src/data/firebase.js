import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDg9Y9_KlsPAThZZTHRb88R3xXTC0U9o3Q",
  authDomain: "pvt-h21.firebaseapp.com",
  databaseURL: "https://pvt-h21-default-rtdb.firebaseio.com",
  projectId: "pvt-h21",
  storageBucket: "pvt-h21.appspot.com",
  messagingSenderId: "424129836393",
  appId: "1:424129836393:web:8e7d55521606a114a2f9f8"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;