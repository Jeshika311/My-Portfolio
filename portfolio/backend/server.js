import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();
const app = express();
connectDB();

// const corsOptions = {
//   origin: "https://my-portfolio-jeshika311s-projects.vercel.app",
//   methods: ["GET", "POST", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: false
// };

// app.use(cors(corsOptions));

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (origin.endsWith(".vercel.app") || origin === "http://localhost:5173") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/api/contact", messageRoutes);

app.use((req,res,mext) => {
  res.status(404).json({message : "Route Not Found"});
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({message : "Something went wrong!"});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
  console.log(`Server running on port http://localhost:${PORT}`));                                                                                                                                                                                                                                                                                               