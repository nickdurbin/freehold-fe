/* eslint-disable react/prop-types */
import React from 'react';
import LandingPage from '../../../views/landing/LandingPage';
import { useFirebase } from 'react-redux-firebase';

// eslint-disable-next-line react/prop-types
export default function RouteAuth({
  // eslint-disable-next-line react/prop-types
  children: Component,
  // eslint-disable-next-line react/prop-types
  // dest = '/',
  // eslint-disable-next-line no-unused-vars
  ...props
}) {
  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  return user ? <Component /> : <LandingPage />;
}
