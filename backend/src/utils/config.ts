import "dotenv/config";
import { Pool } from "pg";

const PORT = process.env.PORT || 4000;
const connectionString = process.env.CONNECTION_STRING;

export const pool = new Pool({
  connectionString
});

export default {
  PORT
};
