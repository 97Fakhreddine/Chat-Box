module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'chatbox',
  entities: ['src/**/**.entity{.ts,.js}'],
  synchronize: true,
};
