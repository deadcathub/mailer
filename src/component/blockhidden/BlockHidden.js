import React from "react";

export const BlockHidden = props => {

  return (
    <div style={{maxHeight: '0', maxWidth: '0', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1px', lineHeight: '1px', opacity: '0', overflow: 'hidden', msoHide: 'all', display: 'none'}}>
      {props.text}
    </div>
  )

}


