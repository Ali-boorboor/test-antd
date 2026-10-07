export type EventType = (typeof EVENT_TYPES)[number];

export const LEGEND_EVENT_TYPES: EventType[] = [
  "FDP",
  "REST",
  "STANDBY",
  "AIRPORT_STANDBY",
  "RESERVE",
  "POSITIONING",
  "OFF",
  "VACATION",
  "TRAINING",
  "ADMIN",
  "SICK",
];

export const EVENT_TYPES = [
  "FDP",
  "REST",
  "STANDBY",
  "AIRPORT_STANDBY",
  "RESERVE",
  "OFF",
  "VACATION",
  "TRAINING",
  "SICK",
  "ADMIN",
  "POSITIONING",
  "SPLIT_DUTY",
] as const;
