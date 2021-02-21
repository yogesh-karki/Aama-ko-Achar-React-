import React from 'react'

const InnerBanner = (props) => {
    return (
        <section className="inner-banner">
            <div className="container-fluid">
                <div className="ib-wrap" style={{background:'url(/images/about.jpg)'}}>
                <div className="overlay ib-overlay"></div>
                    <h4>{ props.bannerText }</h4>
                </div>
            </div>
        </section>
    )
}

export default InnerBanner
