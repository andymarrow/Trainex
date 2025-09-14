import React from 'react';


export const metadata = {
  title: 'Blog Post Detail', 
  description: 'Full article content',
};



export default function BlogDetailLayout({ children }) {
  return (
    <div>   
        {children}
    </div>
  );
}