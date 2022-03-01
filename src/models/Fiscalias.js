export default (sequelize, DataTypes) => {
  return sequelize.define(
    "Fiscalias",
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
      Municipio_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Municipios",
          key: "Id",
        },
      },
      Nombre: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      Descripcion: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      Telefono: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Fiscalias",
      schema: "dbo",
      timestamps: false,
      indexes: [
        {
          name: "PK_FISCALIAS",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
