import 'dotenv/config';
import * as joi from 'joi';


interface EnvVars {
    PORT: number;
    SCK_NATS_SERVERS: string[];
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    SCK_NATS_SERVERS: joi.array().items(joi.string()).required(),
})
    .unknown(true);

const { error, value } = envsSchema.validate({
    ...process.env,
    SCK_NATS_SERVERS: process.env.SCK_NATS_SERVERS?.split(','),
});

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    sckNatsServers: envVars.SCK_NATS_SERVERS,
}