import { Assignment } from "./assignment.model";

export class Driver {
    idDriver!: number;
    name!: string;
    identification!: string;
    phone!: string;
    address!: string;
    assignments!: Set<Assignment>

}
