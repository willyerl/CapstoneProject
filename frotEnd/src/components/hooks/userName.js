import { useAuth } from '../auth.js'
// import React, { Component } from 'react';
function Name(){
    const auth = useAuth()
    let name = auth.user
    console.log(name)
    return (JSON.stringify(name))
}
export default Name;