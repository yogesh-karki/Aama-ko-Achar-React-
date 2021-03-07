import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';



const VideoModal = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="r2-RUrC4lRc" onClose={() => setOpen(false)} />

            <div className="row">
                <div className="col-md-6">
                    <div className="vd-bg" style={{background:'url(/images/ab5.jpg)'}}>
        
                        <div className="overlay vd-overlay"></div>

                        {/* <video autoPlay muted loop className="vd-mdl" >
                            <source src="images/video/Aama Ko Aachar Short Commercial compressed.mp4" type="video/mp4" />
                        </video>
                         */}
                        <div className="play-btn" onClick={()=> setOpen(true)}>
                            
                            <img src="/images/play.svg" alt=""/>
                        </div>

                    </div>
                </div>

                <div className="col-md-6">
                    <div className="vd-text">
                        <h4>Small pickle making venture </h4>

                        <p>
                            Besides work, Sangita loves gardening and finds growing her own food at home relaxing and very fulfilling.
                            Her interest in terrace gardening has brought in a healthy environment towards her family. By using simple techniques,
                            Sangita has created wonders in her 400-square feet terrace garden which now gives her varieties of
                           vegetables.
                        </p>
                    </div>
                </div>
            </div>



            
        </div>
    )
}

export default VideoModal
