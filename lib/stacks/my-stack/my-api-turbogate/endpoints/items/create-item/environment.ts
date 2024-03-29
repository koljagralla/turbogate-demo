// Generated by turbogate (v2.0.2)
// BEFORE EDITING: Please read turbogate docs and the following caveats.
// Purpose of thise file:           Declares the environment variables that your endpoint needs. All declared environment variables will be extracted and validated and be available in the `environment` parameter of your endpoints `main.ts`. The source data for the enviornment variables will be provided in the constructor of your generated turbogate class.
// Expected signature:              export const zEnvironment: ZodType<any, any, EnvironmentDefinition>,export type Environment = z.infer<typeof zEnvironment>;
// Can be edited?                   Yes, editing this file is intended. Please ensure to preserve the signature though.
// Can be permanently deleted?      No, code that is regenerated on every `turbogate build` call will break, so fixing broken code after deleting this won't make sense.
// Will be recreated?               If you delete this file and run `turbogate build` a boilerplate version of this file will be recreated.
import { Env, EnvironmentDefinition } from 'turbogate';
import { ZodType, z } from 'zod';

export const zEnvironment = z.object({
  ITEMS_TABLE_NAME: Env.string,
}) satisfies ZodType<any, any, EnvironmentDefinition>;

export type Environment = z.infer<typeof zEnvironment>;
