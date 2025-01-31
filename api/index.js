const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Ensure JSON responses

app.get("/", (req, res) => {
    res.json({
        email: "your-email@example.com",
        current_datetime: new Date().toISOString(), // ISO 8601 format
        github_url: "https://github.com/yourusername/your-repo"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

