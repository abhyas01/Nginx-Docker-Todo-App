import dotenv from "dotenv";

dotenv.config();

const requireEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env variable ${name}`);
  }
  return value;
};

const requirePort = (name: string): number => {
  const raw = requireEnv(name);
  const port = Number(raw);

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`Invalid port for ${name}: "${raw}"`);
  }

  return port;
};

const PORT = requirePort("PORT");

const DB_HOST = requireEnv("DB_HOST");
const DB_PORT = requirePort("DB_PORT");
const DB_USER = requireEnv("DB_USER");
const DB_PASSWORD = requireEnv("DB_PASSWORD");
const DB_NAME = requireEnv("DB_NAME");

export { PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME };
