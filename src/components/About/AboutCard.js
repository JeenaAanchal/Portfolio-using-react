import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aanchal Jeena. </span>
            
            I am currently pursuing B.Tech in Computer Science and Engineering. 
            🚀💻 Skilled in web development and always eager to learn new technologies.
             Enthusiastic about creating user-friendly applications and contributing to open-source projects.
            <br />
            </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
