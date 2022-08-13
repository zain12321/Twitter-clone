import React from 'react'
import Follow from './Follow'
import NewPosts from './NewPosts'
import Posts from './Posts'



 const postitem = [
//   {
//     id:1,
//     logo:"https://pbs.twimg.com/profile_images/1510370172053426179/n__H_ZKG_400x400.jpg",
//     title:"DrNausheenHameed",
//     time:"@DrNausheenPTI13h",
//     desc:"@Ali_MuhammadPTI",
//     image:"https://media-exp2.licdn.com/dms/image/C4D22AQGRcYytTiSqng/feedshare-shrink_2048_1536/0/1655457974681?e=1658361600&v=beta&t=eNGWfYRzKGkx2f4ob1aJoyUQT2mVSIJiObaAnEVdSL0"

// },
     {
         id:2,
         logo:"https://pbs.twimg.com/profile_images/1510370172053426179/n__H_ZKG_400x400.jpg",
         title:"DrNausheenHameed",
         time:"@DrNausheenPTI13h",
         desc:"@Ali_MuhammadPTI",
         image:"https://pbs.twimg.com/media/FQGLfpIXwAc4FKQ?format=jpg&name=small"

     },
     {
        id:3,
        logo:"https://pbs.twimg.com/media/FR8Cd1sXIAQly9C?format=jpg&name=small",
        title:"CrSahidAfridi123",
        time:"@SahidAfridi 12 h",
        desc:"#Soon#Coming",
        image:"https://pbs.twimg.com/media/FPo0jRbWQAI4_u6?format=jpg&name=small"

    },
    {
        id:4,
        logo:"https://pbs.twimg.com/media/FQFtJxkWYAIulrV?format=jpg&name=small",
        title:"Imran Khan Fan",
        time:"@Imrankhanf 11h",
        desc:"#Inshallah#Leader",
        image:"https://pbs.twimg.com/media/FZKRl9LWIAA6ABs?format=jpg&name=small"

    },
    {
        id:5,
        logo:"https://pbs.twimg.com/profile_images/1505600497293611011/Xomgdlxd_400x400.jpg",
        title:"Sports News",
        time:"@Sporst central 1 h",
        desc:"#Crickter#Bangladesh",
        image:"https://pbs.twimg.com/media/FQDg-k-WUAAyAMI?format=jpg&name=small"

    },
    {
        id:6,
        logo:"https://pbs.twimg.com/profile_images/1158338086163615745/IV6zyxXH_400x400.jpg",
        title:"Dubai Advantture",
        time:"@Dubai Tour 23 h",
        desc:"",
        image:"https://pbs.twimg.com/media/FPWs1K4XEAAmVFd?format=jpg&name=small"

    },
   
    {
      id:7,
      logo:"https://pbs.twimg.com/profile_images/1410934351064354824/Rp_9KNOV_400x400.jpg",
      title:"Multan Sultans",
      time:"@Multanpslteam 2h",
      desc:"#Psl#Multan#Sultans",
      image:"https://pbs.twimg.com/media/FQJs5f_XsAMm5No?format=jpg&name=small"

  },
  {
     id:8,
     logo:"https://pbs.twimg.com/profile_images/1162149336307970049/hfP8u3Lq_400x400.jpg",
     title:"Dr Sehbaz Gill",
     time:"@Dr Sehebaz 12 h",
     desc:"#امپورٹڈ_حکومت_نامنظور",
     image:"https://pbs.twimg.com/media/FQMV0pwWYAAJ833?format=jpg&name=small"

 },
 {
     id:9,
     logo:"https://pbs.twimg.com/media/FQFtJxkWYAIulrV?format=jpg&name=small",
     title:"Imran Khan Fan",
     time:"@Imrankhanf 11h",
     desc:"#Inshallah#Leader",
     image:"https://pbs.twimg.com/media/FQFtJxkWYAIulrV?format=jpg&name=small"

 },
 ]
function Postscard() {
  return (

    <div>
      <Posts/>
      <Follow/>
      <div>
         {postitem?.map((item) => (
              <NewPosts {...item}/>
         ))}
      </div>
    </div>
  )
}

export default Postscard