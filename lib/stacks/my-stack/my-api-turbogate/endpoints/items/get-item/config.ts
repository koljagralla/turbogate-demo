// Generated by turbogate (v2.0.2)
// BEFORE EDITING: Please read turbogate docs and the following caveats.
// Purpose of thise file:           Provides configs for the AWS constructs related to this endpoint.
// Expected signature:              export const config: EndpointConfig
// Can be edited?                   Yes, editing this file is intended. Please ensure to preserve the signature though.
// Can be permanently deleted?      No, CDK synth will fail because this file is dynamically loaded.
// Will be recreated?               If you delete this file and run `turbogate build` a boilerplate version of this file will be recreated.
import { EndpointConfig } from 'turbogate';
import { defaultConfig } from '../../../config/default-config';

export const config: EndpointConfig = {
  lambda: {
    ...defaultConfig.lambda,
  },
  integration: {
    ...defaultConfig.integration,
  },
};