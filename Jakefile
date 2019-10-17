let azfunc_name = "func9283";

task("default", ["content"]);

task("content", ["html", "css", "version"]);

task(
  "html",
  ["node_modules"],
  () => {
    jex(eleventy());
  },
  { async: true }
);

task(
  "css",
  ["node_modules"],
  () => {
    jex(postcss());
  },
  { async: true }
);

task(
  "version",
  ["html"],
  () => {
    jex("git rev-parse HEAD > public_html/version");
  },
  { async: true }
);

task(
  "verify",
  () => {
    jex("node_modules/.bin/mocha -r ts-node/register verify/**/*.ts");
  },
  { async: true }
);

task(
  "serve",
  () => {
    jex(postcss() + " -w");
    jex(eleventy() + " --serve");
  },
  { async: true }
);

task("clean", () => {
  jake.rmRf("public_html");
});

function eleventy() {
  return "node_modules/.bin/eleventy --config=eleventy.js";
}

function postcss() {
  return "node_modules/.bin/postcss --config style -o public_html/style.css style/main.css";
}

function jex(cmd) {
  console.log("> " + cmd);
  jake.exec(cmd, { printStdout: true, printStderr: true }, () => {
    complete();
  });
}

task("node_modules", ["node_modules/.bin/tsc"]);

file(
  "node_modules/.bin/tsc",
  () => {
    jex("npm install");
  },
  { async: true }
);
