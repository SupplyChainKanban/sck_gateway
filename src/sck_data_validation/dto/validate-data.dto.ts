import { HttpStatus } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { Transform, Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, IsUUID } from "class-validator";
import { priorityList, RawDataPriority } from "../enums/data.enum";

export class ValidateDataDto {

    @IsNotEmpty()
    @IsString()
    @IsUUID()
    public rawDataId: string;

    @IsNotEmpty()
    @IsString()
    @IsUUID()
    public sourceId: string;

    @IsObject()
    @IsNotEmptyObject()
    @Transform(({ value }) => {
        try {
            if (typeof value === 'object') {
                return value;
            }
            return JSON.parse(value);
        } catch (error) {
            console.log({ error })
            throw new RpcException({ status: HttpStatus.BAD_REQUEST, message: 'Invalid JSON format for dataPayload' })
        }
    })
    @Type(() => Object)
    public dataPayload: object;

    @IsEnum(priorityList, {
        message: `Possible priority levels are ${priorityList}`
    })
    public priority: RawDataPriority;


}