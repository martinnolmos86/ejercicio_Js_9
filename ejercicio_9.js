const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [new winston.transports.File({ filename: "errors.log" })],
});

function throwError() {
  const errorMessage = "Este es un mensaje de error personalizado";
  throw new Error(errorMessage);
}

try {
  throwError();
} catch (error) {
  logger.error(error.message);
}
