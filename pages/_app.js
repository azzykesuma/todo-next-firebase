import '../styles/globals.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDB4Cy7dvLKqEpYzqDxQEQqhr__dj-fB2Y",
  authDomain: "to-do-be9c3.firebaseapp.com",
  projectId: "to-do-be9c3",
  storageBucket: "to-do-be9c3.appspot.com",
  messagingSenderId: "831187194872",
  appId: "1:831187194872:web:346c5880b95677faf63c0d"
};
export const app = initializeApp(firebaseConfig);
function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  ) 
}


export default MyApp
