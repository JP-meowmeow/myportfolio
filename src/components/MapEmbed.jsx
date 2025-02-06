import React from 'react'

function MapEmbed() {
  return (
    <div >
<h2 className="text-4xl md:text-5xl font-bold text-center mb-8  text-black text-shadow-sm">
          Location
        </h2>
    <div className='mx-auto w-4/5 md:w-full' style={{ position: "relative", overflow: "hidden", paddingBottom: "56.25%", height: 0 }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3777.820157603769!2d99.06021447519754!3d18.761568482379328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ1JzQxLjciTiA5OcKwMDMnNDYuMCJF!5e0!3m2!1sen!2sth!4v1738850695171!5m2!1sen!2sth"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
    </div>
  )
}

export default MapEmbed