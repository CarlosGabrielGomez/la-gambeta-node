module.exports = (sequelize, DataTypes) => {

    const Cancha = sequelize.define('cancha', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: DataTypes.STRING(150),
      direccion: DataTypes.STRING(150),
      partido:DataTypes.STRING(150),
      localidad:DataTypes.STRING(150),
      imagen:DataTypes.STRING(200)
    },
    {
      freezeTableName: true,
      timestamps: false
    });
  
    
    
  
    Cancha.associate = (models) => {
      Cancha.hasMany(models.jugador);
    };

  
  
  
    return Cancha;
  }
  