import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import Distribution from '../components/Distribution/Distribution'

const DistributionPage = () => {
  return (
    <>
    <TopNavigation title="Talukder Group" />
    <PageTop pageTitle="Talukder Distribution" />
    <Distribution />
    <Footer />

    </>
  )
}

export default DistributionPage