import React, {useState} from 'react'
import styled from 'styled-components'
import {WorkCard} from 'components/Cards'
import {mediaQueries} from 'constants/mediaQueries'
import {map, prop, propOr} from 'ramda'
import HomeModal from '../../HomeModal'

const Wrap = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 30px;
  & > *:nth-child(even) {
    margin-top: 30px;
  }
  @media ${mediaQueries.tabletS}{
    grid-template-columns: 1fr;
    grid-gap: 30px 0;
    & > *:nth-child(even) {
      margin-top: 0;
    }
  }
  @media ${mediaQueries.mobileL}{
    grid-gap: 10px 0;
  }
`

const Works = (props) => {
  const {
    works
  } = props

  const [open, setOpen] = useState(false)

  // Redirects
  const goImageViewer = (item) => {
    setOpen(item)
  }
  // Works list
  const worksList = map((item) => {
    const title = prop('title', item)
    const subtitle = prop('subtitle', item)
    const year = prop('year', item)
    const img = prop('img', item)
    const withDetail = prop('withDetail', item)
    const id = prop('id', item)

    return (
      <WorkCard
        title={title}
        subtitle={subtitle}
        year={year}
        img={img}
        withDetail={withDetail}
        key={id}
        onLink={() => {
          goImageViewer(item)
        }}
      />
    )
  }, works)

  return (
    <>
      <Wrap>
        {worksList}
      </Wrap>
      <HomeModal
        images={propOr([], 'images', open)}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default Works
