import { Assignment } from "./assignment.model";

export class Bus {
    idBus!: number;
    plate!: string;
    model!: string;
    assignments!: Set<Assignment>
}
