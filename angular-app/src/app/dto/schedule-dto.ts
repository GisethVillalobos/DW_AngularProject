import { AssignmentDTO } from "./assignment-dto";

export class ScheduleDTO {
    constructor(
        public idSchedule: number | null,
        public days: Array<string>,
        public timeStart: string, //HH:mm
        public timeEnd: string, //HH:mm
        public assignments: Set<AssignmentDTO> | null
    ) {}
}
