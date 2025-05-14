
// books, bookPrice, bookAuthor, bookGenre

// pathhaaudaa parameter ie. in fn, paaudaa argument ie. bookModel(12,14)
const bookModel = (sequelize,DataTypes)=>{

    const Book= sequelize.define("book",{
        // columns in the table named book 
        bookName:{
            type: DataTypes.STRING,
        },
        bookPrice:{
            type: DataTypes.INTEGER
        },
        bookAuthor:{
            type: DataTypes.STRING,
            allowNull : false
        },
        bookGenre: {
            type: DataTypes.STRING,
            defaultValue: "Unknown"
        }
    })
    return Book
}

// bookModel(12,14)

module.exports= bookModel