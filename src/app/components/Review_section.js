import React from 'react'
const Review_section = ({bg}) => {
  return (
    <section className={`py-14 lg:py-20 2xl:py-100 text-center ${bg} bg-opacity-25`}>
        <div className="container">
            <div className="flex flex-col gap-[34px] items-center">
                <div>
                    <h2 className="text-h2 mb-4">
                    Das sagen unsere Patienten
                    </h2>
                    <span className="w-28 h-1 bg-yellow block mx-auto"></span>
                </div>
                <div className="text-p space-y-4">
                    <p>
                    Unser Team von erfahrenen Psychotherapeuten ist jederzeit für Sie da. Sorgfalt, Vertrauen und Verlässlichkeit sind für uns dabei sehr wichtig – Ihr ehrliches Feedback hilft uns dabei.
                    </p>
                </div>
                <img role="img" src="/images/google-reviews.png" alt="google-reviews"/>
            </div>
        </div>
    </section>
  )
}
export default Review_section