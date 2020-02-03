import React from "react";

export const BlockBanner = props => {

  const propsTree = props.apptree;

  const styleCta = {
    maxWidth: '600px',
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: '21px',
    lineHeight: '1.6',
    color: '#222222',
    textAlign: 'center',
    padding: '0',
    margin: '0 auto 30px'
  }

  return (
    <a href={props.apptree.banner.link} target="_blank" rel="noopener noreferrer">
      <img
        src={propsTree.banner.url}
        style={{display: 'block'}}
        width="680"
        height=""
        alt=""
      />
    </a>
  )

}


