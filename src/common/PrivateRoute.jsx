import React, { useContext } from 'react';
import { myContext } from './Context';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ element }) {
  const { state } = useContext(myContext);

  return (
    <div>
      {
        state.isLogged ? (
          element
        ) : (
         
          <Navigate to="/login" />
        )
      }
    </div>
  );
}
