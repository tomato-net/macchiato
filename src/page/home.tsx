import {Box, Card, Grid, IconButton, Link} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {Book, ListBooksQuery} from "../API";
import {API, graphqlOperation} from "aws-amplify";
import {listBooks} from "../graphql/queries";
import {useMemo, useState} from "react";

export const Home: React.FC<{}> = () => {
    const [books, setBooks] = useState<Book[]>([])

    useMemo(async () => {
        const listBooksQuery = await API.graphql(graphqlOperation(listBooks)) as { data: ListBooksQuery }
        if (listBooksQuery.data.listBooks?.items !== null && listBooksQuery.data.listBooks?.items !== undefined) {
            setBooks(listBooksQuery.data.listBooks.items as Book[])
        }
    }, [])

    // BookTile component for grid

    return(
        <Box>
            <Grid container justifyContent={`center`} spacing={2}>
                {books && books.map((b) => (
                    <Grid key={b.id} item xs={3}>
                        <Link href={`/listen/${b.id}`} underline={`none`}>
                            <Card
                                sx={{
                                    height: 300,
                                    width: 250,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}>
                                <Grid container justifyContent={`center`} textAlign={`center`} spacing={0}>
                                    <Grid key={`edit`} item xs={12}>
                                        <IconButton href={`/edit/${b.id}`}>
                                            <EditIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid key={`title`} item xs={12}>
                                        {b.title}
                                    </Grid>
                                    <Grid key={`author`} item xs={6}>
                                        {b.author.name}
                                    </Grid>
                                    <Grid key={`series`} item xs={6}>
                                        {b.series.name}
                                    </Grid>
                                </Grid>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}