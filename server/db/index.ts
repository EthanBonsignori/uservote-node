import { Pool } from "pg";

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "admin",
  password: "password",
  database: "uservotedb",
});

export const query = async (text: string, params) => {
  const start = Date.now();
  const response = await pool.query(text, params);
  const duration = Date.now() - start;

  console.log("Executed query:", { text, duration, rows: response.rowCount });

  return response;
};

export const getClient = async () => {
  const client = await pool.connect();
  let lastQuery: any[] = [];
  const query = client.query;
  const release = client.release;

  // set a timeout of 5 seconds, after which we will log this client's last query
  const timeout = setTimeout(() => {
    console.error("A client has been checked out for more than 5 seconds!");
    console.error(`The last executed query on this client was: ${lastQuery}`);
  }, 5000);

  // monkey patch the query method to keep track of the last query executed
  client.query = (...args) => {
    lastQuery = args;
    return query.apply(client, args);
  };

  client.release = () => {
    // clear our timeout
    clearTimeout(timeout);
    // set the methods back to their old un-monkey-patched version
    client.query = query;
    client.release = release;
    return release.apply(client);
  };

  return client;
};
