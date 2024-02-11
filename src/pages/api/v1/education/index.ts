import { dataServicesFactory } from "@/factories/dataServicesFactory";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { educationService } = dataServicesFactory();
  if (req.method === "GET" && req.query.id) {
    var response = await educationService.getEducationById(
      parseInt(req.query.id as string)
    );
    res.status(200).json(response);
    return;
  }

  if (req.method === "GET") {
    const educations = await educationService.getEducations();
    res.status(200).json(educations);
    return;
  }

  if (req.method === "POST") {
    res.status(201).json({ message: "Data created" });
    return;
  }
}
