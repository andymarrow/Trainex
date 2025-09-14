"use client";
import UserController from "@/app/(Admin)/AdminDashboard/components/userComp/UserController";
import AdminLayout from "@/app/(Admin)/AdminDashboard/components/layout/Layout";

export default function UserManagementPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">User Management</h1>
        <UserController />
      </div>
    </AdminLayout>
  );
}
