import { api } from "../libs/axios";
import { IProject } from "@/types/IProject";

type getProjectsType = {
    filter: "ecomp" | "bcc" | "all"
}

export async function getProjects({ filter }: getProjectsType) {
    const { data } = await api.get("projects", {
        params: {
            filter,
        }
    })

    return data as IProject[]
}