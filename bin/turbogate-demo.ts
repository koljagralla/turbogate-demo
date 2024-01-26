#!/usr/bin/env node
import { wireTurbogate } from 'turbogate/local'; // Keep at top of imports!
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MyStack } from '../lib/stacks/my-stack';

wireTurbogate; // Do not remove

const app = new cdk.App();
new MyStack(app, 'TurbogateDemoStack', {});
