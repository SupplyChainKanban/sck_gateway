
export enum RawDataPriority {
    HIGH = 'HIGH',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
}

export const rawPriorityList = [
    RawDataPriority.HIGH,
    RawDataPriority.LOW,
    RawDataPriority.MEDIUM,
]

export enum RawDataStatus {
    PENDING = 'PENDING',
    PROCESSED = 'PROCESSED',
    ERROR = 'ERROR',
}

export const rawStatusList = [
    RawDataStatus.PENDING,
    RawDataStatus.PROCESSED,
    RawDataStatus.ERROR,
]