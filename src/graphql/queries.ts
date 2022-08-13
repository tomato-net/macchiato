/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      blurb {
        id
        book {
          id
          title
          blurb {
            id
            content
            createdAt
            updatedAt
            blurbBookId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          bookBlurbId
        }
        content
        createdAt
        updatedAt
        blurbBookId
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
            bookBlurbId
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
      bookBlurbId
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
          id
          book {
            id
            title
            createdAt
            updatedAt
            bookBlurbId
          }
          content
          createdAt
          updatedAt
          blurbBookId
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
        bookBlurbId
      }
      nextToken
    }
  }
`;
export const getBlurb = /* GraphQL */ `
  query GetBlurb($id: ID!) {
    getBlurb(id: $id) {
      id
      book {
        id
        title
        blurb {
          id
          book {
            id
            title
            createdAt
            updatedAt
            bookBlurbId
          }
          content
          createdAt
          updatedAt
          blurbBookId
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
        bookBlurbId
      }
      content
      createdAt
      updatedAt
      blurbBookId
    }
  }
`;
export const listBlurbs = /* GraphQL */ `
  query ListBlurbs(
    $filter: ModelBlurbFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlurbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        book {
          id
          title
          blurb {
            id
            content
            createdAt
            updatedAt
            blurbBookId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          bookBlurbId
        }
        content
        createdAt
        updatedAt
        blurbBookId
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
          id
          book {
            id
            title
            createdAt
            updatedAt
            bookBlurbId
          }
          content
          createdAt
          updatedAt
          blurbBookId
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
        bookBlurbId
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
            id
            content
            createdAt
            updatedAt
            blurbBookId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          bookBlurbId
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
            id
            content
            createdAt
            updatedAt
            blurbBookId
          }
          parts {
            nextToken
          }
          createdAt
          updatedAt
          bookBlurbId
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
            bookBlurbId
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
