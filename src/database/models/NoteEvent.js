import { createTable, find, insertData, deleteData } from "../Database";

import Estande from "./Estande";
import Programacao from "./Programacao";

export default {
  name: "NoteEvent",
  async createTable() {
    return await createTable(
      this.name,
      {
        id: "INTEGER PRIMARY KEY",
        descricao: "TEXT",
        data_note: "TEXT",
        programacao: "INTEGER",
        estande: "INTEGER",
      },
      {
        foreignKeys: [
          {
            field: "programacao",
            referenceTable: Programacao.name,
            referenceTableField: "id",
          },
          {
            field: "estande",
            referenceTable: Estande.name,
            referenceTableField: "id",
          },
        ],
      }
    );
  },
  async insert({ descricao, data_note, programacao, estande }) {
    return await insertData(this.name, {
      descricao,
      data_note,
      programacao,
      estande,
    });
  },
  async find(query = null, projection = null) {
    return await find(this.name, query, projection);
  },
  async delete(query = null) {
    return await deleteData(this.name, query);
  },
};
