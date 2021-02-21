import React from 'react';


const Available = (props) => {

    return (
        <div className="col-md-4 col-sm-6 col-6">
            <div className="aval-sing">
                <img src={props.src} alt=""/>

                <h6 className='market-place' >{props.location}</h6>

                <div className="aval-link">
                    <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Available;
