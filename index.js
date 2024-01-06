const app=require('./middlewares/middlewares')
const Dbconnect = require('./database/db')
Dbconnect()

app.get('/',(req,res)=>{
    res.send('hello app')
})


app.listen(process.env.PORT, () => {
    console.log("server running on port 5000")
})
