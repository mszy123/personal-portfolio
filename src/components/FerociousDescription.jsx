import React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import FerociousLogoMark from '../assets/ferocious_logo_mark.png';
import './FerociousDescription.css';

const positions = [
  {
    title: 'Special Project Manager',
    date: 'Jun 2023 - Present',
    description: [
      'Developed, tested and maintained an email subscription service through AWS SES and AWS Lambda that provides a report on the statistics of reviews for Google Local Service Ad competitors for Ferocious Media clients',
      'Programmed an internal tool that uses an AI large language model to bulk analyze call outcomes and other information needed of home service clients of Ferocious Media',
      'Built mapping software for easy visualization of zip codes that ads are being run for national franchise clients'
    ]
  },
  {
    title: 'Digital Coordinator',
    date: 'Jul 2020 - Aug 2022',
    description: [
      "Managed graphic designs and layouts for Ferocious Media's social media clients in addition to working with banner ads for clients."
    ]
  }
];

const FerociousDescription = () => (
  <div className="ferocious-description">
    <Timeline className="ferocious-timeline">
      {positions.map((pos, idx) => (
        <TimelineItem className="ferocious-timeline-item" key={idx}>
          <TimelineSeparator>
            <TimelineDot className="ferocious-timeline-dot">
              <span className="ferocious-dot-border">
                <img src={FerociousLogoMark} alt="Ferocious Media" className="ferocious-dot-logo" />
              </span>
            </TimelineDot>
            {idx < positions.length - 1 && (
              <TimelineConnector className="ferocious-timeline-connector" />
            )}
          </TimelineSeparator>
          <TimelineContent className="ferocious-timeline-content">
            <div className="ferocious-position-card">
              <h5 className="ferocious-position-title">{pos.title}</h5>
              <div className="ferocious-position-date">{pos.date}</div>
              <ul className="ferocious-position-description">
                {pos.description.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </div>
);

export default FerociousDescription; 