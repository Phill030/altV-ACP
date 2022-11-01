import dotenv from 'dotenv';

dotenv.config();

const { AUTH_SECRET_TOKEN, PORT } = process.env;

if(!AUTH_SECRET_TOKEN || !PORT ) {
    throw new Error('Missing environment variables. Please check .env file.');
}

export default {
    AUTH_SECRET_TOKEN,
    PORT,
};