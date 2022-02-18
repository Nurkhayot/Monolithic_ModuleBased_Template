const { Pool } = require("pg");
const { DATABASE } = require("../../config/config");

const pool = new Pool(DATABASE);

pool.connect((err, c) => {
  if (!err) {
    c.on("notification", (payload) => {
      console.log(payload);
    });

    c.query("listen group_must_be_opened");
  } else {
    console.log(err);
  }
});

const fetch = async (SQL, ...params) => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(SQL, params);

    return rows;
  } finally {
    client.release();
  }
};

const fetchOne = async (SQL, ...params) => {
  const client = await pool.connect();

  try {
    const {
      rows: [row],
    } = await client.query(SQL, params);

    return row;
  } finally {
    client.release();
  }
};

module.exports.fetch = fetch;
module.exports.fetchOne = fetchOne;
