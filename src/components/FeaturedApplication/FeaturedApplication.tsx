import React, { FC } from 'react';
import styles from './FeaturedApplication.module.scss';
import { FeaturedApplicationProps } from '@/components/FeaturedApplication/FeaturedApplication.types';

export const FeaturedApplication: FC<FeaturedApplicationProps> = (
  {
    text,
    title,
    learnMoreText,
    learnMoreUrl,
    videoUrl,
    videoCaption
  }) => (
  <div className={styles.container}>
    <div className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.videoWrapper}>
        <video className={styles.video} controls preload="none">
          <source src={videoUrl} type="video/mp4" />
          <div className={styles.play} />
        </video>
        <div className={styles.videoCaption}>{videoCaption}</div>
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.text} dangerouslySetInnerHTML={{__html: text}} />
      <a href={learnMoreUrl} className={styles.button}>{learnMoreText}</a>
    </div>
  </div>
);
FeaturedApplication.displayName = 'FeaturedApplication';
