import {Box, Typography} from "@mui/material";
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
            {books && books.map((b) => (
                <li key={b.id}>
                        {b.title} : {b.blurb?.content} : {b.author.name} : {b.series.name}
                </li>
            ))}
        </Box>
    )
}