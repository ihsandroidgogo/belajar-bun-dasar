import {describe,it,expect} from "bun:test";
import { User } from "../packages/user/user.ts";

describe("Testing User Package dari Workspace", () => {
    it("should create a new user with the correct name and age", () => {
        const user = new User("Ihsan", 25);
        expect(user.name).toBe("Ihsan");
    });
});