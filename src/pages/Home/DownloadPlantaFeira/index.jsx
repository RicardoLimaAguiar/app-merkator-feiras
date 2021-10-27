import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { BoxIcon, BoxText } from '../../../assets/styles'

export default function DownloadPlantaFeira({ fileUrl }) {
  const [loading, setLoading] = useState(false)

  const onShare = async () => {
    setLoading(true)
    const fileUrlSplited = String(fileUrl).split('/');
    const hasFileName = fileUrlSplited.length > 0;
    const fileName = hasFileName ? fileUrlSplited[fileUrlSplited.length - 1] : 'planta-feira.pdf';

    const { uri: localUri } = await FileSystem.downloadAsync(
      fileUrl,
      FileSystem.documentDirectory + fileName
    ).catch((error) => {
      console.error(error)
      setLoading(false);
    })
    await Sharing.shareAsync(localUri)
      .catch((err) => {
        console.log('Sharing::error', err);
        setLoading(false);
      })
    setLoading(false)
  }

  return (
    <BoxIcon
      disabled={loading}
      onPress={onShare}
      activeOpacity={0.7}
    >
      {
        loading ?
          <ActivityIndicator color="#ffffff" /> :
          <React.Fragment>
            <Icon name={"map"} size={20} color="#ffffff" />
            <BoxText>Baixar Planta da Feira</BoxText>
          </React.Fragment>
      }
    </BoxIcon>
  );
}