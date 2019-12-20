import firebase from 'firebase/app';
import 'firebase/auth';

export default function isAuth() {
    const user = firebase.auth().currentUser;
    
    if (user) {
      return user;
    } else {
      return false;  
    }
  }