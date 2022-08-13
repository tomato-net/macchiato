import {Box, IconButton, Stack} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Outlet} from "react-router-dom";

export const Layout: React.FC<{}> = () => {
    return(
        <Box sx={{ height: '100%', p: 2 }}>
            <IconButton href={`/create`} aria-label="delete">
                <AddCircleIcon />
            </IconButton>
            <Stack sx={{ width: '100%' }}>
                <Outlet />
            </Stack>
        </Box>
    )
}