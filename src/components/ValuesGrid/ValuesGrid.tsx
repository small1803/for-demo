import React, { FC } from 'react';
import styles from './ValuesGrid.module.scss';
import { ValuesGridProps } from '@/components/ValuesGrid/ValuesGrid.types';
import { ValueItemProps } from '@/components/ValuesGrid/ValueItem/ValueItem.types';
import { ValueItem } from '@/components/ValuesGrid/ValueItem/ValueItem';

export const ValuesGrid: FC<ValuesGridProps> = ({items}) => (
  <div className={styles.grid}>
    {items.map((item: ValueItemProps, index: number) => <ValueItem key={index} {...item} />)}
  </div>
);
ValuesGrid.displayName = 'ValuesGrid';
