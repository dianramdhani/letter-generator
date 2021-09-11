import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    query,
    orderBy,
    limit,
    getDocs,
} from "firebase/firestore";

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
const db = getFirestore(app);
const templatesRef = collection(db, "templates");

export default {
    addTemplate(template) {
        setDoc(doc(templatesRef), { template, date: (new Date()).toISOString() });
    },

    async loadLastTemplate() {
        const q = query(templatesRef, orderBy('date', 'desc'), limit(1))
        const templateSnapshot = await getDocs(q);
        let template;
        templateSnapshot.forEach(res => template = res.data().template);
        return template
    }
};