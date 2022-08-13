/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
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
export const onCreateBlurb = /* GraphQL */ `
  subscription OnCreateBlurb($filter: ModelSubscriptionBlurbFilterInput) {
    onCreateBlurb(filter: $filter) {
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
export const onUpdateBlurb = /* GraphQL */ `
  subscription OnUpdateBlurb($filter: ModelSubscriptionBlurbFilterInput) {
    onUpdateBlurb(filter: $filter) {
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
export const onDeleteBlurb = /* GraphQL */ `
  subscription OnDeleteBlurb($filter: ModelSubscriptionBlurbFilterInput) {
    onDeleteBlurb(filter: $filter) {
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
