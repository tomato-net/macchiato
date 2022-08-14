/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
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
export const onCreateSeries = /* GraphQL */ `
  subscription OnCreateSeries($filter: ModelSubscriptionSeriesFilterInput) {
    onCreateSeries(filter: $filter) {
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
export const onUpdateSeries = /* GraphQL */ `
  subscription OnUpdateSeries($filter: ModelSubscriptionSeriesFilterInput) {
    onUpdateSeries(filter: $filter) {
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
export const onDeleteSeries = /* GraphQL */ `
  subscription OnDeleteSeries($filter: ModelSubscriptionSeriesFilterInput) {
    onDeleteSeries(filter: $filter) {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onCreateAuthor(filter: $filter) {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onUpdateAuthor(filter: $filter) {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onDeleteAuthor(filter: $filter) {
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
export const onCreatePart = /* GraphQL */ `
  subscription OnCreatePart($filter: ModelSubscriptionPartFilterInput) {
    onCreatePart(filter: $filter) {
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
export const onUpdatePart = /* GraphQL */ `
  subscription OnUpdatePart($filter: ModelSubscriptionPartFilterInput) {
    onUpdatePart(filter: $filter) {
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
export const onDeletePart = /* GraphQL */ `
  subscription OnDeletePart($filter: ModelSubscriptionPartFilterInput) {
    onDeletePart(filter: $filter) {
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
export const onCreateChapter = /* GraphQL */ `
  subscription OnCreateChapter($filter: ModelSubscriptionChapterFilterInput) {
    onCreateChapter(filter: $filter) {
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
export const onUpdateChapter = /* GraphQL */ `
  subscription OnUpdateChapter($filter: ModelSubscriptionChapterFilterInput) {
    onUpdateChapter(filter: $filter) {
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
export const onDeleteChapter = /* GraphQL */ `
  subscription OnDeleteChapter($filter: ModelSubscriptionChapterFilterInput) {
    onDeleteChapter(filter: $filter) {
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
