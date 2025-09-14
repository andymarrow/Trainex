"use client";

import AdminLayout from "../../components/layout/Layout";
import UserController from "../../components/userComp/UserController";

// import UserController from "@/app/(Admin)/AdminDashboard/components/userComp/UserController";
// import AdminLayout from "@/app/(Admin)/AdminDashboard/components/layout/Layout";

export default function UserManagementPage() {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-6">User Management</h1>
			<UserController />
		</div>
	);
}
