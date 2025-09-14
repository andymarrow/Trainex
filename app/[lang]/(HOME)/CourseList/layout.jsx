import React from 'react'

export const metadata = {
  title: 'Course-List - Train ex', 
  description: 'Explore our course list.', 
};


function CourseListLayout({children}) {
  return (
    <div >{children}</div>
  )
}

export default CourseListLayout