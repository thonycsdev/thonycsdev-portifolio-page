import { Projects } from "../../../infra/data/skills";

export interface IProjectServices {
  getProject: () => Promise<Projects>;
}
