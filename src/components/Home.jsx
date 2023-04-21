import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MiddlePage from './MiddlePage'
import "../App.css"

export const Home = (props) => {
  const prop = props[Object.keys(props)[0]];
  console.log(props);
  return (
    <div className="App">
    <Navbar />
    <div className="container">
      <Sidebar />
     <MiddlePage comp = "AddUser"/>
    </div>
  </div>
  )
}
