import React from 'react'
import Topic from './Topic'

const topiccard = [
    {
        id:1,
        title:"",
        Plus:"",
        Cross:""
    },
    {
        id:2,
        title:"",
        Plus:"",
        Cross:""
    },
    {
        id:3,
        title:"",
        Plus:"",
        Cross:""
    },
    {
        id:4,
        title:"",
        Plus:"",
        Cross:""
    },
    
    

    {
        id:5,
        title:"",
        Plus:"",
        Cross:""
    },
    {
        id:6,
        title:"",
        Plus:"",
        Cross:""
    },


    {
        id:7,
        title:"",
        Plus:"",
        Cross:""
    },


    {
        id:8,
        title:"",
        Plus:"",
        Cross:""
    },

    {
        id:9,
        title:"",
        Plus:"",
        Cross:""
    },

    {
        id:10,
        title:"",
        Plus:"",
        Cross:""
    },


]
function Topicitems() {
  return (
    <div>
      {topiccard?.map((item) => (
            <Topic {...item}/>
      ))}
    </div>
  )
}

export default Topicitems