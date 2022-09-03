import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface PorfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: PorfileProps) {
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Geovane Rebouças</Text>
                    <Text color='gray.300' fontSize='small'>email@gmail.com</Text>
                </Box>
            )}

            <Avatar size='md' name='Geovane Rebouças' src='https://github.com/GeovaneReboucas.png' />
        </Flex>
    )
}