import { KinesisStreamEvent } from 'aws-lambda';

export const lambdaHandler = (event: KinesisStreamEvent): void => {
    try {
        for (const record of event.Records) {
            const buffer = Buffer.from(record.kinesis.data, 'base64');
            console.log('NNN ', buffer.toString('utf-8'));
        }
    } catch (err) {
        console.log(err);
    }
};
