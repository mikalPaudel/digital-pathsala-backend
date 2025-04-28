// we write database connection code here

const {Sequelize,DataTypes} = require("sequelize")


const sequelize = new Sequelize("postgresql://postgres.jsakeazecmmsxijnjzfu:Mikal@Paudel@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated, connected!!")
})
.catch((err)=>{
    console.log("ERROR:"+err)
})

// Two ways to insert values inside objects
const info={
    name: "mikal",
    age: 23
}
// or we can also write
// const info={}
// info.name = "mikal"
// info.age = 23

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db