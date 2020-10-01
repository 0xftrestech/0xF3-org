import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Text } from "rebass"


export default () => (
  <Layout m={["120px auto  3rem", "80px auto  3rem"]}>
    <SEO />
    <Box mb={["100px", "160px"]} mt={["100px", "160px"]}>
      <Text
        fontSize={["38px", "74px"]}
        lineHeight={["50px", "89px"]}
        color="#1b202b"
        maxWidth="920px"
        fontWeight="bold"
      >
        <a href="/about" rel="noopener noreferrer">
          0xF3 
        </a>{" "}
        is a token focused on connecting people.
      </Text>
    </Box>
  </Layout>
)
