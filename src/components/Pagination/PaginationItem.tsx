import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    isCurrent?: boolean;
    number: number;
    onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size='md'
                fontSize='xs'
                width='4'
                colorScheme='teal'
                disabled
                _disabled={{
                    bg: 'teal.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size='md'
            fontSize='xs'
            width='4'
            bg='gray.700'
            _hover={{
                bg: 'gray.500'
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}