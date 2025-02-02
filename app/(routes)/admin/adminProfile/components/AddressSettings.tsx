import { Flex, Text, VStack } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import React from "react";
import prismadb from "@/lib/db";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LeftStackForProfile from "./LeftStackForProfile";
import { getJustSession } from "@/helpers/get-user-session";

const AddressSettings = async () => {
  const user = await getJustSession();

  const userDetail = await prismadb.user.findUnique({
    where: { id: user?.id },
    include: {
      Ilanlar: true,
    },
  });

  const userBasedPost = await prismadb.ilan.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      images: true,
    },
  });
  return (
    <div className=" w-full">
      <Flex
        flex={2}
        justifyContent={"center"}
        minH={"100vh"}
        className=" w-full"
        backgroundColor={"white"}
      >
        <Flex className=" w-full" justifyContent={"center"}>
          <VStack className=" w-full" gap={"20px"}>
            <ProfileHeader userDetail={userDetail} />

            <Flex
              w={{ base: "100%" }}
              h={"63px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text color={"black"} fontSize={"18.79px"}>
                Posts:
              </Text>
            </Flex>

            {userBasedPost
              ? userBasedPost.map((item) => (
                  <Accordion
                    key={item.id}
                    type="single"
                    collapsible
                    className=" w-full"
                  >
                    <AccordionItem value={item.id}>
                      <AccordionTrigger>
                        <div className=" w-full h-full flex flex-col justify-start items-start">
                          <div className=" w-full h-full flex flex-row justify-between">
                            <h2>Sipariş No:{item.id}</h2>
                          </div>
                          {item.createdAt.toDateString()}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                      <LeftStackForProfile ilans = {item}/>

                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))
              : null}
          </VStack>
        </Flex>{" "}
      </Flex>
    </div>
  );
};

export default AddressSettings;
