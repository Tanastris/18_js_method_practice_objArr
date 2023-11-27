"use strict";
console.log("pr1.js file was loaded");

const nowObj = new Date();
console.log("nowObj ===", nowObj);
console.log("+nowObj ===", +nowObj);
console.log("nowObj ===", nowObj.getFullYear());
console.log("nowObj ===", nowObj.getMonth() + 1);
console.log("nowObj ===", nowObj.getDate());
console.log("nowObj ===", nowObj.toISOString());

// date.toLocaleStyring ()
const niceDate = nowObj.toLocaleString("lt-LT", { dateStyle: "full" });
const niceTime = nowObj.toLocaleString("lt-LT", { timeStyle: "full" });
console.log("niceDate ===", niceDate);
console.log("niceTime ===", niceTime);

// patalpinti data i h2
const dateH2 = document.getElementById("date");
console.log("dateH2 ===", dateH2);
dateH2.textContent = niceDate;

function tick() {
  const timeH2 = document.getElementById("time");
  console.log("timeH2 ===", timeH2);
  timeH2.textContent = niceTime;
}

tick();
