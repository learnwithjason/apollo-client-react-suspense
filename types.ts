export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  Year: { input: any; output: any; }
};

export type Actor = Node & {
  __typename?: 'Actor';
  actorId: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `FilmActor`. */
  filmActorsByActorIdList: Array<FilmActor>;
  firstName: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  lastUpdate: Scalars['Datetime']['output'];
};


export type ActorFilmActorsByActorIdListArgs = {
  condition?: InputMaybe<FilmActorCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};

/** A condition to be used against `Actor` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ActorCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ActorInfo = {
  __typename?: 'ActorInfo';
  actorId?: Maybe<Scalars['Int']['output']>;
  filmInfo?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `ActorInfo` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ActorInfoCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `filmInfo` field. */
  filmInfo?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `ActorInfo`. */
export enum ActorInfosOrderBy {
  ActorIdAsc = 'ACTOR_ID_ASC',
  ActorIdDesc = 'ACTOR_ID_DESC',
  FilmInfoAsc = 'FILM_INFO_ASC',
  FilmInfoDesc = 'FILM_INFO_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL'
}

/** An input for mutations affecting `Actor` */
export type ActorInput = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Represents an update to a `Actor`. Fields that are set will be updated. */
export type ActorPatch = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Methods to use when ordering `Actor`. */
export enum ActorsOrderBy {
  ActorIdAsc = 'ACTOR_ID_ASC',
  ActorIdDesc = 'ACTOR_ID_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Address = Node & {
  __typename?: 'Address';
  address: Scalars['String']['output'];
  address2?: Maybe<Scalars['String']['output']>;
  addressId: Scalars['Int']['output'];
  /** Reads a single `City` that is related to this `Address`. */
  cityByCityId?: Maybe<City>;
  cityId: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `Customer`. */
  customersByAddressIdList: Array<Customer>;
  district: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  lastUpdate: Scalars['Datetime']['output'];
  phone: Scalars['String']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Staff`. */
  staffByAddressIdList: Array<Staff>;
  /** Reads and enables pagination through a set of `Store`. */
  storesByAddressIdList: Array<Store>;
};


export type AddressCustomersByAddressIdListArgs = {
  condition?: InputMaybe<CustomerCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


export type AddressStaffByAddressIdListArgs = {
  condition?: InputMaybe<StaffCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};


export type AddressStoresByAddressIdListArgs = {
  condition?: InputMaybe<StoreCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `address2` field. */
  address2?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `cityId` field. */
  cityId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `district` field. */
  district?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `postalCode` field. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Address` */
export type AddressInput = {
  address: Scalars['String']['input'];
  address2?: InputMaybe<Scalars['String']['input']>;
  addressId?: InputMaybe<Scalars['Int']['input']>;
  cityId: Scalars['Int']['input'];
  district: Scalars['String']['input'];
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  phone: Scalars['String']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  addressId?: InputMaybe<Scalars['Int']['input']>;
  cityId?: InputMaybe<Scalars['Int']['input']>;
  district?: InputMaybe<Scalars['String']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  Address2Asc = 'ADDRESS2_ASC',
  Address2Desc = 'ADDRESS2_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CityIdAsc = 'CITY_ID_ASC',
  CityIdDesc = 'CITY_ID_DESC',
  DistrictAsc = 'DISTRICT_ASC',
  DistrictDesc = 'DISTRICT_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  PostalCodeAsc = 'POSTAL_CODE_ASC',
  PostalCodeDesc = 'POSTAL_CODE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Category = Node & {
  __typename?: 'Category';
  categoryId: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `FilmCategory`. */
  filmCategoriesByCategoryIdList: Array<FilmCategory>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  lastUpdate: Scalars['Datetime']['output'];
  name: Scalars['String']['output'];
};


export type CategoryFilmCategoriesByCategoryIdListArgs = {
  condition?: InputMaybe<FilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  name: Scalars['String']['input'];
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `City`. */
export enum CitiesOrderBy {
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CityIdAsc = 'CITY_ID_ASC',
  CityIdDesc = 'CITY_ID_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type City = Node & {
  __typename?: 'City';
  /** Reads and enables pagination through a set of `Address`. */
  addressesByCityIdList: Array<Address>;
  city: Scalars['String']['output'];
  cityId: Scalars['Int']['output'];
  /** Reads a single `Country` that is related to this `City`. */
  countryByCountryId?: Maybe<Country>;
  countryId: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  lastUpdate: Scalars['Datetime']['output'];
};


export type CityAddressesByCityIdListArgs = {
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** A condition to be used against `City` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CityCondition = {
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `cityId` field. */
  cityId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** An input for mutations affecting `City` */
export type CityInput = {
  city: Scalars['String']['input'];
  cityId?: InputMaybe<Scalars['Int']['input']>;
  countryId: Scalars['Int']['input'];
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Represents an update to a `City`. Fields that are set will be updated. */
export type CityPatch = {
  city?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['Int']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Methods to use when ordering `Country`. */
export enum CountriesOrderBy {
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Country = Node & {
  __typename?: 'Country';
  /** Reads and enables pagination through a set of `City`. */
  citiesByCountryIdList: Array<City>;
  country: Scalars['String']['output'];
  countryId: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  lastUpdate: Scalars['Datetime']['output'];
};


export type CountryCitiesByCountryIdListArgs = {
  condition?: InputMaybe<CityCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

/** A condition to be used against `Country` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CountryCondition = {
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** An input for mutations affecting `Country` */
export type CountryInput = {
  country: Scalars['String']['input'];
  countryId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Represents an update to a `Country`. Fields that are set will be updated. */
export type CountryPatch = {
  country?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** All input for the create `Actor` mutation. */
export type CreateActorInput = {
  /** The `Actor` to be created by this mutation. */
  actor: ActorInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Actor` mutation. */
export type CreateActorPayload = {
  __typename?: 'CreateActorPayload';
  /** The `Actor` that was created by this mutation. */
  actor?: Maybe<Actor>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Address` mutation. */
export type CreateAddressInput = {
  /** The `Address` to be created by this mutation. */
  address: AddressInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Address` mutation. */
export type CreateAddressPayload = {
  __typename?: 'CreateAddressPayload';
  /** The `Address` that was created by this mutation. */
  address?: Maybe<Address>;
  /** Reads a single `City` that is related to this `Address`. */
  cityByCityId?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `City` mutation. */
export type CreateCityInput = {
  /** The `City` to be created by this mutation. */
  city: CityInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `City` mutation. */
export type CreateCityPayload = {
  __typename?: 'CreateCityPayload';
  /** The `City` that was created by this mutation. */
  city?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `City`. */
  countryByCountryId?: Maybe<Country>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Country` mutation. */
export type CreateCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Country` to be created by this mutation. */
  country: CountryInput;
};

/** The output of our create `Country` mutation. */
export type CreateCountryPayload = {
  __typename?: 'CreateCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Country` that was created by this mutation. */
  country?: Maybe<Country>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Customer` mutation. */
export type CreateCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Customer` to be created by this mutation. */
  customer: CustomerInput;
};

/** The output of our create `Customer` mutation. */
export type CreateCustomerPayload = {
  __typename?: 'CreateCustomerPayload';
  /** Reads a single `Address` that is related to this `Customer`. */
  addressByAddressId?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Customer` that was created by this mutation. */
  customer?: Maybe<Customer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Store` that is related to this `Customer`. */
  storeByStoreId?: Maybe<Store>;
};

/** All input for the create `FilmActor` mutation. */
export type CreateFilmActorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `FilmActor` to be created by this mutation. */
  filmActor: FilmActorInput;
};

/** The output of our create `FilmActor` mutation. */
export type CreateFilmActorPayload = {
  __typename?: 'CreateFilmActorPayload';
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actorByActorId?: Maybe<Actor>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `FilmActor` that was created by this mutation. */
  filmActor?: Maybe<FilmActor>;
  /** Reads a single `Film` that is related to this `FilmActor`. */
  filmByFilmId?: Maybe<Film>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `FilmCategory` mutation. */
export type CreateFilmCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `FilmCategory` to be created by this mutation. */
  filmCategory: FilmCategoryInput;
};

/** The output of our create `FilmCategory` mutation. */
export type CreateFilmCategoryPayload = {
  __typename?: 'CreateFilmCategoryPayload';
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  filmByFilmId?: Maybe<Film>;
  /** The `FilmCategory` that was created by this mutation. */
  filmCategory?: Maybe<FilmCategory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Film` mutation. */
export type CreateFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Film` to be created by this mutation. */
  film: FilmInput;
};

/** The output of our create `Film` mutation. */
export type CreateFilmPayload = {
  __typename?: 'CreateFilmPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Film` that was created by this mutation. */
  film?: Maybe<Film>;
  /** Reads a single `Language` that is related to this `Film`. */
  languageByLanguageId?: Maybe<Language>;
  /** Reads a single `Language` that is related to this `Film`. */
  languageByOriginalLanguageId?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Inventory` mutation. */
export type CreateInventoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Inventory` to be created by this mutation. */
  inventory: InventoryInput;
};

/** The output of our create `Inventory` mutation. */
export type CreateInventoryPayload = {
  __typename?: 'CreateInventoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Film` that is related to this `Inventory`. */
  filmByFilmId?: Maybe<Film>;
  /** The `Inventory` that was created by this mutation. */
  inventory?: Maybe<Inventory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Store` that is related to this `Inventory`. */
  storeByStoreId?: Maybe<Store>;
};

/** All input for the create `Language` mutation. */
export type CreateLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Language` to be created by this mutation. */
  language: LanguageInput;
};

/** The output of our create `Language` mutation. */
export type CreateLanguagePayload = {
  __typename?: 'CreateLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Language` that was created by this mutation. */
  language?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Rental` mutation. */
export type CreateRentalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Rental` to be created by this mutation. */
  rental: RentalInput;
};

/** The output of our create `Rental` mutation. */
export type CreateRentalPayload = {
  __typename?: 'CreateRentalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Customer` that is related to this `Rental`. */
  customerByCustomerId?: Maybe<Customer>;
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventoryByInventoryId?: Maybe<Inventory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rental` that was created by this mutation. */
  rental?: Maybe<Rental>;
  /** Reads a single `Staff` that is related to this `Rental`. */
  staffByStaffId?: Maybe<Staff>;
};

/** All input for the create `Staff` mutation. */
export type CreateStaffInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Staff` to be created by this mutation. */
  staff: StaffInput;
};

/** The output of our create `Staff` mutation. */
export type CreateStaffPayload = {
  __typename?: 'CreateStaffPayload';
  /** Reads a single `Address` that is related to this `Staff`. */
  addressByAddressId?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Staff` that was created by this mutation. */
  staff?: Maybe<Staff>;
  /** Reads a single `Store` that is related to this `Staff`. */
  storeByStoreId?: Maybe<Store>;
};

/** All input for the create `Store` mutation. */
export type CreateStoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Store` to be created by this mutation. */
  store: StoreInput;
};

/** The output of our create `Store` mutation. */
export type CreateStorePayload = {
  __typename?: 'CreateStorePayload';
  /** Reads a single `Address` that is related to this `Store`. */
  addressByAddressId?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Store` that was created by this mutation. */
  store?: Maybe<Store>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  active?: Maybe<Scalars['Int']['output']>;
  activebool: Scalars['Boolean']['output'];
  /** Reads a single `Address` that is related to this `Customer`. */
  addressByAddressId?: Maybe<Address>;
  addressId: Scalars['Int']['output'];
  createDate: Scalars['Date']['output'];
  customerId: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  lastUpdate?: Maybe<Scalars['Datetime']['output']>;
  /** Reads and enables pagination through a set of `Rental`. */
  rentalsByCustomerIdList: Array<Rental>;
  /** Reads a single `Store` that is related to this `Customer`. */
  storeByStoreId?: Maybe<Store>;
  storeId: Scalars['Int']['output'];
};


export type CustomerRentalsByCustomerIdListArgs = {
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};

/**
 * A condition to be used against `Customer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CustomerCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `activebool` field. */
  activebool?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `createDate` field. */
  createDate?: InputMaybe<Scalars['Date']['input']>;
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']['input']>;
};

/** An input for mutations affecting `Customer` */
export type CustomerInput = {
  active?: InputMaybe<Scalars['Int']['input']>;
  activebool?: InputMaybe<Scalars['Boolean']['input']>;
  addressId: Scalars['Int']['input'];
  createDate?: InputMaybe<Scalars['Date']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  storeId: Scalars['Int']['input'];
};

export type CustomerList = {
  __typename?: 'CustomerList';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rowId?: Maybe<Scalars['Int']['output']>;
  sid?: Maybe<Scalars['Int']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `CustomerList` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CustomerListCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `notes` field. */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `sid` field. */
  sid?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `zipCode` field. */
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `CustomerList`. */
export enum CustomerListsOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  SidAsc = 'SID_ASC',
  SidDesc = 'SID_DESC',
  ZipCodeAsc = 'ZIP_CODE_ASC',
  ZipCodeDesc = 'ZIP_CODE_DESC'
}

/** Represents an update to a `Customer`. Fields that are set will be updated. */
export type CustomerPatch = {
  active?: InputMaybe<Scalars['Int']['input']>;
  activebool?: InputMaybe<Scalars['Boolean']['input']>;
  addressId?: InputMaybe<Scalars['Int']['input']>;
  createDate?: InputMaybe<Scalars['Date']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
};

/** Methods to use when ordering `Customer`. */
export enum CustomersOrderBy {
  ActiveboolAsc = 'ACTIVEBOOL_ASC',
  ActiveboolDesc = 'ACTIVEBOOL_DESC',
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  CreateDateAsc = 'CREATE_DATE_ASC',
  CreateDateDesc = 'CREATE_DATE_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC'
}

/** All input for the `deleteActorByActorId` mutation. */
export type DeleteActorByActorIdInput = {
  actorId: Scalars['Int']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `deleteActor` mutation. */
export type DeleteActorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Actor` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Actor` mutation. */
export type DeleteActorPayload = {
  __typename?: 'DeleteActorPayload';
  /** The `Actor` that was deleted by this mutation. */
  actor?: Maybe<Actor>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedActorId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteAddressByAddressId` mutation. */
export type DeleteAddressByAddressIdInput = {
  addressId: Scalars['Int']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Address` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  __typename?: 'DeleteAddressPayload';
  /** The `Address` that was deleted by this mutation. */
  address?: Maybe<Address>;
  /** Reads a single `City` that is related to this `Address`. */
  cityByCityId?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAddressId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteCategoryByCategoryId` mutation. */
export type DeleteCategoryByCategoryIdInput = {
  categoryId: Scalars['Int']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Category` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedCategoryId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteCityByCityId` mutation. */
export type DeleteCityByCityIdInput = {
  cityId: Scalars['Int']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `deleteCity` mutation. */
export type DeleteCityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `City` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `City` mutation. */
export type DeleteCityPayload = {
  __typename?: 'DeleteCityPayload';
  /** The `City` that was deleted by this mutation. */
  city?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `City`. */
  countryByCountryId?: Maybe<Country>;
  deletedCityId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteCountryByCountryId` mutation. */
export type DeleteCountryByCountryIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryId: Scalars['Int']['input'];
};

/** All input for the `deleteCountry` mutation. */
export type DeleteCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Country` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Country` mutation. */
export type DeleteCountryPayload = {
  __typename?: 'DeleteCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Country` that was deleted by this mutation. */
  country?: Maybe<Country>;
  deletedCountryId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteCustomerByCustomerId` mutation. */
export type DeleteCustomerByCustomerIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['Int']['input'];
};

/** All input for the `deleteCustomer` mutation. */
export type DeleteCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Customer` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Customer` mutation. */
export type DeleteCustomerPayload = {
  __typename?: 'DeleteCustomerPayload';
  /** Reads a single `Address` that is related to this `Customer`. */
  addressByAddressId?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Customer` that was deleted by this mutation. */
  customer?: Maybe<Customer>;
  deletedCustomerId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Store` that is related to this `Customer`. */
  storeByStoreId?: Maybe<Store>;
};

/** All input for the `deleteFilmActorByActorIdAndFilmId` mutation. */
export type DeleteFilmActorByActorIdAndFilmIdInput = {
  actorId: Scalars['Int']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  filmId: Scalars['Int']['input'];
};

/** All input for the `deleteFilmActor` mutation. */
export type DeleteFilmActorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `FilmActor` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `FilmActor` mutation. */
export type DeleteFilmActorPayload = {
  __typename?: 'DeleteFilmActorPayload';
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actorByActorId?: Maybe<Actor>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedFilmActorId?: Maybe<Scalars['ID']['output']>;
  /** The `FilmActor` that was deleted by this mutation. */
  filmActor?: Maybe<FilmActor>;
  /** Reads a single `Film` that is related to this `FilmActor`. */
  filmByFilmId?: Maybe<Film>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteFilmByFilmId` mutation. */
export type DeleteFilmByFilmIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  filmId: Scalars['Int']['input'];
};

/** All input for the `deleteFilmCategoryByFilmIdAndCategoryId` mutation. */
export type DeleteFilmCategoryByFilmIdAndCategoryIdInput = {
  categoryId: Scalars['Int']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  filmId: Scalars['Int']['input'];
};

/** All input for the `deleteFilmCategory` mutation. */
export type DeleteFilmCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `FilmCategory` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `FilmCategory` mutation. */
export type DeleteFilmCategoryPayload = {
  __typename?: 'DeleteFilmCategoryPayload';
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedFilmCategoryId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  filmByFilmId?: Maybe<Film>;
  /** The `FilmCategory` that was deleted by this mutation. */
  filmCategory?: Maybe<FilmCategory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteFilm` mutation. */
export type DeleteFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Film` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Film` mutation. */
export type DeleteFilmPayload = {
  __typename?: 'DeleteFilmPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedFilmId?: Maybe<Scalars['ID']['output']>;
  /** The `Film` that was deleted by this mutation. */
  film?: Maybe<Film>;
  /** Reads a single `Language` that is related to this `Film`. */
  languageByLanguageId?: Maybe<Language>;
  /** Reads a single `Language` that is related to this `Film`. */
  languageByOriginalLanguageId?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteInventoryByInventoryId` mutation. */
export type DeleteInventoryByInventoryIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  inventoryId: Scalars['Int']['input'];
};

/** All input for the `deleteInventory` mutation. */
export type DeleteInventoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Inventory` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Inventory` mutation. */
export type DeleteInventoryPayload = {
  __typename?: 'DeleteInventoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedInventoryId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Film` that is related to this `Inventory`. */
  filmByFilmId?: Maybe<Film>;
  /** The `Inventory` that was deleted by this mutation. */
  inventory?: Maybe<Inventory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Store` that is related to this `Inventory`. */
  storeByStoreId?: Maybe<Store>;
};

/** All input for the `deleteLanguageByLanguageId` mutation. */
export type DeleteLanguageByLanguageIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  languageId: Scalars['Int']['input'];
};

/** All input for the `deleteLanguage` mutation. */
export type DeleteLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Language` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Language` mutation. */
export type DeleteLanguagePayload = {
  __typename?: 'DeleteLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedLanguageId?: Maybe<Scalars['ID']['output']>;
  /** The `Language` that was deleted by this mutation. */
  language?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteRentalByRentalId` mutation. */
export type DeleteRentalByRentalIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rentalId: Scalars['Int']['input'];
};

/** All input for the `deleteRental` mutation. */
export type DeleteRentalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Rental` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Rental` mutation. */
export type DeleteRentalPayload = {
  __typename?: 'DeleteRentalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Customer` that is related to this `Rental`. */
  customerByCustomerId?: Maybe<Customer>;
  deletedRentalId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventoryByInventoryId?: Maybe<Inventory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rental` that was deleted by this mutation. */
  rental?: Maybe<Rental>;
  /** Reads a single `Staff` that is related to this `Rental`. */
  staffByStaffId?: Maybe<Staff>;
};

/** All input for the `deleteStaffByStaffId` mutation. */
export type DeleteStaffByStaffIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  staffId: Scalars['Int']['input'];
};

/** All input for the `deleteStaff` mutation. */
export type DeleteStaffInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Staff` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Staff` mutation. */
export type DeleteStaffPayload = {
  __typename?: 'DeleteStaffPayload';
  /** Reads a single `Address` that is related to this `Staff`. */
  addressByAddressId?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedStaffId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Staff` that was deleted by this mutation. */
  staff?: Maybe<Staff>;
  /** Reads a single `Store` that is related to this `Staff`. */
  storeByStoreId?: Maybe<Store>;
};

/** All input for the `deleteStoreByStoreId` mutation. */
export type DeleteStoreByStoreIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['Int']['input'];
};

/** All input for the `deleteStore` mutation. */
export type DeleteStoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Store` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Store` mutation. */
export type DeleteStorePayload = {
  __typename?: 'DeleteStorePayload';
  /** Reads a single `Address` that is related to this `Store`. */
  addressByAddressId?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedStoreId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Store` that was deleted by this mutation. */
  store?: Maybe<Store>;
};

export type Film = Node & {
  __typename?: 'Film';
  description?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `FilmActor`. */
  filmActorsByFilmIdList: Array<FilmActor>;
  /** Reads and enables pagination through a set of `FilmCategory`. */
  filmCategoriesByFilmIdList: Array<FilmCategory>;
  filmId: Scalars['Int']['output'];
  fulltext: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Inventory`. */
  inventoriesByFilmIdList: Array<Inventory>;
  /** Reads a single `Language` that is related to this `Film`. */
  languageByLanguageId?: Maybe<Language>;
  /** Reads a single `Language` that is related to this `Film`. */
  languageByOriginalLanguageId?: Maybe<Language>;
  languageId: Scalars['Int']['output'];
  lastUpdate: Scalars['Datetime']['output'];
  length?: Maybe<Scalars['Int']['output']>;
  originalLanguageId?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<MpaaRating>;
  releaseYear?: Maybe<Scalars['Year']['output']>;
  rentalDuration: Scalars['Int']['output'];
  rentalRate: Scalars['BigFloat']['output'];
  replacementCost: Scalars['BigFloat']['output'];
  specialFeatures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Scalars['String']['output'];
};


export type FilmFilmActorsByFilmIdListArgs = {
  condition?: InputMaybe<FilmActorCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};


export type FilmFilmCategoriesByFilmIdListArgs = {
  condition?: InputMaybe<FilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};


export type FilmInventoriesByFilmIdListArgs = {
  condition?: InputMaybe<InventoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};

export type FilmActor = Node & {
  __typename?: 'FilmActor';
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actorByActorId?: Maybe<Actor>;
  actorId: Scalars['Int']['output'];
  /** Reads a single `Film` that is related to this `FilmActor`. */
  filmByFilmId?: Maybe<Film>;
  filmId: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  lastUpdate: Scalars['Datetime']['output'];
};

/**
 * A condition to be used against `FilmActor` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FilmActorCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** An input for mutations affecting `FilmActor` */
export type FilmActorInput = {
  actorId: Scalars['Int']['input'];
  filmId: Scalars['Int']['input'];
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Represents an update to a `FilmActor`. Fields that are set will be updated. */
export type FilmActorPatch = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  filmId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Methods to use when ordering `FilmActor`. */
export enum FilmActorsOrderBy {
  ActorIdAsc = 'ACTOR_ID_ASC',
  ActorIdDesc = 'ACTOR_ID_DESC',
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Methods to use when ordering `FilmCategory`. */
export enum FilmCategoriesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type FilmCategory = Node & {
  __typename?: 'FilmCategory';
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  categoryId: Scalars['Int']['output'];
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  filmByFilmId?: Maybe<Film>;
  filmId: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  lastUpdate: Scalars['Datetime']['output'];
};

/**
 * A condition to be used against `FilmCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type FilmCategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** An input for mutations affecting `FilmCategory` */
export type FilmCategoryInput = {
  categoryId: Scalars['Int']['input'];
  filmId: Scalars['Int']['input'];
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Represents an update to a `FilmCategory`. Fields that are set will be updated. */
export type FilmCategoryPatch = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  filmId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A condition to be used against `Film` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FilmCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `fulltext` field. */
  fulltext?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `languageId` field. */
  languageId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `originalLanguageId` field. */
  originalLanguageId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>;
  /** Checks for equality with the object’s `releaseYear` field. */
  releaseYear?: InputMaybe<Scalars['Year']['input']>;
  /** Checks for equality with the object’s `rentalDuration` field. */
  rentalDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `rentalRate` field. */
  rentalRate?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `replacementCost` field. */
  replacementCost?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `specialFeatures` field. */
  specialFeatures?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `filmInStock` mutation. */
export type FilmInStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pFilmId?: InputMaybe<Scalars['Int']['input']>;
  pStoreId?: InputMaybe<Scalars['Int']['input']>;
};

/** The output of our `filmInStock` mutation. */
export type FilmInStockPayload = {
  __typename?: 'FilmInStockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pFilmCounts?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** An input for mutations affecting `Film` */
export type FilmInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  filmId?: InputMaybe<Scalars['Int']['input']>;
  fulltext: Scalars['String']['input'];
  languageId: Scalars['Int']['input'];
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  originalLanguageId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<MpaaRating>;
  releaseYear?: InputMaybe<Scalars['Year']['input']>;
  rentalDuration?: InputMaybe<Scalars['Int']['input']>;
  rentalRate?: InputMaybe<Scalars['BigFloat']['input']>;
  replacementCost?: InputMaybe<Scalars['BigFloat']['input']>;
  specialFeatures?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: Scalars['String']['input'];
};

export type FilmList = {
  __typename?: 'FilmList';
  actors?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fid?: Maybe<Scalars['Int']['output']>;
  length?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['BigFloat']['output']>;
  rating?: Maybe<MpaaRating>;
  title?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `FilmList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FilmListCondition = {
  /** Checks for equality with the object’s `actors` field. */
  actors?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fid` field. */
  fid?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `FilmList`. */
export enum FilmListsOrderBy {
  ActorsAsc = 'ACTORS_ASC',
  ActorsDesc = 'ACTORS_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  FidAsc = 'FID_ASC',
  FidDesc = 'FID_DESC',
  LengthAsc = 'LENGTH_ASC',
  LengthDesc = 'LENGTH_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** All input for the `filmNotInStock` mutation. */
export type FilmNotInStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pFilmId?: InputMaybe<Scalars['Int']['input']>;
  pStoreId?: InputMaybe<Scalars['Int']['input']>;
};

/** The output of our `filmNotInStock` mutation. */
export type FilmNotInStockPayload = {
  __typename?: 'FilmNotInStockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pFilmCounts?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** Represents an update to a `Film`. Fields that are set will be updated. */
export type FilmPatch = {
  description?: InputMaybe<Scalars['String']['input']>;
  filmId?: InputMaybe<Scalars['Int']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  languageId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  originalLanguageId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<MpaaRating>;
  releaseYear?: InputMaybe<Scalars['Year']['input']>;
  rentalDuration?: InputMaybe<Scalars['Int']['input']>;
  rentalRate?: InputMaybe<Scalars['BigFloat']['input']>;
  replacementCost?: InputMaybe<Scalars['BigFloat']['input']>;
  specialFeatures?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `Film`. */
export enum FilmsOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  FulltextAsc = 'FULLTEXT_ASC',
  FulltextDesc = 'FULLTEXT_DESC',
  LanguageIdAsc = 'LANGUAGE_ID_ASC',
  LanguageIdDesc = 'LANGUAGE_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  LengthAsc = 'LENGTH_ASC',
  LengthDesc = 'LENGTH_DESC',
  Natural = 'NATURAL',
  OriginalLanguageIdAsc = 'ORIGINAL_LANGUAGE_ID_ASC',
  OriginalLanguageIdDesc = 'ORIGINAL_LANGUAGE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  ReleaseYearAsc = 'RELEASE_YEAR_ASC',
  ReleaseYearDesc = 'RELEASE_YEAR_DESC',
  RentalDurationAsc = 'RENTAL_DURATION_ASC',
  RentalDurationDesc = 'RENTAL_DURATION_DESC',
  RentalRateAsc = 'RENTAL_RATE_ASC',
  RentalRateDesc = 'RENTAL_RATE_DESC',
  ReplacementCostAsc = 'REPLACEMENT_COST_ASC',
  ReplacementCostDesc = 'REPLACEMENT_COST_DESC',
  SpecialFeaturesAsc = 'SPECIAL_FEATURES_ASC',
  SpecialFeaturesDesc = 'SPECIAL_FEATURES_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** All input for the `getCustomerBalance` mutation. */
export type GetCustomerBalanceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pCustomerId?: InputMaybe<Scalars['Int']['input']>;
  pEffectiveDate?: InputMaybe<Scalars['Datetime']['input']>;
};

/** The output of our `getCustomerBalance` mutation. */
export type GetCustomerBalancePayload = {
  __typename?: 'GetCustomerBalancePayload';
  bigFloat?: Maybe<Scalars['BigFloat']['output']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** Methods to use when ordering `Inventory`. */
export enum InventoriesOrderBy {
  FilmIdAsc = 'FILM_ID_ASC',
  FilmIdDesc = 'FILM_ID_DESC',
  InventoryIdAsc = 'INVENTORY_ID_ASC',
  InventoryIdDesc = 'INVENTORY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC'
}

export type Inventory = Node & {
  __typename?: 'Inventory';
  /** Reads a single `Film` that is related to this `Inventory`. */
  filmByFilmId?: Maybe<Film>;
  filmId: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  inventoryId: Scalars['Int']['output'];
  lastUpdate: Scalars['Datetime']['output'];
  /** Reads and enables pagination through a set of `Rental`. */
  rentalsByInventoryIdList: Array<Rental>;
  /** Reads a single `Store` that is related to this `Inventory`. */
  storeByStoreId?: Maybe<Store>;
  storeId: Scalars['Int']['output'];
};


export type InventoryRentalsByInventoryIdListArgs = {
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};

/**
 * A condition to be used against `Inventory` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type InventoryCondition = {
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `inventoryId` field. */
  inventoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']['input']>;
};

/** All input for the `inventoryHeldByCustomer` mutation. */
export type InventoryHeldByCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pInventoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** The output of our `inventoryHeldByCustomer` mutation. */
export type InventoryHeldByCustomerPayload = {
  __typename?: 'InventoryHeldByCustomerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  integer?: Maybe<Scalars['Int']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `inventoryInStock` mutation. */
export type InventoryInStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pInventoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** The output of our `inventoryInStock` mutation. */
export type InventoryInStockPayload = {
  __typename?: 'InventoryInStockPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** An input for mutations affecting `Inventory` */
export type InventoryInput = {
  filmId: Scalars['Int']['input'];
  inventoryId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  storeId: Scalars['Int']['input'];
};

/** Represents an update to a `Inventory`. Fields that are set will be updated. */
export type InventoryPatch = {
  filmId?: InputMaybe<Scalars['Int']['input']>;
  inventoryId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
};

export type Language = Node & {
  __typename?: 'Language';
  /** Reads and enables pagination through a set of `Film`. */
  filmsByLanguageIdList: Array<Film>;
  /** Reads and enables pagination through a set of `Film`. */
  filmsByOriginalLanguageIdList: Array<Film>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  languageId: Scalars['Int']['output'];
  lastUpdate: Scalars['Datetime']['output'];
  name: Scalars['String']['output'];
};


export type LanguageFilmsByLanguageIdListArgs = {
  condition?: InputMaybe<FilmCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};


export type LanguageFilmsByOriginalLanguageIdListArgs = {
  condition?: InputMaybe<FilmCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};

/**
 * A condition to be used against `Language` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LanguageCondition = {
  /** Checks for equality with the object’s `languageId` field. */
  languageId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Language` */
export type LanguageInput = {
  languageId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  name: Scalars['String']['input'];
};

/** Represents an update to a `Language`. Fields that are set will be updated. */
export type LanguagePatch = {
  languageId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `Language`. */
export enum LanguagesOrderBy {
  LanguageIdAsc = 'LANGUAGE_ID_ASC',
  LanguageIdDesc = 'LANGUAGE_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum MpaaRating {
  G = 'G',
  Nc_17 = 'NC_17',
  Pg = 'PG',
  Pg_13 = 'PG_13',
  R = 'R'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Actor`. */
  createActor?: Maybe<CreateActorPayload>;
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>;
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `City`. */
  createCity?: Maybe<CreateCityPayload>;
  /** Creates a single `Country`. */
  createCountry?: Maybe<CreateCountryPayload>;
  /** Creates a single `Customer`. */
  createCustomer?: Maybe<CreateCustomerPayload>;
  /** Creates a single `Film`. */
  createFilm?: Maybe<CreateFilmPayload>;
  /** Creates a single `FilmActor`. */
  createFilmActor?: Maybe<CreateFilmActorPayload>;
  /** Creates a single `FilmCategory`. */
  createFilmCategory?: Maybe<CreateFilmCategoryPayload>;
  /** Creates a single `Inventory`. */
  createInventory?: Maybe<CreateInventoryPayload>;
  /** Creates a single `Language`. */
  createLanguage?: Maybe<CreateLanguagePayload>;
  /** Creates a single `Rental`. */
  createRental?: Maybe<CreateRentalPayload>;
  /** Creates a single `Staff`. */
  createStaff?: Maybe<CreateStaffPayload>;
  /** Creates a single `Store`. */
  createStore?: Maybe<CreateStorePayload>;
  /** Deletes a single `Actor` using its globally unique id. */
  deleteActor?: Maybe<DeleteActorPayload>;
  /** Deletes a single `Actor` using a unique key. */
  deleteActorByActorId?: Maybe<DeleteActorPayload>;
  /** Deletes a single `Address` using its globally unique id. */
  deleteAddress?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddressByAddressId?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Category` using its globally unique id. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryByCategoryId?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `City` using its globally unique id. */
  deleteCity?: Maybe<DeleteCityPayload>;
  /** Deletes a single `City` using a unique key. */
  deleteCityByCityId?: Maybe<DeleteCityPayload>;
  /** Deletes a single `Country` using its globally unique id. */
  deleteCountry?: Maybe<DeleteCountryPayload>;
  /** Deletes a single `Country` using a unique key. */
  deleteCountryByCountryId?: Maybe<DeleteCountryPayload>;
  /** Deletes a single `Customer` using its globally unique id. */
  deleteCustomer?: Maybe<DeleteCustomerPayload>;
  /** Deletes a single `Customer` using a unique key. */
  deleteCustomerByCustomerId?: Maybe<DeleteCustomerPayload>;
  /** Deletes a single `Film` using its globally unique id. */
  deleteFilm?: Maybe<DeleteFilmPayload>;
  /** Deletes a single `FilmActor` using its globally unique id. */
  deleteFilmActor?: Maybe<DeleteFilmActorPayload>;
  /** Deletes a single `FilmActor` using a unique key. */
  deleteFilmActorByActorIdAndFilmId?: Maybe<DeleteFilmActorPayload>;
  /** Deletes a single `Film` using a unique key. */
  deleteFilmByFilmId?: Maybe<DeleteFilmPayload>;
  /** Deletes a single `FilmCategory` using its globally unique id. */
  deleteFilmCategory?: Maybe<DeleteFilmCategoryPayload>;
  /** Deletes a single `FilmCategory` using a unique key. */
  deleteFilmCategoryByFilmIdAndCategoryId?: Maybe<DeleteFilmCategoryPayload>;
  /** Deletes a single `Inventory` using its globally unique id. */
  deleteInventory?: Maybe<DeleteInventoryPayload>;
  /** Deletes a single `Inventory` using a unique key. */
  deleteInventoryByInventoryId?: Maybe<DeleteInventoryPayload>;
  /** Deletes a single `Language` using its globally unique id. */
  deleteLanguage?: Maybe<DeleteLanguagePayload>;
  /** Deletes a single `Language` using a unique key. */
  deleteLanguageByLanguageId?: Maybe<DeleteLanguagePayload>;
  /** Deletes a single `Rental` using its globally unique id. */
  deleteRental?: Maybe<DeleteRentalPayload>;
  /** Deletes a single `Rental` using a unique key. */
  deleteRentalByRentalId?: Maybe<DeleteRentalPayload>;
  /** Deletes a single `Staff` using its globally unique id. */
  deleteStaff?: Maybe<DeleteStaffPayload>;
  /** Deletes a single `Staff` using a unique key. */
  deleteStaffByStaffId?: Maybe<DeleteStaffPayload>;
  /** Deletes a single `Store` using its globally unique id. */
  deleteStore?: Maybe<DeleteStorePayload>;
  /** Deletes a single `Store` using a unique key. */
  deleteStoreByStoreId?: Maybe<DeleteStorePayload>;
  filmInStock?: Maybe<FilmInStockPayload>;
  filmNotInStock?: Maybe<FilmNotInStockPayload>;
  getCustomerBalance?: Maybe<GetCustomerBalancePayload>;
  inventoryHeldByCustomer?: Maybe<InventoryHeldByCustomerPayload>;
  inventoryInStock?: Maybe<InventoryInStockPayload>;
  rewardsReport?: Maybe<RewardsReportPayload>;
  /** Updates a single `Actor` using its globally unique id and a patch. */
  updateActor?: Maybe<UpdateActorPayload>;
  /** Updates a single `Actor` using a unique key and a patch. */
  updateActorByActorId?: Maybe<UpdateActorPayload>;
  /** Updates a single `Address` using its globally unique id and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddressByAddressId?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryByCategoryId?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `City` using its globally unique id and a patch. */
  updateCity?: Maybe<UpdateCityPayload>;
  /** Updates a single `City` using a unique key and a patch. */
  updateCityByCityId?: Maybe<UpdateCityPayload>;
  /** Updates a single `Country` using its globally unique id and a patch. */
  updateCountry?: Maybe<UpdateCountryPayload>;
  /** Updates a single `Country` using a unique key and a patch. */
  updateCountryByCountryId?: Maybe<UpdateCountryPayload>;
  /** Updates a single `Customer` using its globally unique id and a patch. */
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  /** Updates a single `Customer` using a unique key and a patch. */
  updateCustomerByCustomerId?: Maybe<UpdateCustomerPayload>;
  /** Updates a single `Film` using its globally unique id and a patch. */
  updateFilm?: Maybe<UpdateFilmPayload>;
  /** Updates a single `FilmActor` using its globally unique id and a patch. */
  updateFilmActor?: Maybe<UpdateFilmActorPayload>;
  /** Updates a single `FilmActor` using a unique key and a patch. */
  updateFilmActorByActorIdAndFilmId?: Maybe<UpdateFilmActorPayload>;
  /** Updates a single `Film` using a unique key and a patch. */
  updateFilmByFilmId?: Maybe<UpdateFilmPayload>;
  /** Updates a single `FilmCategory` using its globally unique id and a patch. */
  updateFilmCategory?: Maybe<UpdateFilmCategoryPayload>;
  /** Updates a single `FilmCategory` using a unique key and a patch. */
  updateFilmCategoryByFilmIdAndCategoryId?: Maybe<UpdateFilmCategoryPayload>;
  /** Updates a single `Inventory` using its globally unique id and a patch. */
  updateInventory?: Maybe<UpdateInventoryPayload>;
  /** Updates a single `Inventory` using a unique key and a patch. */
  updateInventoryByInventoryId?: Maybe<UpdateInventoryPayload>;
  /** Updates a single `Language` using its globally unique id and a patch. */
  updateLanguage?: Maybe<UpdateLanguagePayload>;
  /** Updates a single `Language` using a unique key and a patch. */
  updateLanguageByLanguageId?: Maybe<UpdateLanguagePayload>;
  /** Updates a single `Rental` using its globally unique id and a patch. */
  updateRental?: Maybe<UpdateRentalPayload>;
  /** Updates a single `Rental` using a unique key and a patch. */
  updateRentalByRentalId?: Maybe<UpdateRentalPayload>;
  /** Updates a single `Staff` using its globally unique id and a patch. */
  updateStaff?: Maybe<UpdateStaffPayload>;
  /** Updates a single `Staff` using a unique key and a patch. */
  updateStaffByStaffId?: Maybe<UpdateStaffPayload>;
  /** Updates a single `Store` using its globally unique id and a patch. */
  updateStore?: Maybe<UpdateStorePayload>;
  /** Updates a single `Store` using a unique key and a patch. */
  updateStoreByStoreId?: Maybe<UpdateStorePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateActorArgs = {
  input: CreateActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCityArgs = {
  input: CreateCityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFilmArgs = {
  input: CreateFilmInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFilmActorArgs = {
  input: CreateFilmActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFilmCategoryArgs = {
  input: CreateFilmCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInventoryArgs = {
  input: CreateInventoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLanguageArgs = {
  input: CreateLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRentalArgs = {
  input: CreateRentalInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateStaffArgs = {
  input: CreateStaffInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateStoreArgs = {
  input: CreateStoreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteActorArgs = {
  input: DeleteActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteActorByActorIdArgs = {
  input: DeleteActorByActorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByAddressIdArgs = {
  input: DeleteAddressByAddressIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByCategoryIdArgs = {
  input: DeleteCategoryByCategoryIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCityArgs = {
  input: DeleteCityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCityByCityIdArgs = {
  input: DeleteCityByCityIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCountryArgs = {
  input: DeleteCountryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCountryByCountryIdArgs = {
  input: DeleteCountryByCountryIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerArgs = {
  input: DeleteCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerByCustomerIdArgs = {
  input: DeleteCustomerByCustomerIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmArgs = {
  input: DeleteFilmInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmActorArgs = {
  input: DeleteFilmActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmActorByActorIdAndFilmIdArgs = {
  input: DeleteFilmActorByActorIdAndFilmIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmByFilmIdArgs = {
  input: DeleteFilmByFilmIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmCategoryArgs = {
  input: DeleteFilmCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmCategoryByFilmIdAndCategoryIdArgs = {
  input: DeleteFilmCategoryByFilmIdAndCategoryIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInventoryArgs = {
  input: DeleteInventoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInventoryByInventoryIdArgs = {
  input: DeleteInventoryByInventoryIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLanguageArgs = {
  input: DeleteLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLanguageByLanguageIdArgs = {
  input: DeleteLanguageByLanguageIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRentalArgs = {
  input: DeleteRentalInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRentalByRentalIdArgs = {
  input: DeleteRentalByRentalIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStaffArgs = {
  input: DeleteStaffInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStaffByStaffIdArgs = {
  input: DeleteStaffByStaffIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStoreArgs = {
  input: DeleteStoreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStoreByStoreIdArgs = {
  input: DeleteStoreByStoreIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationFilmInStockArgs = {
  input: FilmInStockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationFilmNotInStockArgs = {
  input: FilmNotInStockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationGetCustomerBalanceArgs = {
  input: GetCustomerBalanceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationInventoryHeldByCustomerArgs = {
  input: InventoryHeldByCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationInventoryInStockArgs = {
  input: InventoryInStockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRewardsReportArgs = {
  input: RewardsReportInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateActorArgs = {
  input: UpdateActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateActorByActorIdArgs = {
  input: UpdateActorByActorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByAddressIdArgs = {
  input: UpdateAddressByAddressIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByCategoryIdArgs = {
  input: UpdateCategoryByCategoryIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCityArgs = {
  input: UpdateCityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCityByCityIdArgs = {
  input: UpdateCityByCityIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCountryByCountryIdArgs = {
  input: UpdateCountryByCountryIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerByCustomerIdArgs = {
  input: UpdateCustomerByCustomerIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmArgs = {
  input: UpdateFilmInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmActorArgs = {
  input: UpdateFilmActorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmActorByActorIdAndFilmIdArgs = {
  input: UpdateFilmActorByActorIdAndFilmIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmByFilmIdArgs = {
  input: UpdateFilmByFilmIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmCategoryArgs = {
  input: UpdateFilmCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmCategoryByFilmIdAndCategoryIdArgs = {
  input: UpdateFilmCategoryByFilmIdAndCategoryIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInventoryArgs = {
  input: UpdateInventoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInventoryByInventoryIdArgs = {
  input: UpdateInventoryByInventoryIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLanguageArgs = {
  input: UpdateLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLanguageByLanguageIdArgs = {
  input: UpdateLanguageByLanguageIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRentalArgs = {
  input: UpdateRentalInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRentalByRentalIdArgs = {
  input: UpdateRentalByRentalIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStaffArgs = {
  input: UpdateStaffInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStaffByStaffIdArgs = {
  input: UpdateStaffByStaffIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStoreArgs = {
  input: UpdateStoreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStoreByStoreIdArgs = {
  input: UpdateStoreByStoreIdInput;
};

export type NicerButSlowerFilmList = {
  __typename?: 'NicerButSlowerFilmList';
  actors?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fid?: Maybe<Scalars['Int']['output']>;
  length?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['BigFloat']['output']>;
  rating?: Maybe<MpaaRating>;
  title?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `NicerButSlowerFilmList` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type NicerButSlowerFilmListCondition = {
  /** Checks for equality with the object’s `actors` field. */
  actors?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fid` field. */
  fid?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `NicerButSlowerFilmList`. */
export enum NicerButSlowerFilmListsOrderBy {
  ActorsAsc = 'ACTORS_ASC',
  ActorsDesc = 'ACTORS_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  FidAsc = 'FID_ASC',
  FidDesc = 'FID_DESC',
  LengthAsc = 'LENGTH_ASC',
  LengthDesc = 'LENGTH_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  _groupConcat?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Actor` using its globally unique `ID`. */
  actor?: Maybe<Actor>;
  actorByActorId?: Maybe<Actor>;
  /** Reads a single `Address` using its globally unique `ID`. */
  address?: Maybe<Address>;
  addressByAddressId?: Maybe<Address>;
  /** Reads a set of `ActorInfo`. */
  allActorInfosList?: Maybe<Array<ActorInfo>>;
  /** Reads a set of `Actor`. */
  allActorsList?: Maybe<Array<Actor>>;
  /** Reads a set of `Address`. */
  allAddressesList?: Maybe<Array<Address>>;
  /** Reads a set of `Category`. */
  allCategoriesList?: Maybe<Array<Category>>;
  /** Reads a set of `City`. */
  allCitiesList?: Maybe<Array<City>>;
  /** Reads a set of `Country`. */
  allCountriesList?: Maybe<Array<Country>>;
  /** Reads a set of `CustomerList`. */
  allCustomerListsList?: Maybe<Array<CustomerList>>;
  /** Reads a set of `Customer`. */
  allCustomersList?: Maybe<Array<Customer>>;
  /** Reads a set of `FilmActor`. */
  allFilmActorsList?: Maybe<Array<FilmActor>>;
  /** Reads a set of `FilmCategory`. */
  allFilmCategoriesList?: Maybe<Array<FilmCategory>>;
  /** Reads a set of `FilmList`. */
  allFilmListsList?: Maybe<Array<FilmList>>;
  /** Reads a set of `Film`. */
  allFilmsList?: Maybe<Array<Film>>;
  /** Reads a set of `Inventory`. */
  allInventoriesList?: Maybe<Array<Inventory>>;
  /** Reads a set of `Language`. */
  allLanguagesList?: Maybe<Array<Language>>;
  /** Reads a set of `NicerButSlowerFilmList`. */
  allNicerButSlowerFilmListsList?: Maybe<Array<NicerButSlowerFilmList>>;
  /** Reads a set of `Rental`. */
  allRentalsList?: Maybe<Array<Rental>>;
  /** Reads a set of `Staff`. */
  allStaffList?: Maybe<Array<Staff>>;
  /** Reads a set of `StaffList`. */
  allStaffListsList?: Maybe<Array<StaffList>>;
  /** Reads a set of `Store`. */
  allStoresList?: Maybe<Array<Store>>;
  /** Reads a single `Category` using its globally unique `ID`. */
  category?: Maybe<Category>;
  categoryByCategoryId?: Maybe<Category>;
  /** Reads a single `City` using its globally unique `ID`. */
  city?: Maybe<City>;
  cityByCityId?: Maybe<City>;
  /** Reads a single `Country` using its globally unique `ID`. */
  country?: Maybe<Country>;
  countryByCountryId?: Maybe<Country>;
  /** Reads a single `Customer` using its globally unique `ID`. */
  customer?: Maybe<Customer>;
  customerByCustomerId?: Maybe<Customer>;
  /** Reads a single `Film` using its globally unique `ID`. */
  film?: Maybe<Film>;
  /** Reads a single `FilmActor` using its globally unique `ID`. */
  filmActor?: Maybe<FilmActor>;
  filmActorByActorIdAndFilmId?: Maybe<FilmActor>;
  filmByFilmId?: Maybe<Film>;
  /** Reads a single `FilmCategory` using its globally unique `ID`. */
  filmCategory?: Maybe<FilmCategory>;
  filmCategoryByFilmIdAndCategoryId?: Maybe<FilmCategory>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  id: Scalars['ID']['output'];
  /** Reads a single `Inventory` using its globally unique `ID`. */
  inventory?: Maybe<Inventory>;
  inventoryByInventoryId?: Maybe<Inventory>;
  /** Reads a single `Language` using its globally unique `ID`. */
  language?: Maybe<Language>;
  languageByLanguageId?: Maybe<Language>;
  lastDay?: Maybe<Scalars['Date']['output']>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Rental` using its globally unique `ID`. */
  rental?: Maybe<Rental>;
  rentalByRentalId?: Maybe<Rental>;
  /** Reads a single `Staff` using its globally unique `ID`. */
  staff?: Maybe<Staff>;
  staffByStaffId?: Maybe<Staff>;
  /** Reads a single `Store` using its globally unique `ID`. */
  store?: Maybe<Store>;
  storeByStoreId?: Maybe<Store>;
};


/** The root query type which gives access points into the data universe. */
export type Query_GroupConcatArgs = {
  arg0?: InputMaybe<Scalars['String']['input']>;
  arg1?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryActorArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryActorByActorIdArgs = {
  actorId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressByAddressIdArgs = {
  addressId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllActorInfosListArgs = {
  condition?: InputMaybe<ActorInfoCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ActorInfosOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllActorsListArgs = {
  condition?: InputMaybe<ActorCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ActorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAddressesListArgs = {
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCategoriesListArgs = {
  condition?: InputMaybe<CategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCitiesListArgs = {
  condition?: InputMaybe<CityCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCountriesListArgs = {
  condition?: InputMaybe<CountryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCustomerListsListArgs = {
  condition?: InputMaybe<CustomerListCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomerListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCustomersListArgs = {
  condition?: InputMaybe<CustomerCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFilmActorsListArgs = {
  condition?: InputMaybe<FilmActorCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFilmCategoriesListArgs = {
  condition?: InputMaybe<FilmCategoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFilmListsListArgs = {
  condition?: InputMaybe<FilmListCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFilmsListArgs = {
  condition?: InputMaybe<FilmCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllInventoriesListArgs = {
  condition?: InputMaybe<InventoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllLanguagesListArgs = {
  condition?: InputMaybe<LanguageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNicerButSlowerFilmListsListArgs = {
  condition?: InputMaybe<NicerButSlowerFilmListCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NicerButSlowerFilmListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRentalsListArgs = {
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllStaffListArgs = {
  condition?: InputMaybe<StaffCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllStaffListsListArgs = {
  condition?: InputMaybe<StaffListCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StaffListsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllStoresListArgs = {
  condition?: InputMaybe<StoreCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryByCategoryIdArgs = {
  categoryId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCityArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCityByCityIdArgs = {
  cityId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryByCountryIdArgs = {
  countryId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerByCustomerIdArgs = {
  customerId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmActorArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmActorByActorIdAndFilmIdArgs = {
  actorId: Scalars['Int']['input'];
  filmId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmByFilmIdArgs = {
  filmId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmCategoryArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmCategoryByFilmIdAndCategoryIdArgs = {
  categoryId: Scalars['Int']['input'];
  filmId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInventoryArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInventoryByInventoryIdArgs = {
  inventoryId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguageArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLanguageByLanguageIdArgs = {
  languageId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLastDayArgs = {
  arg0: Scalars['Datetime']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRentalArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRentalByRentalIdArgs = {
  rentalId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStaffArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStaffByStaffIdArgs = {
  staffId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStoreArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStoreByStoreIdArgs = {
  storeId: Scalars['Int']['input'];
};

export type Rental = Node & {
  __typename?: 'Rental';
  /** Reads a single `Customer` that is related to this `Rental`. */
  customerByCustomerId?: Maybe<Customer>;
  customerId: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventoryByInventoryId?: Maybe<Inventory>;
  inventoryId: Scalars['Int']['output'];
  lastUpdate: Scalars['Datetime']['output'];
  rentalDate: Scalars['Datetime']['output'];
  rentalId: Scalars['Int']['output'];
  returnDate?: Maybe<Scalars['Datetime']['output']>;
  /** Reads a single `Staff` that is related to this `Rental`. */
  staffByStaffId?: Maybe<Staff>;
  staffId: Scalars['Int']['output'];
};

/** A condition to be used against `Rental` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RentalCondition = {
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `inventoryId` field. */
  inventoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `rentalDate` field. */
  rentalDate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `returnDate` field. */
  returnDate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']['input']>;
};

/** An input for mutations affecting `Rental` */
export type RentalInput = {
  customerId: Scalars['Int']['input'];
  inventoryId: Scalars['Int']['input'];
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  rentalDate: Scalars['Datetime']['input'];
  rentalId?: InputMaybe<Scalars['Int']['input']>;
  returnDate?: InputMaybe<Scalars['Datetime']['input']>;
  staffId: Scalars['Int']['input'];
};

/** Represents an update to a `Rental`. Fields that are set will be updated. */
export type RentalPatch = {
  customerId?: InputMaybe<Scalars['Int']['input']>;
  inventoryId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  rentalDate?: InputMaybe<Scalars['Datetime']['input']>;
  rentalId?: InputMaybe<Scalars['Int']['input']>;
  returnDate?: InputMaybe<Scalars['Datetime']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
};

/** Methods to use when ordering `Rental`. */
export enum RentalsOrderBy {
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  InventoryIdAsc = 'INVENTORY_ID_ASC',
  InventoryIdDesc = 'INVENTORY_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RentalDateAsc = 'RENTAL_DATE_ASC',
  RentalDateDesc = 'RENTAL_DATE_DESC',
  RentalIdAsc = 'RENTAL_ID_ASC',
  RentalIdDesc = 'RENTAL_ID_DESC',
  ReturnDateAsc = 'RETURN_DATE_ASC',
  ReturnDateDesc = 'RETURN_DATE_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC'
}

/** All input for the `rewardsReport` mutation. */
export type RewardsReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  minDollarAmountPurchased?: InputMaybe<Scalars['BigFloat']['input']>;
  minMonthlyPurchases?: InputMaybe<Scalars['Int']['input']>;
};

/** The output of our `rewardsReport` mutation. */
export type RewardsReportPayload = {
  __typename?: 'RewardsReportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type Staff = Node & {
  __typename?: 'Staff';
  active: Scalars['Boolean']['output'];
  /** Reads a single `Address` that is related to this `Staff`. */
  addressByAddressId?: Maybe<Address>;
  addressId: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  lastUpdate: Scalars['Datetime']['output'];
  password?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Rental`. */
  rentalsByStaffIdList: Array<Rental>;
  staffId: Scalars['Int']['output'];
  /** Reads a single `Store` that is related to this `Staff`. */
  storeByStoreId?: Maybe<Store>;
  storeId: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};


export type StaffRentalsByStaffIdListArgs = {
  condition?: InputMaybe<RentalCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RentalsOrderBy>>;
};

/** A condition to be used against `Staff` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StaffCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `picture` field. */
  picture?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Staff` */
export type StaffInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  addressId: Scalars['Int']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export type StaffList = {
  __typename?: 'StaffList';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rowId?: Maybe<Scalars['Int']['output']>;
  sid?: Maybe<Scalars['Int']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `StaffList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type StaffListCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `sid` field. */
  sid?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `zipCode` field. */
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `StaffList`. */
export enum StaffListsOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  SidAsc = 'SID_ASC',
  SidDesc = 'SID_DESC',
  ZipCodeAsc = 'ZIP_CODE_ASC',
  ZipCodeDesc = 'ZIP_CODE_DESC'
}

/** Methods to use when ordering `Staff`. */
export enum StaffOrderBy {
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  Natural = 'NATURAL',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PictureAsc = 'PICTURE_ASC',
  PictureDesc = 'PICTURE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StaffIdAsc = 'STAFF_ID_ASC',
  StaffIdDesc = 'STAFF_ID_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC'
}

/** Represents an update to a `Staff`. Fields that are set will be updated. */
export type StaffPatch = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  addressId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Store = Node & {
  __typename?: 'Store';
  /** Reads a single `Address` that is related to this `Store`. */
  addressByAddressId?: Maybe<Address>;
  addressId: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `Customer`. */
  customersByStoreIdList: Array<Customer>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Inventory`. */
  inventoriesByStoreIdList: Array<Inventory>;
  lastUpdate: Scalars['Datetime']['output'];
  managerStaffId: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `Staff`. */
  staffByStoreIdList: Array<Staff>;
  storeId: Scalars['Int']['output'];
};


export type StoreCustomersByStoreIdListArgs = {
  condition?: InputMaybe<CustomerCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


export type StoreInventoriesByStoreIdListArgs = {
  condition?: InputMaybe<InventoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>;
};


export type StoreStaffByStoreIdListArgs = {
  condition?: InputMaybe<StaffCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StaffOrderBy>>;
};

/** A condition to be used against `Store` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StoreCondition = {
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `managerStaffId` field. */
  managerStaffId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars['Int']['input']>;
};

/** An input for mutations affecting `Store` */
export type StoreInput = {
  addressId: Scalars['Int']['input'];
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  managerStaffId: Scalars['Int']['input'];
  storeId?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents an update to a `Store`. Fields that are set will be updated. */
export type StorePatch = {
  addressId?: InputMaybe<Scalars['Int']['input']>;
  lastUpdate?: InputMaybe<Scalars['Datetime']['input']>;
  managerStaffId?: InputMaybe<Scalars['Int']['input']>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
};

/** Methods to use when ordering `Store`. */
export enum StoresOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  LastUpdateAsc = 'LAST_UPDATE_ASC',
  LastUpdateDesc = 'LAST_UPDATE_DESC',
  ManagerStaffIdAsc = 'MANAGER_STAFF_ID_ASC',
  ManagerStaffIdDesc = 'MANAGER_STAFF_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StoreIdAsc = 'STORE_ID_ASC',
  StoreIdDesc = 'STORE_ID_DESC'
}

/** All input for the `updateActorByActorId` mutation. */
export type UpdateActorByActorIdInput = {
  actorId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Actor` being updated. */
  actorPatch: ActorPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `updateActor` mutation. */
export type UpdateActorInput = {
  /** An object where the defined keys will be set on the `Actor` being updated. */
  actorPatch: ActorPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Actor` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `Actor` mutation. */
export type UpdateActorPayload = {
  __typename?: 'UpdateActorPayload';
  /** The `Actor` that was updated by this mutation. */
  actor?: Maybe<Actor>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateAddressByAddressId` mutation. */
export type UpdateAddressByAddressIdInput = {
  addressId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Address` being updated. */
  addressPatch: AddressPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `updateAddress` mutation. */
export type UpdateAddressInput = {
  /** An object where the defined keys will be set on the `Address` being updated. */
  addressPatch: AddressPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Address` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  __typename?: 'UpdateAddressPayload';
  /** The `Address` that was updated by this mutation. */
  address?: Maybe<Address>;
  /** Reads a single `City` that is related to this `Address`. */
  cityByCityId?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateCategoryByCategoryId` mutation. */
export type UpdateCategoryByCategoryIdInput = {
  categoryId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Category` being updated. */
  categoryPatch: CategoryPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /** An object where the defined keys will be set on the `Category` being updated. */
  categoryPatch: CategoryPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Category` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateCityByCityId` mutation. */
export type UpdateCityByCityIdInput = {
  cityId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `City` being updated. */
  cityPatch: CityPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `updateCity` mutation. */
export type UpdateCityInput = {
  /** An object where the defined keys will be set on the `City` being updated. */
  cityPatch: CityPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `City` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `City` mutation. */
export type UpdateCityPayload = {
  __typename?: 'UpdateCityPayload';
  /** The `City` that was updated by this mutation. */
  city?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `City`. */
  countryByCountryId?: Maybe<Country>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateCountryByCountryId` mutation. */
export type UpdateCountryByCountryIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Country` being updated. */
  countryPatch: CountryPatch;
};

/** All input for the `updateCountry` mutation. */
export type UpdateCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Country` being updated. */
  countryPatch: CountryPatch;
  /** The globally unique `ID` which will identify a single `Country` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `Country` mutation. */
export type UpdateCountryPayload = {
  __typename?: 'UpdateCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Country` that was updated by this mutation. */
  country?: Maybe<Country>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateCustomerByCustomerId` mutation. */
export type UpdateCustomerByCustomerIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Customer` being updated. */
  customerPatch: CustomerPatch;
};

/** All input for the `updateCustomer` mutation. */
export type UpdateCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Customer` being updated. */
  customerPatch: CustomerPatch;
  /** The globally unique `ID` which will identify a single `Customer` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `Customer` mutation. */
export type UpdateCustomerPayload = {
  __typename?: 'UpdateCustomerPayload';
  /** Reads a single `Address` that is related to this `Customer`. */
  addressByAddressId?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Customer` that was updated by this mutation. */
  customer?: Maybe<Customer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Store` that is related to this `Customer`. */
  storeByStoreId?: Maybe<Store>;
};

/** All input for the `updateFilmActorByActorIdAndFilmId` mutation. */
export type UpdateFilmActorByActorIdAndFilmIdInput = {
  actorId: Scalars['Int']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `FilmActor` being updated. */
  filmActorPatch: FilmActorPatch;
  filmId: Scalars['Int']['input'];
};

/** All input for the `updateFilmActor` mutation. */
export type UpdateFilmActorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `FilmActor` being updated. */
  filmActorPatch: FilmActorPatch;
  /** The globally unique `ID` which will identify a single `FilmActor` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `FilmActor` mutation. */
export type UpdateFilmActorPayload = {
  __typename?: 'UpdateFilmActorPayload';
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actorByActorId?: Maybe<Actor>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `FilmActor` that was updated by this mutation. */
  filmActor?: Maybe<FilmActor>;
  /** Reads a single `Film` that is related to this `FilmActor`. */
  filmByFilmId?: Maybe<Film>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateFilmByFilmId` mutation. */
export type UpdateFilmByFilmIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  filmId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Film` being updated. */
  filmPatch: FilmPatch;
};

/** All input for the `updateFilmCategoryByFilmIdAndCategoryId` mutation. */
export type UpdateFilmCategoryByFilmIdAndCategoryIdInput = {
  categoryId: Scalars['Int']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `FilmCategory` being updated. */
  filmCategoryPatch: FilmCategoryPatch;
  filmId: Scalars['Int']['input'];
};

/** All input for the `updateFilmCategory` mutation. */
export type UpdateFilmCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `FilmCategory` being updated. */
  filmCategoryPatch: FilmCategoryPatch;
  /** The globally unique `ID` which will identify a single `FilmCategory` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `FilmCategory` mutation. */
export type UpdateFilmCategoryPayload = {
  __typename?: 'UpdateFilmCategoryPayload';
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  filmByFilmId?: Maybe<Film>;
  /** The `FilmCategory` that was updated by this mutation. */
  filmCategory?: Maybe<FilmCategory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateFilm` mutation. */
export type UpdateFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Film` being updated. */
  filmPatch: FilmPatch;
  /** The globally unique `ID` which will identify a single `Film` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `Film` mutation. */
export type UpdateFilmPayload = {
  __typename?: 'UpdateFilmPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Film` that was updated by this mutation. */
  film?: Maybe<Film>;
  /** Reads a single `Language` that is related to this `Film`. */
  languageByLanguageId?: Maybe<Language>;
  /** Reads a single `Language` that is related to this `Film`. */
  languageByOriginalLanguageId?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateInventoryByInventoryId` mutation. */
export type UpdateInventoryByInventoryIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  inventoryId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Inventory` being updated. */
  inventoryPatch: InventoryPatch;
};

/** All input for the `updateInventory` mutation. */
export type UpdateInventoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Inventory` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Inventory` being updated. */
  inventoryPatch: InventoryPatch;
};

/** The output of our update `Inventory` mutation. */
export type UpdateInventoryPayload = {
  __typename?: 'UpdateInventoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Film` that is related to this `Inventory`. */
  filmByFilmId?: Maybe<Film>;
  /** The `Inventory` that was updated by this mutation. */
  inventory?: Maybe<Inventory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Store` that is related to this `Inventory`. */
  storeByStoreId?: Maybe<Store>;
};

/** All input for the `updateLanguageByLanguageId` mutation. */
export type UpdateLanguageByLanguageIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  languageId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Language` being updated. */
  languagePatch: LanguagePatch;
};

/** All input for the `updateLanguage` mutation. */
export type UpdateLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Language` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Language` being updated. */
  languagePatch: LanguagePatch;
};

/** The output of our update `Language` mutation. */
export type UpdateLanguagePayload = {
  __typename?: 'UpdateLanguagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Language` that was updated by this mutation. */
  language?: Maybe<Language>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateRentalByRentalId` mutation. */
export type UpdateRentalByRentalIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rentalId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Rental` being updated. */
  rentalPatch: RentalPatch;
};

/** All input for the `updateRental` mutation. */
export type UpdateRentalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Rental` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Rental` being updated. */
  rentalPatch: RentalPatch;
};

/** The output of our update `Rental` mutation. */
export type UpdateRentalPayload = {
  __typename?: 'UpdateRentalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Customer` that is related to this `Rental`. */
  customerByCustomerId?: Maybe<Customer>;
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventoryByInventoryId?: Maybe<Inventory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rental` that was updated by this mutation. */
  rental?: Maybe<Rental>;
  /** Reads a single `Staff` that is related to this `Rental`. */
  staffByStaffId?: Maybe<Staff>;
};

/** All input for the `updateStaffByStaffId` mutation. */
export type UpdateStaffByStaffIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  staffId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Staff` being updated. */
  staffPatch: StaffPatch;
};

/** All input for the `updateStaff` mutation. */
export type UpdateStaffInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Staff` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Staff` being updated. */
  staffPatch: StaffPatch;
};

/** The output of our update `Staff` mutation. */
export type UpdateStaffPayload = {
  __typename?: 'UpdateStaffPayload';
  /** Reads a single `Address` that is related to this `Staff`. */
  addressByAddressId?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Staff` that was updated by this mutation. */
  staff?: Maybe<Staff>;
  /** Reads a single `Store` that is related to this `Staff`. */
  storeByStoreId?: Maybe<Store>;
};

/** All input for the `updateStoreByStoreId` mutation. */
export type UpdateStoreByStoreIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Store` being updated. */
  storePatch: StorePatch;
};

/** All input for the `updateStore` mutation. */
export type UpdateStoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Store` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Store` being updated. */
  storePatch: StorePatch;
};

/** The output of our update `Store` mutation. */
export type UpdateStorePayload = {
  __typename?: 'UpdateStorePayload';
  /** Reads a single `Address` that is related to this `Store`. */
  addressByAddressId?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Store` that was updated by this mutation. */
  store?: Maybe<Store>;
};
