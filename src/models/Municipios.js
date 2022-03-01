export default (sequelize, DataTypes) => {
  return sequelize.define(
    "Municipios",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Departamento_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Departamentos",
          key: "Id",
        },
      },
      Nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Municipios",
      schema: "dbo",
      timestamps: false,
      indexes: [
        {
          name: "PK_MUNICIPIOS",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
