import React from 'react';
import { Share } from 'react-native';
import { ButtonShare, TextButton } from '../../../assets/styles';

export default function ShareNews({ title, link }) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ButtonShare onPress={onShare} title={'Comartilhar: ' + title} url={link}>
      <TextButton>{'Compartilhar'}</TextButton>
    </ButtonShare>
  );
}