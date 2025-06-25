"use client";

import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
	HiSun,
	HiMoon,
	HiBell,
	HiShieldCheck,
	HiUser,
	HiCog,
	HiSave,
} from "react-icons/hi";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";

export default function SettingsPage() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Form states
	const [profileData, setProfileData] = useState({
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@example.com",
		bio: "Software developer passionate about learning new technologies.",
	});

	const [notificationSettings, setNotificationSettings] = useState({
		emailNotifications: true,
		pushNotifications: false,
		courseUpdates: true,
		achievementAlerts: true,
		marketingEmails: false,
	});

	const [privacySettings, setPrivacySettings] = useState({
		profileVisibility: "public",
		showProgress: true,
		allowMessages: true,
		dataAnalytics: true,
	});

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const handleProfileSave = () => {
		// Here you would typically save to your backend
		toast.success("Profile settings saved successfully!");
	};

	const handleNotificationSave = () => {
		toast.success("Notification preferences updated!");
	};

	const handlePrivacySave = () => {
		toast.success("Privacy settings saved!");
	};

	const handleNotificationChange = (key) => {
		setNotificationSettings((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const handlePrivacyChange = (key) => {
		setPrivacySettings((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	if (!mounted) return null;

	return (
		<div className="max-w-4xl mx-auto p-6 space-y-8">
			<div className="flex items-center gap-3 mb-8">
				<HiCog className="w-8 h-8 text-primary" />
				<div>
					<h1 className="text-3xl font-bold">Settings</h1>
					<p className="text-muted-foreground">
						Manage your account preferences and settings
					</p>
				</div>
			</div>

			{/* Theme Settings */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						{theme === "dark" ? (
							<HiMoon className="w-5 h-5" />
						) : (
							<HiSun className="w-5 h-5" />
						)}
						Appearance
					</CardTitle>
					<CardDescription>
						Customize how the application looks and feels
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center justify-between">
						<div>
							<p className="font-medium">Theme</p>
							<p className="text-sm text-muted-foreground">
								Choose between light and dark mode
							</p>
						</div>
						<Button
							variant="outline"
							onClick={() =>
								setTheme(theme === "dark" ? "light" : "dark")
							}
							className="flex items-center gap-2"
						>
							{theme === "dark" ? (
								<>
									<HiSun className="w-4 h-4" />
									Light Mode
								</>
							) : (
								<>
									<HiMoon className="w-4 h-4" />
									Dark Mode
								</>
							)}
						</Button>
					</div>
				</CardContent>
			</Card>

			{/* Profile Settings */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<HiUser className="w-5 h-5" />
						Profile Information
					</CardTitle>
					<CardDescription>
						Update your personal information and profile details
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="firstName">First Name</Label>
							<Input
								id="firstName"
								value={profileData.firstName}
								onChange={(e) =>
									setProfileData((prev) => ({
										...prev,
										firstName: e.target.value,
									}))
								}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="lastName">Last Name</Label>
							<Input
								id="lastName"
								value={profileData.lastName}
								onChange={(e) =>
									setProfileData((prev) => ({
										...prev,
										lastName: e.target.value,
									}))
								}
							/>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							value={profileData.email}
							onChange={(e) =>
								setProfileData((prev) => ({
									...prev,
									email: e.target.value,
								}))
							}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="bio">Bio</Label>
						<textarea
							id="bio"
							className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
							value={profileData.bio}
							onChange={(e) =>
								setProfileData((prev) => ({
									...prev,
									bio: e.target.value,
								}))
							}
							placeholder="Tell us about yourself..."
						/>
					</div>
					<Button
						onClick={handleProfileSave}
						className="flex items-center gap-2"
					>
						<HiSave className="w-4 h-4" />
						Save Profile
					</Button>
				</CardContent>
			</Card>

			{/* Notification Settings */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<HiBell className="w-5 h-5" />
						Notification Preferences
					</CardTitle>
					<CardDescription>
						Choose how and when you want to be notified
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<Label htmlFor="emailNotifications">
									Email Notifications
								</Label>
								<p className="text-sm text-muted-foreground">
									Receive important updates via email
								</p>
							</div>
							<Checkbox
								id="emailNotifications"
								checked={
									notificationSettings.emailNotifications
								}
								onCheckedChange={() =>
									handleNotificationChange(
										"emailNotifications"
									)
								}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<Label htmlFor="pushNotifications">
									Push Notifications
								</Label>
								<p className="text-sm text-muted-foreground">
									Get instant notifications in your browser
								</p>
							</div>
							<Checkbox
								id="pushNotifications"
								checked={notificationSettings.pushNotifications}
								onCheckedChange={() =>
									handleNotificationChange(
										"pushNotifications"
									)
								}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<Label htmlFor="courseUpdates">
									Course Updates
								</Label>
								<p className="text-sm text-muted-foreground">
									Notifications about new course content
								</p>
							</div>
							<Checkbox
								id="courseUpdates"
								checked={notificationSettings.courseUpdates}
								onCheckedChange={() =>
									handleNotificationChange("courseUpdates")
								}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<Label htmlFor="achievementAlerts">
									Achievement Alerts
								</Label>
								<p className="text-sm text-muted-foreground">
									Celebrate your learning milestones
								</p>
							</div>
							<Checkbox
								id="achievementAlerts"
								checked={notificationSettings.achievementAlerts}
								onCheckedChange={() =>
									handleNotificationChange(
										"achievementAlerts"
									)
								}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<Label htmlFor="marketingEmails">
									Marketing Emails
								</Label>
								<p className="text-sm text-muted-foreground">
									Receive promotional content and offers
								</p>
							</div>
							<Checkbox
								id="marketingEmails"
								checked={notificationSettings.marketingEmails}
								onCheckedChange={() =>
									handleNotificationChange("marketingEmails")
								}
							/>
						</div>
					</div>
					<Button
						onClick={handleNotificationSave}
						className="flex items-center gap-2"
					>
						<HiSave className="w-4 h-4" />
						Save Notifications
					</Button>
				</CardContent>
			</Card>

			{/* Privacy Settings */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<HiShieldCheck className="w-5 h-5" />
						Privacy & Security
					</CardTitle>
					<CardDescription>
						Control your privacy settings and data sharing
						preferences
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<Label htmlFor="profileVisibility">
									Public Profile
								</Label>
								<p className="text-sm text-muted-foreground">
									Allow others to see your profile and
									progress
								</p>
							</div>
							<Checkbox
								id="profileVisibility"
								checked={
									privacySettings.profileVisibility ===
									"public"
								}
								onCheckedChange={() =>
									setPrivacySettings((prev) => ({
										...prev,
										profileVisibility:
											prev.profileVisibility === "public"
												? "private"
												: "public",
									}))
								}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<Label htmlFor="showProgress">
									Show Learning Progress
								</Label>
								<p className="text-sm text-muted-foreground">
									Display your course completion and
									achievements
								</p>
							</div>
							<Checkbox
								id="showProgress"
								checked={privacySettings.showProgress}
								onCheckedChange={() =>
									handlePrivacyChange("showProgress")
								}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<Label htmlFor="allowMessages">
									Allow Messages
								</Label>
								<p className="text-sm text-muted-foreground">
									Let other users send you messages
								</p>
							</div>
							<Checkbox
								id="allowMessages"
								checked={privacySettings.allowMessages}
								onCheckedChange={() =>
									handlePrivacyChange("allowMessages")
								}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="space-y-1">
								<Label htmlFor="dataAnalytics">
									Data Analytics
								</Label>
								<p className="text-sm text-muted-foreground">
									Help improve the platform with anonymous
									usage data
								</p>
							</div>
							<Checkbox
								id="dataAnalytics"
								checked={privacySettings.dataAnalytics}
								onCheckedChange={() =>
									handlePrivacyChange("dataAnalytics")
								}
							/>
						</div>
					</div>
					<Button
						onClick={handlePrivacySave}
						className="flex items-center gap-2"
					>
						<HiSave className="w-4 h-4" />
						Save Privacy Settings
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
