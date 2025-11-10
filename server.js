const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8000;

// ✅ Root Route → Login ya Dashboard
app.get("/", (req, res) => {
  const isLoggedIn = false; // TODO: session check lagao
  if (isLoggedIn) {
    res.sendFile(path.join(__dirname, "Common", "Dashboard.html"));
  } else {
    res.sendFile(path.join(__dirname, "Common", "logined.html"));
  }
});

// ✅ Index Route
app.get("/index", (req, res) => {
  const indexPath = path.join(__dirname, "Common", "index.html");
  fs.existsSync(indexPath)
    ? res.sendFile(indexPath)
    : res.status(404).send("Index page not found");
});

// ✅ Dashboard Route
// ✅ Dashboard Route
app.get("/Common/Dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "Common", "Dashboard.html"));
});
// /Common/markets
// ✅ Markets Route
app.get("/Common/markets", (req, res) => {
  res.sendFile(path.join(__dirname, "Common", "markets.html"));
});
// /common/profile
// ✅ Profile Route
app.get("/Common/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "Common", "profile.html"));
});
app.get("/Accounts/Chart", (req, res) => {
  res.sendFile(path.join(__dirname, "Accounts", "Chart.html"));
});

app.get("/Reports/BookDetail", (req, res) => {
  res.sendFile(path.join(__dirname, "Reports", "BookDetail.html"));
});

app.get("/Markets/Liables", (req, res) => {
  res.sendFile(path.join(__dirname, "Markets", "Liables.html"));
});
app.get("/Markets/Liables", (req, res) => {
  res.sendFile(path.join(__dirname, "Markets", "Liables.html"));
});
app.get("/Markets/BetLocker", (req, res) => {
  res.sendFile(path.join(__dirname, "Markets", "BetLocker.html"));
});

app.get("/Markets/Games", (req, res) => {
  res.sendFile(path.join(__dirname, "Markets", "Games.html"));
});
app.get("/Markets/WorldCasino", (req, res) => {
  res.sendFile(path.join(__dirname, "Markets", "WorldCasino.html"));
});
app.get("/Markets/ExGames", (req, res) => {
  res.sendFile(path.join(__dirname, "Markets", "ExGames.html"));
});

app.get("/Reports/Detail2", (req, res) => {
  res.sendFile(path.join(__dirname, "Reports", "Detail2.html"));
});
app.get("/Reports/DailyPl", (req, res) => {
  res.sendFile(path.join(__dirname, "Reports", "DailyPl.html"));
});
app.get("/Reports/Daily", (req, res) => {
  res.sendFile(path.join(__dirname, "Reports", "Daily.html"));
});
app.get("/Reports/FinalSheet", (req, res) => {
  res.sendFile(path.join(__dirname, "Reports", "FinalSheet.html"));
});
app.get("/Reports/Commission", (req, res) => {
  res.sendFile(path.join(__dirname, "Reports", "Commission.html"));
});
app.get("/customer/wallet", (req, res) => {
  res.sendFile(path.join(__dirname, "Customer", "wallet.html"));
});
app.get("/customer/Ledger", (req, res) => {
  res.sendFile(path.join(__dirname, "Customer", "Ledger.html"));
});
app.get("/Common/Result", (req, res) => {
  res.sendFile(path.join(__dirname, "Common", "Result.html"));
});
app.get("/customer/ProfitLoss", (req, res) => {
  res.sendFile(path.join(__dirname, "Customer", "ProfitLoss.html"));
});
app.get("/customer/Bets", (req, res) => {
  res.sendFile(path.join(__dirname, "Customer", "Bets.html"));
});
app.get("/customer/Profile", (req, res) => {
  res.sendFile(path.join(__dirname, "Customer", "Profile.html"));
});
// /users/Create
app.get("/Users/Create", (req, res) => {
  res.sendFile(path.join(__dirname, "Users", "Create.html"));
});
// ✅ Superadmin Route
app.get("/superadmin_login", (req, res) => {
  const superAdminPath = path.join(__dirname, "Common", "Superadmin.html");
  fs.existsSync(superAdminPath)
    ? res.sendFile(superAdminPath)
    : res.status(404).send("Superadmin not found");
});

// ✅ Signup Route
app.get("/signup", (req, res) => {
  const signupPath = path.join(__dirname, "Common", "signup.html");
  fs.existsSync(signupPath)
    ? res.sendFile(signupPath)
    : res.status(404).send("Signup page not found");
});

// ✅ Static files (CSS, JS, Images) sirf "Common" ke liye
// app.use(express.static(__dirname));
// ✅ Static files setup
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use("/lib", express.static(path.join(__dirname, "lib")));
app.use("/img", express.static(path.join(__dirname, "img")));
app.use("/fonts", express.static(path.join(__dirname, "fonts")));
app.use("/markets", express.static(path.join(__dirname, "markets")));
app.use("/Accounts", express.static(path.join(__dirname, "Accounts")));
app.use("/Reports", express.static(path.join(__dirname, "Reports")));
app.use("/webfonts", express.static(path.join(__dirname, "webfonts")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/Customer", express.static(path.join(__dirname, "Customer")));
app.use("/Users", express.static(path.join(__dirname, "Users")));









app.use("/Common", express.static(path.join(__dirname, "Common")));

// ❌ .html direct access block karna
app.get("/*.html", (req, res) => {
  res.status(404).send("Page not found");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Frontend running at http://localhost:${PORT}`);
});
