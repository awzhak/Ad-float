import firebase from 'firebase/app';
import 'firebase/auth';

export default class User {

    isAuth = () => {
        //ログインしてるか
    }

    Login = ()  => {
        console.log("aa")
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const user = result.additionalUserInfo.profile;
            this.setToken(result.credential.accessToken);
            this.setUsername(user.name);

        }).catch(function(e) {
            console.log(e.code)
            console.log(e.message)
        })
    }

    Logout = () => {
        firebase.auth().signOut().then(function() {

        }).catch(function(e){
            console.log(e);
        })
    }
}
