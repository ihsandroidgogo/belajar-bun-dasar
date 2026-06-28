import {describe,it,expect} from "bun:test";
import { sayHello } from "../src/hello";

describe("Bun Test Runner", () => {
    it("support untuk unit test", () => {
        const response = sayHello("Ihsan");
        expect(response).toBe("Hello, Ihsan!");
    });
});