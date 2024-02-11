import { dataServicesFactory } from "@/factories/dataServicesFactory";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { skillService } = dataServicesFactory();
  if (req.method === "GET" && req.query.id) {
    var response = await skillService.getSkillById(
      parseInt(req.query.id as string)
    );
    res.status(200).json(response);
    return;
  }

  if (req.method === "GET") {
    const skills = await skillService.getSkills();
    res.status(200).json(skills);
    return;
  }

  if (req.method === "POST") {
    res.status(201).json({ message: "Data created" });
    return;
  }
}
