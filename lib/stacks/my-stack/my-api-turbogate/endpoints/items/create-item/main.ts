// Generated by turbogate (v2.0.2)
// BEFORE EDITING: Please read turbogate docs and the following caveats.
// Purpose of thise file:           This is the main function of the endpoint. Use this to implement your custom business logic. All provided parameters have been prevalidated.
// Expected signature:              export async function main( environment: Environment, request: Request, authorizerContext: AuthorizerContext, ): Promise<Response>
// Can be edited?                   Yes, editing this file is intended. Please ensure to preserve the signature though.
// Can be permanently deleted?      No, generated code will break (so technically yes, if you fix loads of errors but you probably should not).
// Will be recreated?               If you delete this file and run `turbogate build` a boilerplate version of this file will be recreated.
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { Context } from 'aws-lambda';
import { HttpStatus } from 'turbogate';
import { v4 as uuidv4 } from 'uuid';
import { ItemRecord } from '../../../../database/items/item-record';
import { AuthorizerContext } from './authorizer';
import { Environment } from './environment';
import { Request } from './request';
import { Response } from './responses';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function main(
  environment: Environment,
  request: Request,
  authorizerContext: AuthorizerContext,
  lambdaContext: Context,
): Promise<Response> {
  try {
    // Merge the request body with a generated ID
    const item: ItemRecord = {
      ...request.body,
      id: uuidv4(),
    };

    // Store the item in the DB
    await docClient.send(
      new PutCommand({
        TableName: environment.ITEMS_TABLE_NAME,
        Item: item,
      }),
    );

    // Return the item
    return {
      statusCode: HttpStatus.Created,
      body: item,
    };
  } catch (e) {
    // Handle errors
    console.log('Failed to create item in DB', e);
    return {
      statusCode: HttpStatus.InternalServerError,
      body: undefined,
    };
  }
}
