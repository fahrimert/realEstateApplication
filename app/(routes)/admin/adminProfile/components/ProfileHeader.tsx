"use client"
import {
  Flex,
  Text,
  VStack,
  Box,
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";
/* Profildeki edit modalını daha yapmadım çok gerekli de değil zaten bi ismi güncelliyor */
import React from 'react'
import Image from "next/image";
import { Ilan, User } from "@prisma/client";


interface AccountSettings {
  userDetail:  ({
    Ilanlar: Ilan[];
} & User) | null
}
const ProfileHeader :  React.FC<AccountSettings> =  ({userDetail}) => {


/*   const userBasedPosts = await prismadb.ilan.findMany({
    where:{
      userId:user?.user?.id
    }
  }) */
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="w-full">

  <Box
  className="w-full"
      h={"292px"}
      backgroundColor={"#00B37E"}
      border={"1PX"}
      borderRadius={"20PX"}
    >
      <VStack 
  className="w-full"
      
      gap={"-4px"}>
        <Flex
  className="w-full"

          w={{ md: "100%", base: "100%" }}
          mt={"39px"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"46px"}
        >
          <Text 
          
          color={"black"}>
              <Text>Welcome {userDetail!.name}</Text>
          </Text>
        </Flex>
        <Flex
  className="w-full"

          w={{ md: "100%", base: "100%" }}
          mt={"39px"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"46px"}
        >
      
        </Flex>


        <HStack gap={"30px"} h={"150px"}>
          <Box >
            <Box >
                <Text color={"black"}>Şu Kadar İlanın Var :{userDetail?.Ilanlar.length} </Text>
            </Box>
          </Box>
      
        </HStack>
      </VStack>
    </Box>
    </div>
  
  );
};

export default ProfileHeader
