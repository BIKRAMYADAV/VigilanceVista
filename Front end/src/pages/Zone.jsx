import React from 'react';

function Zone() {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-fit overflow-hidden">
                            <iframe src="https://sdd1leo.github.io/map/" frameBorder="0" width={1000} height={500}></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Zone;