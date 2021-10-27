import { createTable, insertData } from "../Database";

export default {
  name: "Usuario",
  async createTable() {
    return await createTable(this.name, {
      id: "INTEGER PRIMARY KEY",
      nome: "TEXT",
      email: "TEXT",
      token: "TEXT",
      status: "TEXT",
      image: "TEXT",
      user_inc: "INTEGER",
      data_inc: "TEXT",
      user_upd: "TEXT",
      data_upd: "TEXT",
      perfil: "INTEGER",
      cliente: "INTEGER",
    });
  },
  async insert({
    nome,
    email,
    token,
    status,
    image,
    user_inc,
    data_inc,
    user_upd,
    data_upd,
    perfil,
    cliente,
  }) {
    return await insertData(this.name, {
      nome,
      email,
      token,
      status,
      image,
      user_inc,
      data_inc,
      user_upd,
      data_upd,
      perfil,
      cliente,
    });
  },
};
