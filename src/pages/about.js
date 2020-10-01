import React from "react"
import { Column, Row } from "simple-flexbox"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Text } from "rebass"

export default () => (
  <Layout>
    <SEO title="About" />
    <Row
      style={{ marginTop: `140px`, marginBottom: `120px` }}
      alignItems="center"
      vertical="center"
      wrapReverse
      justifyContent="space-between"
    >
      <Column
        style={{
          minWidth: 300,
          maxWidth: 780,
          marginTop: -70,
        }}
        flexGrow={1}
      >
        <Box mb="40px">
          <Text
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["1.875rem", "2.1875rem"]}
            color="#626d83"
          >
            Hey,<br></br>
            <br></br> The biggest problem with innovation is the lack of inclusion and this is happening with DeFi, our proposal and creating the best way to interact with contracts and protocols.{" "}
            
          </Text>
        </Box>
        
        <Box mb="15px">
          <Text
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["1.875rem", "2.1875rem"]}
            color="#626d83"
          >
            <a href="mailto:0xftrestech@pm.me?Subject=Hey">Send an email</a>
          </Text>
        </Box>
        <p className="about">
          <a
            href="https://twitter.com/0x_F3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          {/* <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "} */}

        </p>
        
      </Column>
    </Row>
  </Layout>
)
