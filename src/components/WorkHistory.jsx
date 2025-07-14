import React, { useState } from 'react';
import './WorkHistory.css';
import WorkHistoryButton from './WorkHistoryButton';
import reactLogo from '../assets/react.svg'; // Placeholder logo
import WellsFargoLogo from '../assets/wellsfargo_logo.webp';
import ColgateAthleticsLogo from '../assets/colgate_athletics.png';
import FerociousLogo from '../assets/ferocious_media.png';
import ColgateUniversityLogo from '../assets/colgate_university_logo.png';
import CompanyDescription from './CompanyDescription';
import WellsDescription from './WellsDescription';
import AthleticsDescription from './AthleticsDescription';
import FerociousDescription from './FerociousDescription';
import ColgateDescription from './ColgateDescription';

const companies = [
  {
    label: "Wells Fargo",
    logo: WellsFargoLogo, // Replace with actual logo
    role: "Software Engineer Intern",
    company: "Wells Fargo",
    description: "Placeholder description for Wells Fargo.",
    jobDescription: <WellsDescription />
  },
  {
    label: 'Colgate Athletics',
    logo: ColgateAthleticsLogo,
    role: "NCAA Division I Athlete",
    company: "Colgate Athletics",
    description: "Placeholder description for Colgate Athletics.",
    jobDescription: <AthleticsDescription />
  },
  {
    label: 'Ferocious',
    logo: FerociousLogo,
    role: "Special Project Manager",
    company: "Ferocious Media",
    description: "Special Project Manager and Digital Coordinator roles at Ferocious Media.",
    jobDescription: <FerociousDescription />
  },
  {
    label: 'Colgate University',
    logo: ColgateUniversityLogo,
    role: 'Computer Science Teaching Assistant',
    company: 'Colgate University',
    description: 'Coached 20-30 students/semester in Java and computer systems, fostering student confidence and optimal learning.',
    jobDescription: <ColgateDescription />
  }
];

const WorkHistory = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="work-history">
      <div className="work-history-container">
        <h2 className="work-history-title">Work History</h2>
        <div className="work-history-btn-row">
          {companies.map((company, idx) => (
            <WorkHistoryButton
              key={company.label}
              logo={company.logo}
              label={company.label}
              selected={selected === idx}
              onClick={() => setSelected(idx)}
            />
          ))}
        </div>
        <div className="work-history-content">
          <div className="company-description-container">
            <CompanyDescription
              key={selected} // This will trigger a re-render and transition when selected changes
              role={companies[selected].role}
              company={companies[selected].company}
              description={companies[selected].description}
              jobDescription={companies[selected].jobDescription}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHistory; 