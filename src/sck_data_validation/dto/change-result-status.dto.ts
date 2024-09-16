import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { ValidationStatus, validationStatusList } from "../enums/data.enum";

export class ChangeResultStatusDto {

    @IsNotEmpty()
    @IsString()
    @IsUUID()
    public id: string;

    @IsEnum(validationStatusList, {
        message: `Possible status are ${validationStatusList}`
    })
    public status: ValidationStatus;
}