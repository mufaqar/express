import express from 'express';


const app = express();
const port = 5000

// middlewares
app.use(
  cors({
    origin: ["https://express12.vercel.app"],
    methods: ["GET","PUT","POST","DELETE"],
    credentials: true,
  })
);
app.use(express.json());

ConnectDB();

mongoose.connect("mongodb+srv://rabbaniusama1:dobaranhi2@cluster0.2bb7j0k.mongodb.net/mernstack");
app.use(morgan('dev'));

Routes

app.use('/api/vi/auth', router);
app.use('/api/vi/category', categoryroutes);
app.use('/api/vi/product', productroutes);

app.get('/', (req, res) => {
  res.send('<h1>Welcome To Mern Stack Project 5000</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(
//     `server running on ${process.env.MODE} mode on port ${PORT}`.bgCyan.white
//   );
// });

// nodemon running command  {npm run server}
