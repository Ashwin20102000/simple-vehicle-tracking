
const {
   VITE_REACT_BASE_URL,
   VITE_FIREBASE_KEY, 
   VITE_FIREBASE_AUTH_DOMAIN ,
   VITE_FIREBASE_DATABASE_URL,
   VITE_FIREBASE_STORAGE_BUCKET,
   VITE_FIREBASE_APP_ID
  } = import.meta.env


export const keys = {
  baseUrl: VITE_REACT_BASE_URL,
  localStorageKeysPrefix:"VEHICLE_TRACKER_",
  tokenKey:"TOKEN",
  firebase:{
    apiKey: VITE_FIREBASE_KEY,
    appId:VITE_FIREBASE_APP_ID,
    authDomain: VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL:VITE_FIREBASE_DATABASE_URL,
    storageBucket: VITE_FIREBASE_STORAGE_BUCKET
  }
}
