"use client";
import CourseController from "@/app/(Admin)/AdminDashboard/components/courseComp/CourseController";
import AdminLayout from "@/app/(Admin)/AdminDashboard/components/layout/Layout";
//mb-6  margin
export default function CourseManagementPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold ">Course Management</h1>
        <CourseController />
      </div>
    </AdminLayout>
  );
}
