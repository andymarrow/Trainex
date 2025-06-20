import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { FRONTEND_URL, PORT } from "./constants/constants.js";
const app = express();

app.use(express.json());
app.use(cookieParser());

// app.use(passport.initialize());
// app.use(passport.session());

// Add this middleware before your routes
app.use(
	cors({
		origin: FRONTEND_URL, // Allow frontend to make requests to backend
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

export default app;
