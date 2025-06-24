import React from 'react'

export const metadata = {
  title: 'Blog - Train ex', 
  description: 'Read our latest blog posts and articles on various topics.', 
};

function Bloglayout({children}) {
  return (
    <div>{children}</div>
  )
}

export default Bloglayout