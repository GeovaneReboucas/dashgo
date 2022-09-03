import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps{
    children: string;
    icon: ElementType;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
    return (
        <Link display='flex' alignItems='center' {...rest}>
            <Icon as={icon} fontSize='20' />
            <Text ml='4' fontWeight='mediun'>{children}</Text>
        </Link>
    )
}