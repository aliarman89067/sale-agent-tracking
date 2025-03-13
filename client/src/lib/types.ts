import { string, z } from "zod";

export const UserSchema = z.object({
  imageUrl: z.string(),
  adminName: z.string().optional(),
  agentName: z.string().optional(),
  email: z.string().min(1),
  role: z.enum(["admin", "agent"]),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
