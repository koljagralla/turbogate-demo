import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { createItemsDynamoDB } from './database/items/create-items-dynamodb';
import { MyApiTurbogate } from './my-api-turbogate/my-api-turbogate';

export class MyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const itemsTable = createItemsDynamoDB(this);

    const myApiTurbogate = new MyApiTurbogate(this, {
      openapi: {},
      environment: {
        ITEMS_TABLE_NAME: itemsTable.tableName,
        VALID_API_KEYS: 'my-api-key,another-api-key',
      },
      permissions: {
        ITEMS_TABLE_READ: lambda => itemsTable.grantReadData(lambda),
        ITEMS_TABLE_WRITE: lambda => itemsTable.grantWriteData(lambda),
      },
    });
  }
}
