process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import "./config.js";
import { createRequire } from "module";
import _0x47c416, { join } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import _0x3dce2c from "./lib/tempclear.js";
import _0x456c48 from "axios";
import { platform } from "process";
import _0x3c9962 from "dotenv";
global.__filename = function filename(_0x574755 = import.meta.url, _0xbd0800 = platform !== "win32") {
  if (_0xbd0800) {
    if (/file:\/\/\//.test(_0x574755)) {
      return fileURLToPath(_0x574755);
    } else {
      return _0x574755;
    }
  } else {
    return pathToFileURL(_0x574755).toString();
  }
};
global.__dirname = function dirname(_0x186871) {
  return _0x47c416.dirname(global.__filename(_0x186871, true));
};
global.__require = function require(_0x23639e = import.meta.url) {
  return createRequire(_0x23639e);
};
global.gurubot = "https://www.guruapi.tech/api";
import * as _0x1a8e5f from "ws";
import _0x5d42f0 from "cfonts";
import { readdirSync, statSync, unlinkSync, existsSync, mkdirSync, readFileSync, rmSync, watch } from "fs";
import _0x3c914f from "./lib/makesession.js";
import _0x59c958 from "yargs";
import { promisify } from "util";
import { spawn } from "child_process";
import _0x304ebc from "pino";
import _0x60ba0c from "lodash";
import _0x9f710a from "chalk";
import _0x4e6927 from "syntax-error";
import { tmpdir } from "os";
import { format } from "util";
import { Boom } from "@hapi/boom";
import _0x12fee7 from "pino";
import { makeWASocket, protoType, serialize } from "./lib/simple.js";
import { Low, JSONFile } from "lowdb";
import { MongoDB } from "./lib/mongoDB.js";
import _0x1794b4 from "./lib/cloudDBAdapter.js";
import _0x48e9fe from "node-cache";
const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore,
  proto,
  delay,
  jidNormalizedUser,
  PHONENUMBER_MCC,
  Browsers
} = await (await import("@whiskeysockets/baileys")).default;
import _0x4ae870 from "readline";
import { parsePhoneNumber } from "libphonenumber-js";
import _0x151900 from "./lib/helper.js";
import _0x523aca from "emoji-regex";
_0x3c9962.config();
async function main() {
  const _0x54abeb = process.env.SESSION_ID;
  if (!_0x54abeb) {
    console.error("Environment variable not found.");
    return;
  }
  try {
    await _0x3c914f(_0x54abeb);
    console.log("processTxtAndSaveCredentials completed.");
  } catch (_0x24f737) {
    console.error("Error:", _0x24f737);
  }
}
main();
await delay(10000);
async function gandu() {
  try {
    const _0x49ff8d = readFileSync("package.json", "utf8");
    const _0x10ccc1 = JSON.parse(_0x49ff8d);
    const _0x17f6ab = _0x10ccc1.author && _0x10ccc1.author.name;
    if (!_0x17f6ab) {
      console.log("LOl");
      process.exit(1);
    }
    const _0x56b45c = Buffer.from("Z3VydQ==", "base64").toString();
    const _0x500b7b = Buffer.from("Q2hlYXAgQ29weSBPZiBHdXJ1IEJvdCBGb3VuZCAsIFBsZWFzZSBVc2UgdGhlIE9yaWdpbmFsIEd1cnUgQm90IEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0d1cnUzMjIvR1VSVS1CT1QK", "base64").toString();
    const _0x2e8ee3 = Buffer.from("U2VjdXJpdHkgY2hlY2sgcGFzc2VkLCBUaGFua3MgRm9yIHVzaW5nIEd1cnUgTXVsdGlEZXZpY2U=", "base64").toString();
    if (_0x17f6ab && _0x17f6ab.trim().toLowerCase() !== _0x56b45c.toLowerCase()) {
      console.log(_0x500b7b);
      process.exit(1);
    } else {
      console.log("" + _0x2e8ee3);
      console.log(_0x9f710a.bgBlack(_0x9f710a.redBright("initializing Asta Bot")));
    }
  } catch (_0x5b6505) {
    console.error("Error:", _0x5b6505);
  }
}
gandu();
const pairingCode = !!global.pairingNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const useQr = process.argv.includes("--qr");
const useStore = true;
const MAIN_LOGGER = _0x304ebc({
  timestamp: () => ",\"time\":\"" + new Date().toJSON() + "\""
});
const logger = MAIN_LOGGER.child({});
logger.level = "fatal";
const store = useStore ? makeInMemoryStore({
  logger: logger
}) : undefined;
store?.readFromFile("./session.json");
setInterval(() => {
  store?.writeToFile("./session.json");
}, 60000);
const msgRetryCounterCache = new _0x48e9fe();
const rl = _0x4ae870.createInterface({
  input: process.stdin,
  output: process.stdout
});
const question = _0x3f601d => new Promise(_0x4695d4 => rl.question(_0x3f601d, _0x4695d4));
const {
  CONNECTING
} = _0x1a8e5f;
const {
  chain
} = _0x60ba0c;
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;
protoType();
serialize();
global.API = (_0x129b69, _0x5abb6b = "/", _0x2ff3e5 = {}, _0x22b84f) => (_0x129b69 in global.APIs ? global.APIs[_0x129b69] : _0x129b69) + _0x5abb6b + (_0x2ff3e5 || _0x22b84f ? "?" + new URLSearchParams(Object.entries({
  ..._0x2ff3e5,
  ...(_0x22b84f ? {
    [_0x22b84f]: global.APIKeys[_0x129b69 in global.APIs ? global.APIs[_0x129b69] : _0x129b69]
  } : {})
})) : "");
global.timestamp = {
  start: new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x59c958(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp("^[" + (process.env.PREFIX || "*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + "]");
global.opts.db = process.env.DATABASE_URL;
global.db = new Low(/https?:\/\//.test(opts.db || "") ? new _0x1794b4(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? new MongoDB(opts.db) : new JSONFile((opts._[0] ? opts._[0] + "_" : "") + "database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x11db04 => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x11db04(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read().catch(console.error);
  global.db.READ = null;
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFolder = "session";
const {
  state,
  saveCreds
} = await useMultiFileAuthState(global.authFolder);
let {
  version,
  isLatest
} = await fetchLatestBaileysVersion();
const connectionOptions = {
  version: version,
  logger: _0x12fee7({
    level: "fatal"
  }),
  printQRInTerminal: !pairingCode,
  mobile: useMobile,
  browser: Browsers.ubuntu("CHROME"),
  auth: {
    creds: state.creds,
    keys: makeCacheableSignalKeyStore(state.keys, _0x12fee7().child({
      level: "fatal",
      stream: "store"
    }))
  },
  markOnlineOnConnect: false,
  generateHighQualityLinkPreview: true,
  getMessage: async _0x3850c4 => {
    let _0x3cffa6 = jidNormalizedUser(_0x3850c4.remoteJid);
    let _0x18c784 = await store.loadMessage(_0x3cffa6, _0x3850c4.id);
    return _0x18c784?.message || "";
  },
  msgRetryCounterCache: msgRetryCounterCache,
  defaultQueryTimeoutMs: undefined
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
store?.bind(conn.ev);
if (pairingCode && !conn.authState.creds.registered) {
  if (useMobile) {
    throw new Error("Cannot use pairing code with mobile api");
  }
  let phoneNumber;
  if (!!global.pairingNumber) {
    phoneNumber = global.pairingNumber.replace(/[^0-9]/g, "");
    if (!Object.keys(PHONENUMBER_MCC).some(_0x1a2c02 => phoneNumber.startsWith(_0x1a2c02))) {
      console.log(_0x9f710a.bgBlack(_0x9f710a.redBright("Start with your country's WhatsApp code, Example : 62xxx")));
      process.exit(0);
    }
  } else {
    phoneNumber = await question(_0x9f710a.bgBlack(_0x9f710a.greenBright("Please type your WhatsApp number : ")));
    phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    if (!Object.keys(PHONENUMBER_MCC).some(_0x3f6f20 => phoneNumber.startsWith(_0x3f6f20))) {
      console.log(_0x9f710a.bgBlack(_0x9f710a.redBright("Start with your country's WhatsApp code, Example : 62xxx")));
      phoneNumber = await question(_0x9f710a.bgBlack(_0x9f710a.greenBright("Please type your WhatsApp number : ")));
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
      rl.close();
    }
  }
  setTimeout(async () => {
    let _0x39edb5 = await conn.requestPairingCode(phoneNumber);
    _0x39edb5 = _0x39edb5?.match(/.{1,4}/g)?.join("-") || _0x39edb5;
    const _0x2d5a53 = _0x9f710a.bold.greenBright("Your Pairing Code:") + " " + _0x9f710a.bgGreenBright(_0x9f710a.black(_0x39edb5));
    console.log(_0x2d5a53);
  }, 3000);
}
if (useMobile && !conn.authState.creds.registered) {
  const {
    registration
  } = conn.authState.creds || {
    registration: {}
  };
  if (!registration.phoneNumber) {
    console.log("📨 " + _0x9f710a.redBright("Please type your WhatsApp number") + ":");
    let phoneNumber = await question("   " + _0x9f710a.cyan("- Number") + ": ");
    phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    if (!Object.keys(PHONENUMBER_MCC).some(_0x33844d => phoneNumber.startsWith(_0x33844d))) {
      console.log("💬 " + _0x9f710a.redBright("Start with your country's WhatsApp code, Example 62xxx") + ":");
      console.log("📨 " + _0x9f710a.redBright("Please type your WhatsApp number") + ":");
      phoneNumber = await question("   " + _0x9f710a.cyan("- Number") + ": ");
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    }
    registration.phoneNumber = "+" + phoneNumber;
  }
  const phoneNumber = parsePhoneNumber(registration.phoneNumber);
  if (!phoneNumber.isValid()) {
    conn.logger.error("\nInvalid phone number: " + registration.phoneNumber);
  }
  registration.phoneNumber = phoneNumber.format("E.164");
  registration.phoneNumberCountryCode = phoneNumber.countryCallingCode;
  registration.phoneNumberNationalNumber = phoneNumber.nationalNumber;
  const mcc = PHONENUMBER_MCC[phoneNumber.countryCallingCode];
  registration.phoneNumberMobileCountryCode = mcc;
  async function enterCode() {
    try {
      console.log("📨 " + _0x9f710a.redBright("Please Enter Your OTP Code") + ":");
      const _0x279a3c = await question("   " + _0x9f710a.cyan("- Code") + ": ");
      const _0x5c5458 = await conn.register(_0x279a3c.replace(/[^0-9]/g, "").trim().toLowerCase());
      console.log("💬 " + _0x9f710a.redBright("Successfully registered your phone number."));
      console.log(_0x5c5458);
      rl.close();
    } catch (_0x4fe64c) {
      conn.logger.error("\nFailed to register your phone number. Please try again.\n", _0x4fe64c);
      await askOTP();
    }
  }
  async function askOTP() {
    console.log("📨 " + _0x9f710a.redBright("What method do you want to use? \"sms\" or \"voice\""));
    let _0x27b7bc = await question("   " + _0x9f710a.cyan("- Method") + ": ");
    _0x27b7bc = _0x27b7bc.replace(/["']/g, "").trim().toLowerCase();
    if (_0x27b7bc !== "sms" && _0x27b7bc !== "voice") {
      return await askOTP();
    }
    registration.method = _0x27b7bc;
    try {
      await conn.requestRegistrationCode(registration);
      await enterCode();
    } catch (_0xd64738) {
      conn.logger.error("\nFailed to request registration code. Please try again.\n", _0xd64738);
      await askOTP();
    }
  }
  await askOTP();
}
conn.logger.info("\nWaiting For Login\n");
if (!opts.test) {
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) {
        await global.db.write();
      }
      if (opts.autocleartmp && (global.support || {}).find) {
        tmp = [os.tmpdir(), "tmp"];
        tmp.forEach(_0x52ed16 => cp.spawn("find", [_0x52ed16, "-amin", "3", "-type", "f", "-delete"]));
      }
    }, 30000);
  }
}
if (opts.server) {
  (await import("./server.js")).default(global.conn, PORT);
}
function runCleanup() {
  _0x3dce2c().then(() => {
    console.log("Temporary file cleanup completed.");
  }).catch(_0x3d5525 => {
    console.error("An error occurred during temporary file cleanup:", _0x3d5525);
  }).finally(() => {
    setTimeout(runCleanup, 120000);
  });
}
runCleanup();
function purgeSession() {
  let _0x130e67 = [];
  const _0x55e13f = readdirSync("./session");
  const _0x30e533 = _0x55e13f.filter(_0x446066 => {
    return _0x446066.startsWith("pre-key-");
  });
  _0x130e67 = [..._0x130e67, ..._0x30e533];
  _0x30e533.forEach(_0x2bb087 => {
    unlinkSync("./session/" + _0x2bb087);
  });
}
async function connectionUpdate(_0x3d3f17) {
  const {
    connection: _0x313273,
    lastDisconnect: _0x3448ad,
    isNewLogin: _0x26d9e1,
    qr: _0x168288
  } = _0x3d3f17;
  global.stopped = _0x313273;
  if (_0x26d9e1) {
    conn.isInit = true;
  }
  const _0x38a63a = _0x3448ad?.error?.output?.statusCode || _0x3448ad?.error?.output?.payload?.statusCode;
  if (_0x38a63a && _0x38a63a !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
    conn.logger.info(await global.reloadHandler(true).catch(console.error));
  }
  if (global.db.data == null) {
    loadDatabase();
  }
  if (!pairingCode && !useMobile && useQr && _0x168288 != 0 && _0x168288 != undefined) {
    conn.logger.info(_0x9f710a.yellow("\nLogging in...."));
  }
  if (_0x313273 === "open") {
    const {
      jid: _0x4724b2,
      name: _0x40fb29
    } = conn.user;
    let _0x573f9e = "Hai🤩" + _0x40fb29 + " Congrats you have successfully deployed Asta-Md\nJoin my support Group for any Query\n https://chat.whatsapp.com/JY4R2D22pbLIKBMQWyBaLg";
    let _0x2f0750 = conn.sendMessage(_0x4724b2, {
      text: _0x573f9e,
      mentions: [_0x4724b2]
    }, {
      quoted: null
    });
    conn.logger.info(_0x9f710a.yellow("\n🚩 R E A D Y"));
  }
  if (_0x313273 == "close") {
    conn.logger.error(_0x9f710a.yellow("\nconnection closed.... Trying to Restart"));
    process.send("reset");
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x5cd59c) {
  try {
    const _0x3dd72f = await import("./handler.js?update=" + Date.now()).catch(console.error);
    if (Object.keys(_0x3dd72f || {}).length) {
      handler = _0x3dd72f;
    }
  } catch (_0x1fa846) {
    console.error;
  }
  if (_0x5cd59c) {
    const _0x27a9d7 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      chats: _0x27a9d7
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("messages.update", conn.pollUpdate);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("presence.update", conn.presenceUpdate);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  const _0x54c124 = {
    welcome: "👋",
    bye: "👋",
    promote: "👤👑",
    demote: "👤🙅‍♂️",
    desc: "📝",
    subject: "📌",
    icon: "🖼️",
    revoke: "🔗",
    announceOn: "🔒",
    announceOff: "🔓",
    restrictOn: "🚫",
    restrictOff: "✅"
  };
  conn.welcome = _0x54c124.welcome + " Hello @user!\n\n🎉 *WELCOME* to the group @group!\n\n📜 Please read the *DESCRIPTION* @desc.";
  conn.bye = "👋 GOODBYE @user " + _0x54c124.bye + "\n\nSee you later!";
  conn.spromote = _0x54c124.promote + "*@user* has been promoted to an admin!";
  conn.sdemote = _0x54c124.demote + "*@user* is no longer an admin.";
  conn.sDesc = _0x54c124.desc + " The group description has been updated to:\n@desc";
  conn.sSubject = _0x54c124.subject + " The group title has been changed to:\n@group";
  conn.sIcon = _0x54c124.icon + " The group icon has been updated!";
  conn.sRevoke = _0x54c124.revoke + " The group link has been changed to:\n@revoke";
  conn.sAnnounceOn = _0x54c124.announceOn + " The group is now *CLOSED*!\nOnly admins can send messages.";
  conn.sAnnounceOff = _0x54c124.announceOff + " The group is now *OPEN*!\nAll participants can send messages.";
  conn.sRestrictOn = _0x54c124.restrictOn + " Edit Group Info has been restricted to admins only!";
  conn.sRestrictOff = _0x54c124.restrictOff + " Edit Group Info is now available to all participants!";
  conn.handler = handler.handler.bind(global.conn);
  conn.pollUpdate = handler.pollUpdate.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.presenceUpdate = handler.presenceUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn, true);
  const _0x51d78b = new Date();
  const _0x27167c = new Date(conn.ev);
  if (_0x51d78b >= _0x27167c) {
    const _0x491ee3 = Object.entries(conn.chats).filter(([_0x294372, _0x1faa20]) => !_0x294372.endsWith("@g.us") && _0x1faa20.isChats).map(_0x5f0225 => _0x5f0225[0]);
  } else {
    const _0x3899fa = Object.entries(conn.chats).filter(([_0x446af4, _0x3d6153]) => !_0x446af4.endsWith("@g.us") && _0x3d6153.isChats).map(_0x48192f => _0x48192f[0]);
  }
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("messages.update", conn.pollUpdate);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("presence.update", conn.presenceUpdate);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = _0x58559d => /\.js$/.test(_0x58559d);
global.plugins = {};
async function filesInit() {
  for (const _0x5e3d44 of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      const _0x8d1ed8 = global.__filename(join(pluginFolder, _0x5e3d44));
      const _0x545795 = await import(_0x8d1ed8);
      global.plugins[_0x5e3d44] = _0x545795.default || _0x545795;
    } catch (_0x2c1d09) {
      conn.logger.error(_0x2c1d09);
      delete global.plugins[_0x5e3d44];
    }
  }
}
filesInit().then(_0x153d6b => Object.keys(global.plugins)).catch(console.error);
global.reload = async (_0x608cd0, _0x248e40) => {
  if (pluginFilter(_0x248e40)) {
    const _0x5c5842 = global.__filename(join(pluginFolder, _0x248e40), true);
    if (_0x248e40 in global.plugins) {
      if (existsSync(_0x5c5842)) {
        conn.logger.info("\nUpdated plugin - '" + _0x248e40 + "'");
      } else {
        conn.logger.warn("\nDeleted plugin - '" + _0x248e40 + "'");
        return delete global.plugins[_0x248e40];
      }
    } else {
      conn.logger.info("\nNew plugin - '" + _0x248e40 + "'");
    }
    const _0x4140b = _0x4e6927(readFileSync(_0x5c5842), _0x248e40, {
      sourceType: "module",
      allowAwaitOutsideFunction: true
    });
    if (_0x4140b) {
      conn.logger.error("\nSyntax error while loading '" + _0x248e40 + "'\n" + format(_0x4140b));
    } else {
      try {
        const _0xa81d16 = await import(global.__filename(_0x5c5842) + "?update=" + Date.now());
        global.plugins[_0x248e40] = _0xa81d16.default || _0xa81d16;
      } catch (_0x2126da) {
        conn.logger.error("\nError require plugin '" + _0x248e40 + "\n" + format(_0x2126da) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x3a5464], [_0x474a1b]) => _0x3a5464.localeCompare(_0x474a1b)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  const _0x5f3acf = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", "-filter_complex", "color", "-frames:v", "1", "-f", "webp", "-"]), spawn("convert"), spawn("magick"), spawn("gm"), spawn("find", ["--version"])].map(_0x40e4c8 => {
    return Promise.race([new Promise(_0x2394d4 => {
      _0x40e4c8.on("close", _0x10348f => {
        _0x2394d4(_0x10348f !== 127);
      });
    }), new Promise(_0x419e3e => {
      _0x40e4c8.on("error", _0x5e15f => _0x419e3e(false));
    })]);
  }));
  const [_0x484f9b, _0x2c8e70, _0x36d5b0, _0x238257, _0x31cd61, _0x31cc06, _0x8cc39b] = _0x5f3acf;
  const _0x1e3920 = global.support = {
    ffmpeg: _0x484f9b,
    ffprobe: _0x2c8e70,
    ffmpegWebp: _0x36d5b0,
    convert: _0x238257,
    magick: _0x31cd61,
    gm: _0x31cc06,
    find: _0x8cc39b
  };
  Object.freeze(global.support);
}
const actions = [{
  func: purgeSession,
  message: "\nStored Sessions Cleared ✅"
}];
for (const action of actions) {
  setInterval(async () => {
    if (stopped === "close" || !conn || !conn.user) {
      return;
    }
    await action.func();
    console.log(_0x9f710a.cyanBright(action.message + "\n"));
  }, 600000);
}
_quickTest().catch(console.error);