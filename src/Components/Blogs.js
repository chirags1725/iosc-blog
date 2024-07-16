import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";


const Blogs = ({ data }) => {
  const [flex, setFlex] = useState('')

  const img = require(`../Images/${data.image}`)
  useState(()=>{
    if(data.id % 2 === 0){
      setFlex('row-reverse')
    }
    else{
      setFlex('row')
    }
    

  },[])

  return (
    <div className="blog" style={{flexDirection:`${flex}`}}>
      <div className="text">
        <div className='line' style={{gap:'10px',display:"flex"}}><div></div><h5><MdLocationPin style={{fontSize:'2em',color:"red"}}/></h5><h5>
        {data.place}</h5></div>
        <div className="number">{data.id < 10 ? '0' + data.id : data.id}</div>
        <div className="title">{data.title}</div>
        <div className="content">{data.content}</div>
        <Link to={`blog/${data.id}`} className="more">read more &#8594;</Link>
      </div>
      <div className="image home"><img src={img} alt={data.title}/></div>
      {/* <div className="image"><img src={`../Images/1.jpeg`} alt='image'/></div> */}
    </div>
  );
}

export default Blogs;
