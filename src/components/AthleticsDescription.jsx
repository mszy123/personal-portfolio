import React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import './AthleticsDescription.css';
import CSDWhiteLogo from '../assets/CSD_white.png';
import CSAACLogo from '../assets/CSAAC_logo.png';

const AthleticsDescription = () => {
  const positions = [
    {
      title: 'Swim Team Captain',
      description: 'Led team bi-monthly meetings with coaches while mentoring younger athletes and fostering team unity.',
      icon: '🏆',
      date: '2024 - 2025'
    },
    {
      title: 'President of SAAC',
      description: 'Student Athlete Advisory Committee president, representing athlete interests and organizing campus-wide events. Directly communicating to the athletic department and the NCAA.',
      icon: '👥',
      date: '2024 - 2025'
    },
    {
      title: 'Community Service Chair',
      description: 'Organized volunteer events and community outreach programs, coordinating team participation in local initiatives. Helped raise over $11,000 for cancer research and awareness.',
      icon: '🤝',
      date: '2024 - 2025'
    },
    {
      title: 'Social Media Chair',
      description: 'Managed team social media presence, creating engaging content and building community engagement through graphic design adhering to the Colgate Athletics brand guidelines.',
      icon: '📱',
      date: '2024 - 2025'
    },
    {
      title: 'Career Services Ambassador',
      description: 'Connected athletes with career development resources and professional networking opportunities.',
      icon: '💼',
      date: '2024 - 2025'
    }
  ];

  return (
    <div className="athletics-description">
      <Timeline className="custom-timeline">
        {positions.map((position, index) => (
          <TimelineItem key={index} className="timeline-item">
            <TimelineSeparator>
              <TimelineDot className="timeline-dot athletics-dot">
                <span className="position-icon">
                  <img
                    src={position.title === 'President of SAAC' ? CSAACLogo : CSDWhiteLogo}
                    alt={position.title === 'President of SAAC' ? 'CSAAC Logo' : 'CSD White Logo'}
                    style={{ width: '60%', height: '60%', objectFit: 'cover', display: 'block', borderRadius: '50%', margin: '0 auto' }}
                  />
                </span>
              </TimelineDot>
              {index < positions.length - 1 && (
                <TimelineConnector className="timeline-connector athletics-connector" />
              )}
            </TimelineSeparator>
            <TimelineContent className="timeline-content">
              <div className="position-card">
                <h5 className="position-title">{position.title}</h5>
                <div className="position-date">{position.date}</div>
                <p className="position-description">{position.description}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default AthleticsDescription; 