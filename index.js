const express = require("express");
const app = express();

app.get("/lock", (req, res) => {
  res.json({ message: "Kredit changer lort mahi x lort xiam 😈🤙" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
