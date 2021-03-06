import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar, Linking, FlatList, Text} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BorderlessButton } from "react-native-gesture-handler";

import { 
  MaterialIcons as Icon, 
  FontAwesome5 as FontIcon } 
from "@expo/vector-icons";

import api from "../../services/api";
import LogoZeroSVG from "../../assets/images/logo-zero-grau.svg";
import EMeraktorTalks from "../../assets/images/e-merkator-talk-pt-mobile.png"; 

import {
  ContainerGradiente,
  ContainerScrollView,
  BannerCredenciamento,
  BannerImage,
  RowIcon,
  RowIconRedes,
  BoxIcon,
  BoxIconEMerkator,
  BoxText,
  List,
  BoxLogoEvento,
  BoxEMerkatorTalks,
  ImageEmerkatorTalks,
  ImageEMerkatorIcon,
  TitleNewsHome,
  BannerImageBackground,
} from "../../assets/styles";

import LoadingActivityIndicator from "../../components/Loading";
import { ListNewsHeader } from '../../components/ListNewsHeader';
import { ListNewsFooter } from '../../components/ListNewsFooter';
import { ListNews } from '../../components/ListNews';
import { HeaderApp } from "../../components/HeaderApp";
import DownloadPlantaFeira from "./DownloadPlantaFeira";

const Home = () => {
  const navigation = useNavigation();
  const [evento, setEvento] = useState("");
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoadnig] = useState(false);
  const [isLoadingRedes, setIsLoadnigRedes] = useState(false);
  const [config, setConfig] = useState([]);
  const [banner, setBanner] = useState([]);
  const [bannerSuperior, setBannerSuperior] = useState([]);

  useEffect(() => {
    handleDataConfig();
    fecthAllNews();
    handleAppDataConfig();
  }, []);

  const fecthAllNews = async () => {
    await api.get(`blnews?categoria=2&tipo=2`).then((response) => {
      var arrNews = [];
      response.data._embedded.post.slice(0, 5).map((item) => {
        arrNews.push(item);
      });
      setNews(arrNews);
      setIsLoadnig(true);
    });
  }

  const handleDataConfig = async () => {
    try {
      const dataConfig = await AsyncStorage.getItem("@storage_config");
      if (dataConfig !== null) {
        let resultAsyncConfig = JSON.parse(dataConfig);
        handleEvento(resultAsyncConfig.evento);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const handleAppDataConfig = async () => {
    try {
      const dataAppConfig = await AsyncStorage.getItem("@storage_appconfig");
      if (dataAppConfig !== null) {
        let resultAsyncConfig = JSON.parse(dataAppConfig);
        setBannerSuperior(JSON.parse(resultAsyncConfig.banner_superior))
        setBanner(JSON.parse(resultAsyncConfig.banner))
        setConfig(resultAsyncConfig);
        setIsLoadnigRedes(true);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const handleEvento = async (idEvent) => {
    await api.get(`evento/${idEvent}`).then((response) => {
      setEvento(response.data);
    });
  };

  const handleNewsDetails = async (data) => {
    navigation.navigate("NewsDatail", {
      data: data,
    })
  }

  const handleNewsList = async () => {
    navigation.navigate("News", {
      categoria: config._embedded.bl_category_news.id,
      tipo: 2,
    })
  }

  const goToLinkBanner = (dataUrl) => {
    Linking.openURL(
      dataUrl
    ).catch((err) => console.error("Couldn't load page", err));
  };

  const goToCredenciamento = () => {
    Linking.openURL("#").catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  const goToHospedagem = () => {
    Linking.openURL("http://paineldoexpositor.com.br/uploads/media/media_628396ce8d58d0_74457586.pdf").catch(
      (err) => console.error("Couldn't load page", err)
    );
  };

  const goToProtocoloSeguranca = () => {
    Linking.openURL("https://www.feirazerograu.com.br/protocolo").catch((err) =>
      console.error("Couldn't load page", err)
    );
  }

  const goToPlantaBaixa = () => {
    Linking.openURL("http://paineldoexpositor.com.br/uploads/media/media_627abe40f38521_46608704.pdf").catch((err) =>
      console.error("Couldn't load page", err)
    );
  }
  
  return (
    <ContainerGradiente>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <ContainerScrollView>
        {isLoadingRedes && 
          <HeaderApp showButtons={false} dataConfig={config}/>
        }

        {config.image_evento && 
        <BannerCredenciamento>
        <BannerImage
          source={{
            uri: config.image_evento,
          }}
          resizeMode={"center"}
        />
      </BannerCredenciamento>}
        
        {isLoadingRedes &&
            <FlatList
            keyExtractor={(item) => String(item.id)}
            data={bannerSuperior}
            renderItem={({ item }) => (
              <BorderlessButton style={{paddingRight: 10}} onPress={() => goToLinkBanner(item.url_superior_banner)}>
                <BannerImageBackground resizeMode="cover" source={{uri: item.image_superior_banner}} />
              </BorderlessButton>
            )}
            numColumns={1}
            //keyExtractor={(item, index) => index}
            />
        }
        {/* <RowIcon>
          <BoxIcon
            onPress={goToProtocoloSeguranca}
            activeOpacity={0.7}
          >
            <Icon name={"masks"} size={20} color="#ffffff" />
            <BoxText>Protocolo de Seguran??as</BoxText>
          </BoxIcon>
        </RowIcon> */}
        <RowIcon>
          <BoxIcon
            onPress={() =>
              navigation.navigate("Exhibitor", {
                evento: evento.id,
              })
            }
            activeOpacity={0.7}
          >
            <Icon name={"people"} size={20} color="#ffffff" />
            <BoxText>Expositores</BoxText>
          </BoxIcon>
          <BoxIcon
            onPress={() =>
              navigation.navigate("Transfer", {
                evento: evento.id,
              })
            }
            activeOpacity={0.7}
          >
            <Icon name={"directions-bus"} size={20} color="#ffffff" />
            <BoxText>Traslado Aeroporto</BoxText>
          </BoxIcon>
        </RowIcon>
        <RowIcon>
          <BoxIcon onPress={goToHospedagem}>
            <FontIcon name={'building'} size={20} color="#ffffff" />
            <BoxText>Traslado para hotel</BoxText>
          </BoxIcon>
          <BoxIcon onPress={goToCredenciamento}>
            <FontIcon name={'user-tag'} size={20} color="#ffffff" />
            <BoxText>Credenciamento</BoxText>
          </BoxIcon>
        </RowIcon>
        <RowIcon>
          <BoxIcon onPress={() => navigation.navigate("Favorites")} activeOpacity={0.7}>
            <Icon name={"star"} size={20} color="#ffffff" />
            <BoxText>Favoritos</BoxText>
          </BoxIcon>
          <BoxIcon onPress={() => navigation.navigate("NotesExhibitor")} activeOpacity={0.7}>
            <Icon name={"event-note"} size={20} color="#ffffff" />
            <BoxText>Minhas anota????es</BoxText>
          </BoxIcon>
        </RowIcon>
        <RowIcon>
          <BoxIcon onPress={() => navigation.navigate("EmerkatorTalks", {
            evento: 37,
          })} activeOpacity={0.7}>
            <FontIcon name={"bullhorn"} size={20} color="#ffffff" />
            <BoxText>eMerkator Talks</BoxText>
          </BoxIcon>
          <BoxIcon
            onPress={goToPlantaBaixa}
            activeOpacity={0.7}
          >
            <Icon name={"map"} size={20} color="#ffffff" />
            <BoxText>Planta Baixa</BoxText>
          </BoxIcon>
        </RowIcon>
        {/* <BoxEMerkatorTalks>
          <BorderlessButton onPress={() => goToLinkBanner('https://emerkator.com.br/')}>
            <ImageEmerkatorTalks source={{uri: config.image_topo_banner}} />
          </BorderlessButton>
        </BoxEMerkatorTalks> */}
  
        {isLoadingRedes &&
            <FlatList
            keyExtractor={(item) => String(item.id)}
            data={banner}
            renderItem={({ item }) => (
              <BoxIconEMerkator onPress={() => goToLinkBanner(item.url_banner)} activeOpacity={0.7} >
                <ImageEMerkatorIcon 
                  source={{uri: item.image_banner}}
                />
              </BoxIconEMerkator>
            )}
            numColumns={2}
            />
        }
        <ListNewsHeader />
        {!isLoading ? <LoadingActivityIndicator/> : 
          <>
            <TitleNewsHome>Not??cias</TitleNewsHome>
            <List
              keyboardShouldPersistTaps="handled"
              data={news}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <ListNews
                  data={item}
                  goToNewsDetail={() => handleNewsDetails(item)}
                />
              )}
            />
            <ListNewsFooter goToNewsList={() => handleNewsList()}/>
          </>
        }
      </ContainerScrollView>
    </ContainerGradiente>
  );
};

export default Home;
