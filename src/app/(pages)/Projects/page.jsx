import ProjectGallery from '@/app/component/ProjectGallery'
import TopComments from '@/app/component/TopComments'
import RelatedProjects from '@/app/component/RelatedProjects'
import React from 'react'

const page = () => {
  return (
<>
<ProjectGallery />
<TopComments />
<RelatedProjects />
</>


  )
}

export default page