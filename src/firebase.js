// DOCS: https://firebase.google.com/docs/firestore/manage-data
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc, serverTimestamp, orderBy, query } from 'firebase/firestore/lite';
import { v4 as uuidv4 } from 'uuid';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-q15K0n87rpdhjJ2V1WiGyo3CXNVmWK0",
    authDomain: "linkedin-clone-d108d.firebaseapp.com",
    projectId: "linkedin-clone-d108d",
    storageBucket: "linkedin-clone-d108d.appspot.com",
    messagingSenderId: "1018933125425",
    appId: "1:1018933125425:web:6c3481f537f034b05e5010",
    measurementId: "G-P55GZ46Y32"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Get a list of posts from your database
async function getPosts(db) {
    const postsColQ = query(collection(db, 'posts'), orderBy("timestamp", "desc"));
    const postSnapshot = await getDocs(postsColQ);
    const postList = postSnapshot.docs.map(doc => doc.data());
    return postList;
}

// Add a new document in collection "posts"
async function addPost(db, message) {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "posts"), {
        id: uuidv4(),
        name: "Shreyas Pangal",
        description: 'Full stack developer',
        message: message,
        photoUrl: '',
        timestamp: serverTimestamp()
    });
    // console.log("Document written with ID: ", docRef.id);
    return docRef;
}

export { getPosts, addPost, db, auth };