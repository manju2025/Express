const {Pool}=require("pg")
//function to connect database
function getConnection()
{
    const pool=new Pool({
        user:"postgres",
        host:"127.0.0.1",
        database:"Netskill_proj",
        password:"manju123",
        port:5432
        })
        pool.connect().then(e=>console.log("datbase is connected"))
        return pool
}
module.exports =
{
    getConnection
}