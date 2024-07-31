import React from 'react'

const ContactUsInfo = () => {
  return (
    <div className='d-flex flex-column px-4 pt-5 pb-2 bg-primary' style={{ marginTop: "-3rem", height: '512px', minHeight: '512px' , width: '457px' }}>
        <div className='contact_us_title'>
            <h2 className='text-black fw-semibold'>Contact Us</h2>
        </div>

        <p className='text-white'>
            If you are seeking our services or would like to schedule a consultation with one of our immigration attorneys, please contact us on the given information:
        </p>

        <div className="flex-column">
            <p className="text-black mb-0 fw-semibold">For Further Queries</p>
            <p className="text-white">
                <a className="text-decoration-none" href="mailto:Info@saadahsan.com">Info@saadahsan.com</a>
            </p>
        </div>

        <div className="flex-column">
            <p className="text-black mb-0 fw-semibold">Call To Get More Information</p>
            <p className="text-white mb-0">
                <a className="text-decoration-none" href="tel:+923018488944">+92 301 84 88 944</a>
            </p>
            <p className="text-white">
                <a className="text-decoration-none" href="tel:+9242358350035">+92 42 358 3500 35</a>
            </p>
        </div>

        <div className="flex-column">
            <p className="text-black mb-0 fw-semibold">WhatsApp</p>
            <p className="text-white">
                <a className="text-decoration-none" href="tel:+923008471444">+92 300 84 71 444</a>
            </p>
        </div>

        <div className='flex-column mt-2'>
            <a href="#" className='text-white border border-white px-3 py-2'>Book Appointment</a>
        </div>    

    </div>
  )
}

export default ContactUsInfo