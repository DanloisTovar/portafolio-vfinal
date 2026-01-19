import React from 'react';
import './LogoLoop.css';
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAstro,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiMysql,
  SiPostman,
  SiBootstrap,
  SiMongodb,
  SiLinux,
  SiJquery,
  SiKubernetes
} from 'react-icons/si';

const LogoLoop = ({ speed = 30 }) => {
  const logos = [
    { node: <SiHtml5 />, title: "HTML5", color: "#E34F26" },
    { node: <SiCss3 />, title: "CSS3", color: "#1572B6" },
    { node: <SiJavascript />, title: "JavaScript", color: "#F7DF1E" },
    { node: <SiJquery />, title: "jQuery", color: "#0769AD" },
    { node: <SiTypescript />, title: "TypeScript", color: "#007ACC" },
    { node: <SiReact />, title: "React", color: "#61DAFB" },
    { node: <SiAstro />, title: "Astro", color: "#FF5D01" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", color: "#06B6D4" },
    { node: <SiBootstrap />, title: "Bootstrap", color: "#7952B3" },
    { node: <SiNodedotjs />, title: "Node.js", color: "#339933" },
    { node: <SiGit />, title: "Git", color: "#F05032" },
    { node: <SiMysql />, title: "SQL", color: "#4479A1" },
    { node: <SiMongodb />, title: "MongoDB", color: "#47A248" },
    { node: <SiPostman />, title: "Postman", color: "#FF6C37" },
    { node: <SiKubernetes />, title: "Kubernetes", color: "#326CE5" },
    { node: <SiLinux />, title: "Linux", color: "#FCC624" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="logo-loop-container">
      <div 
        className="logo-loop-track"
        style={{ '--speed': `${speed}s` }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <div className="logo-icon" style={{ color: logo.color }}>
              {logo.node}
            </div>
            <span className="logo-name">{logo.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
