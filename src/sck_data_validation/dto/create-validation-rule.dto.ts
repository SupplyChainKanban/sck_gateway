import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { Rules, rulesList } from '../enums/data.enum';

export class CreateValidationRuleDto {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    public sourceId: string;

    @IsNotEmpty()
    @IsString()
    public keyName: string;

    @IsEnum(rulesList, {
        message: `Possible rules values are ${rulesList}`
    })
    public rule: Rules;

    @IsOptional()
    @IsString()
    public regexPattern?: string;

}