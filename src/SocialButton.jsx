import React from 'react';
import './SocialButton.css';

export default function SocialButton({ image, link, alt }) {
  return (
    <button
      className="social-button"
      onClick={() => window.open(link, '_blank', 'noopener noreferrer')}
      aria-label={alt || ''}
      type="button"
    >
      <img src={image} alt={alt || ''} className="social-image" />
    </button>
  );
}