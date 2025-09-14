"use client";
// import CourseController from "@/app/(Admin)/AdminDashboard/components/courseComp/CourseController";
// import AdminLayout from "@/app/(Admin)/AdminDashboard/components/layout/Layout";
import CourseController from "../../components/courseComp/CourseController";
import AdminLayout from "../../components/layout/Layout";
//mb-6  margin
export default function CourseManagementPage() {
	return (
		<div>
			<h1 className="text-2xl font-bold ">Course Management</h1>
			<CourseController />
		</div>
	);
}
