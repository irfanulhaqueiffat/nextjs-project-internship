import ProjectGallery from '@/app/component/ProjectGallery'
import Comments from '@/app/component/Comments'
import RelatedProjects from '@/app/component/RelatedProjects'
import React from 'react'
import Banner from '@/app/component/Banner'


const page = () => {
  return (
<>
<Banner/>
<ProjectGallery />
<Comments />
<RelatedProjects />
</>


  )
}

export default page