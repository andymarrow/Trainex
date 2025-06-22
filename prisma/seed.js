import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const instructorUser = await prisma.user.create({
		data: {
			id: "instructor-123",
			name: "Jane Instructor",
			email: "jane@instructor.com",
			role: "instructor",
			emailVerified: true,
			instructor: {
				create: {
					bio: "Experienced instructor in computer science",
					education: "MSc in Computer Science",
					experience: "10 years of teaching",
				},
			},
		},
	});

	const studentUser = await prisma.user.create({
		data: {
			name: "John Student",
			email: "john@student.com",
			role: "student",
			emailVerified: true,
			student: {
				create: {
					progress: 0.3,
				},
			},
		},
	});

	const course = await prisma.course.create({
		data: {
			title: "Intro to Programming",
			description: "A beginner-friendly course",
			rating: 4.5,
			thumbnail: "https://example.com/image.png",
			price: 49.99,
			tags: ["beginner", "programming"],
			duration: 120,
			level: "Beginner",
			instructorId: instructorUser.instructor.id || "instructor-123",
		},
	});

	const module = await prisma.module.create({
		data: {
			title: "Basics",
			order: 1,
			courseId: course.id,
		},
	});

	const lesson = await prisma.lesson.create({
		data: {
			title: "Getting Started",
			order: 1,
			moduleId: module.id,
		},
	});

	await prisma.chapter.create({
		data: {
			title: "Setup Environment",
			order: 1,
			lessonId: lesson.id,
			content: {
				type: "video",
				url: "https://example.com/setup.mp4",
			},
		},
	});

	const quiz = await prisma.quiz.create({
		data: {
			title: "Basics Quiz",
			questions: [
				{
					q: "What is a variable?",
					a: "A storage location",
				},
			],
			duration: 10,
			order: 1,
			moduleId: module.id,
		},
	});

	const student = await prisma.student.findUniqueOrThrow({
		where: {
			userId: studentUser.id,
		},
	});

	await prisma.quizAttempt.create({
		data: {
			studentId: student.id,
			quizId: quiz.id,
			score: 90,
			answers: {
				q1: "A storage location",
			},
		},
	});

	const enrollment = await prisma.studentCourse.create({
		data: {
			studentId: student.id,
			courseId: course.id,
			progress: 0.5,
		},
	});

	await prisma.certificate.create({
		data: {
			studentCourseId: enrollment.id,
			fileUrl: "https://example.com/cert.pdf",
		},
	});

	await prisma.paymentHistory.create({
		data: {
			studentId: student.id,
			courseId: course.id,
			paymentMethod: "Stripe",
			couponCode: "NEWSTUDENT10",
		},
	});
}

main()
	.then(() => {
		console.log("✅ Seeded successfully");
		return prisma.$disconnect();
	})
	.catch((e) => {
		console.error("❌ Seeding failed:", e);
		return prisma.$disconnect().finally(() => process.exit(1));
	});
