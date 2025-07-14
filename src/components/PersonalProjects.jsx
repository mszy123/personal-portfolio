import React, { useState, useRef, useEffect } from "react";
import Slide from '@mui/material/Slide';
import "./PersonalProjects.css";
import sheetsGptImg from "../assets/sheets-gpt.png";

const projects = [
  {
    image: sheetsGptImg,
    title: "SheetsGPT",
    description: "An AI Chrome Extension with over 11,000 active users to get formulas from natural language. Featured by Google as top extension of the month."
  },
  {
    image: "https://via.placeholder.com/400x250?text=Project+2",
    title: "Project Two",
    description: "A brief description of Project Two, focusing on its unique aspects."
  },
  {
    image: "https://via.placeholder.com/400x250?text=Project+3",
    title: "Project Three",
    description: "A brief description of Project Three, showcasing its results."
  },
  {
    image: "https://via.placeholder.com/400x250?text=Project+4",
    title: "Project Four",
    description: "Placeholder description for Project Four."
  },
  {
    image: "https://via.placeholder.com/400x250?text=Project+5",
    title: "Project Five",
    description: "Placeholder description for Project Five."
  },
  {
    image: "https://via.placeholder.com/400x250?text=Project+6",
    title: "Project Six",
    description: "Placeholder description for Project Six."
  },
  {
    image: "https://via.placeholder.com/400x250?text=Project+7",
    title: "Project Seven",
    description: "Placeholder description for Project Seven."
  },
  {
    image: "https://via.placeholder.com/400x250?text=Project+8",
    title: "Project Eight",
    description: "Placeholder description for Project Eight."
  },
  {
    image: "https://via.placeholder.com/400x250?text=Project+9",
    title: "Project Nine",
    description: "Placeholder description for Project Nine."
  }
];

const CARD_GAP = 24;
const CARD_MIN_WIDTH = 400;
const CARD_MAX_WIDTH = 520;
const CARD_HEIGHT = 280;
const CARD_LARGE_HEIGHT = (2 * CARD_HEIGHT) + CARD_GAP; // 584

const PersonalProjects = () => {
  const [current, setCurrent] = useState(0);
  const [columnsPerView, setColumnsPerView] = useState(1);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.offsetWidth;
        const columns = Math.floor((containerWidth + CARD_GAP) / (CARD_MIN_WIDTH + CARD_GAP));
        setColumnsPerView(Math.max(1, Math.min(columns, Math.ceil(projects.length / 2))));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Group projects into columns of 2, with the first card as a special large card
  const columns = [];
  columns.push([projects[0]]); // First column, first card spans 2 rows
  for (let i = 1; i < projects.length; i += 2) {
    columns.push([projects[i], projects[i + 1]].filter(Boolean));
  }

  const goTo = idx => {
    console.log('Going to index:', idx);
    setCurrent(idx);
  };
  const prev = () => {
    const newCurrent = current === 0 ? columns.length - 1 : current - 1;
    console.log('Previous: current =', current, 'newCurrent =', newCurrent);
    setCurrent(newCurrent);
  };
  const next = () => {
    const newCurrent = current >= columns.length - 1 ? 0 : current + 1;
    console.log('Next: current =', current, 'newCurrent =', newCurrent);
    setCurrent(newCurrent);
  };

  return (
    <section className="personal-projects-section">
      <div className="personal-projects-hero">
        <div className="personal-projects-text">
          <h2>Personal Projects</h2>
          <h3>See what I've been working on</h3>
        </div>
      </div>
      <div className="personal-projects-slider-container-outer" style={{ margin: '0 auto' }}>
        <div className="personal-projects-slider-container">
          <div className="personal-projects-slider" ref={sliderRef}>
            <div
              className="personal-projects-slider-track grid"
              style={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridTemplateRows: `repeat(2, ${CARD_HEIGHT}px)`,
                gridTemplateColumns: `repeat(${columns.length}, minmax(${CARD_MIN_WIDTH}px, ${CARD_MAX_WIDTH}px))`,
                gap: `${CARD_GAP}px`,
                transform: `translateX(-${current * (CARD_MAX_WIDTH + CARD_GAP)}px)`,
                transition: 'transform 0.4s cubic-bezier(.4,0,.2,1)',
                paddingLeft: 24,
                height: (2 * CARD_HEIGHT) + CARD_GAP
              }}
            >
              {/* First card, spans 2 rows */}
              <Slide direction="right" in={true} mountOnEnter unmountOnExit appear={false}>
                <div
                  className="personal-project-card personal-project-card-large"
                  style={{
                    gridRow: '1 / span 2',
                    gridColumn: 1,
                    minWidth: CARD_MIN_WIDTH,
                    maxWidth: CARD_MAX_WIDTH,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                >
                  <img 
                    src={projects[0].image} 
                    alt={projects[0].title} 
                    className="personal-project-card-img"
                  />
                  <div className="personal-project-card-content">
                    <h4>{projects[0].title}</h4>
                    <p>{projects[0].description}</p>
                    <div style={{ marginTop: '1rem' }}>
                      <a
                        href="https://chromewebstore.google.com/detail/sheetsgpt-ai-google-sheet/gniilafaobndflnfkjofaecaapicnhhg?hl=en&authuser=0"
                        className="personal-project-learn-more"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4em' }}
                      >
                        See on Chrome Web Store
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Slide>
              {/* Other columns, each with up to 2 cards */}
              {columns.slice(1).map((col, colIdx) => (
                <React.Fragment key={colIdx + 1}>
                  {col.map((project, rowIdx) => (
                    <Slide direction="right" in={true} mountOnEnter unmountOnExit appear={false} key={project.title}>
                      <div
                        className="personal-project-card"
                        style={{
                          gridRow: rowIdx + 1,
                          gridColumn: colIdx + 2,
                          height: CARD_HEIGHT,
                          minWidth: CARD_MIN_WIDTH,
                          maxWidth: CARD_MAX_WIDTH,
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end'
                        }}
                      >
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="personal-project-card-img"
                        />
                        <div className="personal-project-card-content">
                          <h4>{project.title}</h4>
                          <p>{project.description}</p>
                          <div style={{ marginTop: '1rem' }}>
                            <a href="#" className="personal-project-learn-more">Learn more</a>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="personal-projects-slider-indicator">
        {columns.map((_, idx) => (
          <span
            key={idx}
            className={`slider-indicator-dot${idx === current ? ' active' : ''}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
      <div className="personal-projects-slider-arrows" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '150px', margin: '24px auto 0 auto' }}>
        <button className="slider-arrow left"  onClick={prev} aria-label="Previous project">
          <span className="sr-only">Previous</span>
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.83871 9.62581V6.2H19.9161V3.8H4.83871V0.374193L0.193548 5L4.83871 9.62581Z" fill="white"></path>
          </svg>
        </button>
        <button className="slider-arrow right" onClick={next} aria-label="Next project">
          <span className="sr-only">Next</span>
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1613 9.62581V6.2H0.083871V3.8H15.1613V0.374193L19.8065 5L15.1613 9.62581Z" fill="white"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PersonalProjects; 