import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);
function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: false,
    name: '',
    email:'',
    password: '',
    photo:''
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();


  const handleFbSignIn = () =>{
    firebase.auth().signInWithPopup(fbProvider).then(function(result) {
        const {displayName} = result.user;
        const SignedInUser = {name: displayName}
        setLoggedInUser(SignedInUser);
        console.log('fb user after sign in',user);
        history.replace(from);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  const handleSignOut = () =>{
    firebase.auth().signOut()
    .then(res => {
      const signOutUser = {
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
        error: '',
        success: false
      }
      setUser(signOutUser);
    })
    .catch(err =>{

    })
  } 

  
  const handleBlur = (event) =>{
    let isFieldValid = true;
    if(event.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
     
    }
    if(event.target.name ==='password'){
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
    
  }
  const handleSubmit = (e) =>{
    //console.log(user.email , user.password)
    if (newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then (res =>{
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(user.name);
      })
      .catch(error =>  {
        // Handle Errors here.
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        
        // ...
      });
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log('sign in user info', res.user);
      })
      .catch(function(error) {
        // Handle Errors here.
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        // ...
      });
    }

    e.preventDefault();
  }

  const updateUserName = name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name update sucessfully')
    }).catch(function(error) {
      console.log(error)
    });
  }
  
  const handleGoogleSignIn = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
       
        const {displayName, email} = result.user;
        const SignedInUser = {name: displayName, email}
        setLoggedInUser(SignedInUser);
        history.replace(from);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  return (
    <div style={{textAlign: 'center'}}>
      <br/>
      <button class="btn btn-warning" onClick={handleGoogleSignIn}>Google Sign In</button>
      <br/>
      <br/>
      <button class="btn btn-warning" onClick={handleFbSignIn}>Sign in using Facebook</button>
     

      <h1>Sign in With Email</h1>
      <input type="checkbox" onChange={()=> setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
      {newUser && <input type="text" onBlur={handleBlur} name="name" placeholder="Your Name" />}
      <br/>
      <br/>
      <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address"  required/>
      <br/>
      <br/>
      <input type="password" onBlur={handleBlur} name="password" placeholder="Your password" required/>
      <br/>
      <br/>
      <input class="btn btn-warning" type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
      </form>
    <p style={{color:'red'}}>{user.error}</p>
    {user.success && <p style={{color:'green'}}>User {newUser ? 'Created': 'Logged In'} Sucessfully</p>}
    </div>
  );
}

export default Login;