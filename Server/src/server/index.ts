import Database from "@stuyk/ezmongodb";
import { Collections } from "../shared/enums/Collections";
import { Authorization } from "./auth";

class Startup {
  public static async connect() {
    const url = 'mongodb://0.0.0.0:27017';
    const dbName = 'altAdmin';
    const collections = Object.values(Collections);

    await Database.init(url, dbName, collections)
        .catch(() => {
            console.log("Failed to initialize database");
            process.exit(1);
        })
    .then((r) => {
        if(r) {
            console.log(`[⚓] Database connection established`);
            return;
        }
        console.log("Failed to initialize database");
        process.exit(1);
    })

    await this.startServer();
  }

  public static async startServer() {
    Authorization.startApp();
  }
}

Startup.connect();