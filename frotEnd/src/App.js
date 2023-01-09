/////APIKEY 480d3ef177c7b4053f1a14481b60f955460289cd
import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import Popular from './components/PopularRecipes.js'
import YourPerfil from './components/YourPerfil.js'
import { AddNewRecipe } from './components/addNewRecipe'
import Login from './components/Login'
import Logout from './components/Logout.js'
import NavBar from './components/NavBar'
import { RequireAuth } from './components/RequireAuth'
import { Users } from './components/Users'
import { UserDetails } from './components/UserDetails.js'
import { Admin } from './components/Admin.js'
import { AuthProvider } from './components/auth.js'
import NewUser from './components/newUser'
// import MyRecipes from './components/MyRecipe';
import WriteNew from './components/writeNew'
import FindNew from './components/findNew'




function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/MyRecipes' element={<MyRecipes />} /> */}
        {/* <Route path='/yourPerfil' element={<YourPerfil />} /> */}
        <Route path='/login' element={<Login />} />
        <Route
          path='/yourPerfil'
          element={
            <RequireAuth>
              <YourPerfil />
            </RequireAuth>
          }
        />
        <Route path='/Popular' element={<Popular />} />
      <Route path='/NewUser' element={<NewUser />} />
      
        <Route path='AddNewRecipe' element={<AddNewRecipe />}>
          <Route index element={<AddNewRecipe />} />
          <Route path='WriteNew' element={<WriteNew />} pathMatch='full' />
          <Route path='FindNew' element={<FindNew />}  pathMatch='full' />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='/logout' element={
          <RequireAuth>
            <Logout />
          </RequireAuth>} />

      </Routes>
    </AuthProvider>


  );
}

export default App;
