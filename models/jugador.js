module.exports = (sequelize, DataTypes) => {

    const Jugador = sequelize.define('jugador', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: DataTypes.STRING(150),
      apellido: DataTypes.STRING(100),
      fechanacimeinto:DataTypes.DATE,
      documento: DataTypes.STRING(8),
      genero:DataTypes.STRING(50),
      imagen:DataTypes.STRING(200)
    },
    {
      freezeTableName: true,
      timestamps: false
    });
    
    Jugador.associate = (models) => {
      Jugador.belongsTo(models.cancha);
    };
  
  
    return Jugador;
  }
  