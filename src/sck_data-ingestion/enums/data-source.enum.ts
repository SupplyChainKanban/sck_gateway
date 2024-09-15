

export enum DataSourceType {
    MANUAL = 'MANUAL',
    MES = 'MES',
    PROJECT = 'PROJECT',
}

export const sourceTypesList = [
    DataSourceType.MES,
    DataSourceType.MANUAL,
    DataSourceType.PROJECT,
]

export enum DataSourceFrequency {
    MANUAL = 'MANUAL',
    REAL = 'REAL',
    PERIODIC = 'PERIODIC',
}

export const sourceFrequencyList = [
    DataSourceFrequency.MANUAL,
    DataSourceFrequency.REAL,
    DataSourceFrequency.PERIODIC,
]

export enum DataSourceStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export const sourceStatusList = [
    DataSourceStatus.ACTIVE,
    DataSourceStatus.INACTIVE,
]