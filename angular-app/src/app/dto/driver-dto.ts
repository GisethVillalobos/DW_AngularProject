import { Assignment } from "../model/assignment.model";

export class DriverDTO {
    constructor(
        public idDriver: number | null,
        public name: string,
        public identification: string,
        public phone: string,
        public address: string,
        public assignments: Set<Assignment>
    ) {}
}
