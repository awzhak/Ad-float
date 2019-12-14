import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button'
import firebase from 'firebase/app';
import 'firebase/auth';
import { setName, clearName } from "./../stores/user";
import { setId, clearId } from "./../stores/user";


function LoginButton() {

    const name = useSelector(state => state.name.name);
    const id = useSelector(state => state.id.id);
    const dispatch = useDispatch();

    function Login() {
        console.log("aa")
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const user = result.additionalUserInfo.profile;
            console.log(user)
            dispatch(setName(user.name))
            dispatch(setId(user.email))

        }).catch(function(error) {
            console.log(error)
            console.log(error.message)
        })
    }

    function Logout() {
        firebase.auth().signOut().then(function() {
            dispatch(clearName())
            dispatch(clearId())

        }).catch(function(e){
            console.log(e);
        })
    }

    return (
        <>
            <h1>{name}</h1>
            <h1>{id}</h1>
            <Button onClick={Login}>Login</Button>
            <Button onClick={Logout}>Logout</Button>
        </>
    );
}

export default LoginButton;
