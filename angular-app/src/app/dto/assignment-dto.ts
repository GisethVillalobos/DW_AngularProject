export class AssignmentDTO {
    constructor(
        public idAssignment: number | null,
        public idDriver: number,
        public idBus: number,
        public idRoute: number,
        public idSchedule: number
    ) {}
}
