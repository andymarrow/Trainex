"use client";
import { useState } from "react";
import { Row, Col, Input, Select, Button, Modal, Empty, Spin } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import CourseCard from "./CourseCard";
import CourseForm from "./CourseForm";

const CourseController = () => {
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterLevel, setFilterLevel] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock data - replace with API call
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to React",
      description:
        "Learn the fundamentals of React including components, props, state, and hooks.",
      category: "web development",
      level: "beginner",
      imageUrl: "",
      createdAt: "2023-01-15",
    },
    {
      id: 2,
      title: "Advanced Node.js Patterns",
      description:
        "Master advanced patterns and best practices in Node.js development.",
      category: "backend",
      level: "advanced",
      imageUrl: "",
      createdAt: "2023-02-20",
    },
    {
      id: 3,
      title: "UX Design Principles",
      description:
        "Essential principles for creating intuitive and user-friendly interfaces.",
      category: "design",
      level: "intermediate",
      imageUrl: "",
      createdAt: "2023-03-10",
    },
    {
      id: 4,
      title: "Introduction to React",
      description:
        "Learn the fundamentals of React including components, props, state, and hooks.",
      category: "web development",
      level: "beginner",
      imageUrl: "",
      createdAt: "2023-01-15",
    },
  ]);

  // Available categories and levels
  const categories = [
    "all",
    "web development",
    "backend",
    "frontend",
    "design",
    "data science",
  ];
  const levels = ["all", "beginner", "intermediate", "advanced"];

  // Filter courses based on search and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchText.toLowerCase()) ||
      course.description.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory =
      filterCategory === "all" || course.category === filterCategory;
    const matchesLevel = filterLevel === "all" || course.level === filterLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const handleAddCourse = () => {
    setCurrentCourse(null);
    setIsModalOpen(true);
  };

  const handleEdit = (course) => {
    setCurrentCourse(course);
    setIsModalOpen(true);
  };

  const handleDelete = (courseId) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setCourses(courses.filter((course) => course.id !== courseId));
      setLoading(false);
    }, 500);
  };

  const handleView = (course) => {
    // Implement view details logic
    console.log("View course:", course);
  };

  const handleFormSubmit = (values) => {
    setLoading(true);

    setTimeout(() => {
      if (currentCourse) {
        // Update existing course
        setCourses(
          courses.map((c) =>
            c.id === currentCourse.id ? { ...c, ...values } : c
          )
        );
      } else {
        // Add new course
        const newId =
          courses.length > 0 ? Math.max(...courses.map((c) => c.id)) + 1 : 1;
        const newCourse = {
          id: newId,
          ...values,
          createdAt: new Date().toISOString(),
        };
        setCourses([...courses, newCourse]);
      }

      setLoading(false);
      setIsModalOpen(false);
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <Row gutter={16} align="middle">
          <Col xs={24} sm={12} md={8} lg={6} className="mb-3 sm:mb-0">
            <Input
              placeholder="Search courses..."
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              allowClear
            />
          </Col>

          <Col xs={12} sm={6} md={5} lg={4} className="mb-3 sm:mb-0">
            <Select
              className="w-full"
              value={filterCategory}
              onChange={setFilterCategory}
              options={categories.map((cat) => ({
                value: cat,
                label: cat === "all" ? "All Categories" : cat,
              }))}
            />
          </Col>

          <Col xs={12} sm={6} md={5} lg={4} className="mb-3 sm:mb-0">
            <Select
              className="w-full"
              value={filterLevel}
              onChange={setFilterLevel}
              options={levels.map((lvl) => ({
                value: lvl,
                label: lvl === "all" ? "All Levels" : lvl,
              }))}
            />
          </Col>

          <Col xs={24} sm={24} md={6} lg={10} className="text-right">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAddCourse}
            >
              Add New Course
            </Button>
          </Col>
        </Row>
      </div>

      {/* Courses Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : filteredCourses.length > 0 ? (
        <Row gutter={[16, 16]}>
          {filteredCourses.map((course) => (
            <Col key={course.id} xs={24} sm={12} md={8} lg={6}>
              <CourseCard
                course={course}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleView}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8 flex justify-center">
          <Empty description="No courses found" />
        </div>
      )}

      {/* Course Form Modal */}
      <Modal
        title={currentCourse ? "Edit Course" : "Create New Course"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
        destroyOnHidden
      >
        <CourseForm
          initialValues={currentCourse}
          onSubmit={handleFormSubmit}
          loading={loading}
        />
      </Modal>
    </div>
  );
};

export default CourseController;
