import React, { FC } from 'react';
import styles from './CtaSubscribe.module.scss';
import { CtaSubscribeProps } from '@/components/CtaSubscribe/CtaSubscribe.types';
import { SubscribeForm } from '@/components/CtaSubscribe/SubscribeForm/SubscribeForm';

export const CtaSubscribe: FC<CtaSubscribeProps> = ({form, title, text}) => (
  <div className={styles.section}>
    <div className={styles.textBlock}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
    <SubscribeForm {...form} />
  </div>
);
CtaSubscribe.displayName = 'CtaSubscribe';
