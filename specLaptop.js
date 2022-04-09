const fs = require("fs");
const os = require("os");

function detailLaptop(data) {
  fs.writeFileSync("./laptop.json", JSON.stringify(data));
}

detailLaptop({
  cpu_architecture: os.arch(),
  user_info: os.userInfo(),
  type: os.type(),
  platform: os.platform(),
});
