import 'dotenv/config';
import https from 'https';
import http from 'http';
import fs from 'fs';
import { createConnection } from 'typeorm';
import app from './app';
import ConnectionOptions from './libs/ormConfig';

const _bootStrap = async () => {
  try {
    await createConnection(ConnectionOptions);

    const configurations = {
      production: { ssl: true, port: 443, hostname: 'paysys.shop' },
      development: { ssl: false, port: 4000, hostname: 'localhost' },
    };
    const environment = process.env.NODE_ENV || 'production';
    const config = configurations[environment];

    let httpServer;
    let httpsServer;

    if (config.ssl) {
      httpServer = http.createServer(app.callback());
      httpsServer = https.createServer(
        {
          key: fs.readFileSync(`${process.env.SSL_KEY}`),
          cert: fs.readFileSync(`${process.env.SSL_CERT}`),
        },
        app.callback()
      );

      httpServer.listen(80);
      httpsServer.listen(config.port, () => {
        console.log(`> Paysys server on https://${config.hostname}:${config.port}`);
      });
    } else {
      httpServer = http.createServer(app.callback());

      httpServer.listen(config.port, () => {
        console.log(`> Paysys dev server on http://${config.hostname}:${config.port}`);
      });
    }
  } catch (err) {
    console.error(err);
  }
};

_bootStrap();
