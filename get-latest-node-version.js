module.exports = async function getLatestNodeVersion() {
  const res = await fetch("https://nodejs.org/dist/latest/SHASUMS256.txt");

  if (res.status !== 200) {
    throw new Error("Received error code " + res.status);
  }

  const body = await res.text();
  const firstLine = body.split("\n")[0];

  return /v(\d+\.\d+\.\d+)/.exec(firstLine)[1];
};
