import React from "react";
import { Form, InputNumber, Card } from "antd";

const PricingStep = () => {
	const form = Form.useFormInstance();
	const price = Form.useWatch(["pricing", "basePrice"], form);

	return (
		<div className="max-w-md mx-auto">
			<h3 className="text-lg font-medium mb-4">Set Course Price</h3>
			<Form.Item
				name={["pricing", "basePrice"]}
				label="Course Price"
				rules={[{ required: true, message: "Please enter a price" }]}
			>
				<InputNumber
					min={1}
					step={1}
					prefix="$"
					style={{ width: "100%" }}
					placeholder="Enter price"
				/>
			</Form.Item>
			<Card className="text-center mt-6">
				<div className="text-3xl font-bold mb-2">${price || "0"}</div>
				<p className="text-gray-500">
					This is the price students will pay to enroll.
				</p>
			</Card>
		</div>
	);
};

export default PricingStep;
