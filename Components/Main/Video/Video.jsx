import React from 'react';

const Video = () => {
    return (
        <section className="website-2  video-area">
            <div className="video-position">
                <div className="video-zone">
                    <video width="1266" height="757"
                           poster="https://www.prorepeater.com/images_list/9toMJ89rkeuB5/home.webp"
                           autoPlay muted controls id="videoId">
                        <source src="https://www.prorepeater.com/public/video/Final_without_Pxlink.mp4"
                                type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Video;