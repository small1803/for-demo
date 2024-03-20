import React, { FC } from 'react';
import styles from './ValueItem.module.scss';
import { ValueItemProps } from '@/components/ValuesGrid/ValueItem/ValueItem.types';

export const ValueItem: FC<ValueItemProps> = ({ icon, title, text}) => (
  <div className={styles.card}>
    <img src={icon} alt={title} className={styles.icon} />
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.text}>{text}</div>
    </div>
  </div>
);
ValueItem.displayName = 'ValueItem';
