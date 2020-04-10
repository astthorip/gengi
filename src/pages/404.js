import React from 'react'
import "../style.css"
import Header from "../components/header"
import { Helmet } from "react-helmet"
import Intent from "../components/link"

function ErrorPage() {
    return (
        <div>
        <Header />
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <p>Síða fannst ekki</p>
                    <p>
                        <Intent to="/">Skoða gengi gjaldmiðla</Intent>
                    </p>
                </div>
            </div>
        </div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>404 síða fannst | Gengi gjaldmiðla</title>
        </Helmet>
      </div>
    )
}

export default ErrorPage
