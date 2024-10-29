import { AssignmentDTO } from "./assignment-dto";

export class BusDTO {
    constructor(
        public idBus: number | null,
        public plate: string,
        public model: string,
        public assignments: Set<AssignmentDTO> | null
    ) {}
}
