import {Button, Container, TextField} from "@mui/material"
import {useState} from "react";
import {CreateBookInput} from "../API";


export const New: React.FC<{}> = () => {
    const [book, setBook] = useState<CreateBookInput>({ title: "" })

    return(
        <Container>
            <TextField
                required
                label={`title`}
                value={book?.title}
                onChange={(e) => setBook({ ...book, title: e.target.value.trim() })} />
            <TextField
                required
                label={`blurb`}
                value={book?.blurb?.content}
                onChange={(e) => setBook({
                    ...book,
                    blurb: {
                        content: e.target.value.trim()
                    }
                })} />
            <Button
                onClick={() => setBook({ title: "", blurb: { content: "" } })}>
                Submit
            </Button>

            {book?.title}
            {book?.blurb?.content}
        </Container>
    )
}