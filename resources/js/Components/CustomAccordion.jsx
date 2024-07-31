import React from 'react'
import { IconPlus } from '@tabler/icons-react'
import Button from 'react-bootstrap/Button'

const CustomAccordion = ({items}) => {
  return (
    <>
      {
        items.map((item, index) => (
          <div className="d-flex flex-row gap-2 mb-4 align-items-center" key={index}>
            <div className='d-flex flex-column bg-black rounded text-white p-1'>
              <h4 className='fw-bold mb-0'>0{index+1}</h4>
            </div> 
            <div className='d-flex flex-column'>
                <div className='d-flex gap-2 align-items-center'>
                <div>
                  <p className='mb-0 fw-bold text-black'>{item.title}</p>
                </div> 
                <div>
                  <button className='btn bg-black px-2 pt-1' style={{ borderRadius: '100%', outline: 'none', border: 'none' }}>
                    <IconPlus size={18} className='text-white m-0 p-0'/>
                  </button>
                </div>
                </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default CustomAccordion