import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LakshyaSSB.in</h4>
                <h5>Founder & Lead Developer</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Launched my first major project, a comprehensive platform for defence
              aspirants, focusing on resource management and community building.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSBGPT & SSBMentor</h4>
                <h5>AI Architect / Product Lead</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed AI-powered psychological assessment tools and mentorship
              platforms, integrating advanced LLM capabilities for defence education.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cadet Protocol</h4>
                <h5>Core Developer & Visionary</h5>
              </div>
              <h3>2026-NOW</h3>
            </div>
            <p>
              Focused on military-grade discipline platforms and medical intake
              systems, pushing the boundaries of AI in defence training and startup execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
