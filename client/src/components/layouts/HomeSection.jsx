import React from "react";

const HomeSection = () => {
  return (
    <section id="home">
      <div className="item">
        <div className="content">
          <h1>Hi I'm Bishal Bista.</h1>
          <div className="sm">
            <a
              href="https://www.facebook.com/profile.php?id=100003942614290"
              className="fab fa-facebook-f"
            ></a>
            <a
              href="https://twitter.com/b3hal9?fbclid=IwAR0Il2kp3VEQiUwBhyA73YZ0rBEAO1fQmYFlaGNOulHu_2e_AS5KexUUen0"
              className="fab fa-twitter"
            ></a>
            <a
              href="https://www.instagram.com/b3hal9/?fbclid=IwAR0Il2kp3VEQiUwBhyA73YZ0rBEAO1fQmYFlaGNOulHu_2e_AS5KexUUen0"
              className="fab fa-instagram"
            ></a>
            <a
              href="https://www.linkedin.com/in/bishal-bista-b539821a0/"
              className="fab fa-linkedin-in"
            ></a>
            <a
              href="https://github.com/b3hal9?fbclid=IwAR0Il2kp3VEQiUwBhyA73YZ0rBEAO1fQmYFlaGNOulHu_2e_AS5KexUUen0"
              className="fab fa-github"
            ></a>
          </div>
          <div className="buttons">
            <a href="#contact">Contact me</a>
            <a href="https://drive.google.com/file/d/1gZDlXfth97aFgbwfmIs2a3ORH4_JSBrZ/view?usp=sharing">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <a href="#about">
        <button
          class="down fas fa-arrow-down"
          style={{ display: "inline-block" }}
        ></button>
      </a>
    </section>
  );
};

export default HomeSection;
