import { BaseService } from "./BaseService";

export class AuthService extends BaseService {
  static BASE_URL = "/test";

  static async login(data) {
    const result = await this.post("/login.json", data);
    return result.data;
  }

  static async info() {
    const result = await this.get("/info.json", data);
    return result.data;
  }
}
