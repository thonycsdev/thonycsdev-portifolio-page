import { Projects } from "@/data/skills";

export interface IProjectServices {
  getProject: () => Promise<Projects>;
}
