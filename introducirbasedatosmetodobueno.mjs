import readline from "readline";
import fs from "fs";
import Sequelize from "sequelize";

const sequelize = new Sequelize('app', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

const insertUsers = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    const file = readline.createInterface({
      input: fs.createReadStream('users.csv')
    });

    const users = [];

    file.on("line", async (line) => {
      users.push(line.split(','));
    });

    file.on("close", async () => {
      try {
        await sequelize.query('INSERT INTO users (name, email) VALUES ?', {
          replacements: [users],
          type: sequelize.QueryTypes.INSERT,
        });
        console.log('Inserted users successfully.');
      } catch (error) {
        console.error('Error inserting users:', error);
      }
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

insertUsers();
