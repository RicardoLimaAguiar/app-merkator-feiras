import { createTable, insertData } from "../Database";

export default {
  name: "Programacao",
  async createTable() {
    return await createTable(this.name, {
      id: "INTEGER PRIMARY KEY",
      nome: "TEXT",
      descricao: "TEXT",
      imagem: "TEXT",
      data_ini: "TEXT",
      data_fim: "TEXT",
      categoria: "INTEGER",
      evento: "INTEGER",
    });
  },
  async insert({
    nome,
    descricao,
    imagem,
    data_ini,
    data_fim,
    categoria,
    evento,
  }) {
    return await insertData(this.name, {
      nome,
      descricao,
      imagem,
      data_ini,
      data_fim,
      categoria,
      evento,
    });
  },
};
