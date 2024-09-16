
export enum Rules {
    required = 'required',
    numeric = 'numeric',
    number = 'number',
    alphanumeric = 'alphanumeric',
    date_format = 'date_format',
    optional = 'optional',
    enum = 'enum',
    string = 'string',
}

export const rulesList = [
    Rules.required,
    Rules.numeric,
    Rules.number,
    Rules.alphanumeric,
    Rules.date_format,
    Rules.optional,
    Rules.enum,
    Rules.string,
]

export enum RawDataPriority {
    HIGH = 'HIGH',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
}

export const priorityList = [
    RawDataPriority.HIGH,
    RawDataPriority.LOW,
    RawDataPriority.MEDIUM,
]

export enum ValidationStatus {
    NOT_PROCESSED = 'NOT_PROCESSED',
    PENDING = 'PENDING',
    PROCESSED = 'PROCESSED',
}

export const validationStatusList = [
    ValidationStatus.NOT_PROCESSED,
    ValidationStatus.PENDING,
    ValidationStatus.PROCESSED,
]