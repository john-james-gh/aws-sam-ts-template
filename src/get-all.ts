import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

export const handler = (event: APIGatewayProxyEvent): APIGatewayProxyResult => {
  console.info("event", event)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello everyone!",
    }),
  }
}
