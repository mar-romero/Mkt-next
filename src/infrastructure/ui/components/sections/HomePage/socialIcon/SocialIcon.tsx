import React from 'react';
import styles from './SocialIcon.module.scss';

interface SocialIconProps {
  url: string;
  imageSrc: string;
  altText: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ url, imageSrc, altText }) => {
  return (
    <a href={url} className={styles.socialIcon}>
      <img src={imageSrc} alt={altText} />
    </a>
  );
};

export default SocialIcon;
