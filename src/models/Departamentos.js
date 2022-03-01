export default (sequelize, DataTypes) => {
  return sequelize.define(
    "Departamentos",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Departamentos",
      schema: "dbo",
      timestamps: false,
      indexes: [
        {
          name: "PK_DEPARTAMENTOS",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
