import React, { FC } from 'react';
import styles from './SubscribeForm.module.scss';
import { SubscribeFormProps } from '@/components/CtaSubscribe/SubscribeForm/SubscribeForm.types';

export const SubscribeForm: FC<SubscribeFormProps> = (
  {
    buttonText,
    privacyPolicyText,
    privacyPolicyUrl,
    agreementText,
    placeholder
  }
) => (
  <form className={styles.form}>
    <input placeholder={placeholder} type="email" className={styles.input} />
    <input type="submit" value={buttonText} className={styles.button} />
    <div className={styles.agreement}>
      {agreementText} <a className={styles.link} href={privacyPolicyUrl}>{privacyPolicyText}</a>
    </div>
  </form>
);
SubscribeForm.displayName = 'SubscribeForm';
