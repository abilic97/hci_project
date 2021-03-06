import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import ContactHeader from "../modules/ContactHeader"
import ContactForm from "../modules/ContactForm"

const IndexPage = () => (
  <main>
    <HeaderFooterLayout activeTab="Contact">
        <ContactHeader />
        <ContactForm />

    </HeaderFooterLayout>
  </main>
)

export default IndexPage
