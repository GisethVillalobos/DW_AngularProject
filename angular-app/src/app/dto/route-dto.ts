import { AssignmentDTO } from "./assignment-dto";

export class RouteDTO {
    constructor(
        public idRoute: number | null,
        public code: string,
        public stations: Array<string>,
        public assignments: Set<AssignmentDTO> | null
    ) {}
}