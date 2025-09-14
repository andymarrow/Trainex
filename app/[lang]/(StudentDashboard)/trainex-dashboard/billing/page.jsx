"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	HiOutlineCreditCard,
	HiOutlineReceiptTax,
	HiOutlineCalendar,
	HiOutlineCheckCircle,
	HiOutlineClock,
	HiOutlineCurrencyDollar,
} from "react-icons/hi";

// Import sample data
import { SAMPLE_STUDENT_PROFILE, sampleCourses } from "@/lib/constants";

function BillingPage() {
	const studentProfile = SAMPLE_STUDENT_PROFILE;

	// Calculate billing statistics
	const totalPaid = studentProfile.PaymentHistory.reduce(
		(sum, payment) => sum + payment.amount,
		0
	);
	const totalPayments = studentProfile.PaymentHistory.length;
	const completedPayments = studentProfile.PaymentHistory.filter(
		(payment) => payment.status === "Completed"
	).length;
	const averagePayment = totalPaid / totalPayments;

	// Get recent payments (last 5)
	const recentPayments = studentProfile.PaymentHistory.sort(
		(a, b) => new Date(b.date) - new Date(a.date)
	).slice(0, 5);

	// Helper function to format date
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "short", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	// Helper function to format currency
	const formatCurrency = (amount) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(amount);
	};

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const statsVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
	};

	return (
		<motion.div
			className="container mx-auto py-8"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
					Your{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
						Billing & Payments
					</span>
				</h1>
				<p className="text-lg text-gray-600 dark:text-gray-300">
					Manage your payment history and billing information.
				</p>
			</div>

			{/* Billing Statistics Grid */}
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.1,
						},
					},
				}}
			>
				{/* Total Paid */}
				<motion.div
					className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-between"
					variants={statsVariants}
					whileHover={{
						scale: 1.02,
						boxShadow:
							"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					}}
				>
					<div>
						<p className="text-sm font-medium text-gray-600 dark:text-gray-300">
							Total Paid
						</p>
						<p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
							{formatCurrency(totalPaid)}
						</p>
					</div>
					<HiOutlineCurrencyDollar className="text-4xl text-blue-600 dark:text-cyan-400" />
				</motion.div>

				{/* Total Payments */}
				<motion.div
					className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-between"
					variants={statsVariants}
					whileHover={{
						scale: 1.02,
						boxShadow:
							"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					}}
				>
					<div>
						<p className="text-sm font-medium text-gray-600 dark:text-gray-300">
							Total Payments
						</p>
						<p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
							{totalPayments}
						</p>
					</div>
					<HiOutlineReceiptTax className="text-4xl text-blue-600 dark:text-cyan-400" />
				</motion.div>

				{/* Completed Payments */}
				<motion.div
					className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-between"
					variants={statsVariants}
					whileHover={{
						scale: 1.02,
						boxShadow:
							"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					}}
				>
					<div>
						<p className="text-sm font-medium text-gray-600 dark:text-gray-300">
							Completed
						</p>
						<p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
							{completedPayments}
						</p>
					</div>
					<HiOutlineCheckCircle className="text-4xl text-blue-600 dark:text-cyan-400" />
				</motion.div>

				{/* Average Payment */}
				<motion.div
					className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-between"
					variants={statsVariants}
					whileHover={{
						scale: 1.02,
						boxShadow:
							"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					}}
				>
					<div>
						<p className="text-sm font-medium text-gray-600 dark:text-gray-300">
							Average Payment
						</p>
						<p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
							{formatCurrency(averagePayment)}
						</p>
					</div>
					<HiOutlineCreditCard className="text-4xl text-blue-600 dark:text-cyan-400" />
				</motion.div>
			</motion.div>

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Payment History - Takes 2 columns */}
				<motion.div
					className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
					initial="hidden"
					animate="visible"
					variants={cardVariants}
				>
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
							Payment History
						</h2>
						<span className="text-sm text-gray-500 dark:text-gray-400">
							Showing {recentPayments.length} of {totalPayments}{" "}
							payments
						</span>
					</div>

					{recentPayments.length > 0 ? (
						<div className="space-y-4">
							{recentPayments.map((payment) => (
								<motion.div
									key={payment.id}
									className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
									whileHover={{
										scale: 1.01,
										backgroundColor:
											"rgba(59, 130, 246, 0.05)",
									}}
									transition={{ duration: 0.2 }}
								>
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0">
											<div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
												<HiOutlineReceiptTax className="w-5 h-5 text-blue-600 dark:text-blue-400" />
											</div>
										</div>
										<div>
											<p className="font-medium text-gray-900 dark:text-gray-100">
												{payment.description}
											</p>
											<div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
												<HiOutlineCalendar className="w-4 h-4" />
												<span>
													{formatDate(payment.date)}
												</span>
												<span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-200">
													{payment.status}
												</span>
											</div>
										</div>
									</div>
									<div className="text-right">
										<p className="font-semibold text-gray-900 dark:text-gray-100">
											{formatCurrency(payment.amount)}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											{payment.currency}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					) : (
						<div className="text-center py-8">
							<HiOutlineReceiptTax className="w-12 h-12 text-gray-400 mx-auto mb-4" />
							<p className="text-gray-500 dark:text-gray-400">
								No payment history found.
							</p>
						</div>
					)}

					{/* View All Payments Button */}
					<div className="mt-6 text-center">
						<button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200">
							View All Payments
						</button>
					</div>
				</motion.div>

				{/* Billing Summary - Takes 1 column */}
				<motion.div
					className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
					initial="hidden"
					animate="visible"
					variants={cardVariants}
				>
					<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
						Billing Summary
					</h2>

					{/* Current Month Summary */}
					<div className="mb-6">
						<h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
							This Month
						</h3>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-gray-600 dark:text-gray-400">
									Payments Made
								</span>
								<span className="font-medium text-gray-900 dark:text-gray-100">
									{
										studentProfile.PaymentHistory.filter(
											(payment) => {
												const paymentDate = new Date(
													payment.date
												);
												const now = new Date();
												return (
													paymentDate.getMonth() ===
														now.getMonth() &&
													paymentDate.getFullYear() ===
														now.getFullYear()
												);
											}
										).length
									}
								</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-gray-600 dark:text-gray-400">
									Amount Spent
								</span>
								<span className="font-medium text-gray-900 dark:text-gray-100">
									{formatCurrency(
										studentProfile.PaymentHistory.filter(
											(payment) => {
												const paymentDate = new Date(
													payment.date
												);
												const now = new Date();
												return (
													paymentDate.getMonth() ===
														now.getMonth() &&
													paymentDate.getFullYear() ===
														now.getFullYear()
												);
											}
										).reduce(
											(sum, payment) =>
												sum + payment.amount,
											0
										)
									)}
								</span>
							</div>
						</div>
					</div>

					{/* Payment Methods */}
					<div className="mb-6">
						<h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
							Payment Methods
						</h3>
						<div className="space-y-2">
							<div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
								<HiOutlineCreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
								<span className="text-gray-700 dark:text-gray-300">
									Credit Card
								</span>
								<span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
									Default
								</span>
							</div>
							<div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
								<HiOutlineCreditCard className="w-5 h-5 text-gray-400" />
								<span className="text-gray-700 dark:text-gray-300">
									PayPal
								</span>
							</div>
						</div>
					</div>

					{/* Quick Actions */}
					<div>
						<h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
							Quick Actions
						</h3>
						<div className="space-y-2">
							<button className="w-full px-4 py-2 text-left text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200">
								Download Invoice
							</button>
							<button className="w-full px-4 py-2 text-left text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200">
								Update Payment Method
							</button>
							<button className="w-full px-4 py-2 text-left text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200">
								Contact Support
							</button>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Enrolled Courses with Pricing */}
			<motion.div
				className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
				initial="hidden"
				animate="visible"
				variants={cardVariants}
			>
				<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
					Your Enrolled Courses
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{studentProfile.enrolledCourses.map((enrollment) => {
						const courseDetails = sampleCourses.find(
							(course) => course.id === enrollment.courseId
						);
						if (!courseDetails) return null;

						return (
							<motion.div
								key={enrollment.courseId}
								className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
								whileHover={{ y: -2 }}
							>
								<div className="flex items-start justify-between mb-3">
									<h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm line-clamp-2">
										{courseDetails.title}
									</h3>
									<span className="text-xs text-gray-500 dark:text-gray-400">
										Enrolled:{" "}
										{formatDate(enrollment.enrollmentDate)}
									</span>
								</div>

								<div className="flex items-center justify-between text-sm">
									<span className="text-gray-600 dark:text-gray-400">
										{enrollment.courseProgressPercentage}%
										Complete
									</span>
									<span className="font-medium text-green-600 dark:text-green-400">
										{formatCurrency(
											courseDetails.currentPrice
										)}
									</span>
								</div>

								{enrollment.isCourseComplete && (
									<div className="mt-2 flex items-center text-xs text-green-600 dark:text-green-400">
										<HiOutlineCheckCircle className="w-4 h-4 mr-1" />
										Course Completed
									</div>
								)}
							</motion.div>
						);
					})}
				</div>
			</motion.div>
		</motion.div>
	);
}

export default BillingPage;
