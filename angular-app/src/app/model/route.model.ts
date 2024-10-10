import { Assignment } from "./assignment.model";

export class Route {
    idRoute!: number;
    code!: string;
    stations!: Array<string>;
    assignments!: Set<Assignment>

}
