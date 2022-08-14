import {Autocomplete, Button, Container, IconButton, TextField} from "@mui/material"
import {useMemo, useState} from "react";
import {
    Author,
    CreateBookInput, CreateBookMutationVariables,
    CreateSeriesMutationVariables,
    ListAuthorsQuery,
    ListSeriesQuery,
    ListSeriesQueryVariables,
    Series
} from "../API";
import {API, graphqlOperation} from "aws-amplify";
import {listAuthors, listSeries} from "../graphql/queries";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {NewAuthorModal, NewSeriesModal} from "../component";
import {createBook, createSeries} from "../graphql/mutations";


export const New: React.FC<{}> = () => {
    const [book, setBook] = useState<CreateBookInput>({ title: "", bookAuthorId: "", bookSeriesId: "" })
    const [authors, setAuthors] = useState<Author[]>([])
    const [series, setSeries] = useState<Series[]>([])

    const [newAuthorModalOpen, setNewAuthorModalOpen] = useState(false)
    const [newSeriesModalOpen, setNewSeriesModalOpen] = useState(false)

    useMemo(async () => {
       const listAuthorsQuery = await API.graphql(graphqlOperation(listAuthors)) as { data: ListAuthorsQuery }
        if (listAuthorsQuery.data.listAuthors?.items !== null && listAuthorsQuery.data.listAuthors?.items !== undefined) {
            setAuthors(listAuthorsQuery.data.listAuthors.items as Author[])
        }
    }, [])

    useMemo(async () => {
        if (book.bookAuthorId !== "") {
            const variables = { filter: { seriesAuthorId: { eq: book.bookAuthorId } } } as ListSeriesQueryVariables
            const listSeriesQuery = await API.graphql(graphqlOperation(listSeries, variables)) as { data: ListSeriesQuery }
            if (listSeriesQuery.data.listSeries?.items !== null && listSeriesQuery.data.listSeries?.items !== undefined) {
                setSeries(listSeriesQuery.data.listSeries.items as Series[])
            }
        }
    }, [book.bookAuthorId])

    const create = async () => {
        const variables = { input: book } as CreateBookMutationVariables
        await API.graphql(graphqlOperation(createBook,  variables))
    }

    return(
        <Container>
            <TextField
                required
                label={`title`}
                value={book?.title}
                onChange={(e) => setBook({ ...book, title: e.target.value })} />
            <TextField
                required
                multiline
                label={`blurb`}
                value={book?.blurb?.content}
                onChange={(e) => setBook({
                    ...book,
                    blurb: {
                        content: e.target.value
                    }
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
                onChange={(e, author) => author && setBook({
                    ...book,
                    bookAuthorId: author.id,
                })}
                options={authors} />
            <IconButton onClick={() => setNewAuthorModalOpen(true)}>
                <AddCircleIcon />
            </IconButton>
            <NewAuthorModal open={newAuthorModalOpen} closeFn={() => setNewAuthorModalOpen(false)} />
            <Autocomplete
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={`Series`}
                        InputProps={{
                            ...params.InputProps,
                        }} />)}
                getOptionLabel={(series: Series) => series.name}
                onChange={(e, series) => series && setBook({
                    ...book,
                    bookSeriesId: series.id,
                })}
                options={series} />
            <IconButton onClick={() => setNewSeriesModalOpen(true)}>
                <AddCircleIcon />
            </IconButton>
            <NewSeriesModal closeFn={() => setNewSeriesModalOpen(false)} open={newSeriesModalOpen} authors={authors} />
            <Button
                onClick={create}>
                Submit
            </Button>

            {book?.title}
            {book?.blurb?.content}
            {book.bookAuthorId}
            {book.bookSeriesId}
        </Container>
    )
}