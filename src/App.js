import React from 'react'
// import axios from 'axios'
import './App.css'
import Login from '../src/modules/auth/Login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../src/modules/home/Home'
import Account from '../src/modules/account/Account'
import Dashboard from '../src/modules/dashboard/Dashboard'
import Project from '../src/modules/project/Project'
import Support from '../src/modules/support/Support'
import Forgot from '../src/modules/forgot/Forgot'
import Report from '../src/modules/report/Report'
import AddAccount from '../src/modules/account/AddAccount'
import UploadProject from '../src/modules/project/UploadProject'
import Option from '../src/modules/option/Option'
import Overview from '../src/modules/overview/Overview'
import Details from './modules/details/Details'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route expact path='/' Component={Login}/>
        <Route path="/home" Component={Home}/>
        <Route path="/option" Component={Option}/>        
        <Route path="/home/overview" Component={Overview}/>        
        <Route path="/home/overview/:projectId" Component={Details} />
        <Route path="/reset-password" Component={Forgot}/>
        <Route path="/home/support" Component={Support}/>
        <Route path="https://exam-website-server-api.vercel.app/dashboard" Component={Dashboard}/>
        <Route path="/dashboard/account" Component={Account}/>
        <Route path="/dashboard/add-account" Component={AddAccount}/>
        <Route path="/dashboard/project" Component={Project}/>
        <Route path="/dashboard/upload-project" Component={UploadProject}/>
        <Route path="/dashboard/report" Component={Report}/>
      </Routes>
    </Router>
  )
}

export default App
