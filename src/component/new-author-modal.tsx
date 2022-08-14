import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, TextField} from "@mui/material"
import {useState} from "react";
import {
    CreateAuthorInput,
    CreateAuthorMutationVariables,
} from "../API";
import {API, graphqlOperation} from "aws-amplify";
import {createAuthor} from "../graphql/mutations";

export interface NewAuthorModalProps extends DialogProps {
    closeFn: () => void;
}

export const NewAuthorModal: React.FC<NewAuthorModalProps> = props => {
    const [author, setAuthor] = useState<CreateAuthorInput>({ name: "" })
    const create = async () => {
        const variables = { input: author } as CreateAuthorMutationVariables
        await API.graphql(graphqlOperation(createAuthor,  variables))
        setAuthor({ name: "" })
        props.closeFn()
    }

    return(
        <Dialog {...props}>
            <DialogTitle>New Author</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Create a new author
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="name"
                    fullWidth
                    variant="standard"
                    value={author.name}
                    onChange={(e) => setAuthor({
                        ...author,
                        name: e.target.value
                    })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeFn}>Cancel</Button>
                <Button onClick={create}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}