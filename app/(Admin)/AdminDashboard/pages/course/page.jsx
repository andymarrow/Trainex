"use client";
import CourseController from "@/app/(Admin)/AdminDashboard/components/courseComp/CourseForm";
import AdminLayout from "@/app/(Admin)/AdminDashboard/components/layout/Layout";

export default function CourseManagementPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">Course Management</h1>
        <CourseController />
      </div>
    </AdminLayout>
  );
}
