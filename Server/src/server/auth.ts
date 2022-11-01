import cors from 'cors';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import config from './config';
import { authenticateToken } from './api/validate';
import { login } from './api/login';

export class Authorization {
    public static startApp() {
      const app = express();

      const dirname = __dirname.replace('server', '');

      app.use(bodyParser.json());
      app.use(cors());
      app.use(express.urlencoded({ extended: true }));
      app.use(express.static(dirname + '/client/dist'));
      
      app.get('/*', function(req, res) {
        res.sendFile(path.join(dirname + '/client/dist/index.html'));
      })

      app.post("/api/auth/login?", async (req, res) => {
        await login(req, res);
      });

      app.post('/api/auth/check?', authenticateToken, (req, res) => {
        res.sendStatus(200);
      });
      
      app.listen(config.PORT, () => {
        console.log('[⚓] Server started on port ' + config.PORT);
      });
    }
}