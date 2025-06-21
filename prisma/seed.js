import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
	// Hash password helper
	const hash = (password) => bcrypt.hashSync(password, 10);

	// Create Admin
	const adminUser = await prisma.user.create({
		data: {
			fullName: "Admin One",
			email: "admin@example.com",
			profilePic: "https://example.com/admin.jpg",
			password: hash("adminpass"),
			role: "Admin",
			isEmailVerified: true,
			admin: {
				create: {
					permissions: ["MANAGE_USERS", "VIEW_REPORTS"],
				},
			},
			userPreference: {
				create: {
					darkMode: true,
					language: "en",
					notifications: true,
				},
			},
		},
	});

	// Create Instructor
	const instructorUser = await prisma.user.create({
		data: {
			fullName: "Instructor One",
			email: "instructor@example.com",
			profilePic: "https://example.com/instructor.jpg",
			password: hash("instructorpass"),
			role: "Instructor",
			isEmailVerified: true,
			instructor: {
				create: {
					bio: "Expert in Web Development",
					experience: "5 years",
					education: "MSc in Computer Science",
				},
			},
		},
	});

	// Create Student
	const studentUser = await prisma.user.create({
		data: {
			fullName: "Student One",
			email: "student@example.com",
			profilePic: "https://example.com/student.jpg",
			password: hash("studentpass"),
			role: "Student",
			isEmailVerified: true,
			student: {
				create: {
					progress: 0,
				},
			},
		},
	});

	// Create Course with Module, Lesson, Chapter, Quiz
	const course = await prisma.course.create({
		data: {
			title: "Intro to Full Stack Development",
			description: "Learn frontend and backend development.",
			rating: 4.8,
			thumbnail: "https://example.com/course.jpg",
			price: 49.99,
			tags: ["JavaScript", "React", "Node.js"],
			duration: 720,
			level: "Beginner",
			instructorId: instructorUser.instructor.id,
			modules: {
				create: [
					{
						title: "Getting Started",
						order: 1,
						lessons: {
							create: [
								{
									title: "What is Full Stack?",
									order: 1,
									chapters: {
										create: [
											{
												title: "Overview",
												order: 1,
												content: {
													text: "Full stack means frontend + backend.",
													video: "https://video.example.com/overview",
												},
											},
										],
									},
								},
							],
						},
						quizzes: {
							create: [
								{
									title: "Quiz 1: Basics",
									duration: 10,
									order: 2,
									questions: [
										{
											question:
												"What does HTML stand for?",
											choices: [
												"HyperText Markup Language",
												"HighText Machine Language",
												"None",
											],
											correct: 0,
										},
									],
								},
							],
						},
					},
				],
			},
		},
	});

	// Get student and enroll in course
	const student = await prisma.student.findUnique({
		where: { userId: studentUser.id },
	});

	const studentCourse = await prisma.studentCourse.create({
		data: {
			studentId: student.id,
			courseId: course.id,
			progress: 100,
		},
	});

	const quiz = await prisma.quiz.findFirst({
		where: { module: { courseId: course.id } },
	});

	// Create quiz attempt
	await prisma.quizAttempt.create({
		data: {
			studentId: student.id,
			quizId: quiz.id,
			score: 100,
			answers: {
				answerList: ["HyperText Markup Language"],
			},
		},
	});

	// Create certificate
	await prisma.certificate.create({
		data: {
			fileUrl: "https://example.com/certificate.pdf",
			studentCourseId: studentCourse.id,
		},
	});

	// Notification
	await prisma.notification.create({
		data: {
			userId: studentUser.id,
			message: "Your course certificate is ready!",
		},
	});

	console.log("✅ Seed completed successfully!");
}

main()
	.catch((e) => {
		console.error("❌ Seed failed:", e);
		process.exit(1);
	})
	.finally(() => prisma.$disconnect());
