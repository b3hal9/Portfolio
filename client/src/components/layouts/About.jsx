import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="item">
        <h1 className="section-title">About</h1>
        <div className="about-content">
          <img src={require("./bishal.jpg")} alt="user" className="about-pic" />
          <div className="about-text">
            <h2>Hi! I'm Bishal Bista</h2>
            <h3>
              <span>MERN Developer</span>
              <span>App Developer</span>
              <span>System Admin</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              nemo a illo vitae natus exercitationem debitis sapiente assumenda.
              Suscipit temporibus atque eaque laborum saepe sint voluptas
              assumenda explicabo adipisci voluptate, dolorum, architecto ipsa
              doloremque ipsum fugit optio corrupti distinctio cum veritatis
              natus, nulla aperiam cumque illum. Ea aspernatur eius, velit quis
              excepturi blanditiis vel aliquam quo debitis corporis laboriosam.
              Repellat quod fugiat consectetur earum dicta tempora fugit
              doloribus, aut excepturi, placeat quas numquam ab. Cum voluptatem
              repudiandae laudantium veniam ut eius earum vitae temporibus
              expedita consequuntur quia inventore a suscipit id architecto at
              unde accusamus cupiditate dolorum, dolore aliquam minima.
              Consectetur quam dolorem quod magnam voluptate repudiandae
              delectus commodi eum officia iste unde deserunt incidunt, totam
              eveniet consequatur quas quia vitae sit consequuntur quaerat
              similique deleniti repellendus dolore. Nisi, quaerat.
            </p>
          </div>
        </div>
        <div className="skills">
          <div className="skill">
            <div className="skill-info">
              <span>HTML</span>
              <span>90%</span>
            </div>
            <div className="skill-bar html"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>CSS</span>
              <span>80%</span>
            </div>
            <div className="skill-bar css"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>JavaScript</span>
              <span>85%</span>
            </div>
            <div className="skill-bar js"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>Mongodb</span>
              <span>80%</span>
            </div>
            <div className="skill-bar db"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>React</span>
              <span>87%</span>
            </div>
            <div className="skill-bar react"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>Nodejs</span>
              <span>95%</span>
            </div>
            <div className="skill-bar html"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>Mysql</span>
              <span>90%</span>
            </div>
            <div className="skill-bar mysql"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>React-native</span>
              <span>70%</span>
            </div>
            <div className="skill-bar html"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
