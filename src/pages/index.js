import React from "react"
import "../style.css"
import Header from "../components/header"
import CurrencyList from "../components/currency-list"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

function index({ data }) {
  const currencyList = data.allCurrencyItem.edges

  return (
    <div>
      <Header />
      <CurrencyList data={currencyList} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gengi gjaldmiðla</title>
      </Helmet>
    </div>
  )
}

export default index

export const query = graphql`
query CurrencyList {
  allCurrencyItem {
    edges {
      node {
        id
        shortName
        longName
        value
        changeCur
      }
    }
  }
}
`;