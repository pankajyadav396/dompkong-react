import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import elvis from "../assets/images/Elvis.png"
import kong from "../assets/images/big-kong.png"
import hugh2 from "../assets/images/Hugh-2.png"
import hugh from "../assets/images/Hugh.png"
import heman from "../assets/images/He-Man.png"
import albert from "../assets/images/Albert.png"
import Anonymous from "../assets/images/Anonymous.png"
import prince from "../assets/images/Prince.png"
import Rambo from "../assets/images/Rambo.png"
import Royals from "../assets/images/Royals.png"
import pac from "../assets/images/2Pac.png"
import pacbig from "../assets/images/2Pac-big.png"
import elvisbig from "../assets/images/Elvis-big.png"
import albertbig from "../assets/images/Albert-big.png"
import hemanbig from "../assets/images/He-Man-big.png"
import hughbig from "../assets/images/Hugh-big.png"
import princebig from "../assets/images/Prince-big.png"
import anonymousbig from "../assets/images/Anonymous-big.png"
import rambobig from "../assets/images/Rambo-big.png"
import royalsbig from "../assets/images/Royals-big.png"
export const Kong = () => {
    return (
        <>
            <div className='bg-clr overflow-hidden position-relative vh-1030 pb-5 z-1'>
                <div className="ellipse-kong z-n1 d-none d-xl-block"></div>
                <p className=' ff-azo fw-900 fs-xxl text-white text-center mt-0 mt-lg-5'>The Kongs</p>
                <Tabs>
                    <TabList className="d-none d-lg-block">
                        <Tab><img src={Rambo} alt="elvis" className='img-tablist1 position-absolute' /></Tab>
                        <Tab><img src={hugh} alt="elvis" className='img-tablist2 position-absolute' /></Tab>
                        <Tab><img src={Anonymous} alt="elvis" className='img-tablist9 position-absolute' /></Tab>
                        <Tab><img src={Royals} alt="elvis" className='img-tablist4 position-absolute' /></Tab>
                        <Tab><img src={heman} alt="elvis" className='img-tablist5 position-absolute' /></Tab>
                        <Tab><img src={prince} alt="elvis" className='img-tablist6 position-absolute' /></Tab>
                        <Tab><img src={albert} alt="elvis" className='img-tablist7 position-absolute' /></Tab>
                        <Tab><img src={pac} alt="elvis" className='img-tablist8 position-absolute' /></Tab>
                        <Tab><img src={hugh} alt="elvis" className='img-tablist3 position-absolute' /></Tab>
                        <Tab><img src={elvis} alt="elvis" className='img-tablist10 position-absolute' /></Tab>
                    </TabList>
                    <div className='text-center mt--5'>
                        <TabPanel>
                            <img src={kong} alt="kong" className='img-tab' />
                        </TabPanel>
                        <TabPanel>
                            <img src={hughbig} alt="elvis" className='img-tab' />
                        </TabPanel>
                        <TabPanel>
                            <img src={anonymousbig} alt="kong" className='w-100 img-tab' />
                        </TabPanel>
                        <TabPanel>
                            <img src={royalsbig} alt="elvis" className='img-tab' />
                        </TabPanel>
                        <TabPanel>
                            <img src={hemanbig} alt="kong" className='img-tab' />
                        </TabPanel>
                        <TabPanel>
                            <img src={princebig} alt="elvis" className='img-tab' />
                        </TabPanel>
                        <TabPanel>
                            <img src={albertbig} alt="kong" className='img-tab' />
                        </TabPanel>
                        <TabPanel>
                            <img src={pacbig} alt="elvis" className='img-tab' />
                        </TabPanel>
                        <TabPanel>
                            <img src={hughbig} alt="kong" className='img-tab' />
                        </TabPanel>
                        <TabPanel>
                            <img src={elvisbig} alt="elvis" className='w-100 img-tab' />
                        </TabPanel>
                    </div>
                    <TabList className="d-flex overflow-scroll mt-5 gap-4 d-lg-none">
                        <Tab><img src={Rambo} alt="elvis" className='img-tablist1 img-tablist' /></Tab>
                        <Tab><img src={hugh} alt="elvis" className='img-tablist2 img-tablist' /></Tab>
                        <Tab><img src={Anonymous} alt="elvis" className='img-tablist9  img-tablist' /></Tab>
                        <Tab><img src={Royals} alt="elvis" className='img-tablist4 img-tablist' /></Tab>
                        <Tab><img src={heman} alt="elvis" className='img-tablist5 img-tablist' /></Tab>
                        <Tab><img src={prince} alt="elvis" className='img-tablist6 img-tablist' /></Tab>
                        <Tab><img src={albert} alt="elvis" className='img-tablist7 img-tablist' /></Tab>
                        <Tab><img src={pac} alt="elvis" className='img-tablist8 img-tablist' /></Tab>
                        <Tab><img src={hugh2} alt="elvis" className='img-tablist3 img-tablist' /></Tab>
                        <Tab><img src={elvis} alt="elvis" className='img-tablist10 img-tablist' /></Tab>
                    </TabList>
                </Tabs>
            </div>
        </>
    )
}
export default Kong
