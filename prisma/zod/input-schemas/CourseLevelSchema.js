import { z } from 'zod';

export const CourseLevelSchema = z.enum(['Beginner','Intermediate','Advanced']);


export default CourseLevelSchema;
