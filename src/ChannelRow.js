import React from 'react'
import { Avatar } from '@mui/material'
import './ChannelRow.css'
import { VerifiedRounded } from '@mui/icons-material'


function ChannelRow( {
    image,
    Channel,
    subs,
    verified,
    noOfVideos,
    description})
    {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow__logo' alt={Channel} src={image}/>
        <div className="channelRow__text">
            <h4>{Channel} {verified && <VerifiedRounded/>}</h4>
            <p>{subs} subscribers . {noOfVideos} videos</p>
            <p>{description}</p>
        </div>
        
    </div>
  )
}

export default ChannelRow
