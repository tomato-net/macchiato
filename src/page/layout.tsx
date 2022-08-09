import {Box, Stack} from "@mui/material";
import {Outlet} from "react-router-dom";

export const Layout: React.FC<{}> = () => {
    return(
        <Box sx={{ height: '100%', p: 2 }}>
            <Stack sx={{ width: '100%' }}>
                <Outlet />
            </Stack>
        </Box>
    )
}