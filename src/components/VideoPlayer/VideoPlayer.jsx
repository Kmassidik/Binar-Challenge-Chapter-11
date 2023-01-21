import React from "react"

export default function VideoPlayer() { 
    const mediaUrls = [
      {
        id: 1,
        title: "Video One",
        videoUrl:
          "https://res.cloudinary.com/dlxw2mnrp/video/upload/v1674188873/random/testvideo_nnhbot.mp4",
      },
    ]
  
    // handle mouse enter
    // const handleMouseEnter = (e) => {
    //   const vid = e.target
    //   vid.muted = true
    //   vid.play()
    // }
  
    // handle mouse leave
    // const handleMouseLeave = (e) => {
    //   const vid = e.target
    //   vid.muted = false
    //   vid.currentTime = 0
    //   vid.pause()
    // }
  
    return (
      <div>

        <h1 className='text-center'>Cloudinary Video Show</h1>
        <div className='container'>
          <div className='row'>
            {mediaUrls.map((media) => (
              <div key={media.id} className='col-lg-4 col-sm-6 mb-4'>
                <div className='card h-100'>
                  <div className='card-body'>
                    <h4 className='card-title'>{media.title}</h4>
                    <video
                      // controls
                      width="320"
                      height="240"
                      muted
                      autoPlay
                      loop
                      // onMouseEnter={handleMouseEnter}
                      // onMouseLeave={handleMouseLeave}
                    >
                      <source src={media.videoUrl} type="video/mp4"/>
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          
        </div>
    )
  }
  

  