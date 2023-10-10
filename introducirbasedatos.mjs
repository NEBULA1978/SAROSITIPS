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

    file.on("line", async (line) => {
      const values = line.split(',');
      try {
        await sequelize.query('INSERT INTO users (name, email) VALUES (?, ?)', {
          replacements: [values[0], values[1]]
        });
        console.log(`Inserted user: ${values[0]}, ${values[1]}`);
      } catch (error) {
        console.error(`Error inserting user: ${values[0]}, ${values[1]}`);
      }
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

insertUsers();
