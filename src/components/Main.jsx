import { useState, useEffect } from 'react'

import { Header } from './header'
// import { Features } from './features'
import { About } from './about'
import { Services } from './services'
import { Gallery } from './gallery'
import { Testimonials } from './testimonials'
// import { Team } from './Team'
import { Contact } from './contact'
import JsonData from '../data/data.json'

export const MainComponent = () => {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])

    return (<div>
        <Header data={landingPageData.Header} />
        {/* <Features data={landingPageData.Features} /> */}
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery />
        <Testimonials data={landingPageData.Testimonials} />
        {/* <Team data={landingPageData.Syllabus} /> */}
        <Contact data={landingPageData.Contact} />
    </div>)
}