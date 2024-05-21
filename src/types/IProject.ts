import { IVote } from "./IVote";

export type IProject = {
    id: string,
    name: string,
    team: string[],
    description: string,
    votes?: IVote[] | IVote["id"][]
    totalVotes?: number,
    uniqueVotes?: number,
    status?: boolean
    links: {
        github: string,
        youtube: {
            en: string,
            pt: string
        },
        banner?: string
    },
    course: CourseEnum,
    logoUrl?: string
}

export enum CourseEnum {
    BCC = 'bcc',
    ECOMP = 'ecomp'
}