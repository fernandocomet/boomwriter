import React, { Component } from 'react'

class HomeTwitterWidget extends Component{

    render(){
        return(
            <div className="container text-center mb-5 mt-5">
                <h1>Teachers love BoomWriter</h1>
                
                <div className="row">
                    <div className="col-2 col-md-2"></div>
                    <div className="col-8 col-md-8">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        {/* <img className="d-block w-100" src="..." alt="First slide"/> */}
                            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">
                            <a href="https://twitter.com/BoomWriter_?ref_src=twsrc%5Etfw">@BoomWriter_</a> is incredible! All of our children have had their own book ‘published’.</p>&mdash; Miss Morris (@MissMorris05) <a href="https://twitter.com/MissMorris05/status/1222636781679583232?ref_src=twsrc%5Etfw">January 29, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </div>
                        <div className="carousel-item">
                        {/* <img className="d-block w-100" src="..." alt="Second slide"/> */}
                            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Students working hard on their stories using vocabulary on <a href="https://twitter.com/BoomWriter_?ref_src=twsrc%5Etfw">@BoomWriter_</a> . Who will win the vote 🤔? <a href="https://t.co/hE8BYtLa2z">pic.twitter.com/hE8BYtLa2z</a></p>&mdash; Michelle Rennix (@rennix_michelle) <a href="https://twitter.com/rennix_michelle/status/1216735232809938951?ref_src=twsrc%5Etfw">January 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </div>
                        <div className="carousel-item">
                            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">When writing gets mundane, bring it to life with <a href="https://twitter.com/BoomWriter_?ref_src=twsrc%5Etfw">@BoomWriter_</a> !! This is a great <a href="https://twitter.com/hashtag/techtool?src=hash&amp;ref_src=twsrc%5Etfw">#techtool</a> to engage, promote creativity and work on those writing and reading skills📝 We can’t wait to read and vote for the winning chapter👀👀📗 <a href="https://twitter.com/hashtag/writers?src=hash&amp;ref_src=twsrc%5Etfw">#writers</a> <a href="https://twitter.com/hashtag/creators?src=hash&amp;ref_src=twsrc%5Etfw">#creators</a> <a href="https://twitter.com/ecwestwildcats?ref_src=twsrc%5Etfw">@ecwestwildcats</a> <a href="https://twitter.com/hashtag/fcsvanguard?src=hash&amp;ref_src=twsrc%5Etfw">#fcsvanguard</a> <a href="https://t.co/o16dcVgrh2">pic.twitter.com/o16dcVgrh2</a></p>&mdash; Kelley McAlhany (@Kmcalhany23) <a href="https://twitter.com/Kmcalhany23/status/1214679829448216577?ref_src=twsrc%5Etfw">January 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        {/* <img className="d-block w-100" src="..." alt="Third slide"/> */}
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                    
                    </div>
                    <div className="col-2 col-md-2"></div>
                </div>
            </div>
        )
    }

}

export default HomeTwitterWidget;