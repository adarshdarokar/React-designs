import React from 'react'
import LeftContent from './LeftContent'
import RigthContent from './RigthContent'

const PageContent = () => {
  return (
    <div className='py-10 flex  item-center gap-10 h-[90vh] bg-red-200 px-18'>
      <LeftContent />
      <RigthContent />
    </div>
  )
}

export default PageContent
