// we write database connection code here


//Sequelize and Datatypes are inside sequlize and require is a kind of importing. 
// Sequelize is a class
const {Sequelize,DataTypes} = require("sequelize")

 
// new Sequelize creates object of class Sequelize. 
// sequelize is the object here not the same one as above sequelize.
const sequelize = new Sequelize("postgresql://postgres.jsakeazecmmsxijnjzfu:Mikal@Paudel@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")


sequelize.authenticate()
.then(()=>{
    console.log("Authenticated, connected!!")
})
.catch((err)=>{
    console.log("ERROR:"+err)
})

// Two ways to insert values inside objects (here info is the object)
const info={
    name: "mikal",
    age: 23
}
// or we can also write
// const info={}
// info.name = "mikal"
// info.age = 23

// here db is object and db.Sequelize and db.sequelize is the value we want to put inside db.
const db = {}
// sequelize:object  and Sequelize is class but not in db.Sequelize and db.sequelize
db.Sequelize = Sequelize
db.sequelize = sequelize

// dont add this in variable but the db works as var here or any object but not variable
// this is code to import and trigger table named book.model.js
db.books= require("./models/books.model")(sequelize, DataTypes)

// migration code here. 
// dont do force true because it removes all data from table 
// so do alter:true but only do it when we have to migrate table or alter table 
 sequelize.sync({alter: false}).then(()=>{
    console.log("Successfully migrated")
 })

//export certain object to use in other files
module.exports = db