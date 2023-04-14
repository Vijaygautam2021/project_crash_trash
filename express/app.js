const express =require("express")
const path =require("path");
const app = express();
const port=80;
//for serving static files
app.use('/static',express.static('static'));

//set the template engine as pug
app.set('view engine','pug');

//set the view directory
app.set('views',path.join(_dirname,'views'))

//our pug demo endpoint


app.get("/",(req,res)=>{
res.status(200).render('demo', { title: 'Hey vijay', message: 'Hello there and thanks for telling me !'
}
);
app.get("/about",(req,res)=>{
    res.send("this is a about page of my first express app with vijay");
    }
    );
app.post("/about",(req,res)=>{
res.send("this is a post request about page of my first express app with vijay");
}
);
app.get("/this",(req,res)=>{
res.status(404).send("this page is not found");
}
);

app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
})