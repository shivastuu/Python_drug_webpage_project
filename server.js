const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

// Initializing app and database
const app = express();
const PORT = 3000;
const db = new sqlite3.Database("drug_data.db");

// Middleware
app.use(cors());
app.use(express.json());

// Route: Searching for a drug
app.get("/search", (req, res) => {
    const drugName = req.query.name;
    if (!drugName) {
        return res.status(400).json({ error: "Drug name is required" });
    }

    const query = `SELECT * FROM drugs WHERE Drug LIKE ?`;
    db.all(query, [`%${drugName}%`], (err, rows) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Internal server error" });
        }

        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.status(404).json({ error: "No matching drugs found" });
        }
    });
});

// Route: Fetching unique drug count
app.get("/unique-count", (req, res) => {
    const query = `SELECT COUNT(DISTINCT Drug) as uniqueDrugCount FROM drugs`;
    db.get(query, (err, row) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        res.json(row);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
