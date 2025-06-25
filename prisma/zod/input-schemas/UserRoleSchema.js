import { z } from 'zod';

export const UserRoleSchema = z.enum(['admin','student','instructor']);


export default UserRoleSchema;
