import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const TASK_COLLECTION = 'tasks';
const TASKREF = collection(db, TASK_COLLECTION)

export async function addTask({ uid, id, task, datetime }) {
  const docData = { uid, id, task, datetime };
  await addDoc(TASKREF, docData);
}
