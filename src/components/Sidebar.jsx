import React from 'react';
import './Sidebar.css';
function sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <ul>
          <a href="/"> <li> Home</li></a>
          <a href="/AddUser"><li>Add User</li></a>
          <a href="/DeleteUser"><li>Delete User</li></a>
          <a href="/Users"><li>Users</li></a>
          <a href="/Suspects"><li>Suspects</li></a>
        </ul>
      </div>
    </div>
  )
}

export default sidebar