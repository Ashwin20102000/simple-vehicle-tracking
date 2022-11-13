import { initializeApp } from 'firebase/app';
import { keys } from '../utils/keys';
import { getFirestore } from 'firebase/firestore/lite';

const {apiKey,appId,authDomain,storageBucket,databaseURL} = keys.firebase
const config = {apiKey,appId,authDomain,storageBucket,databaseURL}
// const app = initializeApp(config);

// export const firebaseDb = getFirestore(app);