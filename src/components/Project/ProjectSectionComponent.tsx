import { Flex } from "@chakra-ui/react";
import ProjectCardComponent from "./ProjectCardComponent";
import { useEffect, useState } from "react";
import dataFetcher from "@/services/dataFetcher";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<GithubRepoResponse[]>([]);
  useEffect(() => {
    dataFetcher.fetchProjects().then(p => setProjects(p.slice(0, 3)))
  }, [])
  if (projects.length == 0 || !projects) {
    return <h1>Loading...</h1>
  }
  return (
    <Flex width={'full'} gap={5} direction={"column"}>
      {projects.map(x => (
        <ProjectCardComponent project={x} key={x.id} />
      ))}
    </Flex>
  )
}
