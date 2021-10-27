import { createTable, insertData } from "../Database";

export default {
  name: "Configuracao",
  async createTable() {
    return await createTable(this.name, {
      id: "INTEGER PRIMARY KEY",
      rootSite: "TEXT",
      empresaSystem: "TEXT",
      emailSystem: "TEXT",
      evento: "INTEGER",
      cnpj: "TEXT",
      logradouro: "TEXT",
      numero: "TEXT",
      compl: "TEXT",
      bairro: "TEXT",
      cep: "TEXT",
      cidade: "TEXT",
      estado: "TEXT",
      pais: "TEXT",
      fone: "TEXT",
    });
  },
  async insert({
    rootSite,
    empresaSystem,
    emailSystem,
    evento,
    cnpj,
    logradouro,
    numero,
    compl,
    bairro,
    cep,
    cidade,
    estado,
    pais,
    fone,
  }) {
    return await insertData(this.name, {
      rootSite,
      empresaSystem,
      emailSystem,
      evento,
      cnpj,
      logradouro,
      numero,
      compl,
      bairro,
      cep,
      cidade,
      estado,
      pais,
      fone,
    });
  },
};
