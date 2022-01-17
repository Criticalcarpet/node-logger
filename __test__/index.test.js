import Logger from "../src/index.js";

const logger = new Logger("test", true, true);
logger.error("error");
logger.info("info");
logger.warn("warn");
logger.success("success");
