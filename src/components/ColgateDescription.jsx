import React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import ColgateUniversityC from '../assets/colgate_university_C.png';
import './ColgateDescription.css';

const positions = [
  {
    title: 'Computer Science Teaching Assistant',
    date: 'Aug 2023 - Jun 2024',
    description: [
      'Coach 20-30 students/semester through process of debugging code and answering questions regarding Java and computer systems to increase student confidence and foster an optimal learning environment'
    ]
  }
];

const ColgateDescription = () => (
  <div className="colgate-description">
    <Timeline className="colgate-timeline">
      {positions.map((pos, idx) => (
        <TimelineItem className="colgate-timeline-item" key={idx}>
          <TimelineSeparator>
            <TimelineDot className="colgate-timeline-dot">
              <span className="colgate-dot-border">
                <img src={ColgateUniversityC} alt="Colgate University C" className="colgate-dot-logo" />
              </span>
            </TimelineDot>
            {idx < positions.length - 1 && (
              <TimelineConnector className="colgate-timeline-connector" />
            )}
          </TimelineSeparator>
          <TimelineContent className="colgate-timeline-content">
            <div className="colgate-position-card">
              <h5 className="colgate-position-title" style={{ color: '#174EA6' }}>{pos.title}</h5>
              <div className="colgate-position-date" style={{ color: '#174EA6' }}>{pos.date}</div>
              <ul className="colgate-position-description">
                {pos.description.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </div>
);

export default ColgateDescription; 