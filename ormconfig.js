module.exports = {
  "name": "default",
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "entities": ["dist/**/**.entity{ .ts,.js}"],
  "synchronize": false, 
   "logging": true,

  "migrations": ["dist/src/migrations/*{.ts,.js}"],
  "migrationsTableName": "migrations_typeorm",
  "migrationsRun": true,
  "cli": {
    "migrationsDir": "src/migrations"
  }  
}
