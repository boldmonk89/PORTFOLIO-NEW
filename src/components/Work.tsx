import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "LakshyaSSB.in",
              category: "SSB Preparation Platform",
              tools: "React, Next.js, Firebase",
              link: "https://lakshyassb.in",
              image: "/images/lakshya_real.png",
            },
            {
              name: "SSBGPT.com",
              category: "AI-powered SSB Assistant",
              tools: "Prompt Engineering, AI Tools, React",
              link: "https://SSBGPT.com",
              image: "/images/ssbgpt_real.png",
            },
            {
              name: "SSBMentor.com",
              category: "Mentorship-based Preparation",
              tools: "Next.js, UI/UX Design",
              link: "https://Ssbmentor.com",
              image: "/images/ssbmentor_real.png",
            },
            {
              name: "CadetProtocol",
              category: "Productivity & Discipline",
              tools: "Upcoming Platform",
              link: "https://cadetprotocoll.vercel.app",
              badge: "Coming Soon",
              image: "/images/cadet_real.png",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                    {project.badge && (
                      <span className="work-badge">{project.badge}</span>
                    )}
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
