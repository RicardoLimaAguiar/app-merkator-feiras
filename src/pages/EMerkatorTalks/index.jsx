import React, { useState, useEffect } from 'react';
import { StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import LoadingActivityIndicator from "../../components/Loading";
import { HeaderApp } from "../../components/HeaderApp";
import { ListSchedule } from '../../components/ListSchedule';
import api from "../../services/api";

import {
  ContainerGradienteNews,
  ContainerView,
  List,
} from "../../assets/styles";

const EmerkatorTalks = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { evento } = route.params;
  const [isLoading, setIsLoadnig] = useState(false);
  const [isLoadingFooter, setIsLoadingFooter] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [scheduleRepository, setScheduleRepository] = useState([]);

  useEffect(() => {
    fecthAllSchedule();
  }, []);

  const fecthAllSchedule = async () => {
    await api.get(`programacaoevento?evento=${evento}&page=${page}`).then((response) => {
      setScheduleRepository(response.data._embedded.programacao_evento);
      setPageCount(response.data.page_count);
      setIsLoadnig(true);
      setPage(page + 1);
    });
  }

  async function handledRepository() {
    setIsLoadingFooter(true);
    if (pageCount >= page) {
      await api.get(`programacaoevento?evento=${evento}&page=${page}`).then((response) => {
        setScheduleRepository([...scheduleRepository, ...response.data._embedded.programacao_evento]);
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

  const handleScheduleDetails = async (data) => {
    navigation.navigate("EmerkatorTalksDetail", {
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
          data={scheduleRepository}
          keyExtractor={(item) => item.id}
          onEndReached={handledRepository}
          onEndReachedThreshold={0.10}
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => (
            <ListSchedule
              data={item}
              goToScheduleDetail={() => handleScheduleDetails(item)}
            />
          )}
        />
        )}
      </ContainerView>
    </ContainerGradienteNews>
  )
}

export default EmerkatorTalks;