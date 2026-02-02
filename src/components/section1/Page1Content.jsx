import React from 'react'
import LeftContent from './LeftContent'
import RigthContent from './RigthContent'

const PageContent = (props) => {
  return (
    <div className='py-10 flex  item-center gap-10 h-[90vh] px-18'>
      <LeftContent />
      <RigthContent users={props.users} />
    </div>
  )
}

export default PageContent
