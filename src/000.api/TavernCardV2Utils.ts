import logger from "../200.data/logger"

class TavernCardV2Utils {

    fromFile(path: string) : any {
        logger.info(` fromFile: ${path}`);
    }

    fromData(data: Uint8Array) {
        logger.info("fromData")
    }

    fromURL(url: URL) {
        logger.info(`fromURL: ${url.toString()}`)
    }
}

export {
    TavernCardV2Utils
}