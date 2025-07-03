"use client";
import CourseForm from "@/app/(Admin)/AdminDashboard/components/courseComp/CourseForm";
import AdminLayout from "@/app/(Admin)/AdminDashboard/components/layout/Layout";

export default function CourseManagementPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold">Add Course</h1>
        <CourseForm />
      </div>
    </AdminLayout>
  );
}
