import React from 'react'

const ArticleCard = ({articlelink, imageSrc, title}) => {
  return (
      <div className="w-40 lg:w-56 text-white">
        <a href={articlelink} className="block">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-40 object-center mb-4" 
          />
          <h3 className="text-md lg:text-lg font-medium hover:underline">{title}</h3>
        </a>
  </div>
  )
}

export default ArticleCard