import { RemovalPolicy } from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export function createItemsDynamoDB(scope: Construct): dynamodb.Table {
  const table = new dynamodb.Table(scope, 'turbogate-example-items', {
    tableName: 'items',
    partitionKey: {
      name: "id",
      type: dynamodb.AttributeType.STRING,
    },
    billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    removalPolicy: RemovalPolicy.DESTROY, 
  });
  return table;
}