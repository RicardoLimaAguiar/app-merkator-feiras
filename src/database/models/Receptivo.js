import { createTable, insertData } from "../Database";
import CategoriaReceptivo from "./CategoriaReceptivo";
import CidadeReceptivo from "./CidadeReceptivo";

export default {
  name: "Receptivo",
  async createTable() {
    return await createTable(
      this.name,
      {
        id: "INTEGER PRIMARY KEY",
        nome: "TEXT",
        descricao: "TEXT",
        image: "TEXT",
        cidade: "INTEGER",
        categoria_receptivo: "INTEGER",
      },
      {
        foreignKeys: [
          {
            field: "cidade",
            referenceTable: CidadeReceptivo.name,
            referenceTableField: "id",
          },
          {
            field: "categoria_receptivo",
            referenceTable: CategoriaReceptivo.name,
            referenceTableField: "id",
          },
        ],
      }
    );
  },
  async insert({ nome, descricao, image, cidade, categoria_receptivo }) {
    return await insertData(this.name, {
      nome,
      descricao,
      image,
      cidade,
      categoria_receptivo,
    });
  },
};
