// Node.js (CommonJS)
const fs = require("fs");
const path = require("path");

const dist = path.resolve(__dirname, "..", "dist");
const notFoundDir = path.join(dist, "404");
const notFoundIndex = path.join(notFoundDir, "index.html");
const notFoundHtml = path.join(dist, "404.html");

if (fs.existsSync(notFoundIndex)) {
    fs.copyFileSync(notFoundIndex, notFoundHtml);
    console.log("✔ 404.html created from /404/index.html");
} else {
    console.warn("ℹ /404/index.html not found. Ensure '/404' is in reactSnap.include.");
}
