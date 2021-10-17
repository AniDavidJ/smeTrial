

import Head from 'next/head'
import Image from 'next/image'
import BusinessHelp from '../src/containers/Landpage/components/BusinessHelp';
import AllBenefits from '../src/containers/Landpage/components/AllBenefits';
import HeroBanner from '../src/containers/Landpage/components/HeroBanner';
import Header from '../src/components/Header';
import SolutionService from '../src/containers/Landpage/components/SolutionService';
import Footer from '../src/containers/Landpage/components/Footer';

export default function Home() {
  return (
    <div >
     <Header/>
      <HeroBanner/>
      {/* <Partnership/> */}
      <BusinessHelp />
      <AllBenefits />
      <SolutionService/>
      <Footer/>
    </div>
  )
}
