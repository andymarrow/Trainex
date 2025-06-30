import React from 'react';
import FAQItem from './FAQItem';

const faqData = [
    {
        question: "What is Train ex?",
        answer: "Train ex is an online learning platform offering a wide range of courses on various subjects. We connect learners with expert instructors worldwide."
    },
    {
        question: "How do I enroll in a course?",
        answer: "To enroll, find the course you're interested in, visit its page, and click the 'Enroll Now' or 'Add to Cart' button. Follow the steps to complete your registration and payment."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other regional payment options."
    },
    {
        question: "Can I get a refund?",
        answer: "Yes, we offer a 30-day money-back guarantee for most courses if you are not satisfied. Please refer to our refund policy page for details."
    },
    {
        question: "Are certificates provided upon completion?",
        answer: "Yes, upon successful completion of a paid course, you will receive a certificate of completion from Train ex."
    },
     {
        question: "How can I contact customer support?",
        answer: "You can contact customer support via the chat options ('Assistants' or 'Train ex AI') in this widget, or by visiting our dedicated Contact Us page."
    },
];

function FAQSection() {
    return (
        <div className="flex-grow overflow-y-auto p-2">
            {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
}

export default FAQSection;