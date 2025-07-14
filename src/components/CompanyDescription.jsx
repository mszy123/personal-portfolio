import React from 'react';

const CompanyDescription = ({ role, company, jobDescription }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%', width: '100%' }}>
    <div style={{ fontWeight: 700, color: '#174EA6', fontSize: '1.15rem', marginBottom: '0.2rem', display: 'flex', alignItems: 'center' }}>
      <span style={{ textTransform: 'uppercase' }}>{role}</span>
      <span style={{ fontWeight: 400, color: '#1967d2', fontSize: '0.95rem', marginLeft: '1rem' }}> {company}</span>
    </div>
    <div style={{ marginTop: '0rem', width: '100%', borderRadius: '1rem', padding: '1.2rem', color: '#222', textAlign: 'left' }}>
      {jobDescription}
    </div>
  </div>
);

export default CompanyDescription; 