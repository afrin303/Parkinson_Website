import React from 'react';
import './Teams.css';


function Teams(){
  return (
    <div className="teams-container">
      <h2>About Us</h2>
      <p className="description">
      This study introduces an innovative method for Parkinson's disease detection using MRI images and diagnostic tests like the Spiral and Wave tests. Leveraging deep learning techniques, particularly neural networks, the model demonstrates remarkable accuracy in identifying Parkinson's disease indicators. By analyzing MRI patterns and performance in diagnostic tests, this approach offers a non-invasive and automated diagnostic solution. Integrating deep learning with medical imaging and clinical assessments holds promise for early Parkinson's disease detection.
      </p>
     <br></br>
      <div className="image-cards">
      
        <div className="team-member-card">
          <img
            //src={m1}
            alt="Team Member 1"
            className="team-member-image"
          />
          
          <p><h4>Guide Name</h4>
              Assistant Professor        
               Department of CSE<br></br>
            Agni College of Technology
         </p>
        </div>

        
        <div className="team-member-card">
          <img
            //src={m1}
            alt="Team Member 2"
            className="team-member-image"
          />
          <p><h4>Afrin Noorjahan S</h4>        
               Department of CSE<br></br>
               Agni College of Technology
         </p>
        </div>

        
        <div className="team-member-card">
          <img
            //src={m1}
            alt="Team Member 3"
            className="team-member-image"
          />
          <p><h4>Team Member 2</h4>        
               Department of CSE<br></br>
               Agni College of Technology
         </p>
        </div>

       
        <div className="team-member-card">
          <img
            //src={m1}
            alt="Team Member 4"
            className="team-member-image"
          />
         <p><h4>Team Member 3</h4>        
               Department of CSE<br></br>
               Agni College of Technology
         </p>
        </div>
      </div>

      <footer className="copyright">© 2024 PK-AI-SUITE.com All rights reserved.</footer>
    </div>
  );
};



export default Teams;
