import ProjectGallery from '@/app/component/ProjectGallery'
import Comments from '@/app/component/Comments'
import RelatedProjects from '@/app/component/RelatedProjects'
import React from 'react'
import Banner from '@/app/component/Banner'
import Overview from '@/app/component/Overview'


const page = () => {
  return (
<>
<Banner/>
<Overview/>
<ProjectGallery />    
<Comments />
<RelatedProjects />
</>


  )
}

export default page