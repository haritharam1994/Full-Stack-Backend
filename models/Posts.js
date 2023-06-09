module.exports=(sequelize,DataTypes)=>{
    const Posts=sequelize.define("Posts",{
        title:{
            type:DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      
        });
        Posts.associate=(models)=>{
          Posts.hasMany(models.Comments,{
            onDelete:"cascade",
          })
        }
   return Posts; 
    
}