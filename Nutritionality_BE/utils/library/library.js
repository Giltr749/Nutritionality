export function getCapitalizedString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function toJSON(RowDataPacket) {
    return JSON.parse(JSON.stringify(RowDataPacket));
}

export function toJSONArray(RowDataPackets) {
    return Object.values(JSON.parse(JSON.stringify(RowDataPackets)));
}