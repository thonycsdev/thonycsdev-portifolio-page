import { dataServicesFactory } from "@/factories/dataServicesFactory";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { experienceService } = dataServicesFactory();
  if (req.method === "GET" && req.query.id) {
    var response = await experienceService.getExperienceById(
      parseInt(req.query.id as string)
    );
    res.status(200).json(response);
    return;
  }

  if (req.method === "GET") {
    const experiences = await experienceService.getExperiences();
    res.status(200).json(experiences);
    return;
  }

  if (req.method === "POST") {
    res.status(201).json({ message: "Data created" });
    return;
  }
}
