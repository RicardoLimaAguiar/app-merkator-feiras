import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Platform,
  Linking,
  SafeAreaView,
  ActivityIndicator,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import {
  FontAwesome as FontIcon,
  MaterialIcons as Icon,
} from "@expo/vector-icons";

import api from "../../services/api";
import LoadingActivityIndicator from "../../components/Loading";
import NoteEventModel from "../../database/models/NoteEvent";
import NoteExhibitor from "../../components/NotesExhibitor";
import EstandeModel from "../../database/models/Estande";
import { HeaderApp } from "../../components/HeaderApp";

import {
  ContainerGradiente,
  ContainerEventDetail,
  ContainerText,
  TitleExhibitor,
  RowMarca,
  BoxMarca,
  TextMarca,
  ContainerDescription,
  SectionTitle,
  ContainerProduto,
  BoxProduto,
  TextProduto,
  BoxFones,
  TextFone,
  BoxSpeaker,
  ButtonContainerExhibitor,
  ButtonExhibitor,
  TextButtonExhibitor,
  Content,
  BoxCloseModal,
  SectionTitleAnotation,
  ButtonCloseModal,
  LabelButtonClose,
  ContatinerListNotes,
  Form,
  Input,
  Submit,
  List,
  ButtonTraslado,
  TextButtonTraslado,
} from "../../assets/styles";

const ExhibitorDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  /** params */
  const idBooth = route.params.data.id;
  /** Loading */
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingClient, setLoadingClient] = useState(false);
  const [loadingContact, setLoadingContact] = useState(false);
  const [loadingNotes, setLoadingNotes] = useState(false);

  /** states */
  const [dataOrder, setDataOrder] = useState();
  const [productClient, setProductClient] = useState();
  const [contact, setContact] = useState("");
  const [booth, setBooth] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const [favorites, setFavorites] = useState("0");
  const [visited, setVisited] = useState("0");
  const [annotationBooth, setAnnotationBooth] = useState([]);
  const [input, setInput] = useState("");
  const [alighMarcas, setAlighMarcas] = useState("center");
  useEffect(() => {
    loadPedido();
    handleGetFavorites();
    handleGetAnnotation();
  }, []);

  async function loadPedido() {
    setDataOrder(route.params.data._embedded.pedido);
    setBooth(route.params.data);
    loadContato(route.params.data._embedded.pedido._embedded.cliente.id);
    setProductClient(route.params.data.produto_cliente);

    setIsLoading(true);
    setLoadingClient(true);
  }

  async function loadContato(cliente) {
    const getContact = await api
      .get(`contatocliente?cliente=${cliente}`)
      .then((result) => {
        setContact(result.data._embedded.contato_cliente);
        setLoadingContact(true);
      });
  }

  const dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  async function goToMap(repositorie) {
    navigation.navigate("MapLevel", {
      posX: repositorie.posx,
      posY: repositorie.posy,
      pedido: repositorie._embedded.pedido.id,
      evento: repositorie._embedded.pedido._embedded.evento.id,
    });
  };

  async function handleGetFavorites() {
    const result = await EstandeModel.find(null, {
      orderBy: { nome: "DESC" },
    });

    const dataNewFavorite = result?.rows?._array || [];

    console.tron.log(dataNewFavorite);

    dataNewFavorite.map((item) => {
      if (item.id === idBooth) {
        if (item.favorito === "1") {
          setIsFavorite(true);
          setFavorites("1");
        }
        if (item.visitado === "1") {
          setIsVisited(true);
          setVisited("1");
        }
      }
    });
  };

  async function handleGetAnnotation() {
    const dataNote = await fetchAllAnnotation();
    setAnnotationBooth(dataNote);
    setLoadingNotes(true);
  };

  async function saveRepository(repository, field) {

    const result = await EstandeModel.find(
      {
        id: repository.id,
      },
      {
        orderBy: {
          nome: "DESC",
        },
      }
    );
    
    const resultData = result?.rows?._array || [];

    let varVisited = visited;
    let varFavorited = favorites;

    if (field === "visited") {
      varVisited = (varVisited === "1") ? "0" : "1";
      setIsVisited(isVisited ? false : true);
      setVisited(varVisited);
    }
    if (field === "favorite") {
      varFavorited = (varFavorited === "1") ? "0" : "1";
      setFavorites(varFavorited);
      setIsFavorite(isFavorite ? false : true);
    }

    const dataEstande = {
      id: repository.id,
      nome: repository.nome,
      label: repository.label,
      descricao: repository.descricao,
      image: repository.image,
      posX: repository.posx,
      posY: repository.posy,
      rua: repository.rua,
      corredor: repository.corredor,
      favorito: varFavorited,
      visitado: varVisited,
      estande_tipo: repository._embedded.estande_tipo.id,
      mapa_level: repository._embedded.mapa_level.id,
      pedido: repository._embedded.pedido.id,
      evento: repository._embedded.pedido._embedded.evento.id,
    };
    if(resultData.length === 0){
      await EstandeModel.insert(dataEstande);
    }else{
      await EstandeModel.update(dataEstande, repository.id);
    }
  };

  const openModal = () => {
    handleGetAnnotation();
    setShowModal(!showModal);
  };

  async function saveNoteEvent() {
    if (input.length > 0) {
      let idAnnottion = annotationBooth.length;
      let dataAnnotation = {
        id: idAnnottion > 0 ? idAnnottion + 1 : 1,
        descricao: input,
        data_note: String(new Date()),
        estande: idBooth,
      };

      await NoteEventModel.insert(dataAnnotation);

      const dataNote = await fetchAllAnnotation();

      setAnnotationBooth(dataNote);
      setInput("");
    }
    // setShowModal(false);
  };

  async function onDeleteAnnotation(item) {
    
    await NoteEventModel.delete({ id: item.id });
    const dataNote = await fetchAllAnnotation();
    setAnnotationBooth(dataNote);

  };

  async function fetchAllAnnotation(){
    const result = await NoteEventModel.find(null, {
      orderBy: { id: "DESC" },
    });
    return result?.rows?._array || [];
  };

  return (
    <ContainerGradiente>
      <SafeAreaView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled
      >
        <HeaderApp showButtons={true} />
        {!isLoading && <LoadingActivityIndicator />}
        {isLoading && (
          <ScrollView>
            <ContainerEventDetail>
              <ContainerText>
                <RowMarca style={{ justifyContent: alighMarcas }}>
                  <BoxMarca>
                    <TextMarca>{route.params.data.nome}</TextMarca>
                  </BoxMarca>
                </RowMarca>
                <TitleExhibitor>
                  {dataOrder._embedded.cliente.nome}
                </TitleExhibitor>
                <ContainerDescription>
                  {/* CNPJ: {dataOrder._embedded.cliente.cnpj}{'\n'}
                  Fone: {dataOrder._embedded.cliente.fone1}{'\n'}
                  {dataOrder._embedded.cliente.cidade} - {" "}
                  {dataOrder._embedded.cliente.estado} */}
                </ContainerDescription>
                <SectionTitle>Produtos:</SectionTitle>
                <ContainerProduto>
                  {!loadingClient && (
                    <ActivityIndicator size="small" color="#000000" />
                  )}
                  {loadingClient &&
                    productClient.map((value) => (
                      <BoxProduto key={'BoxProduto' + value.id}>
                        <TextProduto>{value.name}</TextProduto>
                      </BoxProduto>
                    ))}
                </ContainerProduto>
                
                {!loadingContact && (
                  <ActivityIndicator
                    size="small"
                    color="#000000"
                    style={{ alignItems: "flex-start" }}
                  />
                )}
                {/* {loadingContact &&
                  contact.map((value) => (
                    <>
                      <SectionTitle>Contato:</SectionTitle>
                      <BoxFones key={value.id}>
                        <TextProduto>{value.email}</TextProduto>
                        <TextFone
                          onPress={() => {
                            dialCall(value.fone);
                          }}
                        >
                          <TextProduto>{value.fone}</TextProduto>
                        </TextFone>
                      </BoxFones>
                    </>
                  ))} */}
                <ButtonTraslado>
                  <TextButtonTraslado>{dataOrder._embedded.pavilhao.nome}</TextButtonTraslado>
                </ButtonTraslado>
                <ButtonTraslado>
                  <TextButtonTraslado>Corredor {dataOrder.corredor}</TextButtonTraslado>
                </ButtonTraslado>
                <ButtonTraslado>
                  <TextButtonTraslado>Rua: {dataOrder.rua}</TextButtonTraslado>
                </ButtonTraslado>
                <ButtonContainerExhibitor>
                  {/* {isLoading && (
                    <ButtonExhibitor
                      onPress={() => {
                        goToMap(booth);
                      }}
                    >
                      <TextButtonExhibitor>
                        <FontIcon
                          name={"map-marker"}
                          size={20}
                          color="#ffffff"
                        />
                      </TextButtonExhibitor>
                    </ButtonExhibitor>
                  )} */}
                  <ButtonExhibitor
                    onPress={() => {
                      saveRepository(booth, "favorite");
                    }}
                    activeOpacity={0.7}
                  >
                    <Icon
                        name={"star"}
                        size={15}
                        color={isFavorite ? "#FFCC00" : "#FFFFFF"}
                      />
                    <TextButtonExhibitor 
                      style={{color: isFavorite ? "#FFCC00" : "#FFFFFF"}}
                    >Favorito</TextButtonExhibitor>
                  </ButtonExhibitor>
                  <ButtonExhibitor
                    onPress={() => {
                      saveRepository(booth, "visited");
                    }}
                    activeOpacity={0.7}
                  >
                    <Icon
                        name={"check"}
                        size={20}
                        color={isVisited ? "#FFCC00" : "#FFFFFF"}
                      />
                    <TextButtonExhibitor 
                      style={{color: isVisited ? "#FFCC00" : "#FFFFFF"}}
                    > Visitado </TextButtonExhibitor>
                  </ButtonExhibitor>
                  <ButtonExhibitor onPress={openModal} activeOpacity={0.7}>
                    <Icon name={"edit"} size={18} color="#ffffff" />
                    <TextButtonExhibitor> Anotações </TextButtonExhibitor>
                  </ButtonExhibitor>
                </ButtonContainerExhibitor>
              </ContainerText>
            </ContainerEventDetail>
          </ScrollView>
        )}
        <Modal
          transparent={false}
          visible={showModal}
          animationType="slide"
          presentationStyle="formSheet"
          >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            enabled
            keyboardVerticalOffset={0}
            >
            <ScrollView>
              <Content>
                <BoxCloseModal>
                  <ButtonCloseModal onPress={openModal} activeOpacity={0.7}>
                    <LabelButtonClose>X Fechar</LabelButtonClose>
                  </ButtonCloseModal>
                </BoxCloseModal>
                <ContatinerListNotes>
                  <SectionTitleAnotation>
                    Minhas anotações:
                  </SectionTitleAnotation>
                  {loadingNotes && (
                    <List
                      data={annotationBooth}
                      keyExtractor={(item) => String(item.id)}
                      numberOfLines={false}
                      renderItem={({ item }) => (
                        <NoteExhibitor
                          key={item.id}
                          data={item}
                          onDelete={() => onDeleteAnnotation(item)}
                        />
                      )}
                    />
                  )}
                  <Form>
                    <Input
                      value={input}
                      onChangeText={setInput}
                      autoCapitalize="none"
                      autoCorrect={false}
                      multiline={true}
                      placeholder="Faça aqui sua anotação..."
                      style={{ textAlignVertical: "top" }}
                    />
                    <Submit onPress={saveNoteEvent} activeOpacity={0.7}>
                      <TextButtonExhibitor style={{fontSize: 12}}> Salvar </TextButtonExhibitor>
                    </Submit>
                  </Form>
                </ContatinerListNotes>
              </Content>
            </ScrollView>
          </KeyboardAvoidingView>
        </Modal>
      </SafeAreaView>
    </ContainerGradiente>
  );
};

export default ExhibitorDetail;
