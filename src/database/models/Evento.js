import { createTable, insertData } from "../Database";

export default {
  name: "Evento",
  async createTable() {
    return await createTable(this.name, {
      id: "INTEGER PRIMARY KEY",
      nome: "TEXT",
      edicao: "TEXT",
      local_evento: "TEXT",
      data_ini: "TEXT",
      data_fim: "TEXT",
      url: "TEXT",
      descricao: "TEXT",
      imagem: "TEXT",
      planta: "TEXT",
      traslado: "TEXT",
    });
  },
  async insert({
    nome,
    edicao,
    local_evento,
    data_ini,
    data_fim,
    url,
    descricao,
    imagem,
    planta,
    traslado,
  }) {
    return await insertData(this.name, {
      nome,
      edicao,
      local_evento,
      data_ini,
      data_fim,
      url,
      descricao,
      imagem,
      planta,
      traslado,
    });
  },
};
