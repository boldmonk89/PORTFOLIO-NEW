import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              TEJAS
              <br />
              <span>RAGHAV</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>B.Tech CSE (AI/ML) Student</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI Builder</div>
              <div className="landing-h2-2">Web Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Web Developer</div>
              <div className="landing-h2-info-1">AI Builder</div>
            </h2>
            <p className="landing-short-intro">
              Building practical AI tools, SSB preparation platforms, and real digital products.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
