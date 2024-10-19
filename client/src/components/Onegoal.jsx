import React from 'react'

const Onegoal = ({description , date}) => {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column"
    }}>
    
    <div style={
        {
            display:"flex",
            flexDirection:"row",
            color:"#364F6B",
            
            width:"100%",
            gap:"120px",
            justifyContent:"space-between"
            
            
        }
    
    }>
     <p style={{width:"", fontWeight:"600"}}>{description}</p>
     <p>{date}</p>
     </div>
     <div style={{width:"100%" , height:"1px" , background:"#364F6B"}}></div>
    
    </div>
  )
}

export default Onegoal
