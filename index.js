import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "Sabana", email: "sabana@gmail.com" },
    { id: 2, name: "Sabnoor", email: "sabana@gmail.com" },
    { id: 3, name: "Sabila", email: "sabana@gmail.com" },
]
app.get('/', (req, res) => {
    res.send('Users Management Server is Running')
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post api hitting');
    const newUSer = req.body;
    newUSer.id = users.length + 1;
    users.push(newUSer);
    res.send(newUSer);
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})