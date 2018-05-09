import React from 'react';
import Pill from './Pill';
import './Footer.css';

function Footer() {
  const popularTags = [
    'sales',
    'marketing',
    'frontlinee',
    'salesforcee',
    'facebook@work',
    'saless',
    'marketingg',
    'frontline',
    'salesforce',
    'facebook@workk',
  ];

  return (
    <div className="flugleidir-footer">
      <div className="flugleidir-content">
        <div className="flugleidir-large-heading">Popular tags</div>
        <div className="flugleidir-popular-tags">
          {popularTags.map(tag => (
            <Pill key={tag} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
