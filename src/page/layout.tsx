import {Box, Container, IconButton, Stack} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import {Outlet} from "react-router-dom";

export const Layout: React.FC<{}> = () => {
    return(
        <Box sx={{ height: '100%', p: 2 }}>
            <IconButton href={`/create`} aria-label={`delete`}>
                <AddCircleIcon />
            </IconButton>
            <IconButton href={`/`} aria-label={`home`}>
                <HomeIcon />
            </IconButton>
            <Container>
                <Outlet />
            </Container>
        </Box>
    )
}