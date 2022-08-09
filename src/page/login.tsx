import {Authenticator} from "@aws-amplify/ui-react";
import {Box} from "@mui/material";

export const Login: React.FC<{}> = () => {
    return(
        <Authenticator>
            {({ signOut, user }) => (
                <Box>
                    {user != undefined && (
                        <Box>
                            <h1>Hello {user.username}</h1>
                            <button onClick={signOut}>Sign out</button>
                        </Box>
                    )}
                </Box>
            )}
        </Authenticator>
    )
}
