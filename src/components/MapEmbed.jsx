import React from 'react'

function MapEmbed() {
  return (
    <div >
<h2 className="text-4xl md:text-5xl font-bold text-center mb-8  text-black text-shadow-sm">
          Location
        </h2>
    <div style={{ position: "relative", overflow: "hidden", paddingBottom: "56.25%", height: 0 }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.8854575938853!2d99.05804117496905!3d18.7586526823817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2f68e775c83f%3A0xef26618ec0bba4a0!2sBaan%20Khantoke%20Halal!5e0!3m2!1sen!2sth!4v1738477789062!5m2!1sen!2sth"
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