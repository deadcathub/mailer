import React from "react";

export const BlockBanner = props => {

  const propsTree = props.apptree;

  const styleBanner = {
    maxWidth: '100%',
    height: 'auto',
    border: '0',
    textDecoration: 'none',
    margin: '0 0 30px',
    display: 'block'
  }

  return (
    <a className="js-block" href={propsTree.banner.link} onClick={props.toggleDrawer('bottom', true)} style={{display: 'block'}} target="_blank" rel="noopener noreferrer">
      <img
        src={propsTree.banner.url}
        style={styleBanner}
        width="680"
        height=""
        alt=""
      />
    </a>
  )

}


