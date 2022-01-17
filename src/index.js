import { createRequire } from 'module'
const require = createRequire(import.meta.url)
import supportsColor from 'supports-color';
import { format } from "date-fns";
const color = require('colors');

if (!supportsColor.stdout) {
    console.log('WARN : Your terminal does not support color, please use a different terminal.');
}

class Logger {
    constructor(header, flags, color) {
        this.header = header || "logger";
        this.flags = flags || false;
        this.color = color;
    }

    error(message) {
        const headerPartial = `[${this.header} - ${format(Date.now(), "hh:mm:ss aa")}] :`;
        const header = `${this.color ? color.grey(headerPartial) : headerPartial}`;
        const flag = `${this.flags ? this.color ? color.bgBrightRed(color.black("ERROR")) : "ERROR" : ""}`;
        const log = `${ this.color ? color.brightRed(message) : message }`;
        console.log(`${header} ${flag} | ${log}`);
    }
    info(message) {
        const headerPartial = `[${this.header} - ${format(Date.now(), "hh:mm:ss aa")}] :`;
        const header = `${this.color ? color.grey(headerPartial) : headerPartial}`;
        const flag = `${this.flags ? this.color ? color.bgBrightBlue(color.black("INFO")) : "INFO" : ""}`;
        const log = `${ this.color ? color.brightCyan(message) : message }`;
        console.log(`${header} ${flag} | ${log}`);
    }
    warn(message) {
        const headerPartial = `[${this.header} - ${format(Date.now(), "hh:mm:ss aa")}] :`;
        const header = `${this.color ? color.grey(headerPartial) : headerPartial}`;
        const flag = `${this.flags ? this.color ? color.bgBrightYellow(color.black("WARN")) : "WARN" : ""}`;
        const log = `${ this.color ? color.brightYellow(message) : message }`;
        console.log(`${header} ${flag} | ${log}`);
    }
    success(message) {
        const headerPartial = `[${this.header} - ${format(Date.now(), "hh:mm:ss aa")}] :`;
        const header = `${this.color ? color.grey(headerPartial) : headerPartial}`;
        const flag = `${this.flags ? this.color ? color.bgBrightGreen(color.black("SUCCESS")) : "SUCCESS" : ""}`;
        const log = `${ this.color ? color.brightGreen(message) : message }`;
        console.log(`${header} ${flag} | ${log}`);
    }
}

export default Logger;
