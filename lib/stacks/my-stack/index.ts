import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { createItemsDynamoDB } from './database/items/create-items-dynamodb';

export class MyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const itemsTable = createItemsDynamoDB(this);
  }
}
