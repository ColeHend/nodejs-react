import React from "react";
import express from "express";

import { readFileSync } from "fs";
import { App } from "../client/components/app";
import { renderToString } from "react-dom/server";
const app = express();
const PORT = 4000;

app.use(express.static("dist"));

app.get("/data", async (_req, res) => {
  res.json({});
});

app.get("/", async (_req, res) => {
  const index = readFileSync("public/index.html", "utf-8");
  const rendered = renderToString(<App />);

  // res.send(index.replace("{{rendered}}", rendered));
  res.send(index);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
