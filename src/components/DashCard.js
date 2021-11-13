import React from "react"
import styled from "styled-components"

const CardItem = styled.div`
  padding: 1rem 1.8rem;
  background-color: #fff;
  border-radius: 10px;
`

const CardTop = styled.div`
  display: flex;
  align-items: center;
`

const CardStats = styled.h1`
  position: relative;
  top: 2rem;
  font-size: 2.5rem;
`

const CardLabel = styled.p`
  color: #7d8592;
  padding: 0 1.2rem;
  font-size: 1.4rem;
`
export default function DashCard({ img, label, stats }) {
  return (
    <CardItem>
      <CardTop>
        <img src={img} alt='cool' />
        <CardLabel>{label}</CardLabel>
      </CardTop>
      <CardStats>{stats}</CardStats>
    </CardItem>
  )
}
