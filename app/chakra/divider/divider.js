'use client';
import './divider.css';

export default function Divider({ width = '100%' }) {
  const dividerStyle = {
    color: '#1a202c',
    boxSizing: 'content - box',
    height: '0px',
    lineHeight: '1.5rem',
    overflow: 'visible',
    opacity: '0.6',
    borderColor: '#7283fe',
    borderBottom: '1px solid #7283fe',
    margin: '0px',
    width: `${width}`,
  };

  return <hr style={dividerStyle} />;
}
