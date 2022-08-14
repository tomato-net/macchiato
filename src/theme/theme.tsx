import {createTheme, LinkProps, ListItemButtonProps, Theme} from "@mui/material";
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
} from 'react-router-dom';
import {forwardRef} from "react";

const LinkBehaviour = forwardRef<
        any,
        Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
    >((props, ref) => {
    const { href, ...other } = props;
    return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

export const lightTheme: Theme = createTheme({
    palette: {
        mode: 'light',
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehaviour,
            } as LinkProps
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour,
            },
        },
        MuiListItemButton: {
            defaultProps: {
                component: LinkBehaviour,
            } as ListItemButtonProps
        },
    },
})

export const darkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehaviour,
            } as LinkProps
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour,
            },
        },
        MuiListItemButton: {
            defaultProps: {
                component: LinkBehaviour,
            } as ListItemButtonProps
        },
    },
})

type Themes = {
   light: Theme;
   dark: Theme;
}

export const themes: Themes = {
    light: lightTheme,
    dark: darkTheme,
}
