// Generated by turbogate (v2.0.2)
// BEFORE EDITING: Please read turbogate docs and the following caveats.
// Purpose of thise file:           Defines the reuqest your endpoint expects.
// Expected signature:              export const zRequest: ZodType<any, any, RequestDefinition>,export type Request = z.infer<typeof zRequest>;
// Can be edited?                   Yes, editing this file is intended. Please ensure to preserve the signature though.
// Can be permanently deleted?      No, generated code will break (so technically yes, if you fix loads of errors but you probably should not).
// Will be recreated?               If you delete this file and run `turbogate build` a boilerplate version of this file will be recreated.
import { RequestDefinition } from 'turbogate';
import { ZodType, z } from 'zod';
import { zItemRecord } from '../../../../database/items/item-record';

export const zRequest = z.object({
  body: z.undefined(),
  pathParameters: zItemRecord.pick({ id: true }),
  queryParameters: z.object({}),
  headers: z.object({}),
}) satisfies ZodType<any, any, RequestDefinition>;

export type Request = z.infer<typeof zRequest>;
