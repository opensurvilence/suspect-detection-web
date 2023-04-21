import React from 'react';
import "../App.css";
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';
import Users from './Users';
import Suspects from './Suspects'

function MiddlePage(props) {

  return (
    <>
      <div className="middle-page">
      <AddUser />
      <DeleteUser />
      {/* <Users /> */}
       {/* <Suspects /> */}
      </div>
    </>
  );
}

export default MiddlePage


// Dear Tingyu Wang,

// I hope this message finds you well. I came across your profile while researching internship opportunities at Mercari.ai, and I was impressed by the company's innovative work in Software engineering.

// I am writing to express my interest in an internship position at Mercari.ai and to request a connection with you. As a pre-final year studern studying Computer science in IIIT Lucknow, I believe that I would be a strong candidate for an internship position in Software engineering in Mercari.ai.

// Through my coursework and previous internships, I have developed skills in  , and I am excited about the opportunity to apply these skills in a fast-paced and dynamic work environment. I am also interested in the mentorship and learning opportunities that Mercari.ai offers for interns.

// If you have a moment to connect, I would be happy to chat further about my qualifications and experience, and to learn more about the internship program at Mercari.ai.

// Thank you for your time and consideration, and I look forward to hearing back from you soon.

// Best regards,
// Kotiswar.

// <div className='mainpage cards'>
    //   <div className="metrics-card">
    //     <h2>Users</h2>
    //     <div className="metric">
    //       <div className="value">10</div>
    //       <div className="label">Today Created User</div>
    //     </div>
    //     <div className="metric">
    //       <div className="value">500</div>
    //       <div className="label">Total Users</div>
    //     </div>
    //   </div>
    //   <div className="metrics-card">
    //     <h2>Suspects</h2>
    //     <div className="metric">
    //       <div className="value">4</div>
    //       <div className="label">Today Suspects</div>
    //     </div>
    //     <div className="metric">
    //       <div className="value">893</div>
    //       <div className="label">Total Suspects</div>
    //     </div>
    //   </div>
    //   <div className="metrics-card">
    //     <h2>Requests</h2>
    //     <div className="metric">
    //       <div className="value">1812</div>
    //       <div className="label">Todays Requests</div>
    //     </div>
    //   </div>
    //   <div className="metrics-card">
    //     <h2>Identified suspects</h2>
    //     <div className="metric">
    //       <div className="value">500</div>
    //       <div className="label">Suspects Identified today</div>
    //     </div>
    //   </div>

    // </div>
