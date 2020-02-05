import React from "react";

export const BlockOutro = props => {

  const styleCta = {
    maxWidth: '500px',
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: '21px',
    lineHeight: '1.6',
    color: '#222222',
    textAlign: 'center',
    padding: '0',
    margin: '-5px auto 25px'
  }

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

  if ( props.apptree.outro.ctaText ) {
    return (
      <div className="js-block js-block-outro" style={{textAlign: 'center', marginTop: 35, marginBottom: 35}}>
        <p align="center" valign="top" style={styleCta}>
          {props.apptree.outro.ctaText}
        </p>
        <a href={props.apptree.outro.btnLink} style={styleButton} target="_blank" rel="noopener noreferrer">
          {props.apptree.outro.btnText}
        </a>
      </div>
    )
  }  else {
    return (
      <div className="js-block js-block-outro" style={{textAlign: 'center', marginTop: 35, marginBottom: 35}}>
        <a href={props.apptree.outro.btnLink} style={styleButton} target="_blank" rel="noopener noreferrer">
          {props.apptree.outro.btnText}
        </a>
      </div>
    )

  }

  

}


