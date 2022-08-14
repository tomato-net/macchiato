/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
      id
      title
      blurb {
        content
      }
      author {
        id
        name
        books {
          items {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          nextToken
        }
        series {
          items {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      series {
        id
        name
        description
        author {
          id
          name
          books {
            nextToken
          }
          series {
            nextToken
          }
          createdAt
          updatedAt
        }
        books {
          items {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          nextToken
        }
        createdAt
        updatedAt
        authorSeriesId
        seriesAuthorId
      }
      parts {
        items {
          id
          name
          order
          book {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          chapters {
            nextToken
          }
          createdAt
          updatedAt
          bookPartsId
        }
        nextToken
      }
      createdAt
      updatedAt
      seriesBooksId
      authorBooksId
      bookAuthorId
      bookSeriesId
    }
  }
`;
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
      id
      title
      blurb {
        content
      }
      author {
        id
        name
        books {
          items {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          nextToken
        }
        series {
          items {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      series {
        id
        name
        description
        author {
          id
          name
          books {
            nextToken
          }
          series {
            nextToken
          }
          createdAt
          updatedAt
        }
        books {
          items {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          nextToken
        }
        createdAt
        updatedAt
        authorSeriesId
        seriesAuthorId
      }
      parts {
        items {
          id
          name
          order
          book {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          chapters {
            nextToken
          }
          createdAt
          updatedAt
          bookPartsId
        }
        nextToken
      }
      createdAt
      updatedAt
      seriesBooksId
      authorBooksId
      bookAuthorId
      bookSeriesId
    }
  }
`;
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
      id
      title
      blurb {
        content
      }
      author {
        id
        name
        books {
          items {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          nextToken
        }
        series {
          items {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      series {
        id
        name
        description
        author {
          id
          name
          books {
            nextToken
          }
          series {
            nextToken
          }
          createdAt
          updatedAt
        }
        books {
          items {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          nextToken
        }
        createdAt
        updatedAt
        authorSeriesId
        seriesAuthorId
      }
      parts {
        items {
          id
          name
          order
          book {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          chapters {
            nextToken
          }
          createdAt
          updatedAt
          bookPartsId
        }
        nextToken
      }
      createdAt
      updatedAt
      seriesBooksId
      authorBooksId
      bookAuthorId
      bookSeriesId
    }
  }
`;
export const createSeries = /* GraphQL */ `
  mutation CreateSeries(
    $input: CreateSeriesInput!
    $condition: ModelSeriesConditionInput
  ) {
    createSeries(input: $input, condition: $condition) {
      id
      name
      description
      author {
        id
        name
        books {
          items {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          nextToken
        }
        series {
          items {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      books {
        items {
          id
          title
          blurb {
            content
          }
          author {
            id
            name
            createdAt
            updatedAt
          }
          series {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          seriesBooksId
          authorBooksId
          bookAuthorId
          bookSeriesId
        }
        nextToken
      }
      createdAt
      updatedAt
      authorSeriesId
      seriesAuthorId
    }
  }
`;
export const updateSeries = /* GraphQL */ `
  mutation UpdateSeries(
    $input: UpdateSeriesInput!
    $condition: ModelSeriesConditionInput
  ) {
    updateSeries(input: $input, condition: $condition) {
      id
      name
      description
      author {
        id
        name
        books {
          items {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          nextToken
        }
        series {
          items {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      books {
        items {
          id
          title
          blurb {
            content
          }
          author {
            id
            name
            createdAt
            updatedAt
          }
          series {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          seriesBooksId
          authorBooksId
          bookAuthorId
          bookSeriesId
        }
        nextToken
      }
      createdAt
      updatedAt
      authorSeriesId
      seriesAuthorId
    }
  }
`;
export const deleteSeries = /* GraphQL */ `
  mutation DeleteSeries(
    $input: DeleteSeriesInput!
    $condition: ModelSeriesConditionInput
  ) {
    deleteSeries(input: $input, condition: $condition) {
      id
      name
      description
      author {
        id
        name
        books {
          items {
            id
            title
            createdAt
            updatedAt
            seriesBooksId
            authorBooksId
            bookAuthorId
            bookSeriesId
          }
          nextToken
        }
        series {
          items {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      books {
        items {
          id
          title
          blurb {
            content
          }
          author {
            id
            name
            createdAt
            updatedAt
          }
          series {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          seriesBooksId
          authorBooksId
          bookAuthorId
          bookSeriesId
        }
        nextToken
      }
      createdAt
      updatedAt
      authorSeriesId
      seriesAuthorId
    }
  }
`;
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
      id
      name
      books {
        items {
          id
          title
          blurb {
            content
          }
          author {
            id
            name
            createdAt
            updatedAt
          }
          series {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          seriesBooksId
          authorBooksId
          bookAuthorId
          bookSeriesId
        }
        nextToken
      }
      series {
        items {
          id
          name
          description
          author {
            id
            name
            createdAt
            updatedAt
          }
          books {
            nextToken
          }
          createdAt
          updatedAt
          authorSeriesId
          seriesAuthorId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
      id
      name
      books {
        items {
          id
          title
          blurb {
            content
          }
          author {
            id
            name
            createdAt
            updatedAt
          }
          series {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          seriesBooksId
          authorBooksId
          bookAuthorId
          bookSeriesId
        }
        nextToken
      }
      series {
        items {
          id
          name
          description
          author {
            id
            name
            createdAt
            updatedAt
          }
          books {
            nextToken
          }
          createdAt
          updatedAt
          authorSeriesId
          seriesAuthorId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
      id
      name
      books {
        items {
          id
          title
          blurb {
            content
          }
          author {
            id
            name
            createdAt
            updatedAt
          }
          series {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          seriesBooksId
          authorBooksId
          bookAuthorId
          bookSeriesId
        }
        nextToken
      }
      series {
        items {
          id
          name
          description
          author {
            id
            name
            createdAt
            updatedAt
          }
          books {
            nextToken
          }
          createdAt
          updatedAt
          authorSeriesId
          seriesAuthorId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPart = /* GraphQL */ `
  mutation CreatePart(
    $input: CreatePartInput!
    $condition: ModelPartConditionInput
  ) {
    createPart(input: $input, condition: $condition) {
      id
      name
      order
      book {
        id
        title
        blurb {
          content
        }
        author {
          id
          name
          books {
            nextToken
          }
          series {
            nextToken
          }
          createdAt
          updatedAt
        }
        series {
          id
          name
          description
          author {
            id
            name
            createdAt
            updatedAt
          }
          books {
            nextToken
          }
          createdAt
          updatedAt
          authorSeriesId
          seriesAuthorId
        }
        parts {
          items {
            id
            name
            order
            createdAt
            updatedAt
            bookPartsId
          }
          nextToken
        }
        createdAt
        updatedAt
        seriesBooksId
        authorBooksId
        bookAuthorId
        bookSeriesId
      }
      chapters {
        items {
          id
          name
          order
          part {
            id
            name
            order
            createdAt
            updatedAt
            bookPartsId
          }
          file
          createdAt
          updatedAt
          partChaptersId
        }
        nextToken
      }
      createdAt
      updatedAt
      bookPartsId
    }
  }
`;
export const updatePart = /* GraphQL */ `
  mutation UpdatePart(
    $input: UpdatePartInput!
    $condition: ModelPartConditionInput
  ) {
    updatePart(input: $input, condition: $condition) {
      id
      name
      order
      book {
        id
        title
        blurb {
          content
        }
        author {
          id
          name
          books {
            nextToken
          }
          series {
            nextToken
          }
          createdAt
          updatedAt
        }
        series {
          id
          name
          description
          author {
            id
            name
            createdAt
            updatedAt
          }
          books {
            nextToken
          }
          createdAt
          updatedAt
          authorSeriesId
          seriesAuthorId
        }
        parts {
          items {
            id
            name
            order
            createdAt
            updatedAt
            bookPartsId
          }
          nextToken
        }
        createdAt
        updatedAt
        seriesBooksId
        authorBooksId
        bookAuthorId
        bookSeriesId
      }
      chapters {
        items {
          id
          name
          order
          part {
            id
            name
            order
            createdAt
            updatedAt
            bookPartsId
          }
          file
          createdAt
          updatedAt
          partChaptersId
        }
        nextToken
      }
      createdAt
      updatedAt
      bookPartsId
    }
  }
`;
export const deletePart = /* GraphQL */ `
  mutation DeletePart(
    $input: DeletePartInput!
    $condition: ModelPartConditionInput
  ) {
    deletePart(input: $input, condition: $condition) {
      id
      name
      order
      book {
        id
        title
        blurb {
          content
        }
        author {
          id
          name
          books {
            nextToken
          }
          series {
            nextToken
          }
          createdAt
          updatedAt
        }
        series {
          id
          name
          description
          author {
            id
            name
            createdAt
            updatedAt
          }
          books {
            nextToken
          }
          createdAt
          updatedAt
          authorSeriesId
          seriesAuthorId
        }
        parts {
          items {
            id
            name
            order
            createdAt
            updatedAt
            bookPartsId
          }
          nextToken
        }
        createdAt
        updatedAt
        seriesBooksId
        authorBooksId
        bookAuthorId
        bookSeriesId
      }
      chapters {
        items {
          id
          name
          order
          part {
            id
            name
            order
            createdAt
            updatedAt
            bookPartsId
          }
          file
          createdAt
          updatedAt
          partChaptersId
        }
        nextToken
      }
      createdAt
      updatedAt
      bookPartsId
    }
  }
`;
export const createChapter = /* GraphQL */ `
  mutation CreateChapter(
    $input: CreateChapterInput!
    $condition: ModelChapterConditionInput
  ) {
    createChapter(input: $input, condition: $condition) {
      id
      name
      order
      part {
        id
        name
        order
        book {
          id
          title
          blurb {
            content
          }
          author {
            id
            name
            createdAt
            updatedAt
          }
          series {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          seriesBooksId
          authorBooksId
          bookAuthorId
          bookSeriesId
        }
        chapters {
          items {
            id
            name
            order
            file
            createdAt
            updatedAt
            partChaptersId
          }
          nextToken
        }
        createdAt
        updatedAt
        bookPartsId
      }
      file
      createdAt
      updatedAt
      partChaptersId
    }
  }
`;
export const updateChapter = /* GraphQL */ `
  mutation UpdateChapter(
    $input: UpdateChapterInput!
    $condition: ModelChapterConditionInput
  ) {
    updateChapter(input: $input, condition: $condition) {
      id
      name
      order
      part {
        id
        name
        order
        book {
          id
          title
          blurb {
            content
          }
          author {
            id
            name
            createdAt
            updatedAt
          }
          series {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          seriesBooksId
          authorBooksId
          bookAuthorId
          bookSeriesId
        }
        chapters {
          items {
            id
            name
            order
            file
            createdAt
            updatedAt
            partChaptersId
          }
          nextToken
        }
        createdAt
        updatedAt
        bookPartsId
      }
      file
      createdAt
      updatedAt
      partChaptersId
    }
  }
`;
export const deleteChapter = /* GraphQL */ `
  mutation DeleteChapter(
    $input: DeleteChapterInput!
    $condition: ModelChapterConditionInput
  ) {
    deleteChapter(input: $input, condition: $condition) {
      id
      name
      order
      part {
        id
        name
        order
        book {
          id
          title
          blurb {
            content
          }
          author {
            id
            name
            createdAt
            updatedAt
          }
          series {
            id
            name
            description
            createdAt
            updatedAt
            authorSeriesId
            seriesAuthorId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          seriesBooksId
          authorBooksId
          bookAuthorId
          bookSeriesId
        }
        chapters {
          items {
            id
            name
            order
            file
            createdAt
            updatedAt
            partChaptersId
          }
          nextToken
        }
        createdAt
        updatedAt
        bookPartsId
      }
      file
      createdAt
      updatedAt
      partChaptersId
    }
  }
`;
