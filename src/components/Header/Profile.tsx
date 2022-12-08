import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center" ml="auto">

            <Flex align="center">

                {showProfileData && (
                    <Box mr="4" textAlign="right">
                        <Text>Leonardo Meira</Text>
                        <Text color="gray.300" fontSize="small">
                            meiraleoabr@gmail.com
                        </Text>
                    </Box>
                )}
                

                <Avatar size="md" name="Leonardo Meira" src="https://github.com/leonardomeira.png" />
            </Flex>
        </Flex>
    );
}