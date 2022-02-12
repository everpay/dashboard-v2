/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://everpayinc.com"
          target="_blank"
        >
          {document.documentElement.dir === "rtl"
            ? " توقيت الإبداعية"
            : "Everpay Inc "}
        </Link>
        {' Powered by '} 
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://elektropay.com"
          target="_blank"
        >
          {document.documentElement.dir === "rtl" ? "Elektropay" : "Elektropay"}
        </Link>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link href="https://status.everpayinc.com"
            target="_blank"
            color="gray.400">
            {document.documentElement.dir === "rtl"
              ? "Status"
              : "Status"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400"
            target="_blank"
            href="https://support.everpayinc.com">
            {document.documentElement.dir === "rtl" ? "Support" : "Support"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
