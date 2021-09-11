import {
    doc,
    setDoc,
    collection,
    query,
    orderBy,
    limit,
    getDocs,
} from "firebase/firestore";
import db from './db';

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