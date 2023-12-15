const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://data_base_08532_user:bZUmNb0kfSmNvXMnM3HmVgG7TJDYeN9f@dpg-clu2f3i1hbls73e8mskg-a.frankfurt-postgres.render.com/data_base_08532', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
