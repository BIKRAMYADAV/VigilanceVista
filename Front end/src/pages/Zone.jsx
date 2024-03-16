import React from 'react';
import './zone.css'
function Zone() {
    return (
        <>
  <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-4 py-8 mx-auto flex flex-col">
        <div className="w-full mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden" style={{height: "calc(100vh - 100px)"}}>
                <iframe 
                    src="https://map-ml-cybersec.streamlit.app/" 
                    frameBorder="0"  
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    </div>
</section>


        </>
    )
}

export default Zone;
