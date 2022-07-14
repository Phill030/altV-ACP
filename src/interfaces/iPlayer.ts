export interface Player {
    name?: string;
    id?: number;
    ping?: number;
    ip?: string;
    hwid?: string;
    scid?: string;
    discordId?: string;
    joined?: Date;
    health?: number;
    armor?: number;
    position?: Vector3;
}

export interface Vector3 {
    x: number;
    y: number;
    z: number;
}