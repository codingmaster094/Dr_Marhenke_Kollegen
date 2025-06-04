import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className="sec-page-content">
            <div className="container">
                <h2 className="wp-block-heading">Impressum</h2>
                <h2 className="wp-block-heading">Lorem xyz</h2>
                <p>Thomas Dzykowski</p>
                <p>Wattstrasse 17</p>
                <p>12459 Berlin</p>
                <p>Telephone: <Link href="tel:(+12)7 66 59 45 68" data-type="page" data-id="297">(+12)7 66 59 45 68</Link></p>
                <p>Email: <Link href="mailto:Lorem ipsum@gmail.com" data-type="page" data-id="540">Loremipsum@gmail.com</Link>
                </p>
                <p>VAT ID No.: DE354917517</p>
                <p>Register court: Registered in the register court of Berlin-Charlottenburg</p>
                <p>Registration number: HRB 244802 B</p>
                <h3 className="wp-block-heading">Responsible according to § 18 para. 2 MStV</h3>
                <p>Emil Heidenreich / Address as above</p>
                <h3 className="wp-block-heading">EU dispute resolution</h3>
                <p>The European Commission provides a platform for online dispute resolution (OS), which you can find
                    here: <a href="https://ec.europa.eu/consumers/odr/" data-type="link"
                        data-id="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a> . We are
                    neither obliged nor willing to participate in a dispute resolution procedure before a consumer
                    arbitration board.</p>
                <h3 className="wp-block-heading">Image credits:</h3>
                <p><Link href="https://marhenke.blog-s.de/test/" data-type="page" data-id="540">Hello Wold</Link></p>
            </div>
        </section>
  )
}

export default page