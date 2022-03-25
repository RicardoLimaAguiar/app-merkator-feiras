import React, { useState, useEffect } from 'react';
import { StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import LoadingActivityIndicator from "../../components/Loading";
import { HeaderApp } from "../../components/HeaderApp";
import { ListNews } from '../../components/ListNews';
import api from "../../services/api";

import {
  ContainerGradienteNews,
  ContainerView,
  List,
} from "../../assets/styles";

const News = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoria, tipo } = route.params;
  const [isLoading, setIsLoadnig] = useState(false);
  const [isLoadingFooter, setIsLoadingFooter] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [newsRepository, setNewsRepository] = useState([]);

  useEffect(() => {
    fecthAllNews();
  }, []);

  const fecthAllNews = async () => {
    await api.get(`blnews?categoria=${categoria}&tipo=${tipo}&page=${page}`).then((response) => {
      console.tron.log(response.data);
      setNewsRepository(response.data._embedded.post);
      setPageCount(response.data.page_count);
      setIsLoadnig(true);
      setPage(page + 1);
    });
  }

  async function handledRepository() {
    setIsLoadingFooter(true);
    if (pageCount >= page) {
      await api.get(`blnews?categoria=${categoria}&tipo=${tipo}&page=${page}`).then((response) => {
        setNewsRepository([...newsRepository, ...response.data._embedded.post]);
        setIsLoadingFooter(false);
        setPage(page + 1);
      });
    } else {
      setIsLoadingFooter(false);
    }
  }

  function renderFooter() {
    if (!isLoadingFooter) {
      return null;
    }
    return (
      <LoadingActivityIndicator />
    );
  }

  const handleNewsDetails = async (data) => {
    navigation.navigate("NewsDatail", {
      data: data,
    })
  }

  return (
    <ContainerGradienteNews>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />

      <HeaderApp showButtons={true}/>

      <ContainerView>
        {!isLoading && <LoadingActivityIndicator />}
        {isLoading && (
          <List
          keyboardShouldPersistTaps="handled"
          data={newsRepository}
          keyExtractor={(item) => item.id}
          onEndReached={handledRepository}
          onEndReachedThreshold={0.10}
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => (
            <ListNews
              data={item}
              goToNewsDetail={() => handleNewsDetails(item)}
            />
          )}
        />
        )}
      </ContainerView>
    </ContainerGradienteNews>
  )
}

export default News;