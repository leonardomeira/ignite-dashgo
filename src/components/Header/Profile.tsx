import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function Profile() {
    return (
        <Flex
            align="center"
            ml="auto"
        >

            <Flex align="center">
                <Box
                    mr="4"
                    textAlign="right"
                >
                    <Text>Leonardo Meira</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >
                        meiraleoabr@gmail.com
                    </Text>
                </Box>

                <Avatar
                    size="md"
                    name="Leonardo Meira"
                    src="https://github.com/leonardomeira.png"
                />
            </Flex>
        </Flex>
    );
}