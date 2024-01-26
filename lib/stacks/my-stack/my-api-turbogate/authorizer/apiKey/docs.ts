// Generated by turbogate (v2.0.2)
// BEFORE EDITING: Please read turbogate docs and the following caveats.
// Purpose of thise file:           Declare docs for this authorizer that are parsable by turbogate to be used in the generated OpenAPI specs. Turbogate will create a security scheme from the provided info and link it to every endpoint protected by this authorizer. If you need to add a custom security scheme not supported by OpenAPI just provide any string record. Doing so might result in invalid OpenAPI spec though.
// Expected signature:              export const config: AuthorizerDocs
// Can be edited?                   Yes, editing this file is intended. Please ensure to preserve the signature though.
// Can be permanently deleted?      No, CDK synth will fail because this file is dynamically loaded.
// Will be recreated?               If you delete this file and run `turbogate build` a boilerplate version of this file will be recreated.
import { AuthorizerDocs } from 'turbogate';

export const docs: AuthorizerDocs = {
  // Example docs for JWT Bearer auth.
  // See https://spec.openapis.org/oas/latest.html#security-scheme-object
  type: 'http',
  scheme: 'bearer',
};
