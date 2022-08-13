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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createBlurb = /* GraphQL */ `
  mutation CreateBlurb(
    $input: CreateBlurbInput!
    $condition: ModelBlurbConditionInput
  ) {
    createBlurb(input: $input, condition: $condition) {
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
export const updateBlurb = /* GraphQL */ `
  mutation UpdateBlurb(
    $input: UpdateBlurbInput!
    $condition: ModelBlurbConditionInput
  ) {
    updateBlurb(input: $input, condition: $condition) {
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
export const deleteBlurb = /* GraphQL */ `
  mutation DeleteBlurb(
    $input: DeleteBlurbInput!
    $condition: ModelBlurbConditionInput
  ) {
    deleteBlurb(input: $input, condition: $condition) {
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
