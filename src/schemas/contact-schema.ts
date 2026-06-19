import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  message: z.string().min(10, "Enter at least 10 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
