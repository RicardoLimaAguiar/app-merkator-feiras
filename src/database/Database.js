import * as SQLite from "expo-sqlite";

let _db = SQLite.openDatabase('database.db');

const convertObject2Array = (obj) => {
  return Object.keys(obj).map((key) => ({
    key,
    value: obj[key],
  }));
};

export const executeSql = async (query, args = []) => {
  return new Promise((resolve, reject) => {
    _db.transaction(
      (tx) => {
        tx.executeSql(
          query,
          args,
          (_, result) => resolve(result),
          (_, error) => {
            console.log(error);
            reject(error);
          }
        );
      },
      (_, error) => {
        console.log(error);
        reject(error);
      }
    );
  });
};

export const createTable = async (
  table,
  columns,
  options = { foreignKeys: [] }
) => {
  let query = "CREATE TABLE IF NOT EXISTS " + table + "(";
  const columnsArray = convertObject2Array(columns);

  for (let i = 0; i < columnsArray.length; i++) {
    let { key, value } = columnsArray[i];
    query +=
      i + 1 === columnsArray.length ? `${key} ${value}` : `${key} ${value},`;
  }

  if (options && options.foreignKeys && options.foreignKeys.length) {
    query += ",";

    for (let i = 0; i < options.foreignKeys.length; i++) {
      const { field, referenceTable, referenceTableField } =
        options.foreignKeys[i];
      query += `FOREIGN KEY(${field}) REFERENCES ${referenceTable}(${referenceTableField})`;
      query += i + 1 === options.foreignKeys.length ? "" : ",";
    }
  }

  query += ");";

  return await executeSql(query);
};

export const insertData = async (table, data) => {
  let query = "INSERT INTO " + table + "(";
  const dataArray = convertObject2Array(data);

  for (let i = 0; i < dataArray.length; i++) {
    let { key } = dataArray[i];
    query += i + 1 === dataArray.length ? key : `${key},`;
  }

  query += ") values (";

  for (let i = 0; i < dataArray.length; i++) {
    query += i + 1 === dataArray.length ? "?" : "?,";
  }

  query += ");";

  return await executeSql(
    query,
    dataArray.map(({ value }) => value)
  );
};

export const update = async (table, data, projection) => {
  let query2Run = "UPDATE " + table + " SET ";
  const dataArray = convertObject2Array(data);

  for (let i = 0; i < dataArray.length; i++) {
    let { key } = dataArray[i];
    query2Run += i + 1 === dataArray.length ? key+ ' = ?' : `${key} = ?, `;
  }

  query2Run += ' WHERE id = ' + projection
  
  return await executeSql(
    query2Run,
    dataArray.map(({ value }) => value)
  );
};

export const find = async (table, query, projection) => {
  let query2Run = "SELECT * FROM " + table + "";
  const queryArray = query ? convertObject2Array(query) : [];
  const orderByArray =
    projection && projection.orderBy
      ? convertObject2Array(projection.orderBy)
      : [];

  if (queryArray.length > 0) {
    query2Run += " WHERE ";

    for (let i = 0; i < queryArray.length; i++) {
      let { key } = queryArray[i];
      query2Run += `${key} = ?`;
      query2Run += i + 1 === queryArray.length ? "" : ` AND `;
    }
  }

  if (orderByArray.length > 0) {
    query2Run += " ORDER BY ";

    for (let i = 0; i < orderByArray.length; i++) {
      let { key, value } = orderByArray[i];
      query2Run += `${key} ${value}`;
      query2Run += i + 1 === orderByArray.length ? "" : `,`;
    }
  }

  return await executeSql(
    query2Run,
    queryArray.map(({ value }) => value)
  );
};

export const deleteData = async (table, query) => {
  let query2Run = "DELETE FROM " + table + "";
  const queryArray = query ? convertObject2Array(query) : [];

  if (queryArray.length > 0) {
    query2Run += " WHERE ";

    for (let i = 0; i < queryArray.length; i++) {
      let { key } = queryArray[i];
      query2Run += `${key} = ?`;
      query2Run += i + 1 === queryArray.length ? "" : ` AND `;
    }
  }

  return await executeSql(
    query2Run,
    queryArray.map(({ value }) => value)
  );
};
