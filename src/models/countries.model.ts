import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Countries'}}})
export class Countries extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'Id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 2,
    generated: 0,
    mssql: {columnName: 'ISO', dataType: 'varchar', dataLength: 2, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  iso: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 3,
    generated: 0,
    mssql: {columnName: 'ISO3', dataType: 'varchar', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  iso3: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'ISONumeric', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  isoNumeric: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 64,
    generated: 0,
    mssql: {columnName: 'CountryName', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  countryName: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 64,
    generated: 0,
    mssql: {columnName: 'Capital', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  capital: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 2,
    generated: 0,
    mssql: {columnName: 'ContinentCode', dataType: 'varchar', dataLength: 2, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  continentCode: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 3,
    generated: 0,
    mssql: {columnName: 'CurrencyCode', dataType: 'varchar', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  currencyCode: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Countries>) {
    super(data);
  }
}

export interface CountriesRelations {
  // describe navigational properties here
}

export type CountriesWithRelations = Countries & CountriesRelations;
