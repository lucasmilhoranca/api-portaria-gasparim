import { describe, it, expect } from "vitest";
import { loginService, generateToken } from "../auth.service.js";

describe("Auth Service", () => {
    it("Deve retornar um token", async () => {
        
        const token = generateToken("6584752bbf49efacfa019671");

        expect(typeof token).toBe("string");
    });
});