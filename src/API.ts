/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookInput = {
  id?: string | null,
  title: string,
  bookBlurbId?: string | null,
};

export type ModelBookConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
  bookBlurbId?: ModelIDInput | null,
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
  parts?: ModelPartConnection | null,
  createdAt: string,
  updatedAt: string,
  bookBlurbId?: string | null,
};

export type Blurb = {
  __typename: "Blurb",
  id: string,
  book?: Book | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  blurbBookId?: string | null,
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
  bookBlurbId?: string | null,
};

export type DeleteBookInput = {
  id: string,
};

export type CreateBlurbInput = {
  id?: string | null,
  content: string,
  blurbBookId?: string | null,
};

export type ModelBlurbConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelBlurbConditionInput | null > | null,
  or?: Array< ModelBlurbConditionInput | null > | null,
  not?: ModelBlurbConditionInput | null,
  blurbBookId?: ModelIDInput | null,
};

export type UpdateBlurbInput = {
  id: string,
  content?: string | null,
  blurbBookId?: string | null,
};

export type DeleteBlurbInput = {
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
  bookBlurbId?: ModelIDInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<Book | null >,
  nextToken?: string | null,
};

export type ModelBlurbFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelBlurbFilterInput | null > | null,
  or?: Array< ModelBlurbFilterInput | null > | null,
  not?: ModelBlurbFilterInput | null,
  blurbBookId?: ModelIDInput | null,
};

export type ModelBlurbConnection = {
  __typename: "ModelBlurbConnection",
  items:  Array<Blurb | null >,
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

export type ModelSubscriptionBlurbFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlurbFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlurbFilterInput | null > | null,
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
      id: string,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      blurbBookId?: string | null,
    } | null,
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
          bookBlurbId?: string | null,
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
    bookBlurbId?: string | null,
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
      id: string,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      blurbBookId?: string | null,
    } | null,
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
          bookBlurbId?: string | null,
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
    bookBlurbId?: string | null,
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
      id: string,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      blurbBookId?: string | null,
    } | null,
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
          bookBlurbId?: string | null,
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
    bookBlurbId?: string | null,
  } | null,
};

export type CreateBlurbMutationVariables = {
  input: CreateBlurbInput,
  condition?: ModelBlurbConditionInput | null,
};

export type CreateBlurbMutation = {
  createBlurb?:  {
    __typename: "Blurb",
    id: string,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    blurbBookId?: string | null,
  } | null,
};

export type UpdateBlurbMutationVariables = {
  input: UpdateBlurbInput,
  condition?: ModelBlurbConditionInput | null,
};

export type UpdateBlurbMutation = {
  updateBlurb?:  {
    __typename: "Blurb",
    id: string,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    blurbBookId?: string | null,
  } | null,
};

export type DeleteBlurbMutationVariables = {
  input: DeleteBlurbInput,
  condition?: ModelBlurbConditionInput | null,
};

export type DeleteBlurbMutation = {
  deleteBlurb?:  {
    __typename: "Blurb",
    id: string,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    blurbBookId?: string | null,
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
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
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
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
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
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
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
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
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
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
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
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
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
      id: string,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      blurbBookId?: string | null,
    } | null,
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
          bookBlurbId?: string | null,
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
    bookBlurbId?: string | null,
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
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlurbQueryVariables = {
  id: string,
};

export type GetBlurbQuery = {
  getBlurb?:  {
    __typename: "Blurb",
    id: string,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    blurbBookId?: string | null,
  } | null,
};

export type ListBlurbsQueryVariables = {
  filter?: ModelBlurbFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlurbsQuery = {
  listBlurbs?:  {
    __typename: "ModelBlurbConnection",
    items:  Array< {
      __typename: "Blurb",
      id: string,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      blurbBookId?: string | null,
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
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
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
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
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
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
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
          bookBlurbId?: string | null,
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
      id: string,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      blurbBookId?: string | null,
    } | null,
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
          bookBlurbId?: string | null,
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
    bookBlurbId?: string | null,
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
      id: string,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      blurbBookId?: string | null,
    } | null,
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
          bookBlurbId?: string | null,
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
    bookBlurbId?: string | null,
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
      id: string,
      book?:  {
        __typename: "Book",
        id: string,
        title: string,
        blurb?:  {
          __typename: "Blurb",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      blurbBookId?: string | null,
    } | null,
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
          bookBlurbId?: string | null,
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
    bookBlurbId?: string | null,
  } | null,
};

export type OnCreateBlurbSubscriptionVariables = {
  filter?: ModelSubscriptionBlurbFilterInput | null,
};

export type OnCreateBlurbSubscription = {
  onCreateBlurb?:  {
    __typename: "Blurb",
    id: string,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    blurbBookId?: string | null,
  } | null,
};

export type OnUpdateBlurbSubscriptionVariables = {
  filter?: ModelSubscriptionBlurbFilterInput | null,
};

export type OnUpdateBlurbSubscription = {
  onUpdateBlurb?:  {
    __typename: "Blurb",
    id: string,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    blurbBookId?: string | null,
  } | null,
};

export type OnDeleteBlurbSubscriptionVariables = {
  filter?: ModelSubscriptionBlurbFilterInput | null,
};

export type OnDeleteBlurbSubscription = {
  onDeleteBlurb?:  {
    __typename: "Blurb",
    id: string,
    book?:  {
      __typename: "Book",
      id: string,
      title: string,
      blurb?:  {
        __typename: "Blurb",
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    blurbBookId?: string | null,
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
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
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
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
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
        id: string,
        book?:  {
          __typename: "Book",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          bookBlurbId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        blurbBookId?: string | null,
      } | null,
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
      bookBlurbId?: string | null,
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
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
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
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
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
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          blurbBookId?: string | null,
        } | null,
        parts?:  {
          __typename: "ModelPartConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        bookBlurbId?: string | null,
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
