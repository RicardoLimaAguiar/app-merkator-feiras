import { createTable, find, insertData, update } from "../Database";

export default {
  name: "Estande",
  async createTable() {
    return await createTable(this.name, {
      id: "INTEGER PRIMARY KEY",
      nome: "TEXT",
      label: "TEXT",
      descricao: "TEXT",
      image: "TEXT",
      posX: "TEXT",
      posY: "TEXT",
      rua: "TEXT",
      corredor: "TEXT",
      favorito: "TEXT",
      visitado: "TEXT",
      estande_tipo: "INTEGER",
      mapa_level: "INTEGER",
      pedido: "INTEGER",
      evento: "INTEGER",
    });
  },
  async insert({
    id,
    nome,
    label,
    descricao,
    image,
    posX,
    posY,
    rua,
    corredor,
    favorito,
    visitado,
    estande_tipo,
    mapa_level,
    pedido,
    evento,
  }) {
    return await insertData(this.name, {
      id,
      nome,
      label,
      descricao,
      image,
      posX,
      posY,
      rua,
      corredor,
      favorito,
      visitado,
      estande_tipo,
      mapa_level,
      pedido,
      evento,
    });
  },
  async find(query = null, projection = null) {
    return await find(this.name, query, projection);
  },

  async update({
    nome,
    label,
    descricao,
    image,
    posX,
    posY,
    rua,
    corredor,
    favorito,
    visitado,
    estande_tipo,
    mapa_level,
    pedido,
    evento,
    id,
  }, projection = null){
    return await update(this.name, {
      id,
      nome,
      label,
      descricao,
      image,
      posX,
      posY,
      rua,
      corredor,
      favorito,
      visitado,
      estande_tipo,
      mapa_level,
      pedido,
      evento,
    }, projection);
  }
};
