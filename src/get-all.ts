import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import pino from "pino"

const logger = pino({
  // Disable the default logging properties (pid, hostname), which overlap with AWS CloudWatch
  base: null,
  // Disable the timestamp in log messages, which overlap with AWS CloudWatch
  timestamp: false,
  formatters: {
    level(label) {
      // Return the log level named as e.g. 'info' rather than '30'
      return { level: label }
    },
  },
})

export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  logger.info({ event }, "Event")

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello everyone!",
    }),
  }
}
