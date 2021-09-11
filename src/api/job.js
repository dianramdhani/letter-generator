import { collection, doc, setDoc } from '@firebase/firestore';
import db from './db';

const jobsRef = collection(db, "jobs");

export default {
    addJob(job) {
        setDoc(doc(jobsRef), { ...job, date: (new Date()).toISOString() });
    }
};