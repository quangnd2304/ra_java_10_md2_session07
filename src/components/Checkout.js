import React from 'react';
import { Navigate } from 'react-router-dom';
import Payment from './Payment';

export default function Checkout() {
    const isLogin = false;
    return isLogin ? <Payment /> : <Navigate to={'/login'} />;
}
