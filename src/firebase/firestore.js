import { db } from './firebase';
import { collection, addDoc, onSnapshot, deleteDoc, doc, query, where } from 'firebase/firestore';

const TASKS_COLLECTION = 'tasks';
const TASKSREF = collection(db, TASKS_COLLECTION)

export async function addTask({ uid, id, task, datetime }) {
  const newTask = { uid, id, task, datetime };
  await addDoc(TASKSREF, newTask);
}

export function getTasks(uid, callback) {
  const myTasks = query(TASKSREF, where("uid", "==", uid))
  return onSnapshot(myTasks, (snapshot) => {
    let allTasks = []
    snapshot.docs.forEach((doc) => {
      allTasks.push({
        ...doc.data(),
        id: doc.id
      })
    })
    callback(allTasks)
  })
}

export async function completeTask(id) {
  try {
    const completedTaskRef = doc(db, 'tasks', id)
    await deleteDoc(completedTaskRef)
  } catch ({ code, message }) {
    console.error(`${code}\n${message}`)
  }
}