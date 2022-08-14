import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogProps,
    DialogTitle,
    TextField
} from "@mui/material"
import {useState} from "react";
import {
    CreateSeriesInput,
    CreateSeriesMutationVariables, Author,
} from "../API";
import {API, graphqlOperation} from "aws-amplify";
import {createSeries} from "../graphql/mutations";

export interface NewSeriesModalProps extends DialogProps {
    closeFn: () => void;
    authors: Author[];
}

export const NewSeriesModal: React.FC<NewSeriesModalProps> = props => {
    const [series, setSeries] = useState<CreateSeriesInput>({ name: "", description: "", seriesAuthorId: "" })
    const create = async () => {
        const variables = { input: series } as CreateSeriesMutationVariables
        await API.graphql(graphqlOperation(createSeries,  variables))
        props.closeFn()
    }

    return(
        <Dialog {...props}>
            <DialogTitle>New Series</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Create a new series
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="name"
                    fullWidth
                    variant="standard"
                    value={series.name}
                    onChange={(e) => setSeries({
                        ...series,
                        name: e.target.value
                    })} />
                <TextField
                    id={`description`}
                    label={`description`}
                    fullWidth
                    multiline
                    value={series.description}
                    onChange={(e) => setSeries({
                        ...series,
                        description: e.target.value
                    })} />
                <Autocomplete
                    renderInput={(params) => (
                        <TextField
                            {...params}
                                label={`Author`}
                                InputProps={{
                                ...params.InputProps,
                            }} />)}
                    renderOption={(props, author: Author) => (
                        <li {...props} key={author.id}>
                            {author.name}
                        </li>
                    )}
                    getOptionLabel={(author: Author) => author.name}
                    onChange={(e, author) => author && setSeries({
                        ...series,
                        seriesAuthorId: author.id,
                    })}
                    options={props.authors} />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeFn}>Cancel</Button>
                <Button onClick={create}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}