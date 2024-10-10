import { Assignment } from "../model/assignment.model";

export class RouteDTO {
    constructor(
        public idRoute: number | null,
        public code: string,
        public stations: Array<string>,
        public assignments: Set<Assignment>
    ) {}
}
