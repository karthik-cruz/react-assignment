import React from 'react'

function App() {
  const videos = [
    {
      id: 1,
      title: 'LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander',
      thumbnailUrl: 'https://i.ytimg.com/vi/IqwIOlhfCak/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLC4Yag9nJdE1MmM54JLyCkHAuCTCA',
      likes: "1.3M",
      views: "13M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 2,
      title: 'Kadhal 2 Kailasa Episode -1 | Love Series | Mic set',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.z1T8r4uGsx5ZXsQIJsPFiQHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "74K",
      views: "1.9M",
      channelName: 'Mic set',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbubOe2HHYK_R2cBMwwU18WFe--zWUDtgWXWIQ4-w=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 3,
      title: 'Would You Swim With Sharks For $100,000?',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.cerJdI0QffQUFkwMU31tDgHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "3.9M",
      views: "163M",
      channelName: 'Mr Beast',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 4,
      title: 'Bringing Friends to Home - The Reality | Hari & Naresh | Jump Cuts | 4K',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.IjDD05OHId_4NyVTpLMlEwHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "107K",
      views: "1.4M",
      channelName: 'Jump Cuts',
      channelLogoUrl: 'https://yt3.ggpht.com/RdM-VHBgp6wNgmWdb00lTJ_PgX52x8wEjocloR4JsAYj_sfCsmhzmHoMq5U_482fetZkBTRDtqI=s88-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 5,
      title: 'Vellake Music Video - Alekhya Harika | Vinay Shanmukh, Bharatt-Saurabh, Anirudh',
      thumbnailUrl: 'https://i.ytimg.com/vi/rFPl2XY0uv4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkKe0Y52Nn3zAfDEg-pjabqnAW7Q',
      likes: "374K",
      views: "19M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 6,
      title: 'JAILER - Hukum Lyric Video | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson',
      thumbnailUrl: 'https://i.ytimg.com/vi/1F3hm6MfR1k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3Xlpcg2hQMTdn7nOf3IykCxfC9w',
      likes: "1.1M",
      views: "82M",
      channelName: 'Sun TV',
      channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKbonI2fEFXVxJYtWEqHjyY2k_i0N9a8CXyYo3lDiA=s48-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 7,
      title: 'Don - Bae Video | Sivakarthikeyan, Priyanka Mohan | Anirudh Ravichander',
      thumbnailUrl: 'https://i.ytimg.com/vi/-7n_krPLRgs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAkUaR3266wkaCurP2CPM_Imhkjg',
      likes: "306K",
      views: "32M",
      channelName: 'SonyMusicSouthVEVO',
      channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKaDzDvV0E5-8ZL9HKs7Z7NCGLWZUkG0zRK1EtKYAg=s68-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 8,
      title: 'Chilla Chilla - Full Video | Thunivu | Ajith Kumar | H Vinoth | Anirudh | Ghibran',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.r5wRfpkb97pG4ZM39GkdvQHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "256K",
      views: "27M",
      channelName: 'Zee Music South',
      channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKajlO-yFBLoUDjLzxdQFyj5mDGk6muyxGqwy1VWvw=s88-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 9,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 10,
      title: 'JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh ',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.Q4wfUtbBgOD6Wpg5l53nQAHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "1.9M",
      views: "120M",
      channelName: 'T-Series',
      channelLogoUrl: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 11,
      title: 'Top 10 Hollywood Horror Movies In Tamil Dubbed | Best Horror movies | Playtamildub',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.ho_yHN8qWt4f7VajVCCzlAHaEK?w=329&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "20K",
      views: "892K",
      channelName: 'Playtamildub',
      channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKYiyNbaJKfwYYSV3cVztXKdL4Dqf6c9YufJJNzZ=s88-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 12,
      title: 'Aradhya - Audio Song | Kushi | Vijay Deverakonda,Samantha | Hesham Abdul Wahab',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.CeTIZZX7Z01Rt-oow2qTAAHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "2.3K",
      views: "220K",
      channelName: 'Saregama Telugu',
      channelLogoUrl: 'https://yt3.ggpht.com/ZnBmMi35bqmVJODSRzSwo3_j3WVaBd3DhRJHrKTS4yMX4jds1gXOsH0JpjBtr4HzfNClZcnjWw=s88-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 13,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 14,
      title: 'Call crashing prank on cute girl | Kovai Kusumbu | Kovai 360*',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.YQTYAIo8yRYICXyBSIsOjwHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "4.1K",
      views: "47K",
      channelName: 'Kovai 360*',
      channelLogoUrl: 'https://yt3.ggpht.com/G2Npd9emMMu8frXMn0Psyhow3mGQl086BzP_r5e35SESG2DG2Nnhs_yJySqj4U-uM_9cWTlOKw=s88-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 15,
      title: 'Pubg Tamil Live | Funny Rush For 200K Subs | ( No TeamUP )',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.lETo3ijwviTDmKFI4jZx4gHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "140K",
      views: "972K",
      channelName: 'MidfailYT',
      channelLogoUrl: 'https://yt3.ggpht.com/I7t5YP-J4oGQpokYpgXN74B3C-PJwKDWqR7L_aLaghQMC4b9twCjpDp1ProopjirW7fhCk0lKA=s88-c-k-c0x00ffffff-no-rj',
    }
    
  
  ];

  return (
    <div id='right-wrapper'>
     <div id='header'><input id='input' type='text' placeholder='Search'></input>
     <i id='mic-icon' className="material-icons">mic</i></div>
      {videos.map((video) => (
        <div key={video.id} className="video-card">
           <div className="channel-info">
              <img src={video.channelLogoUrl} alt={video.channelName} />
              <span>{video.channelName}</span>
            </div>
          <img src={video.thumbnailUrl} alt={video.title} />
          <div className="video-info">
            <h3>{video.title}</h3>
            <div className="stats">
              <p><i class="material-icons">visibility</i>{`${video.views} Views`} </p>
              <p><i class="material-icons">thumb_up</i>{`${video.likes} Likes`} </p>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default App