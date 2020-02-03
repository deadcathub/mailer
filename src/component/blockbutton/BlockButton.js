import React from "react";

export const BlockButton = props => {

  const styleButton = {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '1.5',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',
    letterSpacing: '.1em',
    color: '#ffffff',
    backgroundColor: '#f85160',
    padding: '17px 30px',
    borderRadius: '6px',
    display: 'inline-block'
  }

  return (
    <div style={{textAlign: 'center'}}>
      <a href={props.apptree.button.link} style={styleButton} target="_blank" rel="noopener noreferrer">
        {props.apptree.button.text}
      </a>
    </div>
  )

}


