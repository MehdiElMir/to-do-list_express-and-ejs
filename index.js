import express from "express"
import bodyParser from "body-parser";


const app = express();
const port = 3000;

const tasks = [];
const work_tasks=[];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("index.ejs",{tasks:tasks});
});

app.get("/Work-List", (req, res)=>{
    res.render("work.ejs",{ work_tasks : work_tasks});
});

app.post("/shopping_submit", (req, res)=>{
    let task = req.body["new-task"];
    tasks.push(task);
    res.render("index.ejs",{
        tasks : tasks
    });
});

app.post("/work_submit", (req, res)=>{
    let task = req.body["new-task"];
    work_tasks.push(task);
    res.render("work.ejs",{
        work_tasks : work_tasks
    });
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`);
});