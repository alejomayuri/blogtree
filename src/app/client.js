// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import 'firebase/compat/auth';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCZ2YWFcpH60sbt7GbBb64DFCMcJnYQds",
  authDomain: "pataki-1f12d.firebaseapp.com",
  projectId: "pataki-1f12d",
  storageBucket: "pataki-1f12d.appspot.com",
  messagingSenderId: "34513242615",
  appId: "1:34513242615:web:78437aaf09cd2c26b146f2"
};

// Initialize Firebase
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export const fetchPages = async () => {
    const pages = await db.collection('pages').get()
    return pages.docs.map(page => ({ id: page.id, ...page.data() }))
}

export const createPage = async (page) => {
    return db.collection('pages').add(page)
}