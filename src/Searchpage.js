import React from 'react'
import './Searchpage.css';
import ChannelRow from './ChannelRow';
import  TuneOutlinedIcon  from '@mui/icons-material/TuneOutlined';
import VideoRow from './VideoRow';

function Searchpage() {
  return (
    <div className='searchpage'>
      <div className="searchpage__filter">
        <TuneOutlinedIcon/>
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
      image="https://media.istockphoto.com/id/1358013032/photo/web-development-concept.jpg?
      b=1&s=170667a&w=0&k=20&c=aAR7goX4e7jDiUfx1SNA7lD04WldUv6okpifv80xGcw="
      Channel="Quick Knowledge"
      verified
      subs="659k"
      noOfVideos={382}
      description="You can find awesome programming channel link here and you can learn coding easily."
      />
      <hr />
      <VideoRow
      views="1.4M"
      subs="660k"
      description="Do you want to take free an hour training.... Checkout the link is in the dscription."
      timestamp="3 days ago"
      channel="Quick Knowledge"
      title="Let's make a  youtube clone in ReactJs"
      image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
      />
      <VideoRow
      views="1.4M"
      subs="660k"
      description="Do you want to take free an hour training.... Checkout the link is in the dscription."
      timestamp="3 days ago"
      channel="Quick Knowledge"
      title="Let's make a  youtube clone in ReactJs"
      image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
      />
      <VideoRow
      views="1.4M"
      subs="660k"
      description="Do you want to take free an hour training.... Checkout the link is in the dscription."
      timestamp="3 days ago"
      channel="Quick Knowledge"
      title="Let's make a  youtube clone in ReactJs"
      image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
      />
      <VideoRow
      views="1.4M"
      subs="660k"
      description="Do you want to take free an hour training.... Checkout the link is in the dscription."
      timestamp="3 days ago"
      channel="Quick Knowledge"
      title="Let's make a  youtube clone in ReactJs"
      image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
      />
      <VideoRow
      views="1.4M"
      subs="660k"
      description="Do you want to take free an hour training.... Checkout the link is in the dscription."
      timestamp="3 days ago"
      channel="Quick Knowledge"
      title="Let's make a  youtube clone in ReactJs"
      image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
      />
      <VideoRow
      views="1.4M"
      subs="660k"
      description="Do you want to take free an hour training.... Checkout the link is in the dscription."
      timestamp="3 days ago"
      channel="Quick Knowledge"
      title="Let's make a  youtube clone in ReactJs"
      image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
      />
      <VideoRow
      views="1.4M"
      subs="660k"
      description="Do you want to take free an hour training.... Checkout the link is in the dscription."
      timestamp="3 days ago"
      channel="Quick Knowledge"
      title="Let's make a  youtube clone in ReactJs"
      image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
      />
      <VideoRow
      views="1.4M"
      subs="660k"
      description="Do you want to take free an hour training.... Checkout the link is in the dscription."
      timestamp="3 days ago"
      channel="Quick Knowledge"
      title="Let's make a  youtube clone in ReactJs"
      image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
      />
    </div>
    
  )
}

export default Searchpage
