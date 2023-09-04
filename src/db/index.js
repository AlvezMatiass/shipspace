import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('pruebacinco.db');

  export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS pruebacinco (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)',
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
  };

  export const insertDataUser = ({ localId, email, token }) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO pruebacinco (email, localId, token) VALUES (?,?,?)',
            [email, localId, token],
            (_, result) => resolve(result),
            (_, error) => reject(error)
        )
      });
    });
  
    return promise;
  };

  export const selectPlaces = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM pruebacinco',
          [],
          (_, result) => {
            const userinfodatamega = result?.rows._array;
            resolve(userinfodatamega);
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  
    return promise;
  };

  export const deleteSession = ({ localId }) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
            'DELETE FROM pruebacinco WHERE localId = ?',
            [localId],
            (_, result) => resolve(result),
            (_, error) => reject(error)
        )
      });
    });
  
    return promise;
  };