import { AssignmentDTO } from "./assignment-dto";

export class DriverDTO {
    constructor(
        public idDriver: number | null,
        public name: string,
        public identification: string,
        public phone: string,
        public address: string,
        public assignments: Set<AssignmentDTO> | null
    ) {}
}
