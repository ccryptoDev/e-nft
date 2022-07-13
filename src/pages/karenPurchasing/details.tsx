const Details = () => {
  return (
    <div className="nft-block">
      <div id="main-container">
        <div className="nft-head">
          <div className="the-text">
            <h6 className="the-subtitle">Presenting</h6>
            <h2 className="the-title">The Soundtrack to the new movie Karen, produced by Adrian Miller and Om'Mas Keith. Available in two different editions.</h2>
            
            <div className="open-edition">
              <div className="token">
                <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/icon-single-oe.png" alt="" />
              </div>
              <div>
                <span className="subheading">Available for $3 Purchase until October 21st, 2021</span>
                <h3>Open Edition</h3>
                <h4>Includes 11 tracks E-NFT Soundtrack Produced by Adrian Miller and Om'Mas Keith, featuring Ceelo Green, Knox Brown Ft. Anderson Paak, Gumbo, and more.
                  <br/>See more details below.
                </h4>
              </div>
            </div>
            
            <div className="limited-edition">
              <div className="token">
                <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/icon-single-le.png" alt=""/>
              </div>
              <div>
                <span className="subheading">Available for $20 Limited to 5,000 until sold out</span>
                <h3>Limited Edition</h3>
                <h4>Includes Open Edition E-NFT Soundtrack plus:</h4>
                <ul>
                  <li><div><img src="https://e-nft-dev.curios.com/_templates/emmersive/images/icon-single-note-white.png" alt=""/></div>11 Track E-NFT Soundtrack</li>
                  <li><div><img src="https://e-nft-dev.curios.com/_templates/emmersive/images/icon-single-art-white.png" alt=""/></div>1 Digital Movie Poster</li>
                  <li><div><img src="https://e-nft-dev.curios.com/_templates/emmersive/images/icon-single-art-white.png" alt=""/></div>9 Pieces of Custom Artwork</li>
                  <li><div><img src="https://e-nft-dev.curios.com/_templates/emmersive/images/icon-single-movie.png" alt=""/></div>Behind the Scenes Commentary from Director Coke Daniels</li>
                  <li><div><img src="https://e-nft-dev.curios.com/_templates/emmersive/images/icon-single-movie.png" alt=""/></div>3 Music Videos</li>
                </ul>
              </div>
            </div>
            
          </div>
          <hr/>
          <div className="promo-mockup">
            <div className="phone-mockup">
              <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/karen-phone.png" alt=""/>
            </div>
            <div className="the-details">
              <h1>Stream All New Exclusive Music Only here</h1>
              <h3>Produced by Adrian Miller and Om'Mas Keith and featuring music from Cee-lo Green, Anderson Paak, Gumbo, and more.</h3>
            </div>
          </div>
        </div>

        <div className="nft-type-audio">
        
            <div className="playlist-title show-small">
              <h6>Preview</h6>
              <h1>Karen - The Movie Soundtrack </h1>
              <h6>Produced by Adrian Miller and Om'Mas Keith and featuring music from CeeLo Green, Knox Brown ft. Anderson .Paak, Gumbo, and more.</h6>
            </div>
          <div className="button-wrap">
          </div>
          <div id="music-player"></div>
          <div id="music-playlist">
            
              <div className="playlist-title show-big">
                <h6>Preview</h6>
                <h1>Karen - The Movie Soundtrack </h1>
                <h6>Produced by Adrian Miller and Om'Mas Keith and featuring music from CeeLo Green, Knox Brown ft. Anderson .Paak, Gumbo, and more.</h6>
              </div>
          </div>
        </div>
        <hr/>
        <div className="nft-type-video nft-type-owlgallery">

          <div className="the-carousel-text">
            <h6 className="the-subtitle">Limited Edition Content Only</h6>
            <h2 className="the-title">Watch Music Videos Only Available On Our Limited Edition Drop</h2>
            <h3>Three different works of art were created for each of the three music videos. The Karen Soundtrack Exclusive Edition gives you access to stream and enjoy all of them.</h3>
          </div>

            <div className="video-carousel-hidden owl-image-carousel">
              <div id="bigImages" className="owl-carousel owl-theme">
                <div className="item">
                  <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/1.jpg" alt=""/>
                </div>
                <div className="item">
                  <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/2.png" alt=""/>
                </div>
                <div className="item">
                  <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/3.jpeg" alt=""/>
                </div>
                <div className="item">
                  <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/4.jpg" alt=""/>
                </div>
                <div className="item">
                  <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/5.jpg" alt=""/>
                </div>
              </div>
            
              <div id="thumbnailImages" className="owl-carousel owl-theme">
                <div className="item">
                  <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/1.jpg" alt=""/>
                </div>
                <div className="item">
                  <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/2.png" alt=""/>
                </div>
                <div className="item">
                  <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/3.jpeg" alt=""/>
                </div>
                <div className="item">
                  <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/4.jpg" alt=""/>
                </div>
                <div className="item">
                  <img src="https://e-nft-dev.curios.com/_templates/emmersive/images/5.jpg" alt=""/>
                </div>
              </div>
            </div>
        </div>
        <hr/>
        <div className="nft-type-video">
          
          <h6 className="the-subtitle">Limited Edition Content Only</h6>
          <h2 className="the-title">Watch Music Videos Only Available On Our Limited Edition Drop</h2>

          <div className="video-carousel-hidden">
            <div id="videos" className="owl-carousel owl-theme">

              <div className="item">
                <video>
                  <source src="https://e-nft-dev.curios.com/_templates/emmersive/images/IN%20THE%20WAY.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="item">
                <video>
                  <source src="https://e-nft-dev.curios.com/_templates/emmersive/images/inconspicuous_final.mov" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="item">
                <video>
                  <source src="https://e-nft-dev.curios.com/_templates/emmersive/images/KRN_Karen_LCv02_06302021 Resolve_1 - SFv03" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>
            
            <div id="thumbnails" className="owl-carousel owl-theme">

              <div className="item">
                <img src="https://images.unsplash.com/photo-1631746363761-e0f78d373b73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt=""/>
                <span><strong>Music Video Title</strong> 
                      Karen Movie Sound</span>
              </div>
              <div className="item">
                <img src="https://images.unsplash.com/photo-1631746363761-e0f78d373b73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt=""/>
                <span><strong>Music Video Title</strong> 
                  Karen Movie Sound</span>
              </div>
              <div className="item">
                <img src="https://images.unsplash.com/photo-1631746363761-e0f78d373b73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt=""/>
                <span><strong>Music Video Title</strong> 
                  Karen Movie Sound</span>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="nft-type-image">

          <h2 className="the-title">Watch Karen Today. Get the Soundtrack September 21st at 5pm EST.</h2>
          <div className="button-wrap">
            <a className="btn-base btn-big btn-blue-dark model-button" href="#" title="Buy Now">Watch the Movie Trailer</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Details