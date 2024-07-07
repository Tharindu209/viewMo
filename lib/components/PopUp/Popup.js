import React, { useEffect } from 'react';
import styles from './Popup.module.css';

const Popup = ({ message, type, size, position, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case 1:
        return styles['popup-green']; 
      case 2:
        return styles['popup-red']; 
      case 3:
        return styles['popup-blue'];
      default:
        return styles['popup-blue'];
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return styles['popup-small']; 
      case 'medium':
        return styles['popup-medium']; 
      case 'large':
        return styles['popup-large'];
      default:
        return styles['popup-large'];
    }
  };

  const getPositionStyles = () => {
    switch (position) {
      case 'top-center':
        return styles['popup-top-center'];
      case 'top-left':
        return styles['popup-topLeft']; 
      case 'top-right':
        return styles['popup-topRight']; 
      case 'bottom-left':
        return styles['popup-bottomLeft']; 
      case 'up':
        return styles['popup-up-center']; 
      case 'center':
        return styles['popup-center'];
      default:
        return styles['popup-center'];
    }
  };

  return (
    <div className={`${styles.popup} ${getTypeStyles()} ${getSizeStyles()} ${getPositionStyles()}`}>
      <span>{message}</span>
      <button className={styles['popup-closeButton']} onClick={onClose}>X</button>
    </div>
  );
};

export default Popup;
