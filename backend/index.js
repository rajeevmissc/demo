const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());

async function parsePDF(filePath) {
    const fileData = fs.readFileSync(filePath);
    const pdfData = await pdfParse(fileData);
    return pdfData.text;
}

async function parseDOCX(filePath) {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
}

app.post("/upload", upload.single("resume"), async (req, res) => {
    const file = req.file;
    if (!file) return res.status(400).send("No file uploaded");

    let text;
    const ext = path.extname(file.originalname).toLowerCase();

    try {
        if (ext === ".pdf") {
            text = await parsePDF(file.path);
        } else if (ext === ".docx") {
            text = await parseDOCX(file.path);
        } else {
            return res.status(400).send("Unsupported file type");
        }

        // Prepare data for Excel file
        const workbook = xlsx.utils.book_new();
        const worksheetData = [[text]];
        const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);
        xlsx.utils.book_append_sheet(workbook, worksheet, "Resume Text");

        const outputPath = path.join(__dirname, "parsed_resume.xlsx");
        xlsx.writeFile(workbook, outputPath);

        // Send file back to client
        res.download(outputPath, "parsed_resume.xlsx", () => {
            // Cleanup files
            fs.unlinkSync(file.path);
            fs.unlinkSync(outputPath);
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error parsing file");
    }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
