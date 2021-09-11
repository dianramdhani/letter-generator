import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZqbS6qHCTdmQdCYWFokskoipmcf5A2gQ",
    authDomain: "dianhelper-2cf25.firebaseapp.com",
    projectId: "dianhelper-2cf25",
    storageBucket: "dianhelper-2cf25.appspot.com",
    messagingSenderId: "491826878733",
    appId: "1:491826878733:web:a3f0d4a1b6fcb453a4f844",
    measurementId: "G-EPLR4GH1WH"
};

const app = initializeApp(firebaseConfig);

export default getFirestore(app);