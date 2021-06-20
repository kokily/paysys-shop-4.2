import 'dotenv/config';
import { createConnection } from 'typeorm';
import app from './app';
import ConnectionOptions from './libs/ormConfig';

const _bootStrap = async () => {
  try {
    await createConnection(ConnectionOptions);
    await app.listen(4000, () => {
      console.log('http://localhost:4000/graphql');
    });
  } catch (err) {
    console.error(err);
  }
};

_bootStrap();
