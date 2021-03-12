import { BaseService } from "./BaseService";

export class GraphService extends BaseService {
  static BASE_URL = "/test";

  static async linearGraph() {
    const result = await this.get("/graph.json");
    return result.data;
  }

  static async donut() {
    const result = await this.get("/donut.json");
    return result.data;
  }
}
