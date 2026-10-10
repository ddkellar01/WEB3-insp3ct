// Telemetry and Structured Diagnostic Logger
export const Logger = {
  info(tag, message, data = {}) {
    console.log(`%c[WEB3-INSP3CT] [INFO] [${tag}] ${message}`, 'color: #4ec9b0;', data);
  },
  error(tag, error, data = {}) {
    console.error(`%c[WEB3-INSP3ct] [ERROR] [${tag}]`, 'color: #f14c4c;', error, data);
  }
};
