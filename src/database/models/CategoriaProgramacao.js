import { createTable, insertData } from "../Database";

export default {
  name: "CategoriaProgramacao",
  async createTable() {
    return await createTable(this.name, {
      id: "INTEGER PRIMARY KEY",
      nome: "TEXT",
    });
  },
  async insert({ nome }) {
    return await insertData(this.name, {
      nome,
    });
  },
};
