import type { APIGatewayProxyEvent } from "aws-lambda"
import { describe, it, expect } from "@jest/globals"

import { handler } from "../src/get-all"

describe("get-all handler", () => {
  it("should return a 200 status with message 'hello everyone'", async () => {
    const event = {
      httpMethod: "GET",
    } as APIGatewayProxyEvent
    const result = await handler(event)
    const body = JSON.parse(result.body)

    expect(result.statusCode).toBe(200)
    expect(body.message).toBe("hello everyone!")
  })
})
