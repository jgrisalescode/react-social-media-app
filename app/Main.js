import React from "react"
import ReactDOM from "react-dom"

// Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeGuest from "./components/HomeGuest"

function Main() {
  return (
    <>
      <Header />
      <HomeGuest />
      <Footer />
    </>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
