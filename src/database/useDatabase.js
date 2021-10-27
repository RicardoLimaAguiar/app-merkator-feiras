import { useState, useEffect } from "react";
import { executeSql } from "./Database";
import CategoriaProgramacao from "./models/CategoriaProgramacao";
import CategoriaReceptivo from "./models/CategoriaReceptivo";
import CidadeReceptivo from "./models/CidadeReceptivo";
import Configuracao from "./models/Configuracao";
import Estande from "./models/Estande";
import Evento from "./models/Evento";
import NoteEvent from "./models/NoteEvent";
import Programacao from "./models/Programacao";
import Receptivo from "./models/Receptivo";
import Usuario from "./models/Usuario";

export default function useDatabase() {
  const [isDbLoadingComplete, setIsDbLoadingComplete] = useState(false);

  useEffect(() => {
    async function setupDatabase() {
      try {
        await executeSql("PRAGMA Foreign_keys = ON;");

        await CategoriaProgramacao.createTable();
        await CategoriaReceptivo.createTable();
        await CidadeReceptivo.createTable();
        await Configuracao.createTable();
        await Estande.createTable();
        await Evento.createTable();
        await NoteEvent.createTable();
        await Programacao.createTable();
        await Receptivo.createTable();
        await Usuario.createTable();

        setIsDbLoadingComplete(true);
      } catch (error) {
        console.log(error);
      }
    }

    setupDatabase();
  }, []);

  return isDbLoadingComplete;
}
