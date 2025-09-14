"use client";
// import AdminLayout from "@/app/(Admin)/AdminDashboard/components/layout/Layout";
import CourseForm from "../../components/courseComp/CourseForm";
import AdminLayout from "../../components/layout/Layout";

export default function CourseManagementPage() {
	return (
		<div>
			<h1 className="text-2xl font-bold">Add Course</h1>
			<CourseForm />
		</div>
	);
}
