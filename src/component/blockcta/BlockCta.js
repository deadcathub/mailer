import React from "react";

export const BlockCta = props => {

  const styleCta = {
    maxWidth: '500px',
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: '21px',
    lineHeight: '1.6',
    color: '#222222',
    textAlign: 'center',
    padding: '0',
    margin: '0 auto'
  }

  return (
    <div className="js-block" style={{marginTop: 30, marginBottom: 30}} onClick={props.toggleDrawer('bottom', true)}>
      <p align="center" valign="top" style={styleCta}>
        {props.apptree.cta.text}
      </p>
    </div>
  )

}


