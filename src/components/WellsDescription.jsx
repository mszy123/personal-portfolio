import React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import WellsFargoLogo from '../assets/wellsfargo_mark.png';
import './WellsDescription.css';

const WellsDescription = () => {
  return (
    <div className="wells-description">
      <Timeline className="custom-timeline">
        <TimelineItem className="timeline-item">
          <TimelineSeparator>
            <TimelineDot className="timeline-dot">
              <span className="wf-dot-border">
                <img src={WellsFargoLogo} alt="Wells Fargo" className="dot-logo" />
              </span>
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent className="timeline-content">
            <div className="position-card">
              <h5 className="position-title">Software Engineer Intern</h5>
              <div className="position-date">June 2025 - August 2025</div>
              <ul className="position-description">
                <li>Member of the VM in a Day Team (VMIAD) for the Chief Technology Office</li>
                <li>Built, created documentation, and tested a modular diff library for a custom Python-based Ansible SDK to detect and highlight configuration drift in virtual machines</li>
                <li>Engaged in daily Agile standups and sprint meetings to ensure alignment and timely delivery of development tasks</li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WellsDescription; 