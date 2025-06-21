import { createAccessControl } from "better-auth/plugins/access";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

// Define resources & actions
const statement = {
	...defaultStatements,
	course: ["create", "update", "delete", "enroll"],
	user: ["set-role"],
};

export const ac = createAccessControl(statement);

// Define roles
export const student = ac.newRole({ course: ["enroll"] });

export const instructor = ac.newRole({
	course: ["create", "update", "delete"],
});

export const adminRole = ac.newRole({
	...adminAc.statements,
	course: ["create", "update", "delete", "enroll"],
	user: ["set-role"],
});
