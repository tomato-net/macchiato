/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookInput = {
  id?: string | null,
  title: string,
  blurb?: BlurbInput | null,
  seriesBooksId?: string | null,
  authorBooksId?: string | null,
  bookAuthorId: string,
  bookSeriesId: string,
};

export type BlurbInput = {
  content: string,
};

export type ModelBookConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
  seriesBooksId?: ModelIDInput | null,
  authorBooksId?: ModelIDInput | null,
  bookAuthorId?: ModelIDInput | null,
  bookSeriesId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Book = {
  __typename: "Book",
  id: string,
  title: string,
  blurb?: Blurb | null,
  author: Author,
  series: Series,
  parts?: ModelPartConnection | null,
  createdAt: string,
  updatedAt: string,
  seriesBooksId?: string | null,
  authorBooksId?: string | null,
  bookAuthorId: string,
  bookSeriesId: string,
};

export type Blurb = {
  __typename: "Blurb",
  content: string,
};

export type Author = {
  __typename: "Author",
  id: string,
  name: string,
  books?: ModelBookConnection | null,
  series?: ModelSeriesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<Book | null >,
  nextToken?: string | null,
};

export type ModelSeriesConnection = {
  __typename: "ModelSeriesConnection",
  items:  Array<Series | null >,
  nextToken?: string | null,
};

export type Series = {
  __typename: "Series",
  id: string,
  name: string,
  description: string,
  author: Author,
  books?: ModelBookConnection | null,
  createdAt: string,
  updatedAt: string,
  authorSeriesId?: string | null,
  seriesAuthorId: string,
};

export type ModelPartConnection = {
  __typename: "ModelPartConnection",
  items:  Array<Part | null >,
  nextToken?: string | null,
};

export type Part = {
  __typename: "Part",
  id: string,
  name: string,
  order: number,
  book?: Book | null,
  chapters?: ModelChapterConnection | null,
  createdAt: string,
  updatedAt: string,
  bookPartsId?: string | null,
};

export type ModelChapterConnection = {
  __typename: "ModelChapterConnection",
  items:  Array<Chapter | null >,
  nextToken?: string | null,
};

export type Chapter = {
  __typename: "Chapter",
  id: string,
  name: string,
  order: number,
  part?: Part | null,
  file: string,
  createdAt: string,
  updatedAt: string,
  partChaptersId?: string | null,
};

export type UpdateBookInput = {
  id: string,
  title?: string | null,
  blurb?: BlurbInput | null,
  seriesBooksId?: string | null,
  authorBooksId?: string | null,
  bookAuthorId: string,
  bookSeriesId: string,
};

export type DeleteBookInput = {
  id: string,
};

export type CreateSeriesInput = {
  id?: string | null,
  name: string,
  description: string,
  authorSeriesId?: string | null,
  seriesAuthorId: string,
};

export type ModelSeriesConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSeriesConditionInput | null > | null,
  or?: Array< ModelSeriesConditionInput | null > | null,
  not?: ModelSeriesConditionInput | null,
  authorSeriesId?: ModelIDInput | null,
  seriesAuthorId?: ModelIDInput | null,
};

export type UpdateSeriesInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  authorSeriesId?: string | null,
  seriesAuthorId: string,
};

export type DeleteSeriesInput = {
  id: string,
};

export type CreateAuthorInput = {
  id?: string | null,
  name: string,
};

export type ModelAuthorConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelAuthorConditionInput | null > | null,
  or?: Array< ModelAuthorConditionInput | null > | null,
  not?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorInput = {
  id: string,
  name?: string | null,
};

export type DeleteAuthorInput = {
  id: string,
};

export type CreatePartInput = {
  id?: string | null,
  name: string,
  order: number,
  bookPartsId?: string | null,
};

export type ModelPartConditionInput = {
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelPartConditionInput | null > | null,
  or?: Array< ModelPartConditionInput | null > | null,
  not?: ModelPartConditionInput | null,
  bookPartsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePartInput = {
  id: string,
  name?: string | null,
  order?: number | null,
  bookPartsId?: string | null,
};

export type DeletePartInput = {
  id: string,
};

export type CreateChapterInput = {
  id?: string | null,
  name: string,
  order: number,
  file: string,
  partChaptersId?: string | null,
};

export type ModelChapterConditionInput = {
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  file?: ModelStringInput | null,
  and?: Array< ModelChapterConditionInput | null > | null,
  or?: Array< ModelChapterConditionInput | null > | null,
  not?: ModelChapterConditionInput | null,
  partChaptersId?: ModelIDInput | null,
};

export type UpdateChapterInput = {
  id: string,
  name?: string | null,
  order?: number | null,
  file?: string | null,
  partChaptersId?: string | null,
};

export type DeleteChapterInput = {
  id: string,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
  seriesBooksId?: ModelIDInput | null,
  authorBooksId?: ModelIDInput | null,
  bookAuthorId?: ModelIDInput | null,
  bookSeriesId?: ModelIDInput | null,
};

export type ModelSeriesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSeriesFilterInput | null > | null,
  or?: Array< ModelSeriesFilterInput | null > | null,
  not?: ModelSeriesFilterInput | null,
  authorSeriesId?: ModelIDInput | null,
  seriesAuthorId?: ModelIDInput | null,
};

export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelAuthorFilterInput | null > | null,
  or?: Array< ModelAuthorFilterInput | null > | null,
  not?: ModelAuthorFilterInput | null,
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection",
  items:  Array<Author | null >,
  nextToken?: string | null,
};

export type ModelPartFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelPartFilterInput | null > | null,
  or?: Array< ModelPartFilterInput | null > | null,
  not?: ModelPartFilterInput | null,
  bookPartsId?: ModelIDInput | null,
};

export type ModelChapterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  file?: ModelStringInput | null,
  and?: Array< ModelChapterFilterInput | null > | null,
  or?: Array< ModelChapterFilterInput | null > | null,
  not?: ModelChapterFilterInput | null,
  partChaptersId?: ModelIDInput | null,
};

export type ModelSubscriptionBookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSeriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSeriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionSeriesFilterInput | null > | null,
};

export type ModelSubscriptionAuthorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
  or?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
};

export type ModelSubscriptionPartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  order?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionPartFilterInput | null > | null,
  or?: Array< ModelSubscriptionPartFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionChapterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  order?: ModelSubscriptionIntInput | null,
  file?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChapterFilterInput | null > | null,
  or?: Array< ModelSubscriptionChapterFilterInput | null > | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    blurb?:  {
      __typename: "Blurb",
      content: string,
    } | null,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    series:  {
      __typename: "Series",
      id: string,
      name: string,
      description: string,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      authorSeriesId?: string | null,
      seriesAuthorId: string,
    },
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        id: string,
        name: string,
        order: number,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null,
        chapters?:  {
          __typename: "ModelChapterConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookPartsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    seriesBooksId?: string | null,
    authorBooksId?: string | null,
    bookAuthorId: string,
    bookSeriesId: string,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    blurb?:  {
      __typename: "Blurb",
      content: string,
    } | null,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    series:  {
      __typename: "Series",
      id: string,
      name: string,
      description: string,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      authorSeriesId?: string | null,
      seriesAuthorId: string,
    },
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        id: string,
        name: string,
        order: number,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null,
        chapters?:  {
          __typename: "ModelChapterConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookPartsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    seriesBooksId?: string | null,
    authorBooksId?: string | null,
    bookAuthorId: string,
    bookSeriesId: string,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    blurb?:  {
      __typename: "Blurb",
      content: string,
    } | null,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    series:  {
      __typename: "Series",
      id: string,
      name: string,
      description: string,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      authorSeriesId?: string | null,
      seriesAuthorId: string,
    },
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        id: string,
        name: string,
        order: number,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null,
        chapters?:  {
          __typename: "ModelChapterConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookPartsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    seriesBooksId?: string | null,
    authorBooksId?: string | null,
    bookAuthorId: string,
    bookSeriesId: string,
  } | null,
};

export type CreateSeriesMutationVariables = {
  input: CreateSeriesInput,
  condition?: ModelSeriesConditionInput | null,
};

export type CreateSeriesMutation = {
  createSeries?:  {
    __typename: "Series",
    id: string,
    name: string,
    description: string,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorSeriesId?: string | null,
    seriesAuthorId: string,
  } | null,
};

export type UpdateSeriesMutationVariables = {
  input: UpdateSeriesInput,
  condition?: ModelSeriesConditionInput | null,
};

export type UpdateSeriesMutation = {
  updateSeries?:  {
    __typename: "Series",
    id: string,
    name: string,
    description: string,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorSeriesId?: string | null,
    seriesAuthorId: string,
  } | null,
};

export type DeleteSeriesMutationVariables = {
  input: DeleteSeriesInput,
  condition?: ModelSeriesConditionInput | null,
};

export type DeleteSeriesMutation = {
  deleteSeries?:  {
    __typename: "Series",
    id: string,
    name: string,
    description: string,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorSeriesId?: string | null,
    seriesAuthorId: string,
  } | null,
};

export type CreateAuthorMutationVariables = {
  input: CreateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type CreateAuthorMutation = {
  createAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    series?:  {
      __typename: "ModelSeriesConnection",
      items:  Array< {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorMutationVariables = {
  input: UpdateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorMutation = {
  updateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    series?:  {
      __typename: "ModelSeriesConnection",
      items:  Array< {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorMutationVariables = {
  input: DeleteAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type DeleteAuthorMutation = {
  deleteAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    series?:  {
      __typename: "ModelSeriesConnection",
      items:  Array< {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePartMutationVariables = {
  input: CreatePartInput,
  condition?: ModelPartConditionInput | null,
};

export type CreatePartMutation = {
  createPart?:  {
    __typename: "Part",
    id: string,
    name: string,
    order: number,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        content: string,
      } | null,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      series:  {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      },
      parts?:  {
        __typename: "ModelPartConnection",
        items:  Array< {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      seriesBooksId?: string | null,
      authorBooksId?: string | null,
      bookAuthorId: string,
      bookSeriesId: string,
    } | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        name: string,
        order: number,
        part?:  {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null,
        file: string,
        createdAt: string,
        updatedAt: string,
        partChaptersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bookPartsId?: string | null,
  } | null,
};

export type UpdatePartMutationVariables = {
  input: UpdatePartInput,
  condition?: ModelPartConditionInput | null,
};

export type UpdatePartMutation = {
  updatePart?:  {
    __typename: "Part",
    id: string,
    name: string,
    order: number,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        content: string,
      } | null,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      series:  {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      },
      parts?:  {
        __typename: "ModelPartConnection",
        items:  Array< {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      seriesBooksId?: string | null,
      authorBooksId?: string | null,
      bookAuthorId: string,
      bookSeriesId: string,
    } | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        name: string,
        order: number,
        part?:  {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null,
        file: string,
        createdAt: string,
        updatedAt: string,
        partChaptersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bookPartsId?: string | null,
  } | null,
};

export type DeletePartMutationVariables = {
  input: DeletePartInput,
  condition?: ModelPartConditionInput | null,
};

export type DeletePartMutation = {
  deletePart?:  {
    __typename: "Part",
    id: string,
    name: string,
    order: number,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        content: string,
      } | null,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      series:  {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      },
      parts?:  {
        __typename: "ModelPartConnection",
        items:  Array< {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      seriesBooksId?: string | null,
      authorBooksId?: string | null,
      bookAuthorId: string,
      bookSeriesId: string,
    } | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        name: string,
        order: number,
        part?:  {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null,
        file: string,
        createdAt: string,
        updatedAt: string,
        partChaptersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bookPartsId?: string | null,
  } | null,
};

export type CreateChapterMutationVariables = {
  input: CreateChapterInput,
  condition?: ModelChapterConditionInput | null,
};

export type CreateChapterMutation = {
  createChapter?:  {
    __typename: "Chapter",
    id: string,
    name: string,
    order: number,
    part?:  {
      __typename: "Part",
      id: string,
      name: string,
      order: number,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null,
      chapters?:  {
        __typename: "ModelChapterConnection",
        items:  Array< {
          __typename: "Chapter",
          id: string,
          name: string,
          order: number,
          file: string,
          createdAt: string,
          updatedAt: string,
          partChaptersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      bookPartsId?: string | null,
    } | null,
    file: string,
    createdAt: string,
    updatedAt: string,
    partChaptersId?: string | null,
  } | null,
};

export type UpdateChapterMutationVariables = {
  input: UpdateChapterInput,
  condition?: ModelChapterConditionInput | null,
};

export type UpdateChapterMutation = {
  updateChapter?:  {
    __typename: "Chapter",
    id: string,
    name: string,
    order: number,
    part?:  {
      __typename: "Part",
      id: string,
      name: string,
      order: number,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null,
      chapters?:  {
        __typename: "ModelChapterConnection",
        items:  Array< {
          __typename: "Chapter",
          id: string,
          name: string,
          order: number,
          file: string,
          createdAt: string,
          updatedAt: string,
          partChaptersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      bookPartsId?: string | null,
    } | null,
    file: string,
    createdAt: string,
    updatedAt: string,
    partChaptersId?: string | null,
  } | null,
};

export type DeleteChapterMutationVariables = {
  input: DeleteChapterInput,
  condition?: ModelChapterConditionInput | null,
};

export type DeleteChapterMutation = {
  deleteChapter?:  {
    __typename: "Chapter",
    id: string,
    name: string,
    order: number,
    part?:  {
      __typename: "Part",
      id: string,
      name: string,
      order: number,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null,
      chapters?:  {
        __typename: "ModelChapterConnection",
        items:  Array< {
          __typename: "Chapter",
          id: string,
          name: string,
          order: number,
          file: string,
          createdAt: string,
          updatedAt: string,
          partChaptersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      bookPartsId?: string | null,
    } | null,
    file: string,
    createdAt: string,
    updatedAt: string,
    partChaptersId?: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    blurb?:  {
      __typename: "Blurb",
      content: string,
    } | null,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    series:  {
      __typename: "Series",
      id: string,
      name: string,
      description: string,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      authorSeriesId?: string | null,
      seriesAuthorId: string,
    },
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        id: string,
        name: string,
        order: number,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null,
        chapters?:  {
          __typename: "ModelChapterConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookPartsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    seriesBooksId?: string | null,
    authorBooksId?: string | null,
    bookAuthorId: string,
    bookSeriesId: string,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        content: string,
      } | null,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      series:  {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      },
      parts?:  {
        __typename: "ModelPartConnection",
        items:  Array< {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      seriesBooksId?: string | null,
      authorBooksId?: string | null,
      bookAuthorId: string,
      bookSeriesId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSeriesQueryVariables = {
  id: string,
};

export type GetSeriesQuery = {
  getSeries?:  {
    __typename: "Series",
    id: string,
    name: string,
    description: string,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorSeriesId?: string | null,
    seriesAuthorId: string,
  } | null,
};

export type ListSeriesQueryVariables = {
  filter?: ModelSeriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSeriesQuery = {
  listSeries?:  {
    __typename: "ModelSeriesConnection",
    items:  Array< {
      __typename: "Series",
      id: string,
      name: string,
      description: string,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      authorSeriesId?: string | null,
      seriesAuthorId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAuthorQueryVariables = {
  id: string,
};

export type GetAuthorQuery = {
  getAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    series?:  {
      __typename: "ModelSeriesConnection",
      items:  Array< {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorsQuery = {
  listAuthors?:  {
    __typename: "ModelAuthorConnection",
    items:  Array< {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPartQueryVariables = {
  id: string,
};

export type GetPartQuery = {
  getPart?:  {
    __typename: "Part",
    id: string,
    name: string,
    order: number,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        content: string,
      } | null,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      series:  {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      },
      parts?:  {
        __typename: "ModelPartConnection",
        items:  Array< {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      seriesBooksId?: string | null,
      authorBooksId?: string | null,
      bookAuthorId: string,
      bookSeriesId: string,
    } | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        name: string,
        order: number,
        part?:  {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null,
        file: string,
        createdAt: string,
        updatedAt: string,
        partChaptersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bookPartsId?: string | null,
  } | null,
};

export type ListPartsQueryVariables = {
  filter?: ModelPartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPartsQuery = {
  listParts?:  {
    __typename: "ModelPartConnection",
    items:  Array< {
      __typename: "Part",
      id: string,
      name: string,
      order: number,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null,
      chapters?:  {
        __typename: "ModelChapterConnection",
        items:  Array< {
          __typename: "Chapter",
          id: string,
          name: string,
          order: number,
          file: string,
          createdAt: string,
          updatedAt: string,
          partChaptersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      bookPartsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChapterQueryVariables = {
  id: string,
};

export type GetChapterQuery = {
  getChapter?:  {
    __typename: "Chapter",
    id: string,
    name: string,
    order: number,
    part?:  {
      __typename: "Part",
      id: string,
      name: string,
      order: number,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null,
      chapters?:  {
        __typename: "ModelChapterConnection",
        items:  Array< {
          __typename: "Chapter",
          id: string,
          name: string,
          order: number,
          file: string,
          createdAt: string,
          updatedAt: string,
          partChaptersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      bookPartsId?: string | null,
    } | null,
    file: string,
    createdAt: string,
    updatedAt: string,
    partChaptersId?: string | null,
  } | null,
};

export type ListChaptersQueryVariables = {
  filter?: ModelChapterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChaptersQuery = {
  listChapters?:  {
    __typename: "ModelChapterConnection",
    items:  Array< {
      __typename: "Chapter",
      id: string,
      name: string,
      order: number,
      part?:  {
        __typename: "Part",
        id: string,
        name: string,
        order: number,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null,
        chapters?:  {
          __typename: "ModelChapterConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookPartsId?: string | null,
      } | null,
      file: string,
      createdAt: string,
      updatedAt: string,
      partChaptersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    blurb?:  {
      __typename: "Blurb",
      content: string,
    } | null,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    series:  {
      __typename: "Series",
      id: string,
      name: string,
      description: string,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      authorSeriesId?: string | null,
      seriesAuthorId: string,
    },
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        id: string,
        name: string,
        order: number,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null,
        chapters?:  {
          __typename: "ModelChapterConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookPartsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    seriesBooksId?: string | null,
    authorBooksId?: string | null,
    bookAuthorId: string,
    bookSeriesId: string,
  } | null,
};

export type OnUpdateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    blurb?:  {
      __typename: "Blurb",
      content: string,
    } | null,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    series:  {
      __typename: "Series",
      id: string,
      name: string,
      description: string,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      authorSeriesId?: string | null,
      seriesAuthorId: string,
    },
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        id: string,
        name: string,
        order: number,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null,
        chapters?:  {
          __typename: "ModelChapterConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookPartsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    seriesBooksId?: string | null,
    authorBooksId?: string | null,
    bookAuthorId: string,
    bookSeriesId: string,
  } | null,
};

export type OnDeleteBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    blurb?:  {
      __typename: "Blurb",
      content: string,
    } | null,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    series:  {
      __typename: "Series",
      id: string,
      name: string,
      description: string,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      authorSeriesId?: string | null,
      seriesAuthorId: string,
    },
    parts?:  {
      __typename: "ModelPartConnection",
      items:  Array< {
        __typename: "Part",
        id: string,
        name: string,
        order: number,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null,
        chapters?:  {
          __typename: "ModelChapterConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookPartsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    seriesBooksId?: string | null,
    authorBooksId?: string | null,
    bookAuthorId: string,
    bookSeriesId: string,
  } | null,
};

export type OnCreateSeriesSubscriptionVariables = {
  filter?: ModelSubscriptionSeriesFilterInput | null,
};

export type OnCreateSeriesSubscription = {
  onCreateSeries?:  {
    __typename: "Series",
    id: string,
    name: string,
    description: string,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorSeriesId?: string | null,
    seriesAuthorId: string,
  } | null,
};

export type OnUpdateSeriesSubscriptionVariables = {
  filter?: ModelSubscriptionSeriesFilterInput | null,
};

export type OnUpdateSeriesSubscription = {
  onUpdateSeries?:  {
    __typename: "Series",
    id: string,
    name: string,
    description: string,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorSeriesId?: string | null,
    seriesAuthorId: string,
  } | null,
};

export type OnDeleteSeriesSubscriptionVariables = {
  filter?: ModelSubscriptionSeriesFilterInput | null,
};

export type OnDeleteSeriesSubscription = {
  onDeleteSeries?:  {
    __typename: "Series",
    id: string,
    name: string,
    description: string,
    author:  {
      __typename: "Author",
      id: string,
      name: string,
      books?:  {
        __typename: "ModelBookConnection",
        items:  Array< {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          seriesBooksId?: string | null,
          authorBooksId?: string | null,
          bookAuthorId: string,
          bookSeriesId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      series?:  {
        __typename: "ModelSeriesConnection",
        items:  Array< {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorSeriesId?: string | null,
    seriesAuthorId: string,
  } | null,
};

export type OnCreateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    series?:  {
      __typename: "ModelSeriesConnection",
      items:  Array< {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    series?:  {
      __typename: "ModelSeriesConnection",
      items:  Array< {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor?:  {
    __typename: "Author",
    id: string,
    name: string,
    books?:  {
      __typename: "ModelBookConnection",
      items:  Array< {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    series?:  {
      __typename: "ModelSeriesConnection",
      items:  Array< {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePartSubscriptionVariables = {
  filter?: ModelSubscriptionPartFilterInput | null,
};

export type OnCreatePartSubscription = {
  onCreatePart?:  {
    __typename: "Part",
    id: string,
    name: string,
    order: number,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        content: string,
      } | null,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      series:  {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      },
      parts?:  {
        __typename: "ModelPartConnection",
        items:  Array< {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      seriesBooksId?: string | null,
      authorBooksId?: string | null,
      bookAuthorId: string,
      bookSeriesId: string,
    } | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        name: string,
        order: number,
        part?:  {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null,
        file: string,
        createdAt: string,
        updatedAt: string,
        partChaptersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bookPartsId?: string | null,
  } | null,
};

export type OnUpdatePartSubscriptionVariables = {
  filter?: ModelSubscriptionPartFilterInput | null,
};

export type OnUpdatePartSubscription = {
  onUpdatePart?:  {
    __typename: "Part",
    id: string,
    name: string,
    order: number,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        content: string,
      } | null,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      series:  {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      },
      parts?:  {
        __typename: "ModelPartConnection",
        items:  Array< {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      seriesBooksId?: string | null,
      authorBooksId?: string | null,
      bookAuthorId: string,
      bookSeriesId: string,
    } | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        name: string,
        order: number,
        part?:  {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null,
        file: string,
        createdAt: string,
        updatedAt: string,
        partChaptersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bookPartsId?: string | null,
  } | null,
};

export type OnDeletePartSubscriptionVariables = {
  filter?: ModelSubscriptionPartFilterInput | null,
};

export type OnDeletePartSubscription = {
  onDeletePart?:  {
    __typename: "Part",
    id: string,
    name: string,
    order: number,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        content: string,
      } | null,
      author:  {
        __typename: "Author",
        id: string,
        name: string,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        series?:  {
          __typename: "ModelSeriesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      series:  {
        __typename: "Series",
        id: string,
        name: string,
        description: string,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        authorSeriesId?: string | null,
        seriesAuthorId: string,
      },
      parts?:  {
        __typename: "ModelPartConnection",
        items:  Array< {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      seriesBooksId?: string | null,
      authorBooksId?: string | null,
      bookAuthorId: string,
      bookSeriesId: string,
    } | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      items:  Array< {
        __typename: "Chapter",
        id: string,
        name: string,
        order: number,
        part?:  {
          __typename: "Part",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
          bookPartsId?: string | null,
        } | null,
        file: string,
        createdAt: string,
        updatedAt: string,
        partChaptersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    bookPartsId?: string | null,
  } | null,
};

export type OnCreateChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnCreateChapterSubscription = {
  onCreateChapter?:  {
    __typename: "Chapter",
    id: string,
    name: string,
    order: number,
    part?:  {
      __typename: "Part",
      id: string,
      name: string,
      order: number,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null,
      chapters?:  {
        __typename: "ModelChapterConnection",
        items:  Array< {
          __typename: "Chapter",
          id: string,
          name: string,
          order: number,
          file: string,
          createdAt: string,
          updatedAt: string,
          partChaptersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      bookPartsId?: string | null,
    } | null,
    file: string,
    createdAt: string,
    updatedAt: string,
    partChaptersId?: string | null,
  } | null,
};

export type OnUpdateChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnUpdateChapterSubscription = {
  onUpdateChapter?:  {
    __typename: "Chapter",
    id: string,
    name: string,
    order: number,
    part?:  {
      __typename: "Part",
      id: string,
      name: string,
      order: number,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null,
      chapters?:  {
        __typename: "ModelChapterConnection",
        items:  Array< {
          __typename: "Chapter",
          id: string,
          name: string,
          order: number,
          file: string,
          createdAt: string,
          updatedAt: string,
          partChaptersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      bookPartsId?: string | null,
    } | null,
    file: string,
    createdAt: string,
    updatedAt: string,
    partChaptersId?: string | null,
  } | null,
};

export type OnDeleteChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnDeleteChapterSubscription = {
  onDeleteChapter?:  {
    __typename: "Chapter",
    id: string,
    name: string,
    order: number,
    part?:  {
      __typename: "Part",
      id: string,
      name: string,
      order: number,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          content: string,
        } | null,
        author:  {
          __typename: "Author",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        series:  {
          __typename: "Series",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
          authorSeriesId?: string | null,
          seriesAuthorId: string,
        },
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        seriesBooksId?: string | null,
        authorBooksId?: string | null,
        bookAuthorId: string,
        bookSeriesId: string,
      } | null,
      chapters?:  {
        __typename: "ModelChapterConnection",
        items:  Array< {
          __typename: "Chapter",
          id: string,
          name: string,
          order: number,
          file: string,
          createdAt: string,
          updatedAt: string,
          partChaptersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      bookPartsId?: string | null,
    } | null,
    file: string,
    createdAt: string,
    updatedAt: string,
    partChaptersId?: string | null,
  } | null,
};
