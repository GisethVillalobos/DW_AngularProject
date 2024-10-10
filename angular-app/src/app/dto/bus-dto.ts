import { Assignment } from "../model/assignment.model";

export class BusDTO {
    constructor(
        public idBus: number | null,
        public plate: string,
        public model: string,
        public assignments: Set<Assignment> | null
    ) {}
}
