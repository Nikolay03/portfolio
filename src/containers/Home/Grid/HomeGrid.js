import React from 'react'
import Layout from 'layouts'
import Container from 'components/Container'
import Header from 'containers/Home/Grid/Sections/Header'
import Cover from 'containers/Home/Grid/Sections/Cover'
import Footer from 'containers/Home/Grid/Sections/Footer'
import Works from 'containers/Home/Grid/Sections/Works'

const HomeGrid = (props) => {
  const {
    works,
    ...restProps
  } = props

  return (
    <>
      <Layout>
        <Header
          {...restProps}
        />
        <Container>
          <Cover />
          <Works
            works={works}
          />
          <Footer />
        </Container>
      </Layout>
    </>
  )
}

export default HomeGrid
