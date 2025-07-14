import React from 'react'
import AppBar from './components/AppBar'
import Layout from './components/Layout'
import Hero from './components/Hero'
import WorkHistory from './components/WorkHistory'
import PersonalProjects from './components/PersonalProjects'
import './App.css'

function App() {
  return (
    <>
      <AppBar />
      <Layout>
        <Hero />
        <WorkHistory />
        <PersonalProjects />
      </Layout>
    </>
  )
}

export default App
