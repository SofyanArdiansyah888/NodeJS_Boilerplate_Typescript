import {createLogger, format, transports} from "winston";

export const logger = createLogger({
    level: "info",
    transports: [
        new transports.Console(),
        new transports.File({filename: "logs/error.log", format: format.combine(format.json())}),
    ],
    format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({timestamp, level, message}) => {
            return `[${timestamp}] ${level}: ${message}`;
        })
    ),
});