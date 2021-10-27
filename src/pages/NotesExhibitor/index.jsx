import React, { useState, useEffect } from "react";

import {
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import LoadingActivityIndicator from "../../components/Loading";
import NoteExhibitor from "../../components/NotesExhibitor";

import {
  ContainerGradiente,
  ContainerEventDetail,
  ContainerText,
  SectionTitleAnotation,
  ContatinerListNotes,
  List,
  ContainerResultNull,
  SectionTitle,
} from "../../assets/styles";
import NoteEventModel from "../../database/models/NoteEvent";
import { HeaderApp } from "../../components/HeaderApp";

const NotesExhibitor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResultNull, setIsResultNull] = useState(false);
  const [loadingNotes, setLoadingNotes] = useState(false);
  const [annotationBooth, setAnnotationBooth] = useState([]);

  useEffect(() => {
    handleGetAnnotation();
  }, []);

  async function handleGetAnnotation() {
    const dataAnnotationBooth = await fetchAllAnnotation();

    if (dataAnnotationBooth.length > 0) {
      setAnnotationBooth(dataAnnotationBooth);
      setIsLoading(true);
      setLoadingNotes(true);
    } else {
      setIsResultNull(true);
      setIsLoading(true);
    }
  };

  async function onDeleteAnnotation(item) {
    await NoteEventModel.delete({ id: item.id });

    const newDataAnnotation = await fetchAllAnnotation();
    setAnnotationBooth(newDataAnnotation);
    setIsLoading(true);
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
        {isResultNull && (
          <ContainerResultNull>
            <ContainerText>
              <SectionTitle>Nenhuma anotação</SectionTitle>
            </ContainerText>
          </ContainerResultNull>
        )}
        {loadingNotes && (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            enabled
            keyboardVerticalOffset={0}
          >
            <ScrollView>
              <ContainerEventDetail>
                <ContatinerListNotes>
                  <SectionTitleAnotation>
                    Minhas anotações:
                  </SectionTitleAnotation>
                  <List
                    data={annotationBooth}
                    keyExtractor={(item) => String(item.id)}
                    numberOfLines={false}
                    renderItem={({ item }) => (
                      <NoteExhibitor
                        data={item}
                        onDelete={() => onDeleteAnnotation(item)}
                      />
                    )}
                  />
                </ContatinerListNotes>
              </ContainerEventDetail>
            </ScrollView>
          </KeyboardAvoidingView>
        )}
      </SafeAreaView>
    </ContainerGradiente>
  );
};

export default NotesExhibitor;
