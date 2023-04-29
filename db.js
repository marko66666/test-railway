const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:DXlv4I9ZJzaWC05w6BqF@containers-us-west-118.railway.app:7461/railway",
});

module.exports = pool;
