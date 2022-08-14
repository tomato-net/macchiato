/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
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
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSeries = /* GraphQL */ `
  query GetSeries($id: ID!) {
    getSeries(id: $id) {
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
export const listSeries = /* GraphQL */ `
  query ListSeries(
    $filter: ModelSeriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
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
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPart = /* GraphQL */ `
  query GetPart($id: ID!) {
    getPart(id: $id) {
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
export const listParts = /* GraphQL */ `
  query ListParts(
    $filter: ModelPartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChapter = /* GraphQL */ `
  query GetChapter($id: ID!) {
    getChapter(id: $id) {
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
export const listChapters = /* GraphQL */ `
  query ListChapters(
    $filter: ModelChapterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChapters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        file
        createdAt
        updatedAt
        partChaptersId
      }
      nextToken
    }
  }
`;
