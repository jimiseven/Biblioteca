var mysql = require("mysql");
var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'',
    database : 'biblioteca' 
});
con.connect(
    (err)=>{
        if(!err){
            console.log('Conexion establecida');
        }
        else{
            console.log('Error conexion')
        }
    }
);
module.exports=con; 
