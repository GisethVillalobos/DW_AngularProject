export class AssignmentDTO {
    constructor(
        public idAssignment: number | null,
        public idDriver: number | null,
        public idBus: number | null,
        public idRoute: number | null,
        public idSchedule: number | null
    ) {}
}