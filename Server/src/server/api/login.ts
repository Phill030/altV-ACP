import Database from "@stuyk/ezmongodb";
import { Collections } from "../../shared/enums/Collections";
import { User } from "../../shared/interfaces/iUser";
import jwt from "jsonwebtoken";
import config from "../config";
import * as bcrypt from "bcrypt";

export async function login(req: any, res: any) {
    const { username, password } = req.body;

    const userDb = await Database.fetchAllData<User>(Collections.USERS);
    // const encryptedPw = await bcrypt.hash(password, 10)
    const exists = userDb.filter(user => user.username === username && user.password === password)   

    if(exists.length <= 0)
      return res.sendStatus(401);

    const accessToken = jwt.sign({
      username,
      password,
    }, config.AUTH_SECRET_TOKEN, {
      algorithm: 'HS512',
      expiresIn: '24h'
    });

    res.send({ accessToken });
}