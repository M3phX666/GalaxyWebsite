import React from 'react'

const Dots = (props) => {
    return (
        <div className='all-dots'>
            {props.imageSlider.map((slide, index) => (
                <span
                    key={index}
                    className={`${props.activeIndex === index ? 'dot active-dot' : 'dot'}`} 
                    onClick={() => props.onclick(index)}
      ></span>
    ))
}
    </div >
  )
}

export default Dots
