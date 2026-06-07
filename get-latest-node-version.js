module.exports = async function getLatestNodeVersion({
  fetch = globalThis.fetch,
} = {}) {
  const res = await fetch("https://nodejs.org/download/release/index.tab");
  if (res.status !== 200) {
    throw new Error("Received error code " + res.status);
  }

  const body = await res.text();

  const lines = body.split("\n", 2);

  const fields = lines[0].split("\t");

  const resultRow = lines[1].split("\t");
  const rawVersion = resultRow[fields.indexOf("version")];
  return rawVersion.replace(/^v/, "");
};
