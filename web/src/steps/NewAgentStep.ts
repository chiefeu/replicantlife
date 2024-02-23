import { Agent, GridPosition } from "@/classes/Agent";
import Level from "../classes/Level";
import { Step } from "./Step";
import { StepJSON } from "./Step";

export interface NewAgentJSON extends StepJSON {
    x: number;
    y: number;
    name: string;
    agent_id: string;
}

export class NewAgentStep extends Step {
    agentId: string;
    agentName: string;
    position: GridPosition;

    constructor(stepId: number, substepId: number, agentId: string, agentName: string, position: GridPosition) {
        super(stepId, substepId);
        this.agentId = agentId;
        this.agentName = agentName;
        this.position = position;
    }

    applyStep(level: Level) {
        const placement = new Agent(this.position, this.agentName, this.agentId);

        level.agents.push(placement);
    }

    static fromJSON(json: NewAgentJSON): NewAgentStep {
        const position: GridPosition = {x: json.x, y: json.y};
        return new NewAgentStep(json.step, json.substep, json.agent_id, json.name, position);
    }
}

