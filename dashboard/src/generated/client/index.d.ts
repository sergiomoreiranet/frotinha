
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Opm
 * 
 */
export type Opm = $Result.DefaultSelection<Prisma.$OpmPayload>
/**
 * Model QffMeta
 * 
 */
export type QffMeta = $Result.DefaultSelection<Prisma.$QffMetaPayload>
/**
 * Model Veiculo
 * 
 */
export type Veiculo = $Result.DefaultSelection<Prisma.$VeiculoPayload>
/**
 * Model VeiculoAjuste
 * 
 */
export type VeiculoAjuste = $Result.DefaultSelection<Prisma.$VeiculoAjustePayload>
/**
 * Model VeiculoSnapshot
 * 
 */
export type VeiculoSnapshot = $Result.DefaultSelection<Prisma.$VeiculoSnapshotPayload>
/**
 * Model VeiculoEmprestimo
 * 
 */
export type VeiculoEmprestimo = $Result.DefaultSelection<Prisma.$VeiculoEmprestimoPayload>
/**
 * Model Emprestimo
 * 
 */
export type Emprestimo = $Result.DefaultSelection<Prisma.$EmprestimoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Opms
 * const opms = await prisma.opm.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Opms
   * const opms = await prisma.opm.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.opm`: Exposes CRUD operations for the **Opm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opms
    * const opms = await prisma.opm.findMany()
    * ```
    */
  get opm(): Prisma.OpmDelegate<ExtArgs>;

  /**
   * `prisma.qffMeta`: Exposes CRUD operations for the **QffMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QffMetas
    * const qffMetas = await prisma.qffMeta.findMany()
    * ```
    */
  get qffMeta(): Prisma.QffMetaDelegate<ExtArgs>;

  /**
   * `prisma.veiculo`: Exposes CRUD operations for the **Veiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculo.findMany()
    * ```
    */
  get veiculo(): Prisma.VeiculoDelegate<ExtArgs>;

  /**
   * `prisma.veiculoAjuste`: Exposes CRUD operations for the **VeiculoAjuste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VeiculoAjustes
    * const veiculoAjustes = await prisma.veiculoAjuste.findMany()
    * ```
    */
  get veiculoAjuste(): Prisma.VeiculoAjusteDelegate<ExtArgs>;

  /**
   * `prisma.veiculoSnapshot`: Exposes CRUD operations for the **VeiculoSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VeiculoSnapshots
    * const veiculoSnapshots = await prisma.veiculoSnapshot.findMany()
    * ```
    */
  get veiculoSnapshot(): Prisma.VeiculoSnapshotDelegate<ExtArgs>;

  /**
   * `prisma.veiculoEmprestimo`: Exposes CRUD operations for the **VeiculoEmprestimo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VeiculoEmprestimos
    * const veiculoEmprestimos = await prisma.veiculoEmprestimo.findMany()
    * ```
    */
  get veiculoEmprestimo(): Prisma.VeiculoEmprestimoDelegate<ExtArgs>;

  /**
   * `prisma.emprestimo`: Exposes CRUD operations for the **Emprestimo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprestimos
    * const emprestimos = await prisma.emprestimo.findMany()
    * ```
    */
  get emprestimo(): Prisma.EmprestimoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Opm: 'Opm',
    QffMeta: 'QffMeta',
    Veiculo: 'Veiculo',
    VeiculoAjuste: 'VeiculoAjuste',
    VeiculoSnapshot: 'VeiculoSnapshot',
    VeiculoEmprestimo: 'VeiculoEmprestimo',
    Emprestimo: 'Emprestimo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'opm' | 'qffMeta' | 'veiculo' | 'veiculoAjuste' | 'veiculoSnapshot' | 'veiculoEmprestimo' | 'emprestimo'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Opm: {
        payload: Prisma.$OpmPayload<ExtArgs>
        fields: Prisma.OpmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpmFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpmFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpmPayload>
          }
          findFirst: {
            args: Prisma.OpmFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpmFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpmPayload>
          }
          findMany: {
            args: Prisma.OpmFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpmPayload>[]
          }
          create: {
            args: Prisma.OpmCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpmPayload>
          }
          createMany: {
            args: Prisma.OpmCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OpmDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpmPayload>
          }
          update: {
            args: Prisma.OpmUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpmPayload>
          }
          deleteMany: {
            args: Prisma.OpmDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OpmUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OpmUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpmPayload>
          }
          aggregate: {
            args: Prisma.OpmAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOpm>
          }
          groupBy: {
            args: Prisma.OpmGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OpmGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpmCountArgs<ExtArgs>,
            result: $Utils.Optional<OpmCountAggregateOutputType> | number
          }
        }
      }
      QffMeta: {
        payload: Prisma.$QffMetaPayload<ExtArgs>
        fields: Prisma.QffMetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QffMetaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QffMetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QffMetaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QffMetaPayload>
          }
          findFirst: {
            args: Prisma.QffMetaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QffMetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QffMetaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QffMetaPayload>
          }
          findMany: {
            args: Prisma.QffMetaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QffMetaPayload>[]
          }
          create: {
            args: Prisma.QffMetaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QffMetaPayload>
          }
          createMany: {
            args: Prisma.QffMetaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QffMetaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QffMetaPayload>
          }
          update: {
            args: Prisma.QffMetaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QffMetaPayload>
          }
          deleteMany: {
            args: Prisma.QffMetaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QffMetaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QffMetaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QffMetaPayload>
          }
          aggregate: {
            args: Prisma.QffMetaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQffMeta>
          }
          groupBy: {
            args: Prisma.QffMetaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QffMetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.QffMetaCountArgs<ExtArgs>,
            result: $Utils.Optional<QffMetaCountAggregateOutputType> | number
          }
        }
      }
      Veiculo: {
        payload: Prisma.$VeiculoPayload<ExtArgs>
        fields: Prisma.VeiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findFirst: {
            args: Prisma.VeiculoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findMany: {
            args: Prisma.VeiculoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          create: {
            args: Prisma.VeiculoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          createMany: {
            args: Prisma.VeiculoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VeiculoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          update: {
            args: Prisma.VeiculoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VeiculoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          aggregate: {
            args: Prisma.VeiculoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVeiculo>
          }
          groupBy: {
            args: Prisma.VeiculoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoCountArgs<ExtArgs>,
            result: $Utils.Optional<VeiculoCountAggregateOutputType> | number
          }
        }
      }
      VeiculoAjuste: {
        payload: Prisma.$VeiculoAjustePayload<ExtArgs>
        fields: Prisma.VeiculoAjusteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoAjusteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoAjustePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoAjusteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoAjustePayload>
          }
          findFirst: {
            args: Prisma.VeiculoAjusteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoAjustePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoAjusteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoAjustePayload>
          }
          findMany: {
            args: Prisma.VeiculoAjusteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoAjustePayload>[]
          }
          create: {
            args: Prisma.VeiculoAjusteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoAjustePayload>
          }
          createMany: {
            args: Prisma.VeiculoAjusteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VeiculoAjusteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoAjustePayload>
          }
          update: {
            args: Prisma.VeiculoAjusteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoAjustePayload>
          }
          deleteMany: {
            args: Prisma.VeiculoAjusteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoAjusteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VeiculoAjusteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoAjustePayload>
          }
          aggregate: {
            args: Prisma.VeiculoAjusteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVeiculoAjuste>
          }
          groupBy: {
            args: Prisma.VeiculoAjusteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VeiculoAjusteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoAjusteCountArgs<ExtArgs>,
            result: $Utils.Optional<VeiculoAjusteCountAggregateOutputType> | number
          }
        }
      }
      VeiculoSnapshot: {
        payload: Prisma.$VeiculoSnapshotPayload<ExtArgs>
        fields: Prisma.VeiculoSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoSnapshotFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoSnapshotFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoSnapshotPayload>
          }
          findFirst: {
            args: Prisma.VeiculoSnapshotFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoSnapshotFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoSnapshotPayload>
          }
          findMany: {
            args: Prisma.VeiculoSnapshotFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoSnapshotPayload>[]
          }
          create: {
            args: Prisma.VeiculoSnapshotCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoSnapshotPayload>
          }
          createMany: {
            args: Prisma.VeiculoSnapshotCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VeiculoSnapshotDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoSnapshotPayload>
          }
          update: {
            args: Prisma.VeiculoSnapshotUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoSnapshotDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoSnapshotUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VeiculoSnapshotUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoSnapshotPayload>
          }
          aggregate: {
            args: Prisma.VeiculoSnapshotAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVeiculoSnapshot>
          }
          groupBy: {
            args: Prisma.VeiculoSnapshotGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VeiculoSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoSnapshotCountArgs<ExtArgs>,
            result: $Utils.Optional<VeiculoSnapshotCountAggregateOutputType> | number
          }
        }
      }
      VeiculoEmprestimo: {
        payload: Prisma.$VeiculoEmprestimoPayload<ExtArgs>
        fields: Prisma.VeiculoEmprestimoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoEmprestimoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoEmprestimoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoEmprestimoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoEmprestimoPayload>
          }
          findFirst: {
            args: Prisma.VeiculoEmprestimoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoEmprestimoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoEmprestimoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoEmprestimoPayload>
          }
          findMany: {
            args: Prisma.VeiculoEmprestimoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoEmprestimoPayload>[]
          }
          create: {
            args: Prisma.VeiculoEmprestimoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoEmprestimoPayload>
          }
          createMany: {
            args: Prisma.VeiculoEmprestimoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VeiculoEmprestimoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoEmprestimoPayload>
          }
          update: {
            args: Prisma.VeiculoEmprestimoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoEmprestimoPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoEmprestimoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoEmprestimoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VeiculoEmprestimoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VeiculoEmprestimoPayload>
          }
          aggregate: {
            args: Prisma.VeiculoEmprestimoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVeiculoEmprestimo>
          }
          groupBy: {
            args: Prisma.VeiculoEmprestimoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VeiculoEmprestimoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoEmprestimoCountArgs<ExtArgs>,
            result: $Utils.Optional<VeiculoEmprestimoCountAggregateOutputType> | number
          }
        }
      }
      Emprestimo: {
        payload: Prisma.$EmprestimoPayload<ExtArgs>
        fields: Prisma.EmprestimoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmprestimoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmprestimoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          findFirst: {
            args: Prisma.EmprestimoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmprestimoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          findMany: {
            args: Prisma.EmprestimoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          create: {
            args: Prisma.EmprestimoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          createMany: {
            args: Prisma.EmprestimoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmprestimoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          update: {
            args: Prisma.EmprestimoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          deleteMany: {
            args: Prisma.EmprestimoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmprestimoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmprestimoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          aggregate: {
            args: Prisma.EmprestimoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmprestimo>
          }
          groupBy: {
            args: Prisma.EmprestimoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmprestimoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmprestimoCountArgs<ExtArgs>,
            result: $Utils.Optional<EmprestimoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OpmCountOutputType
   */

  export type OpmCountOutputType = {
    metas: number
    veiculos: number
    veiculosAjuste: number
    veiculosSnapshot: number
  }

  export type OpmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metas?: boolean | OpmCountOutputTypeCountMetasArgs
    veiculos?: boolean | OpmCountOutputTypeCountVeiculosArgs
    veiculosAjuste?: boolean | OpmCountOutputTypeCountVeiculosAjusteArgs
    veiculosSnapshot?: boolean | OpmCountOutputTypeCountVeiculosSnapshotArgs
  }

  // Custom InputTypes
  /**
   * OpmCountOutputType without action
   */
  export type OpmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpmCountOutputType
     */
    select?: OpmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpmCountOutputType without action
   */
  export type OpmCountOutputTypeCountMetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QffMetaWhereInput
  }

  /**
   * OpmCountOutputType without action
   */
  export type OpmCountOutputTypeCountVeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
  }

  /**
   * OpmCountOutputType without action
   */
  export type OpmCountOutputTypeCountVeiculosAjusteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoAjusteWhereInput
  }

  /**
   * OpmCountOutputType without action
   */
  export type OpmCountOutputTypeCountVeiculosSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoSnapshotWhereInput
  }


  /**
   * Count Type VeiculoEmprestimoCountOutputType
   */

  export type VeiculoEmprestimoCountOutputType = {
    emprestimos: number
  }

  export type VeiculoEmprestimoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | VeiculoEmprestimoCountOutputTypeCountEmprestimosArgs
  }

  // Custom InputTypes
  /**
   * VeiculoEmprestimoCountOutputType without action
   */
  export type VeiculoEmprestimoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimoCountOutputType
     */
    select?: VeiculoEmprestimoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculoEmprestimoCountOutputType without action
   */
  export type VeiculoEmprestimoCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Opm
   */

  export type AggregateOpm = {
    _count: OpmCountAggregateOutputType | null
    _min: OpmMinAggregateOutputType | null
    _max: OpmMaxAggregateOutputType | null
  }

  export type OpmMinAggregateOutputType = {
    id: string | null
    codigo: string | null
    nome: string | null
    municipio: string | null
    macroComando: string | null
  }

  export type OpmMaxAggregateOutputType = {
    id: string | null
    codigo: string | null
    nome: string | null
    municipio: string | null
    macroComando: string | null
  }

  export type OpmCountAggregateOutputType = {
    id: number
    codigo: number
    nome: number
    municipio: number
    macroComando: number
    _all: number
  }


  export type OpmMinAggregateInputType = {
    id?: true
    codigo?: true
    nome?: true
    municipio?: true
    macroComando?: true
  }

  export type OpmMaxAggregateInputType = {
    id?: true
    codigo?: true
    nome?: true
    municipio?: true
    macroComando?: true
  }

  export type OpmCountAggregateInputType = {
    id?: true
    codigo?: true
    nome?: true
    municipio?: true
    macroComando?: true
    _all?: true
  }

  export type OpmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opm to aggregate.
     */
    where?: OpmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opms to fetch.
     */
    orderBy?: OpmOrderByWithRelationInput | OpmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opms
    **/
    _count?: true | OpmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpmMaxAggregateInputType
  }

  export type GetOpmAggregateType<T extends OpmAggregateArgs> = {
        [P in keyof T & keyof AggregateOpm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpm[P]>
      : GetScalarType<T[P], AggregateOpm[P]>
  }




  export type OpmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpmWhereInput
    orderBy?: OpmOrderByWithAggregationInput | OpmOrderByWithAggregationInput[]
    by: OpmScalarFieldEnum[] | OpmScalarFieldEnum
    having?: OpmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpmCountAggregateInputType | true
    _min?: OpmMinAggregateInputType
    _max?: OpmMaxAggregateInputType
  }

  export type OpmGroupByOutputType = {
    id: string
    codigo: string
    nome: string
    municipio: string | null
    macroComando: string | null
    _count: OpmCountAggregateOutputType | null
    _min: OpmMinAggregateOutputType | null
    _max: OpmMaxAggregateOutputType | null
  }

  type GetOpmGroupByPayload<T extends OpmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpmGroupByOutputType[P]>
            : GetScalarType<T[P], OpmGroupByOutputType[P]>
        }
      >
    >


  export type OpmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    nome?: boolean
    municipio?: boolean
    macroComando?: boolean
    metas?: boolean | Opm$metasArgs<ExtArgs>
    veiculos?: boolean | Opm$veiculosArgs<ExtArgs>
    veiculosAjuste?: boolean | Opm$veiculosAjusteArgs<ExtArgs>
    veiculosSnapshot?: boolean | Opm$veiculosSnapshotArgs<ExtArgs>
    _count?: boolean | OpmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opm"]>

  export type OpmSelectScalar = {
    id?: boolean
    codigo?: boolean
    nome?: boolean
    municipio?: boolean
    macroComando?: boolean
  }


  export type OpmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metas?: boolean | Opm$metasArgs<ExtArgs>
    veiculos?: boolean | Opm$veiculosArgs<ExtArgs>
    veiculosAjuste?: boolean | Opm$veiculosAjusteArgs<ExtArgs>
    veiculosSnapshot?: boolean | Opm$veiculosSnapshotArgs<ExtArgs>
    _count?: boolean | OpmCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OpmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opm"
    objects: {
      metas: Prisma.$QffMetaPayload<ExtArgs>[]
      veiculos: Prisma.$VeiculoPayload<ExtArgs>[]
      veiculosAjuste: Prisma.$VeiculoAjustePayload<ExtArgs>[]
      veiculosSnapshot: Prisma.$VeiculoSnapshotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo: string
      nome: string
      municipio: string | null
      macroComando: string | null
    }, ExtArgs["result"]["opm"]>
    composites: {}
  }


  type OpmGetPayload<S extends boolean | null | undefined | OpmDefaultArgs> = $Result.GetResult<Prisma.$OpmPayload, S>

  type OpmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OpmFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OpmCountAggregateInputType | true
    }

  export interface OpmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opm'], meta: { name: 'Opm' } }
    /**
     * Find zero or one Opm that matches the filter.
     * @param {OpmFindUniqueArgs} args - Arguments to find a Opm
     * @example
     * // Get one Opm
     * const opm = await prisma.opm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OpmFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OpmFindUniqueArgs<ExtArgs>>
    ): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Opm that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OpmFindUniqueOrThrowArgs} args - Arguments to find a Opm
     * @example
     * // Get one Opm
     * const opm = await prisma.opm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OpmFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OpmFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Opm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpmFindFirstArgs} args - Arguments to find a Opm
     * @example
     * // Get one Opm
     * const opm = await prisma.opm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OpmFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OpmFindFirstArgs<ExtArgs>>
    ): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Opm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpmFindFirstOrThrowArgs} args - Arguments to find a Opm
     * @example
     * // Get one Opm
     * const opm = await prisma.opm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OpmFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OpmFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Opms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opms
     * const opms = await prisma.opm.findMany()
     * 
     * // Get first 10 Opms
     * const opms = await prisma.opm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opmWithIdOnly = await prisma.opm.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OpmFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OpmFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Opm.
     * @param {OpmCreateArgs} args - Arguments to create a Opm.
     * @example
     * // Create one Opm
     * const Opm = await prisma.opm.create({
     *   data: {
     *     // ... data to create a Opm
     *   }
     * })
     * 
    **/
    create<T extends OpmCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OpmCreateArgs<ExtArgs>>
    ): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Opms.
     * @param {OpmCreateManyArgs} args - Arguments to create many Opms.
     * @example
     * // Create many Opms
     * const opm = await prisma.opm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends OpmCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OpmCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Opm.
     * @param {OpmDeleteArgs} args - Arguments to delete one Opm.
     * @example
     * // Delete one Opm
     * const Opm = await prisma.opm.delete({
     *   where: {
     *     // ... filter to delete one Opm
     *   }
     * })
     * 
    **/
    delete<T extends OpmDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OpmDeleteArgs<ExtArgs>>
    ): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Opm.
     * @param {OpmUpdateArgs} args - Arguments to update one Opm.
     * @example
     * // Update one Opm
     * const opm = await prisma.opm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OpmUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OpmUpdateArgs<ExtArgs>>
    ): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Opms.
     * @param {OpmDeleteManyArgs} args - Arguments to filter Opms to delete.
     * @example
     * // Delete a few Opms
     * const { count } = await prisma.opm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OpmDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OpmDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opms
     * const opm = await prisma.opm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OpmUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OpmUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Opm.
     * @param {OpmUpsertArgs} args - Arguments to update or create a Opm.
     * @example
     * // Update or create a Opm
     * const opm = await prisma.opm.upsert({
     *   create: {
     *     // ... data to create a Opm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opm we want to update
     *   }
     * })
    **/
    upsert<T extends OpmUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OpmUpsertArgs<ExtArgs>>
    ): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Opms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpmCountArgs} args - Arguments to filter Opms to count.
     * @example
     * // Count the number of Opms
     * const count = await prisma.opm.count({
     *   where: {
     *     // ... the filter for the Opms we want to count
     *   }
     * })
    **/
    count<T extends OpmCountArgs>(
      args?: Subset<T, OpmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpmAggregateArgs>(args: Subset<T, OpmAggregateArgs>): Prisma.PrismaPromise<GetOpmAggregateType<T>>

    /**
     * Group by Opm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpmGroupByArgs['orderBy'] }
        : { orderBy?: OpmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opm model
   */
  readonly fields: OpmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    metas<T extends Opm$metasArgs<ExtArgs> = {}>(args?: Subset<T, Opm$metasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QffMetaPayload<ExtArgs>, T, 'findMany'> | Null>;

    veiculos<T extends Opm$veiculosArgs<ExtArgs> = {}>(args?: Subset<T, Opm$veiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findMany'> | Null>;

    veiculosAjuste<T extends Opm$veiculosAjusteArgs<ExtArgs> = {}>(args?: Subset<T, Opm$veiculosAjusteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoAjustePayload<ExtArgs>, T, 'findMany'> | Null>;

    veiculosSnapshot<T extends Opm$veiculosSnapshotArgs<ExtArgs> = {}>(args?: Subset<T, Opm$veiculosSnapshotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoSnapshotPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Opm model
   */ 
  interface OpmFieldRefs {
    readonly id: FieldRef<"Opm", 'String'>
    readonly codigo: FieldRef<"Opm", 'String'>
    readonly nome: FieldRef<"Opm", 'String'>
    readonly municipio: FieldRef<"Opm", 'String'>
    readonly macroComando: FieldRef<"Opm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Opm findUnique
   */
  export type OpmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opm
     */
    select?: OpmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpmInclude<ExtArgs> | null
    /**
     * Filter, which Opm to fetch.
     */
    where: OpmWhereUniqueInput
  }

  /**
   * Opm findUniqueOrThrow
   */
  export type OpmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opm
     */
    select?: OpmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpmInclude<ExtArgs> | null
    /**
     * Filter, which Opm to fetch.
     */
    where: OpmWhereUniqueInput
  }

  /**
   * Opm findFirst
   */
  export type OpmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opm
     */
    select?: OpmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpmInclude<ExtArgs> | null
    /**
     * Filter, which Opm to fetch.
     */
    where?: OpmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opms to fetch.
     */
    orderBy?: OpmOrderByWithRelationInput | OpmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opms.
     */
    cursor?: OpmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opms.
     */
    distinct?: OpmScalarFieldEnum | OpmScalarFieldEnum[]
  }

  /**
   * Opm findFirstOrThrow
   */
  export type OpmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opm
     */
    select?: OpmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpmInclude<ExtArgs> | null
    /**
     * Filter, which Opm to fetch.
     */
    where?: OpmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opms to fetch.
     */
    orderBy?: OpmOrderByWithRelationInput | OpmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opms.
     */
    cursor?: OpmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opms.
     */
    distinct?: OpmScalarFieldEnum | OpmScalarFieldEnum[]
  }

  /**
   * Opm findMany
   */
  export type OpmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opm
     */
    select?: OpmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpmInclude<ExtArgs> | null
    /**
     * Filter, which Opms to fetch.
     */
    where?: OpmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opms to fetch.
     */
    orderBy?: OpmOrderByWithRelationInput | OpmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opms.
     */
    cursor?: OpmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opms.
     */
    skip?: number
    distinct?: OpmScalarFieldEnum | OpmScalarFieldEnum[]
  }

  /**
   * Opm create
   */
  export type OpmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opm
     */
    select?: OpmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpmInclude<ExtArgs> | null
    /**
     * The data needed to create a Opm.
     */
    data: XOR<OpmCreateInput, OpmUncheckedCreateInput>
  }

  /**
   * Opm createMany
   */
  export type OpmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Opms.
     */
    data: OpmCreateManyInput | OpmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opm update
   */
  export type OpmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opm
     */
    select?: OpmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpmInclude<ExtArgs> | null
    /**
     * The data needed to update a Opm.
     */
    data: XOR<OpmUpdateInput, OpmUncheckedUpdateInput>
    /**
     * Choose, which Opm to update.
     */
    where: OpmWhereUniqueInput
  }

  /**
   * Opm updateMany
   */
  export type OpmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Opms.
     */
    data: XOR<OpmUpdateManyMutationInput, OpmUncheckedUpdateManyInput>
    /**
     * Filter which Opms to update
     */
    where?: OpmWhereInput
  }

  /**
   * Opm upsert
   */
  export type OpmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opm
     */
    select?: OpmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpmInclude<ExtArgs> | null
    /**
     * The filter to search for the Opm to update in case it exists.
     */
    where: OpmWhereUniqueInput
    /**
     * In case the Opm found by the `where` argument doesn't exist, create a new Opm with this data.
     */
    create: XOR<OpmCreateInput, OpmUncheckedCreateInput>
    /**
     * In case the Opm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpmUpdateInput, OpmUncheckedUpdateInput>
  }

  /**
   * Opm delete
   */
  export type OpmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opm
     */
    select?: OpmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpmInclude<ExtArgs> | null
    /**
     * Filter which Opm to delete.
     */
    where: OpmWhereUniqueInput
  }

  /**
   * Opm deleteMany
   */
  export type OpmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opms to delete
     */
    where?: OpmWhereInput
  }

  /**
   * Opm.metas
   */
  export type Opm$metasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
    where?: QffMetaWhereInput
    orderBy?: QffMetaOrderByWithRelationInput | QffMetaOrderByWithRelationInput[]
    cursor?: QffMetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QffMetaScalarFieldEnum | QffMetaScalarFieldEnum[]
  }

  /**
   * Opm.veiculos
   */
  export type Opm$veiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    cursor?: VeiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Opm.veiculosAjuste
   */
  export type Opm$veiculosAjusteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
    where?: VeiculoAjusteWhereInput
    orderBy?: VeiculoAjusteOrderByWithRelationInput | VeiculoAjusteOrderByWithRelationInput[]
    cursor?: VeiculoAjusteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoAjusteScalarFieldEnum | VeiculoAjusteScalarFieldEnum[]
  }

  /**
   * Opm.veiculosSnapshot
   */
  export type Opm$veiculosSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
    where?: VeiculoSnapshotWhereInput
    orderBy?: VeiculoSnapshotOrderByWithRelationInput | VeiculoSnapshotOrderByWithRelationInput[]
    cursor?: VeiculoSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoSnapshotScalarFieldEnum | VeiculoSnapshotScalarFieldEnum[]
  }

  /**
   * Opm without action
   */
  export type OpmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opm
     */
    select?: OpmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpmInclude<ExtArgs> | null
  }


  /**
   * Model QffMeta
   */

  export type AggregateQffMeta = {
    _count: QffMetaCountAggregateOutputType | null
    _avg: QffMetaAvgAggregateOutputType | null
    _sum: QffMetaSumAggregateOutputType | null
    _min: QffMetaMinAggregateOutputType | null
    _max: QffMetaMaxAggregateOutputType | null
  }

  export type QffMetaAvgAggregateOutputType = {
    quantidadeFixada: number | null
  }

  export type QffMetaSumAggregateOutputType = {
    quantidadeFixada: number | null
  }

  export type QffMetaMinAggregateOutputType = {
    id: string | null
    opmCodigo: string | null
    grupo: string | null
    programa: string | null
    quantidadeFixada: number | null
  }

  export type QffMetaMaxAggregateOutputType = {
    id: string | null
    opmCodigo: string | null
    grupo: string | null
    programa: string | null
    quantidadeFixada: number | null
  }

  export type QffMetaCountAggregateOutputType = {
    id: number
    opmCodigo: number
    grupo: number
    programa: number
    quantidadeFixada: number
    _all: number
  }


  export type QffMetaAvgAggregateInputType = {
    quantidadeFixada?: true
  }

  export type QffMetaSumAggregateInputType = {
    quantidadeFixada?: true
  }

  export type QffMetaMinAggregateInputType = {
    id?: true
    opmCodigo?: true
    grupo?: true
    programa?: true
    quantidadeFixada?: true
  }

  export type QffMetaMaxAggregateInputType = {
    id?: true
    opmCodigo?: true
    grupo?: true
    programa?: true
    quantidadeFixada?: true
  }

  export type QffMetaCountAggregateInputType = {
    id?: true
    opmCodigo?: true
    grupo?: true
    programa?: true
    quantidadeFixada?: true
    _all?: true
  }

  export type QffMetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QffMeta to aggregate.
     */
    where?: QffMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QffMetas to fetch.
     */
    orderBy?: QffMetaOrderByWithRelationInput | QffMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QffMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QffMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QffMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QffMetas
    **/
    _count?: true | QffMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QffMetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QffMetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QffMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QffMetaMaxAggregateInputType
  }

  export type GetQffMetaAggregateType<T extends QffMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateQffMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQffMeta[P]>
      : GetScalarType<T[P], AggregateQffMeta[P]>
  }




  export type QffMetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QffMetaWhereInput
    orderBy?: QffMetaOrderByWithAggregationInput | QffMetaOrderByWithAggregationInput[]
    by: QffMetaScalarFieldEnum[] | QffMetaScalarFieldEnum
    having?: QffMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QffMetaCountAggregateInputType | true
    _avg?: QffMetaAvgAggregateInputType
    _sum?: QffMetaSumAggregateInputType
    _min?: QffMetaMinAggregateInputType
    _max?: QffMetaMaxAggregateInputType
  }

  export type QffMetaGroupByOutputType = {
    id: string
    opmCodigo: string
    grupo: string
    programa: string
    quantidadeFixada: number
    _count: QffMetaCountAggregateOutputType | null
    _avg: QffMetaAvgAggregateOutputType | null
    _sum: QffMetaSumAggregateOutputType | null
    _min: QffMetaMinAggregateOutputType | null
    _max: QffMetaMaxAggregateOutputType | null
  }

  type GetQffMetaGroupByPayload<T extends QffMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QffMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QffMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QffMetaGroupByOutputType[P]>
            : GetScalarType<T[P], QffMetaGroupByOutputType[P]>
        }
      >
    >


  export type QffMetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opmCodigo?: boolean
    grupo?: boolean
    programa?: boolean
    quantidadeFixada?: boolean
    opm?: boolean | OpmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qffMeta"]>

  export type QffMetaSelectScalar = {
    id?: boolean
    opmCodigo?: boolean
    grupo?: boolean
    programa?: boolean
    quantidadeFixada?: boolean
  }


  export type QffMetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opm?: boolean | OpmDefaultArgs<ExtArgs>
  }


  export type $QffMetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QffMeta"
    objects: {
      opm: Prisma.$OpmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      opmCodigo: string
      grupo: string
      programa: string
      quantidadeFixada: number
    }, ExtArgs["result"]["qffMeta"]>
    composites: {}
  }


  type QffMetaGetPayload<S extends boolean | null | undefined | QffMetaDefaultArgs> = $Result.GetResult<Prisma.$QffMetaPayload, S>

  type QffMetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QffMetaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QffMetaCountAggregateInputType | true
    }

  export interface QffMetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QffMeta'], meta: { name: 'QffMeta' } }
    /**
     * Find zero or one QffMeta that matches the filter.
     * @param {QffMetaFindUniqueArgs} args - Arguments to find a QffMeta
     * @example
     * // Get one QffMeta
     * const qffMeta = await prisma.qffMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QffMetaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QffMetaFindUniqueArgs<ExtArgs>>
    ): Prisma__QffMetaClient<$Result.GetResult<Prisma.$QffMetaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one QffMeta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QffMetaFindUniqueOrThrowArgs} args - Arguments to find a QffMeta
     * @example
     * // Get one QffMeta
     * const qffMeta = await prisma.qffMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QffMetaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QffMetaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QffMetaClient<$Result.GetResult<Prisma.$QffMetaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first QffMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QffMetaFindFirstArgs} args - Arguments to find a QffMeta
     * @example
     * // Get one QffMeta
     * const qffMeta = await prisma.qffMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QffMetaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QffMetaFindFirstArgs<ExtArgs>>
    ): Prisma__QffMetaClient<$Result.GetResult<Prisma.$QffMetaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first QffMeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QffMetaFindFirstOrThrowArgs} args - Arguments to find a QffMeta
     * @example
     * // Get one QffMeta
     * const qffMeta = await prisma.qffMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QffMetaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QffMetaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QffMetaClient<$Result.GetResult<Prisma.$QffMetaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more QffMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QffMetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QffMetas
     * const qffMetas = await prisma.qffMeta.findMany()
     * 
     * // Get first 10 QffMetas
     * const qffMetas = await prisma.qffMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qffMetaWithIdOnly = await prisma.qffMeta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QffMetaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QffMetaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QffMetaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a QffMeta.
     * @param {QffMetaCreateArgs} args - Arguments to create a QffMeta.
     * @example
     * // Create one QffMeta
     * const QffMeta = await prisma.qffMeta.create({
     *   data: {
     *     // ... data to create a QffMeta
     *   }
     * })
     * 
    **/
    create<T extends QffMetaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QffMetaCreateArgs<ExtArgs>>
    ): Prisma__QffMetaClient<$Result.GetResult<Prisma.$QffMetaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many QffMetas.
     * @param {QffMetaCreateManyArgs} args - Arguments to create many QffMetas.
     * @example
     * // Create many QffMetas
     * const qffMeta = await prisma.qffMeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends QffMetaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QffMetaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QffMeta.
     * @param {QffMetaDeleteArgs} args - Arguments to delete one QffMeta.
     * @example
     * // Delete one QffMeta
     * const QffMeta = await prisma.qffMeta.delete({
     *   where: {
     *     // ... filter to delete one QffMeta
     *   }
     * })
     * 
    **/
    delete<T extends QffMetaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QffMetaDeleteArgs<ExtArgs>>
    ): Prisma__QffMetaClient<$Result.GetResult<Prisma.$QffMetaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one QffMeta.
     * @param {QffMetaUpdateArgs} args - Arguments to update one QffMeta.
     * @example
     * // Update one QffMeta
     * const qffMeta = await prisma.qffMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QffMetaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QffMetaUpdateArgs<ExtArgs>>
    ): Prisma__QffMetaClient<$Result.GetResult<Prisma.$QffMetaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more QffMetas.
     * @param {QffMetaDeleteManyArgs} args - Arguments to filter QffMetas to delete.
     * @example
     * // Delete a few QffMetas
     * const { count } = await prisma.qffMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QffMetaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QffMetaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QffMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QffMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QffMetas
     * const qffMeta = await prisma.qffMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QffMetaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QffMetaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QffMeta.
     * @param {QffMetaUpsertArgs} args - Arguments to update or create a QffMeta.
     * @example
     * // Update or create a QffMeta
     * const qffMeta = await prisma.qffMeta.upsert({
     *   create: {
     *     // ... data to create a QffMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QffMeta we want to update
     *   }
     * })
    **/
    upsert<T extends QffMetaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QffMetaUpsertArgs<ExtArgs>>
    ): Prisma__QffMetaClient<$Result.GetResult<Prisma.$QffMetaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of QffMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QffMetaCountArgs} args - Arguments to filter QffMetas to count.
     * @example
     * // Count the number of QffMetas
     * const count = await prisma.qffMeta.count({
     *   where: {
     *     // ... the filter for the QffMetas we want to count
     *   }
     * })
    **/
    count<T extends QffMetaCountArgs>(
      args?: Subset<T, QffMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QffMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QffMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QffMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QffMetaAggregateArgs>(args: Subset<T, QffMetaAggregateArgs>): Prisma.PrismaPromise<GetQffMetaAggregateType<T>>

    /**
     * Group by QffMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QffMetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QffMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QffMetaGroupByArgs['orderBy'] }
        : { orderBy?: QffMetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QffMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQffMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QffMeta model
   */
  readonly fields: QffMetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QffMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QffMetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    opm<T extends OpmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpmDefaultArgs<ExtArgs>>): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the QffMeta model
   */ 
  interface QffMetaFieldRefs {
    readonly id: FieldRef<"QffMeta", 'String'>
    readonly opmCodigo: FieldRef<"QffMeta", 'String'>
    readonly grupo: FieldRef<"QffMeta", 'String'>
    readonly programa: FieldRef<"QffMeta", 'String'>
    readonly quantidadeFixada: FieldRef<"QffMeta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QffMeta findUnique
   */
  export type QffMetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
    /**
     * Filter, which QffMeta to fetch.
     */
    where: QffMetaWhereUniqueInput
  }

  /**
   * QffMeta findUniqueOrThrow
   */
  export type QffMetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
    /**
     * Filter, which QffMeta to fetch.
     */
    where: QffMetaWhereUniqueInput
  }

  /**
   * QffMeta findFirst
   */
  export type QffMetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
    /**
     * Filter, which QffMeta to fetch.
     */
    where?: QffMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QffMetas to fetch.
     */
    orderBy?: QffMetaOrderByWithRelationInput | QffMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QffMetas.
     */
    cursor?: QffMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QffMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QffMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QffMetas.
     */
    distinct?: QffMetaScalarFieldEnum | QffMetaScalarFieldEnum[]
  }

  /**
   * QffMeta findFirstOrThrow
   */
  export type QffMetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
    /**
     * Filter, which QffMeta to fetch.
     */
    where?: QffMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QffMetas to fetch.
     */
    orderBy?: QffMetaOrderByWithRelationInput | QffMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QffMetas.
     */
    cursor?: QffMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QffMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QffMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QffMetas.
     */
    distinct?: QffMetaScalarFieldEnum | QffMetaScalarFieldEnum[]
  }

  /**
   * QffMeta findMany
   */
  export type QffMetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
    /**
     * Filter, which QffMetas to fetch.
     */
    where?: QffMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QffMetas to fetch.
     */
    orderBy?: QffMetaOrderByWithRelationInput | QffMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QffMetas.
     */
    cursor?: QffMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QffMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QffMetas.
     */
    skip?: number
    distinct?: QffMetaScalarFieldEnum | QffMetaScalarFieldEnum[]
  }

  /**
   * QffMeta create
   */
  export type QffMetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
    /**
     * The data needed to create a QffMeta.
     */
    data: XOR<QffMetaCreateInput, QffMetaUncheckedCreateInput>
  }

  /**
   * QffMeta createMany
   */
  export type QffMetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QffMetas.
     */
    data: QffMetaCreateManyInput | QffMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QffMeta update
   */
  export type QffMetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
    /**
     * The data needed to update a QffMeta.
     */
    data: XOR<QffMetaUpdateInput, QffMetaUncheckedUpdateInput>
    /**
     * Choose, which QffMeta to update.
     */
    where: QffMetaWhereUniqueInput
  }

  /**
   * QffMeta updateMany
   */
  export type QffMetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QffMetas.
     */
    data: XOR<QffMetaUpdateManyMutationInput, QffMetaUncheckedUpdateManyInput>
    /**
     * Filter which QffMetas to update
     */
    where?: QffMetaWhereInput
  }

  /**
   * QffMeta upsert
   */
  export type QffMetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
    /**
     * The filter to search for the QffMeta to update in case it exists.
     */
    where: QffMetaWhereUniqueInput
    /**
     * In case the QffMeta found by the `where` argument doesn't exist, create a new QffMeta with this data.
     */
    create: XOR<QffMetaCreateInput, QffMetaUncheckedCreateInput>
    /**
     * In case the QffMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QffMetaUpdateInput, QffMetaUncheckedUpdateInput>
  }

  /**
   * QffMeta delete
   */
  export type QffMetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
    /**
     * Filter which QffMeta to delete.
     */
    where: QffMetaWhereUniqueInput
  }

  /**
   * QffMeta deleteMany
   */
  export type QffMetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QffMetas to delete
     */
    where?: QffMetaWhereInput
  }

  /**
   * QffMeta without action
   */
  export type QffMetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QffMeta
     */
    select?: QffMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QffMetaInclude<ExtArgs> | null
  }


  /**
   * Model Veiculo
   */

  export type AggregateVeiculo = {
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  export type VeiculoAvgAggregateOutputType = {
    ano: number | null
  }

  export type VeiculoSumAggregateOutputType = {
    ano: number | null
  }

  export type VeiculoMinAggregateOutputType = {
    id: string | null
    patrimonio: string | null
    placa: string | null
    marcaModelo: string | null
    ano: number | null
    grupo: string | null
    programa: string | null
    opmCodigo: string | null
    prefixo: string | null
    situacao: string | null
    pertence: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
  }

  export type VeiculoMaxAggregateOutputType = {
    id: string | null
    patrimonio: string | null
    placa: string | null
    marcaModelo: string | null
    ano: number | null
    grupo: string | null
    programa: string | null
    opmCodigo: string | null
    prefixo: string | null
    situacao: string | null
    pertence: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
  }

  export type VeiculoCountAggregateOutputType = {
    id: number
    patrimonio: number
    placa: number
    marcaModelo: number
    ano: number
    grupo: number
    programa: number
    opmCodigo: number
    prefixo: number
    situacao: number
    pertence: number
    informacaoAdicional: number
    tipoTracao: number
    cambio: number
    licenciamento: number
    apresentacao: number
    estribo: number
    radio: number
    grafismo: number
    monocela: number
    ultimaRevisao: number
    localizacao: number
    _all: number
  }


  export type VeiculoAvgAggregateInputType = {
    ano?: true
  }

  export type VeiculoSumAggregateInputType = {
    ano?: true
  }

  export type VeiculoMinAggregateInputType = {
    id?: true
    patrimonio?: true
    placa?: true
    marcaModelo?: true
    ano?: true
    grupo?: true
    programa?: true
    opmCodigo?: true
    prefixo?: true
    situacao?: true
    pertence?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
  }

  export type VeiculoMaxAggregateInputType = {
    id?: true
    patrimonio?: true
    placa?: true
    marcaModelo?: true
    ano?: true
    grupo?: true
    programa?: true
    opmCodigo?: true
    prefixo?: true
    situacao?: true
    pertence?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
  }

  export type VeiculoCountAggregateInputType = {
    id?: true
    patrimonio?: true
    placa?: true
    marcaModelo?: true
    ano?: true
    grupo?: true
    programa?: true
    opmCodigo?: true
    prefixo?: true
    situacao?: true
    pertence?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
    _all?: true
  }

  export type VeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculo to aggregate.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veiculos
    **/
    _count?: true | VeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoMaxAggregateInputType
  }

  export type GetVeiculoAggregateType<T extends VeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculo[P]>
      : GetScalarType<T[P], AggregateVeiculo[P]>
  }




  export type VeiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithAggregationInput | VeiculoOrderByWithAggregationInput[]
    by: VeiculoScalarFieldEnum[] | VeiculoScalarFieldEnum
    having?: VeiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoCountAggregateInputType | true
    _avg?: VeiculoAvgAggregateInputType
    _sum?: VeiculoSumAggregateInputType
    _min?: VeiculoMinAggregateInputType
    _max?: VeiculoMaxAggregateInputType
  }

  export type VeiculoGroupByOutputType = {
    id: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    opmCodigo: string
    prefixo: string | null
    situacao: string | null
    pertence: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  type GetVeiculoGroupByPayload<T extends VeiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patrimonio?: boolean
    placa?: boolean
    marcaModelo?: boolean
    ano?: boolean
    grupo?: boolean
    programa?: boolean
    opmCodigo?: boolean
    prefixo?: boolean
    situacao?: boolean
    pertence?: boolean
    informacaoAdicional?: boolean
    tipoTracao?: boolean
    cambio?: boolean
    licenciamento?: boolean
    apresentacao?: boolean
    estribo?: boolean
    radio?: boolean
    grafismo?: boolean
    monocela?: boolean
    ultimaRevisao?: boolean
    localizacao?: boolean
    opm?: boolean | OpmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectScalar = {
    id?: boolean
    patrimonio?: boolean
    placa?: boolean
    marcaModelo?: boolean
    ano?: boolean
    grupo?: boolean
    programa?: boolean
    opmCodigo?: boolean
    prefixo?: boolean
    situacao?: boolean
    pertence?: boolean
    informacaoAdicional?: boolean
    tipoTracao?: boolean
    cambio?: boolean
    licenciamento?: boolean
    apresentacao?: boolean
    estribo?: boolean
    radio?: boolean
    grafismo?: boolean
    monocela?: boolean
    ultimaRevisao?: boolean
    localizacao?: boolean
  }


  export type VeiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opm?: boolean | OpmDefaultArgs<ExtArgs>
  }


  export type $VeiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veiculo"
    objects: {
      opm: Prisma.$OpmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patrimonio: string
      placa: string
      marcaModelo: string
      ano: number
      grupo: string
      programa: string
      opmCodigo: string
      prefixo: string | null
      situacao: string | null
      pertence: string | null
      informacaoAdicional: string | null
      tipoTracao: string | null
      cambio: string | null
      licenciamento: string | null
      apresentacao: string | null
      estribo: string | null
      radio: string | null
      grafismo: string | null
      monocela: string | null
      ultimaRevisao: Date | null
      localizacao: string | null
    }, ExtArgs["result"]["veiculo"]>
    composites: {}
  }


  type VeiculoGetPayload<S extends boolean | null | undefined | VeiculoDefaultArgs> = $Result.GetResult<Prisma.$VeiculoPayload, S>

  type VeiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VeiculoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VeiculoCountAggregateInputType | true
    }

  export interface VeiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veiculo'], meta: { name: 'Veiculo' } }
    /**
     * Find zero or one Veiculo that matches the filter.
     * @param {VeiculoFindUniqueArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VeiculoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoFindUniqueArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Veiculo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VeiculoFindUniqueOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VeiculoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Veiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VeiculoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoFindFirstArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Veiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VeiculoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculo.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VeiculoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Veiculo.
     * @param {VeiculoCreateArgs} args - Arguments to create a Veiculo.
     * @example
     * // Create one Veiculo
     * const Veiculo = await prisma.veiculo.create({
     *   data: {
     *     // ... data to create a Veiculo
     *   }
     * })
     * 
    **/
    create<T extends VeiculoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoCreateArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Veiculos.
     * @param {VeiculoCreateManyArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VeiculoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Veiculo.
     * @param {VeiculoDeleteArgs} args - Arguments to delete one Veiculo.
     * @example
     * // Delete one Veiculo
     * const Veiculo = await prisma.veiculo.delete({
     *   where: {
     *     // ... filter to delete one Veiculo
     *   }
     * })
     * 
    **/
    delete<T extends VeiculoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoDeleteArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Veiculo.
     * @param {VeiculoUpdateArgs} args - Arguments to update one Veiculo.
     * @example
     * // Update one Veiculo
     * const veiculo = await prisma.veiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VeiculoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoUpdateArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Veiculos.
     * @param {VeiculoDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VeiculoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VeiculoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Veiculo.
     * @param {VeiculoUpsertArgs} args - Arguments to update or create a Veiculo.
     * @example
     * // Update or create a Veiculo
     * const veiculo = await prisma.veiculo.upsert({
     *   create: {
     *     // ... data to create a Veiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculo we want to update
     *   }
     * })
    **/
    upsert<T extends VeiculoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoUpsertArgs<ExtArgs>>
    ): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculo.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends VeiculoCountArgs>(
      args?: Subset<T, VeiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeiculoAggregateArgs>(args: Subset<T, VeiculoAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAggregateType<T>>

    /**
     * Group by Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VeiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VeiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veiculo model
   */
  readonly fields: VeiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    opm<T extends OpmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpmDefaultArgs<ExtArgs>>): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Veiculo model
   */ 
  interface VeiculoFieldRefs {
    readonly id: FieldRef<"Veiculo", 'String'>
    readonly patrimonio: FieldRef<"Veiculo", 'String'>
    readonly placa: FieldRef<"Veiculo", 'String'>
    readonly marcaModelo: FieldRef<"Veiculo", 'String'>
    readonly ano: FieldRef<"Veiculo", 'Int'>
    readonly grupo: FieldRef<"Veiculo", 'String'>
    readonly programa: FieldRef<"Veiculo", 'String'>
    readonly opmCodigo: FieldRef<"Veiculo", 'String'>
    readonly prefixo: FieldRef<"Veiculo", 'String'>
    readonly situacao: FieldRef<"Veiculo", 'String'>
    readonly pertence: FieldRef<"Veiculo", 'String'>
    readonly informacaoAdicional: FieldRef<"Veiculo", 'String'>
    readonly tipoTracao: FieldRef<"Veiculo", 'String'>
    readonly cambio: FieldRef<"Veiculo", 'String'>
    readonly licenciamento: FieldRef<"Veiculo", 'String'>
    readonly apresentacao: FieldRef<"Veiculo", 'String'>
    readonly estribo: FieldRef<"Veiculo", 'String'>
    readonly radio: FieldRef<"Veiculo", 'String'>
    readonly grafismo: FieldRef<"Veiculo", 'String'>
    readonly monocela: FieldRef<"Veiculo", 'String'>
    readonly ultimaRevisao: FieldRef<"Veiculo", 'DateTime'>
    readonly localizacao: FieldRef<"Veiculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Veiculo findUnique
   */
  export type VeiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findUniqueOrThrow
   */
  export type VeiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findFirst
   */
  export type VeiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findFirstOrThrow
   */
  export type VeiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findMany
   */
  export type VeiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo create
   */
  export type VeiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Veiculo.
     */
    data: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
  }

  /**
   * Veiculo createMany
   */
  export type VeiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veiculo update
   */
  export type VeiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Veiculo.
     */
    data: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
    /**
     * Choose, which Veiculo to update.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo updateMany
   */
  export type VeiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
  }

  /**
   * Veiculo upsert
   */
  export type VeiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Veiculo to update in case it exists.
     */
    where: VeiculoWhereUniqueInput
    /**
     * In case the Veiculo found by the `where` argument doesn't exist, create a new Veiculo with this data.
     */
    create: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
    /**
     * In case the Veiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
  }

  /**
   * Veiculo delete
   */
  export type VeiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter which Veiculo to delete.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo deleteMany
   */
  export type VeiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculos to delete
     */
    where?: VeiculoWhereInput
  }

  /**
   * Veiculo without action
   */
  export type VeiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
  }


  /**
   * Model VeiculoAjuste
   */

  export type AggregateVeiculoAjuste = {
    _count: VeiculoAjusteCountAggregateOutputType | null
    _avg: VeiculoAjusteAvgAggregateOutputType | null
    _sum: VeiculoAjusteSumAggregateOutputType | null
    _min: VeiculoAjusteMinAggregateOutputType | null
    _max: VeiculoAjusteMaxAggregateOutputType | null
  }

  export type VeiculoAjusteAvgAggregateOutputType = {
    ano: number | null
  }

  export type VeiculoAjusteSumAggregateOutputType = {
    ano: number | null
  }

  export type VeiculoAjusteMinAggregateOutputType = {
    id: string | null
    patrimonio: string | null
    placa: string | null
    marcaModelo: string | null
    ano: number | null
    grupo: string | null
    programa: string | null
    opmCodigo: string | null
    prefixo: string | null
    situacao: string | null
    pertence: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
    alteradoEm: Date | null
  }

  export type VeiculoAjusteMaxAggregateOutputType = {
    id: string | null
    patrimonio: string | null
    placa: string | null
    marcaModelo: string | null
    ano: number | null
    grupo: string | null
    programa: string | null
    opmCodigo: string | null
    prefixo: string | null
    situacao: string | null
    pertence: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
    alteradoEm: Date | null
  }

  export type VeiculoAjusteCountAggregateOutputType = {
    id: number
    patrimonio: number
    placa: number
    marcaModelo: number
    ano: number
    grupo: number
    programa: number
    opmCodigo: number
    prefixo: number
    situacao: number
    pertence: number
    informacaoAdicional: number
    tipoTracao: number
    cambio: number
    licenciamento: number
    apresentacao: number
    estribo: number
    radio: number
    grafismo: number
    monocela: number
    ultimaRevisao: number
    localizacao: number
    alteradoEm: number
    _all: number
  }


  export type VeiculoAjusteAvgAggregateInputType = {
    ano?: true
  }

  export type VeiculoAjusteSumAggregateInputType = {
    ano?: true
  }

  export type VeiculoAjusteMinAggregateInputType = {
    id?: true
    patrimonio?: true
    placa?: true
    marcaModelo?: true
    ano?: true
    grupo?: true
    programa?: true
    opmCodigo?: true
    prefixo?: true
    situacao?: true
    pertence?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
    alteradoEm?: true
  }

  export type VeiculoAjusteMaxAggregateInputType = {
    id?: true
    patrimonio?: true
    placa?: true
    marcaModelo?: true
    ano?: true
    grupo?: true
    programa?: true
    opmCodigo?: true
    prefixo?: true
    situacao?: true
    pertence?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
    alteradoEm?: true
  }

  export type VeiculoAjusteCountAggregateInputType = {
    id?: true
    patrimonio?: true
    placa?: true
    marcaModelo?: true
    ano?: true
    grupo?: true
    programa?: true
    opmCodigo?: true
    prefixo?: true
    situacao?: true
    pertence?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
    alteradoEm?: true
    _all?: true
  }

  export type VeiculoAjusteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeiculoAjuste to aggregate.
     */
    where?: VeiculoAjusteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoAjustes to fetch.
     */
    orderBy?: VeiculoAjusteOrderByWithRelationInput | VeiculoAjusteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoAjusteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoAjustes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoAjustes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VeiculoAjustes
    **/
    _count?: true | VeiculoAjusteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeiculoAjusteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeiculoAjusteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoAjusteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoAjusteMaxAggregateInputType
  }

  export type GetVeiculoAjusteAggregateType<T extends VeiculoAjusteAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculoAjuste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculoAjuste[P]>
      : GetScalarType<T[P], AggregateVeiculoAjuste[P]>
  }




  export type VeiculoAjusteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoAjusteWhereInput
    orderBy?: VeiculoAjusteOrderByWithAggregationInput | VeiculoAjusteOrderByWithAggregationInput[]
    by: VeiculoAjusteScalarFieldEnum[] | VeiculoAjusteScalarFieldEnum
    having?: VeiculoAjusteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoAjusteCountAggregateInputType | true
    _avg?: VeiculoAjusteAvgAggregateInputType
    _sum?: VeiculoAjusteSumAggregateInputType
    _min?: VeiculoAjusteMinAggregateInputType
    _max?: VeiculoAjusteMaxAggregateInputType
  }

  export type VeiculoAjusteGroupByOutputType = {
    id: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    opmCodigo: string
    prefixo: string | null
    situacao: string | null
    pertence: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
    alteradoEm: Date | null
    _count: VeiculoAjusteCountAggregateOutputType | null
    _avg: VeiculoAjusteAvgAggregateOutputType | null
    _sum: VeiculoAjusteSumAggregateOutputType | null
    _min: VeiculoAjusteMinAggregateOutputType | null
    _max: VeiculoAjusteMaxAggregateOutputType | null
  }

  type GetVeiculoAjusteGroupByPayload<T extends VeiculoAjusteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoAjusteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoAjusteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoAjusteGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoAjusteGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoAjusteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patrimonio?: boolean
    placa?: boolean
    marcaModelo?: boolean
    ano?: boolean
    grupo?: boolean
    programa?: boolean
    opmCodigo?: boolean
    prefixo?: boolean
    situacao?: boolean
    pertence?: boolean
    informacaoAdicional?: boolean
    tipoTracao?: boolean
    cambio?: boolean
    licenciamento?: boolean
    apresentacao?: boolean
    estribo?: boolean
    radio?: boolean
    grafismo?: boolean
    monocela?: boolean
    ultimaRevisao?: boolean
    localizacao?: boolean
    alteradoEm?: boolean
    opm?: boolean | OpmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculoAjuste"]>

  export type VeiculoAjusteSelectScalar = {
    id?: boolean
    patrimonio?: boolean
    placa?: boolean
    marcaModelo?: boolean
    ano?: boolean
    grupo?: boolean
    programa?: boolean
    opmCodigo?: boolean
    prefixo?: boolean
    situacao?: boolean
    pertence?: boolean
    informacaoAdicional?: boolean
    tipoTracao?: boolean
    cambio?: boolean
    licenciamento?: boolean
    apresentacao?: boolean
    estribo?: boolean
    radio?: boolean
    grafismo?: boolean
    monocela?: boolean
    ultimaRevisao?: boolean
    localizacao?: boolean
    alteradoEm?: boolean
  }


  export type VeiculoAjusteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opm?: boolean | OpmDefaultArgs<ExtArgs>
  }


  export type $VeiculoAjustePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VeiculoAjuste"
    objects: {
      opm: Prisma.$OpmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patrimonio: string
      placa: string
      marcaModelo: string
      ano: number
      grupo: string
      programa: string
      opmCodigo: string
      prefixo: string | null
      situacao: string | null
      pertence: string | null
      informacaoAdicional: string | null
      tipoTracao: string | null
      cambio: string | null
      licenciamento: string | null
      apresentacao: string | null
      estribo: string | null
      radio: string | null
      grafismo: string | null
      monocela: string | null
      ultimaRevisao: Date | null
      localizacao: string | null
      alteradoEm: Date | null
    }, ExtArgs["result"]["veiculoAjuste"]>
    composites: {}
  }


  type VeiculoAjusteGetPayload<S extends boolean | null | undefined | VeiculoAjusteDefaultArgs> = $Result.GetResult<Prisma.$VeiculoAjustePayload, S>

  type VeiculoAjusteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VeiculoAjusteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VeiculoAjusteCountAggregateInputType | true
    }

  export interface VeiculoAjusteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VeiculoAjuste'], meta: { name: 'VeiculoAjuste' } }
    /**
     * Find zero or one VeiculoAjuste that matches the filter.
     * @param {VeiculoAjusteFindUniqueArgs} args - Arguments to find a VeiculoAjuste
     * @example
     * // Get one VeiculoAjuste
     * const veiculoAjuste = await prisma.veiculoAjuste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VeiculoAjusteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoAjusteFindUniqueArgs<ExtArgs>>
    ): Prisma__VeiculoAjusteClient<$Result.GetResult<Prisma.$VeiculoAjustePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VeiculoAjuste that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VeiculoAjusteFindUniqueOrThrowArgs} args - Arguments to find a VeiculoAjuste
     * @example
     * // Get one VeiculoAjuste
     * const veiculoAjuste = await prisma.veiculoAjuste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VeiculoAjusteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoAjusteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VeiculoAjusteClient<$Result.GetResult<Prisma.$VeiculoAjustePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VeiculoAjuste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAjusteFindFirstArgs} args - Arguments to find a VeiculoAjuste
     * @example
     * // Get one VeiculoAjuste
     * const veiculoAjuste = await prisma.veiculoAjuste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VeiculoAjusteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoAjusteFindFirstArgs<ExtArgs>>
    ): Prisma__VeiculoAjusteClient<$Result.GetResult<Prisma.$VeiculoAjustePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VeiculoAjuste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAjusteFindFirstOrThrowArgs} args - Arguments to find a VeiculoAjuste
     * @example
     * // Get one VeiculoAjuste
     * const veiculoAjuste = await prisma.veiculoAjuste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VeiculoAjusteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoAjusteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VeiculoAjusteClient<$Result.GetResult<Prisma.$VeiculoAjustePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VeiculoAjustes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAjusteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VeiculoAjustes
     * const veiculoAjustes = await prisma.veiculoAjuste.findMany()
     * 
     * // Get first 10 VeiculoAjustes
     * const veiculoAjustes = await prisma.veiculoAjuste.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoAjusteWithIdOnly = await prisma.veiculoAjuste.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VeiculoAjusteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoAjusteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoAjustePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VeiculoAjuste.
     * @param {VeiculoAjusteCreateArgs} args - Arguments to create a VeiculoAjuste.
     * @example
     * // Create one VeiculoAjuste
     * const VeiculoAjuste = await prisma.veiculoAjuste.create({
     *   data: {
     *     // ... data to create a VeiculoAjuste
     *   }
     * })
     * 
    **/
    create<T extends VeiculoAjusteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoAjusteCreateArgs<ExtArgs>>
    ): Prisma__VeiculoAjusteClient<$Result.GetResult<Prisma.$VeiculoAjustePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VeiculoAjustes.
     * @param {VeiculoAjusteCreateManyArgs} args - Arguments to create many VeiculoAjustes.
     * @example
     * // Create many VeiculoAjustes
     * const veiculoAjuste = await prisma.veiculoAjuste.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VeiculoAjusteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoAjusteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VeiculoAjuste.
     * @param {VeiculoAjusteDeleteArgs} args - Arguments to delete one VeiculoAjuste.
     * @example
     * // Delete one VeiculoAjuste
     * const VeiculoAjuste = await prisma.veiculoAjuste.delete({
     *   where: {
     *     // ... filter to delete one VeiculoAjuste
     *   }
     * })
     * 
    **/
    delete<T extends VeiculoAjusteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoAjusteDeleteArgs<ExtArgs>>
    ): Prisma__VeiculoAjusteClient<$Result.GetResult<Prisma.$VeiculoAjustePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VeiculoAjuste.
     * @param {VeiculoAjusteUpdateArgs} args - Arguments to update one VeiculoAjuste.
     * @example
     * // Update one VeiculoAjuste
     * const veiculoAjuste = await prisma.veiculoAjuste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VeiculoAjusteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoAjusteUpdateArgs<ExtArgs>>
    ): Prisma__VeiculoAjusteClient<$Result.GetResult<Prisma.$VeiculoAjustePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VeiculoAjustes.
     * @param {VeiculoAjusteDeleteManyArgs} args - Arguments to filter VeiculoAjustes to delete.
     * @example
     * // Delete a few VeiculoAjustes
     * const { count } = await prisma.veiculoAjuste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VeiculoAjusteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoAjusteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VeiculoAjustes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAjusteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VeiculoAjustes
     * const veiculoAjuste = await prisma.veiculoAjuste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VeiculoAjusteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoAjusteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VeiculoAjuste.
     * @param {VeiculoAjusteUpsertArgs} args - Arguments to update or create a VeiculoAjuste.
     * @example
     * // Update or create a VeiculoAjuste
     * const veiculoAjuste = await prisma.veiculoAjuste.upsert({
     *   create: {
     *     // ... data to create a VeiculoAjuste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VeiculoAjuste we want to update
     *   }
     * })
    **/
    upsert<T extends VeiculoAjusteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoAjusteUpsertArgs<ExtArgs>>
    ): Prisma__VeiculoAjusteClient<$Result.GetResult<Prisma.$VeiculoAjustePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VeiculoAjustes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAjusteCountArgs} args - Arguments to filter VeiculoAjustes to count.
     * @example
     * // Count the number of VeiculoAjustes
     * const count = await prisma.veiculoAjuste.count({
     *   where: {
     *     // ... the filter for the VeiculoAjustes we want to count
     *   }
     * })
    **/
    count<T extends VeiculoAjusteCountArgs>(
      args?: Subset<T, VeiculoAjusteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoAjusteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VeiculoAjuste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAjusteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeiculoAjusteAggregateArgs>(args: Subset<T, VeiculoAjusteAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAjusteAggregateType<T>>

    /**
     * Group by VeiculoAjuste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAjusteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VeiculoAjusteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoAjusteGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoAjusteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VeiculoAjusteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoAjusteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VeiculoAjuste model
   */
  readonly fields: VeiculoAjusteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VeiculoAjuste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoAjusteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    opm<T extends OpmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpmDefaultArgs<ExtArgs>>): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VeiculoAjuste model
   */ 
  interface VeiculoAjusteFieldRefs {
    readonly id: FieldRef<"VeiculoAjuste", 'String'>
    readonly patrimonio: FieldRef<"VeiculoAjuste", 'String'>
    readonly placa: FieldRef<"VeiculoAjuste", 'String'>
    readonly marcaModelo: FieldRef<"VeiculoAjuste", 'String'>
    readonly ano: FieldRef<"VeiculoAjuste", 'Int'>
    readonly grupo: FieldRef<"VeiculoAjuste", 'String'>
    readonly programa: FieldRef<"VeiculoAjuste", 'String'>
    readonly opmCodigo: FieldRef<"VeiculoAjuste", 'String'>
    readonly prefixo: FieldRef<"VeiculoAjuste", 'String'>
    readonly situacao: FieldRef<"VeiculoAjuste", 'String'>
    readonly pertence: FieldRef<"VeiculoAjuste", 'String'>
    readonly informacaoAdicional: FieldRef<"VeiculoAjuste", 'String'>
    readonly tipoTracao: FieldRef<"VeiculoAjuste", 'String'>
    readonly cambio: FieldRef<"VeiculoAjuste", 'String'>
    readonly licenciamento: FieldRef<"VeiculoAjuste", 'String'>
    readonly apresentacao: FieldRef<"VeiculoAjuste", 'String'>
    readonly estribo: FieldRef<"VeiculoAjuste", 'String'>
    readonly radio: FieldRef<"VeiculoAjuste", 'String'>
    readonly grafismo: FieldRef<"VeiculoAjuste", 'String'>
    readonly monocela: FieldRef<"VeiculoAjuste", 'String'>
    readonly ultimaRevisao: FieldRef<"VeiculoAjuste", 'DateTime'>
    readonly localizacao: FieldRef<"VeiculoAjuste", 'String'>
    readonly alteradoEm: FieldRef<"VeiculoAjuste", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VeiculoAjuste findUnique
   */
  export type VeiculoAjusteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoAjuste to fetch.
     */
    where: VeiculoAjusteWhereUniqueInput
  }

  /**
   * VeiculoAjuste findUniqueOrThrow
   */
  export type VeiculoAjusteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoAjuste to fetch.
     */
    where: VeiculoAjusteWhereUniqueInput
  }

  /**
   * VeiculoAjuste findFirst
   */
  export type VeiculoAjusteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoAjuste to fetch.
     */
    where?: VeiculoAjusteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoAjustes to fetch.
     */
    orderBy?: VeiculoAjusteOrderByWithRelationInput | VeiculoAjusteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeiculoAjustes.
     */
    cursor?: VeiculoAjusteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoAjustes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoAjustes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeiculoAjustes.
     */
    distinct?: VeiculoAjusteScalarFieldEnum | VeiculoAjusteScalarFieldEnum[]
  }

  /**
   * VeiculoAjuste findFirstOrThrow
   */
  export type VeiculoAjusteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoAjuste to fetch.
     */
    where?: VeiculoAjusteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoAjustes to fetch.
     */
    orderBy?: VeiculoAjusteOrderByWithRelationInput | VeiculoAjusteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeiculoAjustes.
     */
    cursor?: VeiculoAjusteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoAjustes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoAjustes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeiculoAjustes.
     */
    distinct?: VeiculoAjusteScalarFieldEnum | VeiculoAjusteScalarFieldEnum[]
  }

  /**
   * VeiculoAjuste findMany
   */
  export type VeiculoAjusteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoAjustes to fetch.
     */
    where?: VeiculoAjusteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoAjustes to fetch.
     */
    orderBy?: VeiculoAjusteOrderByWithRelationInput | VeiculoAjusteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VeiculoAjustes.
     */
    cursor?: VeiculoAjusteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoAjustes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoAjustes.
     */
    skip?: number
    distinct?: VeiculoAjusteScalarFieldEnum | VeiculoAjusteScalarFieldEnum[]
  }

  /**
   * VeiculoAjuste create
   */
  export type VeiculoAjusteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
    /**
     * The data needed to create a VeiculoAjuste.
     */
    data: XOR<VeiculoAjusteCreateInput, VeiculoAjusteUncheckedCreateInput>
  }

  /**
   * VeiculoAjuste createMany
   */
  export type VeiculoAjusteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VeiculoAjustes.
     */
    data: VeiculoAjusteCreateManyInput | VeiculoAjusteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VeiculoAjuste update
   */
  export type VeiculoAjusteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
    /**
     * The data needed to update a VeiculoAjuste.
     */
    data: XOR<VeiculoAjusteUpdateInput, VeiculoAjusteUncheckedUpdateInput>
    /**
     * Choose, which VeiculoAjuste to update.
     */
    where: VeiculoAjusteWhereUniqueInput
  }

  /**
   * VeiculoAjuste updateMany
   */
  export type VeiculoAjusteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VeiculoAjustes.
     */
    data: XOR<VeiculoAjusteUpdateManyMutationInput, VeiculoAjusteUncheckedUpdateManyInput>
    /**
     * Filter which VeiculoAjustes to update
     */
    where?: VeiculoAjusteWhereInput
  }

  /**
   * VeiculoAjuste upsert
   */
  export type VeiculoAjusteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
    /**
     * The filter to search for the VeiculoAjuste to update in case it exists.
     */
    where: VeiculoAjusteWhereUniqueInput
    /**
     * In case the VeiculoAjuste found by the `where` argument doesn't exist, create a new VeiculoAjuste with this data.
     */
    create: XOR<VeiculoAjusteCreateInput, VeiculoAjusteUncheckedCreateInput>
    /**
     * In case the VeiculoAjuste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoAjusteUpdateInput, VeiculoAjusteUncheckedUpdateInput>
  }

  /**
   * VeiculoAjuste delete
   */
  export type VeiculoAjusteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
    /**
     * Filter which VeiculoAjuste to delete.
     */
    where: VeiculoAjusteWhereUniqueInput
  }

  /**
   * VeiculoAjuste deleteMany
   */
  export type VeiculoAjusteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeiculoAjustes to delete
     */
    where?: VeiculoAjusteWhereInput
  }

  /**
   * VeiculoAjuste without action
   */
  export type VeiculoAjusteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAjuste
     */
    select?: VeiculoAjusteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAjusteInclude<ExtArgs> | null
  }


  /**
   * Model VeiculoSnapshot
   */

  export type AggregateVeiculoSnapshot = {
    _count: VeiculoSnapshotCountAggregateOutputType | null
    _avg: VeiculoSnapshotAvgAggregateOutputType | null
    _sum: VeiculoSnapshotSumAggregateOutputType | null
    _min: VeiculoSnapshotMinAggregateOutputType | null
    _max: VeiculoSnapshotMaxAggregateOutputType | null
  }

  export type VeiculoSnapshotAvgAggregateOutputType = {
    ano: number | null
  }

  export type VeiculoSnapshotSumAggregateOutputType = {
    ano: number | null
  }

  export type VeiculoSnapshotMinAggregateOutputType = {
    id: string | null
    mesReferencia: string | null
    patrimonio: string | null
    placa: string | null
    marcaModelo: string | null
    ano: number | null
    grupo: string | null
    programa: string | null
    opmCodigo: string | null
    prefixo: string | null
    situacao: string | null
    pertence: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
  }

  export type VeiculoSnapshotMaxAggregateOutputType = {
    id: string | null
    mesReferencia: string | null
    patrimonio: string | null
    placa: string | null
    marcaModelo: string | null
    ano: number | null
    grupo: string | null
    programa: string | null
    opmCodigo: string | null
    prefixo: string | null
    situacao: string | null
    pertence: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
  }

  export type VeiculoSnapshotCountAggregateOutputType = {
    id: number
    mesReferencia: number
    patrimonio: number
    placa: number
    marcaModelo: number
    ano: number
    grupo: number
    programa: number
    opmCodigo: number
    prefixo: number
    situacao: number
    pertence: number
    informacaoAdicional: number
    tipoTracao: number
    cambio: number
    licenciamento: number
    apresentacao: number
    estribo: number
    radio: number
    grafismo: number
    monocela: number
    ultimaRevisao: number
    localizacao: number
    _all: number
  }


  export type VeiculoSnapshotAvgAggregateInputType = {
    ano?: true
  }

  export type VeiculoSnapshotSumAggregateInputType = {
    ano?: true
  }

  export type VeiculoSnapshotMinAggregateInputType = {
    id?: true
    mesReferencia?: true
    patrimonio?: true
    placa?: true
    marcaModelo?: true
    ano?: true
    grupo?: true
    programa?: true
    opmCodigo?: true
    prefixo?: true
    situacao?: true
    pertence?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
  }

  export type VeiculoSnapshotMaxAggregateInputType = {
    id?: true
    mesReferencia?: true
    patrimonio?: true
    placa?: true
    marcaModelo?: true
    ano?: true
    grupo?: true
    programa?: true
    opmCodigo?: true
    prefixo?: true
    situacao?: true
    pertence?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
  }

  export type VeiculoSnapshotCountAggregateInputType = {
    id?: true
    mesReferencia?: true
    patrimonio?: true
    placa?: true
    marcaModelo?: true
    ano?: true
    grupo?: true
    programa?: true
    opmCodigo?: true
    prefixo?: true
    situacao?: true
    pertence?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
    _all?: true
  }

  export type VeiculoSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeiculoSnapshot to aggregate.
     */
    where?: VeiculoSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoSnapshots to fetch.
     */
    orderBy?: VeiculoSnapshotOrderByWithRelationInput | VeiculoSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VeiculoSnapshots
    **/
    _count?: true | VeiculoSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeiculoSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeiculoSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoSnapshotMaxAggregateInputType
  }

  export type GetVeiculoSnapshotAggregateType<T extends VeiculoSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculoSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculoSnapshot[P]>
      : GetScalarType<T[P], AggregateVeiculoSnapshot[P]>
  }




  export type VeiculoSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoSnapshotWhereInput
    orderBy?: VeiculoSnapshotOrderByWithAggregationInput | VeiculoSnapshotOrderByWithAggregationInput[]
    by: VeiculoSnapshotScalarFieldEnum[] | VeiculoSnapshotScalarFieldEnum
    having?: VeiculoSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoSnapshotCountAggregateInputType | true
    _avg?: VeiculoSnapshotAvgAggregateInputType
    _sum?: VeiculoSnapshotSumAggregateInputType
    _min?: VeiculoSnapshotMinAggregateInputType
    _max?: VeiculoSnapshotMaxAggregateInputType
  }

  export type VeiculoSnapshotGroupByOutputType = {
    id: string
    mesReferencia: string
    patrimonio: string
    placa: string | null
    marcaModelo: string | null
    ano: number | null
    grupo: string | null
    programa: string | null
    opmCodigo: string
    prefixo: string | null
    situacao: string | null
    pertence: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
    _count: VeiculoSnapshotCountAggregateOutputType | null
    _avg: VeiculoSnapshotAvgAggregateOutputType | null
    _sum: VeiculoSnapshotSumAggregateOutputType | null
    _min: VeiculoSnapshotMinAggregateOutputType | null
    _max: VeiculoSnapshotMaxAggregateOutputType | null
  }

  type GetVeiculoSnapshotGroupByPayload<T extends VeiculoSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mesReferencia?: boolean
    patrimonio?: boolean
    placa?: boolean
    marcaModelo?: boolean
    ano?: boolean
    grupo?: boolean
    programa?: boolean
    opmCodigo?: boolean
    prefixo?: boolean
    situacao?: boolean
    pertence?: boolean
    informacaoAdicional?: boolean
    tipoTracao?: boolean
    cambio?: boolean
    licenciamento?: boolean
    apresentacao?: boolean
    estribo?: boolean
    radio?: boolean
    grafismo?: boolean
    monocela?: boolean
    ultimaRevisao?: boolean
    localizacao?: boolean
    opm?: boolean | OpmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculoSnapshot"]>

  export type VeiculoSnapshotSelectScalar = {
    id?: boolean
    mesReferencia?: boolean
    patrimonio?: boolean
    placa?: boolean
    marcaModelo?: boolean
    ano?: boolean
    grupo?: boolean
    programa?: boolean
    opmCodigo?: boolean
    prefixo?: boolean
    situacao?: boolean
    pertence?: boolean
    informacaoAdicional?: boolean
    tipoTracao?: boolean
    cambio?: boolean
    licenciamento?: boolean
    apresentacao?: boolean
    estribo?: boolean
    radio?: boolean
    grafismo?: boolean
    monocela?: boolean
    ultimaRevisao?: boolean
    localizacao?: boolean
  }


  export type VeiculoSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opm?: boolean | OpmDefaultArgs<ExtArgs>
  }


  export type $VeiculoSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VeiculoSnapshot"
    objects: {
      opm: Prisma.$OpmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mesReferencia: string
      patrimonio: string
      placa: string | null
      marcaModelo: string | null
      ano: number | null
      grupo: string | null
      programa: string | null
      opmCodigo: string
      prefixo: string | null
      situacao: string | null
      pertence: string | null
      informacaoAdicional: string | null
      tipoTracao: string | null
      cambio: string | null
      licenciamento: string | null
      apresentacao: string | null
      estribo: string | null
      radio: string | null
      grafismo: string | null
      monocela: string | null
      ultimaRevisao: Date | null
      localizacao: string | null
    }, ExtArgs["result"]["veiculoSnapshot"]>
    composites: {}
  }


  type VeiculoSnapshotGetPayload<S extends boolean | null | undefined | VeiculoSnapshotDefaultArgs> = $Result.GetResult<Prisma.$VeiculoSnapshotPayload, S>

  type VeiculoSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VeiculoSnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VeiculoSnapshotCountAggregateInputType | true
    }

  export interface VeiculoSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VeiculoSnapshot'], meta: { name: 'VeiculoSnapshot' } }
    /**
     * Find zero or one VeiculoSnapshot that matches the filter.
     * @param {VeiculoSnapshotFindUniqueArgs} args - Arguments to find a VeiculoSnapshot
     * @example
     * // Get one VeiculoSnapshot
     * const veiculoSnapshot = await prisma.veiculoSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VeiculoSnapshotFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoSnapshotFindUniqueArgs<ExtArgs>>
    ): Prisma__VeiculoSnapshotClient<$Result.GetResult<Prisma.$VeiculoSnapshotPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VeiculoSnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VeiculoSnapshotFindUniqueOrThrowArgs} args - Arguments to find a VeiculoSnapshot
     * @example
     * // Get one VeiculoSnapshot
     * const veiculoSnapshot = await prisma.veiculoSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VeiculoSnapshotFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoSnapshotFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VeiculoSnapshotClient<$Result.GetResult<Prisma.$VeiculoSnapshotPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VeiculoSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoSnapshotFindFirstArgs} args - Arguments to find a VeiculoSnapshot
     * @example
     * // Get one VeiculoSnapshot
     * const veiculoSnapshot = await prisma.veiculoSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VeiculoSnapshotFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoSnapshotFindFirstArgs<ExtArgs>>
    ): Prisma__VeiculoSnapshotClient<$Result.GetResult<Prisma.$VeiculoSnapshotPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VeiculoSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoSnapshotFindFirstOrThrowArgs} args - Arguments to find a VeiculoSnapshot
     * @example
     * // Get one VeiculoSnapshot
     * const veiculoSnapshot = await prisma.veiculoSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VeiculoSnapshotFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoSnapshotFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VeiculoSnapshotClient<$Result.GetResult<Prisma.$VeiculoSnapshotPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VeiculoSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VeiculoSnapshots
     * const veiculoSnapshots = await prisma.veiculoSnapshot.findMany()
     * 
     * // Get first 10 VeiculoSnapshots
     * const veiculoSnapshots = await prisma.veiculoSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoSnapshotWithIdOnly = await prisma.veiculoSnapshot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VeiculoSnapshotFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoSnapshotFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoSnapshotPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VeiculoSnapshot.
     * @param {VeiculoSnapshotCreateArgs} args - Arguments to create a VeiculoSnapshot.
     * @example
     * // Create one VeiculoSnapshot
     * const VeiculoSnapshot = await prisma.veiculoSnapshot.create({
     *   data: {
     *     // ... data to create a VeiculoSnapshot
     *   }
     * })
     * 
    **/
    create<T extends VeiculoSnapshotCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoSnapshotCreateArgs<ExtArgs>>
    ): Prisma__VeiculoSnapshotClient<$Result.GetResult<Prisma.$VeiculoSnapshotPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VeiculoSnapshots.
     * @param {VeiculoSnapshotCreateManyArgs} args - Arguments to create many VeiculoSnapshots.
     * @example
     * // Create many VeiculoSnapshots
     * const veiculoSnapshot = await prisma.veiculoSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VeiculoSnapshotCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoSnapshotCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VeiculoSnapshot.
     * @param {VeiculoSnapshotDeleteArgs} args - Arguments to delete one VeiculoSnapshot.
     * @example
     * // Delete one VeiculoSnapshot
     * const VeiculoSnapshot = await prisma.veiculoSnapshot.delete({
     *   where: {
     *     // ... filter to delete one VeiculoSnapshot
     *   }
     * })
     * 
    **/
    delete<T extends VeiculoSnapshotDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoSnapshotDeleteArgs<ExtArgs>>
    ): Prisma__VeiculoSnapshotClient<$Result.GetResult<Prisma.$VeiculoSnapshotPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VeiculoSnapshot.
     * @param {VeiculoSnapshotUpdateArgs} args - Arguments to update one VeiculoSnapshot.
     * @example
     * // Update one VeiculoSnapshot
     * const veiculoSnapshot = await prisma.veiculoSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VeiculoSnapshotUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoSnapshotUpdateArgs<ExtArgs>>
    ): Prisma__VeiculoSnapshotClient<$Result.GetResult<Prisma.$VeiculoSnapshotPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VeiculoSnapshots.
     * @param {VeiculoSnapshotDeleteManyArgs} args - Arguments to filter VeiculoSnapshots to delete.
     * @example
     * // Delete a few VeiculoSnapshots
     * const { count } = await prisma.veiculoSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VeiculoSnapshotDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoSnapshotDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VeiculoSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VeiculoSnapshots
     * const veiculoSnapshot = await prisma.veiculoSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VeiculoSnapshotUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoSnapshotUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VeiculoSnapshot.
     * @param {VeiculoSnapshotUpsertArgs} args - Arguments to update or create a VeiculoSnapshot.
     * @example
     * // Update or create a VeiculoSnapshot
     * const veiculoSnapshot = await prisma.veiculoSnapshot.upsert({
     *   create: {
     *     // ... data to create a VeiculoSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VeiculoSnapshot we want to update
     *   }
     * })
    **/
    upsert<T extends VeiculoSnapshotUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoSnapshotUpsertArgs<ExtArgs>>
    ): Prisma__VeiculoSnapshotClient<$Result.GetResult<Prisma.$VeiculoSnapshotPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VeiculoSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoSnapshotCountArgs} args - Arguments to filter VeiculoSnapshots to count.
     * @example
     * // Count the number of VeiculoSnapshots
     * const count = await prisma.veiculoSnapshot.count({
     *   where: {
     *     // ... the filter for the VeiculoSnapshots we want to count
     *   }
     * })
    **/
    count<T extends VeiculoSnapshotCountArgs>(
      args?: Subset<T, VeiculoSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VeiculoSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeiculoSnapshotAggregateArgs>(args: Subset<T, VeiculoSnapshotAggregateArgs>): Prisma.PrismaPromise<GetVeiculoSnapshotAggregateType<T>>

    /**
     * Group by VeiculoSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VeiculoSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VeiculoSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VeiculoSnapshot model
   */
  readonly fields: VeiculoSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VeiculoSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    opm<T extends OpmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpmDefaultArgs<ExtArgs>>): Prisma__OpmClient<$Result.GetResult<Prisma.$OpmPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VeiculoSnapshot model
   */ 
  interface VeiculoSnapshotFieldRefs {
    readonly id: FieldRef<"VeiculoSnapshot", 'String'>
    readonly mesReferencia: FieldRef<"VeiculoSnapshot", 'String'>
    readonly patrimonio: FieldRef<"VeiculoSnapshot", 'String'>
    readonly placa: FieldRef<"VeiculoSnapshot", 'String'>
    readonly marcaModelo: FieldRef<"VeiculoSnapshot", 'String'>
    readonly ano: FieldRef<"VeiculoSnapshot", 'Int'>
    readonly grupo: FieldRef<"VeiculoSnapshot", 'String'>
    readonly programa: FieldRef<"VeiculoSnapshot", 'String'>
    readonly opmCodigo: FieldRef<"VeiculoSnapshot", 'String'>
    readonly prefixo: FieldRef<"VeiculoSnapshot", 'String'>
    readonly situacao: FieldRef<"VeiculoSnapshot", 'String'>
    readonly pertence: FieldRef<"VeiculoSnapshot", 'String'>
    readonly informacaoAdicional: FieldRef<"VeiculoSnapshot", 'String'>
    readonly tipoTracao: FieldRef<"VeiculoSnapshot", 'String'>
    readonly cambio: FieldRef<"VeiculoSnapshot", 'String'>
    readonly licenciamento: FieldRef<"VeiculoSnapshot", 'String'>
    readonly apresentacao: FieldRef<"VeiculoSnapshot", 'String'>
    readonly estribo: FieldRef<"VeiculoSnapshot", 'String'>
    readonly radio: FieldRef<"VeiculoSnapshot", 'String'>
    readonly grafismo: FieldRef<"VeiculoSnapshot", 'String'>
    readonly monocela: FieldRef<"VeiculoSnapshot", 'String'>
    readonly ultimaRevisao: FieldRef<"VeiculoSnapshot", 'DateTime'>
    readonly localizacao: FieldRef<"VeiculoSnapshot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VeiculoSnapshot findUnique
   */
  export type VeiculoSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoSnapshot to fetch.
     */
    where: VeiculoSnapshotWhereUniqueInput
  }

  /**
   * VeiculoSnapshot findUniqueOrThrow
   */
  export type VeiculoSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoSnapshot to fetch.
     */
    where: VeiculoSnapshotWhereUniqueInput
  }

  /**
   * VeiculoSnapshot findFirst
   */
  export type VeiculoSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoSnapshot to fetch.
     */
    where?: VeiculoSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoSnapshots to fetch.
     */
    orderBy?: VeiculoSnapshotOrderByWithRelationInput | VeiculoSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeiculoSnapshots.
     */
    cursor?: VeiculoSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeiculoSnapshots.
     */
    distinct?: VeiculoSnapshotScalarFieldEnum | VeiculoSnapshotScalarFieldEnum[]
  }

  /**
   * VeiculoSnapshot findFirstOrThrow
   */
  export type VeiculoSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoSnapshot to fetch.
     */
    where?: VeiculoSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoSnapshots to fetch.
     */
    orderBy?: VeiculoSnapshotOrderByWithRelationInput | VeiculoSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeiculoSnapshots.
     */
    cursor?: VeiculoSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeiculoSnapshots.
     */
    distinct?: VeiculoSnapshotScalarFieldEnum | VeiculoSnapshotScalarFieldEnum[]
  }

  /**
   * VeiculoSnapshot findMany
   */
  export type VeiculoSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoSnapshots to fetch.
     */
    where?: VeiculoSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoSnapshots to fetch.
     */
    orderBy?: VeiculoSnapshotOrderByWithRelationInput | VeiculoSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VeiculoSnapshots.
     */
    cursor?: VeiculoSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoSnapshots.
     */
    skip?: number
    distinct?: VeiculoSnapshotScalarFieldEnum | VeiculoSnapshotScalarFieldEnum[]
  }

  /**
   * VeiculoSnapshot create
   */
  export type VeiculoSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a VeiculoSnapshot.
     */
    data: XOR<VeiculoSnapshotCreateInput, VeiculoSnapshotUncheckedCreateInput>
  }

  /**
   * VeiculoSnapshot createMany
   */
  export type VeiculoSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VeiculoSnapshots.
     */
    data: VeiculoSnapshotCreateManyInput | VeiculoSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VeiculoSnapshot update
   */
  export type VeiculoSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a VeiculoSnapshot.
     */
    data: XOR<VeiculoSnapshotUpdateInput, VeiculoSnapshotUncheckedUpdateInput>
    /**
     * Choose, which VeiculoSnapshot to update.
     */
    where: VeiculoSnapshotWhereUniqueInput
  }

  /**
   * VeiculoSnapshot updateMany
   */
  export type VeiculoSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VeiculoSnapshots.
     */
    data: XOR<VeiculoSnapshotUpdateManyMutationInput, VeiculoSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which VeiculoSnapshots to update
     */
    where?: VeiculoSnapshotWhereInput
  }

  /**
   * VeiculoSnapshot upsert
   */
  export type VeiculoSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the VeiculoSnapshot to update in case it exists.
     */
    where: VeiculoSnapshotWhereUniqueInput
    /**
     * In case the VeiculoSnapshot found by the `where` argument doesn't exist, create a new VeiculoSnapshot with this data.
     */
    create: XOR<VeiculoSnapshotCreateInput, VeiculoSnapshotUncheckedCreateInput>
    /**
     * In case the VeiculoSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoSnapshotUpdateInput, VeiculoSnapshotUncheckedUpdateInput>
  }

  /**
   * VeiculoSnapshot delete
   */
  export type VeiculoSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
    /**
     * Filter which VeiculoSnapshot to delete.
     */
    where: VeiculoSnapshotWhereUniqueInput
  }

  /**
   * VeiculoSnapshot deleteMany
   */
  export type VeiculoSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeiculoSnapshots to delete
     */
    where?: VeiculoSnapshotWhereInput
  }

  /**
   * VeiculoSnapshot without action
   */
  export type VeiculoSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoSnapshot
     */
    select?: VeiculoSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model VeiculoEmprestimo
   */

  export type AggregateVeiculoEmprestimo = {
    _count: VeiculoEmprestimoCountAggregateOutputType | null
    _min: VeiculoEmprestimoMinAggregateOutputType | null
    _max: VeiculoEmprestimoMaxAggregateOutputType | null
  }

  export type VeiculoEmprestimoMinAggregateOutputType = {
    id: string | null
    placa: string | null
    patrimonio: string | null
    prefixo: string | null
    marcaModelo: string | null
    ano: string | null
    cor: string | null
    pertence: string | null
    observacoes: string | null
    detentorAtual: string | null
    unidade: string | null
    motivo: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
    statusUso: string | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type VeiculoEmprestimoMaxAggregateOutputType = {
    id: string | null
    placa: string | null
    patrimonio: string | null
    prefixo: string | null
    marcaModelo: string | null
    ano: string | null
    cor: string | null
    pertence: string | null
    observacoes: string | null
    detentorAtual: string | null
    unidade: string | null
    motivo: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
    statusUso: string | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type VeiculoEmprestimoCountAggregateOutputType = {
    id: number
    placa: number
    patrimonio: number
    prefixo: number
    marcaModelo: number
    ano: number
    cor: number
    pertence: number
    observacoes: number
    detentorAtual: number
    unidade: number
    motivo: number
    informacaoAdicional: number
    tipoTracao: number
    cambio: number
    licenciamento: number
    apresentacao: number
    estribo: number
    radio: number
    grafismo: number
    monocela: number
    ultimaRevisao: number
    localizacao: number
    statusUso: number
    ativo: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type VeiculoEmprestimoMinAggregateInputType = {
    id?: true
    placa?: true
    patrimonio?: true
    prefixo?: true
    marcaModelo?: true
    ano?: true
    cor?: true
    pertence?: true
    observacoes?: true
    detentorAtual?: true
    unidade?: true
    motivo?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
    statusUso?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type VeiculoEmprestimoMaxAggregateInputType = {
    id?: true
    placa?: true
    patrimonio?: true
    prefixo?: true
    marcaModelo?: true
    ano?: true
    cor?: true
    pertence?: true
    observacoes?: true
    detentorAtual?: true
    unidade?: true
    motivo?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
    statusUso?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type VeiculoEmprestimoCountAggregateInputType = {
    id?: true
    placa?: true
    patrimonio?: true
    prefixo?: true
    marcaModelo?: true
    ano?: true
    cor?: true
    pertence?: true
    observacoes?: true
    detentorAtual?: true
    unidade?: true
    motivo?: true
    informacaoAdicional?: true
    tipoTracao?: true
    cambio?: true
    licenciamento?: true
    apresentacao?: true
    estribo?: true
    radio?: true
    grafismo?: true
    monocela?: true
    ultimaRevisao?: true
    localizacao?: true
    statusUso?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type VeiculoEmprestimoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeiculoEmprestimo to aggregate.
     */
    where?: VeiculoEmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoEmprestimos to fetch.
     */
    orderBy?: VeiculoEmprestimoOrderByWithRelationInput | VeiculoEmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoEmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoEmprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoEmprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VeiculoEmprestimos
    **/
    _count?: true | VeiculoEmprestimoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoEmprestimoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoEmprestimoMaxAggregateInputType
  }

  export type GetVeiculoEmprestimoAggregateType<T extends VeiculoEmprestimoAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculoEmprestimo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculoEmprestimo[P]>
      : GetScalarType<T[P], AggregateVeiculoEmprestimo[P]>
  }




  export type VeiculoEmprestimoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoEmprestimoWhereInput
    orderBy?: VeiculoEmprestimoOrderByWithAggregationInput | VeiculoEmprestimoOrderByWithAggregationInput[]
    by: VeiculoEmprestimoScalarFieldEnum[] | VeiculoEmprestimoScalarFieldEnum
    having?: VeiculoEmprestimoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoEmprestimoCountAggregateInputType | true
    _min?: VeiculoEmprestimoMinAggregateInputType
    _max?: VeiculoEmprestimoMaxAggregateInputType
  }

  export type VeiculoEmprestimoGroupByOutputType = {
    id: string
    placa: string
    patrimonio: string | null
    prefixo: string | null
    marcaModelo: string | null
    ano: string | null
    cor: string | null
    pertence: string | null
    observacoes: string | null
    detentorAtual: string | null
    unidade: string | null
    motivo: string | null
    informacaoAdicional: string | null
    tipoTracao: string | null
    cambio: string | null
    licenciamento: string | null
    apresentacao: string | null
    estribo: string | null
    radio: string | null
    grafismo: string | null
    monocela: string | null
    ultimaRevisao: Date | null
    localizacao: string | null
    statusUso: string
    ativo: boolean
    criadoEm: Date
    atualizadoEm: Date
    _count: VeiculoEmprestimoCountAggregateOutputType | null
    _min: VeiculoEmprestimoMinAggregateOutputType | null
    _max: VeiculoEmprestimoMaxAggregateOutputType | null
  }

  type GetVeiculoEmprestimoGroupByPayload<T extends VeiculoEmprestimoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoEmprestimoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoEmprestimoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoEmprestimoGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoEmprestimoGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoEmprestimoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    patrimonio?: boolean
    prefixo?: boolean
    marcaModelo?: boolean
    ano?: boolean
    cor?: boolean
    pertence?: boolean
    observacoes?: boolean
    detentorAtual?: boolean
    unidade?: boolean
    motivo?: boolean
    informacaoAdicional?: boolean
    tipoTracao?: boolean
    cambio?: boolean
    licenciamento?: boolean
    apresentacao?: boolean
    estribo?: boolean
    radio?: boolean
    grafismo?: boolean
    monocela?: boolean
    ultimaRevisao?: boolean
    localizacao?: boolean
    statusUso?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    emprestimos?: boolean | VeiculoEmprestimo$emprestimosArgs<ExtArgs>
    _count?: boolean | VeiculoEmprestimoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculoEmprestimo"]>

  export type VeiculoEmprestimoSelectScalar = {
    id?: boolean
    placa?: boolean
    patrimonio?: boolean
    prefixo?: boolean
    marcaModelo?: boolean
    ano?: boolean
    cor?: boolean
    pertence?: boolean
    observacoes?: boolean
    detentorAtual?: boolean
    unidade?: boolean
    motivo?: boolean
    informacaoAdicional?: boolean
    tipoTracao?: boolean
    cambio?: boolean
    licenciamento?: boolean
    apresentacao?: boolean
    estribo?: boolean
    radio?: boolean
    grafismo?: boolean
    monocela?: boolean
    ultimaRevisao?: boolean
    localizacao?: boolean
    statusUso?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }


  export type VeiculoEmprestimoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | VeiculoEmprestimo$emprestimosArgs<ExtArgs>
    _count?: boolean | VeiculoEmprestimoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VeiculoEmprestimoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VeiculoEmprestimo"
    objects: {
      emprestimos: Prisma.$EmprestimoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      placa: string
      patrimonio: string | null
      prefixo: string | null
      marcaModelo: string | null
      ano: string | null
      cor: string | null
      pertence: string | null
      observacoes: string | null
      detentorAtual: string | null
      unidade: string | null
      motivo: string | null
      informacaoAdicional: string | null
      tipoTracao: string | null
      cambio: string | null
      licenciamento: string | null
      apresentacao: string | null
      estribo: string | null
      radio: string | null
      grafismo: string | null
      monocela: string | null
      ultimaRevisao: Date | null
      localizacao: string | null
      statusUso: string
      ativo: boolean
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["veiculoEmprestimo"]>
    composites: {}
  }


  type VeiculoEmprestimoGetPayload<S extends boolean | null | undefined | VeiculoEmprestimoDefaultArgs> = $Result.GetResult<Prisma.$VeiculoEmprestimoPayload, S>

  type VeiculoEmprestimoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VeiculoEmprestimoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VeiculoEmprestimoCountAggregateInputType | true
    }

  export interface VeiculoEmprestimoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VeiculoEmprestimo'], meta: { name: 'VeiculoEmprestimo' } }
    /**
     * Find zero or one VeiculoEmprestimo that matches the filter.
     * @param {VeiculoEmprestimoFindUniqueArgs} args - Arguments to find a VeiculoEmprestimo
     * @example
     * // Get one VeiculoEmprestimo
     * const veiculoEmprestimo = await prisma.veiculoEmprestimo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VeiculoEmprestimoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoEmprestimoFindUniqueArgs<ExtArgs>>
    ): Prisma__VeiculoEmprestimoClient<$Result.GetResult<Prisma.$VeiculoEmprestimoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VeiculoEmprestimo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VeiculoEmprestimoFindUniqueOrThrowArgs} args - Arguments to find a VeiculoEmprestimo
     * @example
     * // Get one VeiculoEmprestimo
     * const veiculoEmprestimo = await prisma.veiculoEmprestimo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VeiculoEmprestimoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoEmprestimoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VeiculoEmprestimoClient<$Result.GetResult<Prisma.$VeiculoEmprestimoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VeiculoEmprestimo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoEmprestimoFindFirstArgs} args - Arguments to find a VeiculoEmprestimo
     * @example
     * // Get one VeiculoEmprestimo
     * const veiculoEmprestimo = await prisma.veiculoEmprestimo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VeiculoEmprestimoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoEmprestimoFindFirstArgs<ExtArgs>>
    ): Prisma__VeiculoEmprestimoClient<$Result.GetResult<Prisma.$VeiculoEmprestimoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VeiculoEmprestimo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoEmprestimoFindFirstOrThrowArgs} args - Arguments to find a VeiculoEmprestimo
     * @example
     * // Get one VeiculoEmprestimo
     * const veiculoEmprestimo = await prisma.veiculoEmprestimo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VeiculoEmprestimoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoEmprestimoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VeiculoEmprestimoClient<$Result.GetResult<Prisma.$VeiculoEmprestimoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VeiculoEmprestimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoEmprestimoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VeiculoEmprestimos
     * const veiculoEmprestimos = await prisma.veiculoEmprestimo.findMany()
     * 
     * // Get first 10 VeiculoEmprestimos
     * const veiculoEmprestimos = await prisma.veiculoEmprestimo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoEmprestimoWithIdOnly = await prisma.veiculoEmprestimo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VeiculoEmprestimoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoEmprestimoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoEmprestimoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VeiculoEmprestimo.
     * @param {VeiculoEmprestimoCreateArgs} args - Arguments to create a VeiculoEmprestimo.
     * @example
     * // Create one VeiculoEmprestimo
     * const VeiculoEmprestimo = await prisma.veiculoEmprestimo.create({
     *   data: {
     *     // ... data to create a VeiculoEmprestimo
     *   }
     * })
     * 
    **/
    create<T extends VeiculoEmprestimoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoEmprestimoCreateArgs<ExtArgs>>
    ): Prisma__VeiculoEmprestimoClient<$Result.GetResult<Prisma.$VeiculoEmprestimoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VeiculoEmprestimos.
     * @param {VeiculoEmprestimoCreateManyArgs} args - Arguments to create many VeiculoEmprestimos.
     * @example
     * // Create many VeiculoEmprestimos
     * const veiculoEmprestimo = await prisma.veiculoEmprestimo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VeiculoEmprestimoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoEmprestimoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VeiculoEmprestimo.
     * @param {VeiculoEmprestimoDeleteArgs} args - Arguments to delete one VeiculoEmprestimo.
     * @example
     * // Delete one VeiculoEmprestimo
     * const VeiculoEmprestimo = await prisma.veiculoEmprestimo.delete({
     *   where: {
     *     // ... filter to delete one VeiculoEmprestimo
     *   }
     * })
     * 
    **/
    delete<T extends VeiculoEmprestimoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoEmprestimoDeleteArgs<ExtArgs>>
    ): Prisma__VeiculoEmprestimoClient<$Result.GetResult<Prisma.$VeiculoEmprestimoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VeiculoEmprestimo.
     * @param {VeiculoEmprestimoUpdateArgs} args - Arguments to update one VeiculoEmprestimo.
     * @example
     * // Update one VeiculoEmprestimo
     * const veiculoEmprestimo = await prisma.veiculoEmprestimo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VeiculoEmprestimoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoEmprestimoUpdateArgs<ExtArgs>>
    ): Prisma__VeiculoEmprestimoClient<$Result.GetResult<Prisma.$VeiculoEmprestimoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VeiculoEmprestimos.
     * @param {VeiculoEmprestimoDeleteManyArgs} args - Arguments to filter VeiculoEmprestimos to delete.
     * @example
     * // Delete a few VeiculoEmprestimos
     * const { count } = await prisma.veiculoEmprestimo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VeiculoEmprestimoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VeiculoEmprestimoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VeiculoEmprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoEmprestimoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VeiculoEmprestimos
     * const veiculoEmprestimo = await prisma.veiculoEmprestimo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VeiculoEmprestimoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoEmprestimoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VeiculoEmprestimo.
     * @param {VeiculoEmprestimoUpsertArgs} args - Arguments to update or create a VeiculoEmprestimo.
     * @example
     * // Update or create a VeiculoEmprestimo
     * const veiculoEmprestimo = await prisma.veiculoEmprestimo.upsert({
     *   create: {
     *     // ... data to create a VeiculoEmprestimo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VeiculoEmprestimo we want to update
     *   }
     * })
    **/
    upsert<T extends VeiculoEmprestimoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VeiculoEmprestimoUpsertArgs<ExtArgs>>
    ): Prisma__VeiculoEmprestimoClient<$Result.GetResult<Prisma.$VeiculoEmprestimoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VeiculoEmprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoEmprestimoCountArgs} args - Arguments to filter VeiculoEmprestimos to count.
     * @example
     * // Count the number of VeiculoEmprestimos
     * const count = await prisma.veiculoEmprestimo.count({
     *   where: {
     *     // ... the filter for the VeiculoEmprestimos we want to count
     *   }
     * })
    **/
    count<T extends VeiculoEmprestimoCountArgs>(
      args?: Subset<T, VeiculoEmprestimoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoEmprestimoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VeiculoEmprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoEmprestimoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeiculoEmprestimoAggregateArgs>(args: Subset<T, VeiculoEmprestimoAggregateArgs>): Prisma.PrismaPromise<GetVeiculoEmprestimoAggregateType<T>>

    /**
     * Group by VeiculoEmprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoEmprestimoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VeiculoEmprestimoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoEmprestimoGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoEmprestimoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VeiculoEmprestimoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoEmprestimoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VeiculoEmprestimo model
   */
  readonly fields: VeiculoEmprestimoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VeiculoEmprestimo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoEmprestimoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    emprestimos<T extends VeiculoEmprestimo$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, VeiculoEmprestimo$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VeiculoEmprestimo model
   */ 
  interface VeiculoEmprestimoFieldRefs {
    readonly id: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly placa: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly patrimonio: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly prefixo: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly marcaModelo: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly ano: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly cor: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly pertence: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly observacoes: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly detentorAtual: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly unidade: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly motivo: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly informacaoAdicional: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly tipoTracao: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly cambio: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly licenciamento: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly apresentacao: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly estribo: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly radio: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly grafismo: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly monocela: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly ultimaRevisao: FieldRef<"VeiculoEmprestimo", 'DateTime'>
    readonly localizacao: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly statusUso: FieldRef<"VeiculoEmprestimo", 'String'>
    readonly ativo: FieldRef<"VeiculoEmprestimo", 'Boolean'>
    readonly criadoEm: FieldRef<"VeiculoEmprestimo", 'DateTime'>
    readonly atualizadoEm: FieldRef<"VeiculoEmprestimo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VeiculoEmprestimo findUnique
   */
  export type VeiculoEmprestimoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimo
     */
    select?: VeiculoEmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoEmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoEmprestimo to fetch.
     */
    where: VeiculoEmprestimoWhereUniqueInput
  }

  /**
   * VeiculoEmprestimo findUniqueOrThrow
   */
  export type VeiculoEmprestimoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimo
     */
    select?: VeiculoEmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoEmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoEmprestimo to fetch.
     */
    where: VeiculoEmprestimoWhereUniqueInput
  }

  /**
   * VeiculoEmprestimo findFirst
   */
  export type VeiculoEmprestimoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimo
     */
    select?: VeiculoEmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoEmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoEmprestimo to fetch.
     */
    where?: VeiculoEmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoEmprestimos to fetch.
     */
    orderBy?: VeiculoEmprestimoOrderByWithRelationInput | VeiculoEmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeiculoEmprestimos.
     */
    cursor?: VeiculoEmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoEmprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoEmprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeiculoEmprestimos.
     */
    distinct?: VeiculoEmprestimoScalarFieldEnum | VeiculoEmprestimoScalarFieldEnum[]
  }

  /**
   * VeiculoEmprestimo findFirstOrThrow
   */
  export type VeiculoEmprestimoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimo
     */
    select?: VeiculoEmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoEmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoEmprestimo to fetch.
     */
    where?: VeiculoEmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoEmprestimos to fetch.
     */
    orderBy?: VeiculoEmprestimoOrderByWithRelationInput | VeiculoEmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeiculoEmprestimos.
     */
    cursor?: VeiculoEmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoEmprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoEmprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeiculoEmprestimos.
     */
    distinct?: VeiculoEmprestimoScalarFieldEnum | VeiculoEmprestimoScalarFieldEnum[]
  }

  /**
   * VeiculoEmprestimo findMany
   */
  export type VeiculoEmprestimoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimo
     */
    select?: VeiculoEmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoEmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoEmprestimos to fetch.
     */
    where?: VeiculoEmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoEmprestimos to fetch.
     */
    orderBy?: VeiculoEmprestimoOrderByWithRelationInput | VeiculoEmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VeiculoEmprestimos.
     */
    cursor?: VeiculoEmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoEmprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoEmprestimos.
     */
    skip?: number
    distinct?: VeiculoEmprestimoScalarFieldEnum | VeiculoEmprestimoScalarFieldEnum[]
  }

  /**
   * VeiculoEmprestimo create
   */
  export type VeiculoEmprestimoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimo
     */
    select?: VeiculoEmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoEmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to create a VeiculoEmprestimo.
     */
    data: XOR<VeiculoEmprestimoCreateInput, VeiculoEmprestimoUncheckedCreateInput>
  }

  /**
   * VeiculoEmprestimo createMany
   */
  export type VeiculoEmprestimoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VeiculoEmprestimos.
     */
    data: VeiculoEmprestimoCreateManyInput | VeiculoEmprestimoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VeiculoEmprestimo update
   */
  export type VeiculoEmprestimoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimo
     */
    select?: VeiculoEmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoEmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to update a VeiculoEmprestimo.
     */
    data: XOR<VeiculoEmprestimoUpdateInput, VeiculoEmprestimoUncheckedUpdateInput>
    /**
     * Choose, which VeiculoEmprestimo to update.
     */
    where: VeiculoEmprestimoWhereUniqueInput
  }

  /**
   * VeiculoEmprestimo updateMany
   */
  export type VeiculoEmprestimoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VeiculoEmprestimos.
     */
    data: XOR<VeiculoEmprestimoUpdateManyMutationInput, VeiculoEmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which VeiculoEmprestimos to update
     */
    where?: VeiculoEmprestimoWhereInput
  }

  /**
   * VeiculoEmprestimo upsert
   */
  export type VeiculoEmprestimoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimo
     */
    select?: VeiculoEmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoEmprestimoInclude<ExtArgs> | null
    /**
     * The filter to search for the VeiculoEmprestimo to update in case it exists.
     */
    where: VeiculoEmprestimoWhereUniqueInput
    /**
     * In case the VeiculoEmprestimo found by the `where` argument doesn't exist, create a new VeiculoEmprestimo with this data.
     */
    create: XOR<VeiculoEmprestimoCreateInput, VeiculoEmprestimoUncheckedCreateInput>
    /**
     * In case the VeiculoEmprestimo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoEmprestimoUpdateInput, VeiculoEmprestimoUncheckedUpdateInput>
  }

  /**
   * VeiculoEmprestimo delete
   */
  export type VeiculoEmprestimoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimo
     */
    select?: VeiculoEmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoEmprestimoInclude<ExtArgs> | null
    /**
     * Filter which VeiculoEmprestimo to delete.
     */
    where: VeiculoEmprestimoWhereUniqueInput
  }

  /**
   * VeiculoEmprestimo deleteMany
   */
  export type VeiculoEmprestimoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeiculoEmprestimos to delete
     */
    where?: VeiculoEmprestimoWhereInput
  }

  /**
   * VeiculoEmprestimo.emprestimos
   */
  export type VeiculoEmprestimo$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    cursor?: EmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * VeiculoEmprestimo without action
   */
  export type VeiculoEmprestimoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoEmprestimo
     */
    select?: VeiculoEmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoEmprestimoInclude<ExtArgs> | null
  }


  /**
   * Model Emprestimo
   */

  export type AggregateEmprestimo = {
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  export type EmprestimoAvgAggregateOutputType = {
    kmRetirada: number | null
    kmDevolucao: number | null
  }

  export type EmprestimoSumAggregateOutputType = {
    kmRetirada: number | null
    kmDevolucao: number | null
  }

  export type EmprestimoMinAggregateOutputType = {
    id: string | null
    veiculoId: string | null
    dataRetirada: Date | null
    quemRetirou: string | null
    kmRetirada: number | null
    dataDevolucao: Date | null
    quemEntregou: string | null
    kmDevolucao: number | null
    observacao: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type EmprestimoMaxAggregateOutputType = {
    id: string | null
    veiculoId: string | null
    dataRetirada: Date | null
    quemRetirou: string | null
    kmRetirada: number | null
    dataDevolucao: Date | null
    quemEntregou: string | null
    kmDevolucao: number | null
    observacao: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type EmprestimoCountAggregateOutputType = {
    id: number
    veiculoId: number
    dataRetirada: number
    quemRetirou: number
    kmRetirada: number
    dataDevolucao: number
    quemEntregou: number
    kmDevolucao: number
    observacao: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type EmprestimoAvgAggregateInputType = {
    kmRetirada?: true
    kmDevolucao?: true
  }

  export type EmprestimoSumAggregateInputType = {
    kmRetirada?: true
    kmDevolucao?: true
  }

  export type EmprestimoMinAggregateInputType = {
    id?: true
    veiculoId?: true
    dataRetirada?: true
    quemRetirou?: true
    kmRetirada?: true
    dataDevolucao?: true
    quemEntregou?: true
    kmDevolucao?: true
    observacao?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type EmprestimoMaxAggregateInputType = {
    id?: true
    veiculoId?: true
    dataRetirada?: true
    quemRetirou?: true
    kmRetirada?: true
    dataDevolucao?: true
    quemEntregou?: true
    kmDevolucao?: true
    observacao?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type EmprestimoCountAggregateInputType = {
    id?: true
    veiculoId?: true
    dataRetirada?: true
    quemRetirou?: true
    kmRetirada?: true
    dataDevolucao?: true
    quemEntregou?: true
    kmDevolucao?: true
    observacao?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type EmprestimoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestimo to aggregate.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emprestimos
    **/
    _count?: true | EmprestimoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmprestimoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmprestimoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmprestimoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmprestimoMaxAggregateInputType
  }

  export type GetEmprestimoAggregateType<T extends EmprestimoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprestimo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprestimo[P]>
      : GetScalarType<T[P], AggregateEmprestimo[P]>
  }




  export type EmprestimoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithAggregationInput | EmprestimoOrderByWithAggregationInput[]
    by: EmprestimoScalarFieldEnum[] | EmprestimoScalarFieldEnum
    having?: EmprestimoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmprestimoCountAggregateInputType | true
    _avg?: EmprestimoAvgAggregateInputType
    _sum?: EmprestimoSumAggregateInputType
    _min?: EmprestimoMinAggregateInputType
    _max?: EmprestimoMaxAggregateInputType
  }

  export type EmprestimoGroupByOutputType = {
    id: string
    veiculoId: string
    dataRetirada: Date
    quemRetirou: string
    kmRetirada: number | null
    dataDevolucao: Date | null
    quemEntregou: string | null
    kmDevolucao: number | null
    observacao: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  type GetEmprestimoGroupByPayload<T extends EmprestimoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmprestimoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmprestimoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
            : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
        }
      >
    >


  export type EmprestimoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    veiculoId?: boolean
    dataRetirada?: boolean
    quemRetirou?: boolean
    kmRetirada?: boolean
    dataDevolucao?: boolean
    quemEntregou?: boolean
    kmDevolucao?: boolean
    observacao?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    veiculo?: boolean | VeiculoEmprestimoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectScalar = {
    id?: boolean
    veiculoId?: boolean
    dataRetirada?: boolean
    quemRetirou?: boolean
    kmRetirada?: boolean
    dataDevolucao?: boolean
    quemEntregou?: boolean
    kmDevolucao?: boolean
    observacao?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }


  export type EmprestimoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | VeiculoEmprestimoDefaultArgs<ExtArgs>
  }


  export type $EmprestimoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emprestimo"
    objects: {
      veiculo: Prisma.$VeiculoEmprestimoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      veiculoId: string
      dataRetirada: Date
      quemRetirou: string
      kmRetirada: number | null
      dataDevolucao: Date | null
      quemEntregou: string | null
      kmDevolucao: number | null
      observacao: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["emprestimo"]>
    composites: {}
  }


  type EmprestimoGetPayload<S extends boolean | null | undefined | EmprestimoDefaultArgs> = $Result.GetResult<Prisma.$EmprestimoPayload, S>

  type EmprestimoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmprestimoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmprestimoCountAggregateInputType | true
    }

  export interface EmprestimoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emprestimo'], meta: { name: 'Emprestimo' } }
    /**
     * Find zero or one Emprestimo that matches the filter.
     * @param {EmprestimoFindUniqueArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmprestimoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmprestimoFindUniqueArgs<ExtArgs>>
    ): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Emprestimo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmprestimoFindUniqueOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmprestimoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmprestimoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Emprestimo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindFirstArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmprestimoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmprestimoFindFirstArgs<ExtArgs>>
    ): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Emprestimo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindFirstOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmprestimoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmprestimoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Emprestimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany()
     * 
     * // Get first 10 Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmprestimoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmprestimoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Emprestimo.
     * @param {EmprestimoCreateArgs} args - Arguments to create a Emprestimo.
     * @example
     * // Create one Emprestimo
     * const Emprestimo = await prisma.emprestimo.create({
     *   data: {
     *     // ... data to create a Emprestimo
     *   }
     * })
     * 
    **/
    create<T extends EmprestimoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmprestimoCreateArgs<ExtArgs>>
    ): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Emprestimos.
     * @param {EmprestimoCreateManyArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends EmprestimoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmprestimoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Emprestimo.
     * @param {EmprestimoDeleteArgs} args - Arguments to delete one Emprestimo.
     * @example
     * // Delete one Emprestimo
     * const Emprestimo = await prisma.emprestimo.delete({
     *   where: {
     *     // ... filter to delete one Emprestimo
     *   }
     * })
     * 
    **/
    delete<T extends EmprestimoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmprestimoDeleteArgs<ExtArgs>>
    ): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Emprestimo.
     * @param {EmprestimoUpdateArgs} args - Arguments to update one Emprestimo.
     * @example
     * // Update one Emprestimo
     * const emprestimo = await prisma.emprestimo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmprestimoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmprestimoUpdateArgs<ExtArgs>>
    ): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Emprestimos.
     * @param {EmprestimoDeleteManyArgs} args - Arguments to filter Emprestimos to delete.
     * @example
     * // Delete a few Emprestimos
     * const { count } = await prisma.emprestimo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmprestimoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmprestimoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmprestimoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmprestimoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Emprestimo.
     * @param {EmprestimoUpsertArgs} args - Arguments to update or create a Emprestimo.
     * @example
     * // Update or create a Emprestimo
     * const emprestimo = await prisma.emprestimo.upsert({
     *   create: {
     *     // ... data to create a Emprestimo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprestimo we want to update
     *   }
     * })
    **/
    upsert<T extends EmprestimoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmprestimoUpsertArgs<ExtArgs>>
    ): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoCountArgs} args - Arguments to filter Emprestimos to count.
     * @example
     * // Count the number of Emprestimos
     * const count = await prisma.emprestimo.count({
     *   where: {
     *     // ... the filter for the Emprestimos we want to count
     *   }
     * })
    **/
    count<T extends EmprestimoCountArgs>(
      args?: Subset<T, EmprestimoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmprestimoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmprestimoAggregateArgs>(args: Subset<T, EmprestimoAggregateArgs>): Prisma.PrismaPromise<GetEmprestimoAggregateType<T>>

    /**
     * Group by Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmprestimoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmprestimoGroupByArgs['orderBy'] }
        : { orderBy?: EmprestimoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmprestimoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmprestimoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emprestimo model
   */
  readonly fields: EmprestimoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emprestimo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmprestimoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    veiculo<T extends VeiculoEmprestimoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeiculoEmprestimoDefaultArgs<ExtArgs>>): Prisma__VeiculoEmprestimoClient<$Result.GetResult<Prisma.$VeiculoEmprestimoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Emprestimo model
   */ 
  interface EmprestimoFieldRefs {
    readonly id: FieldRef<"Emprestimo", 'String'>
    readonly veiculoId: FieldRef<"Emprestimo", 'String'>
    readonly dataRetirada: FieldRef<"Emprestimo", 'DateTime'>
    readonly quemRetirou: FieldRef<"Emprestimo", 'String'>
    readonly kmRetirada: FieldRef<"Emprestimo", 'Int'>
    readonly dataDevolucao: FieldRef<"Emprestimo", 'DateTime'>
    readonly quemEntregou: FieldRef<"Emprestimo", 'String'>
    readonly kmDevolucao: FieldRef<"Emprestimo", 'Int'>
    readonly observacao: FieldRef<"Emprestimo", 'String'>
    readonly criadoEm: FieldRef<"Emprestimo", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Emprestimo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Emprestimo findUnique
   */
  export type EmprestimoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo findUniqueOrThrow
   */
  export type EmprestimoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo findFirst
   */
  export type EmprestimoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo findFirstOrThrow
   */
  export type EmprestimoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo findMany
   */
  export type EmprestimoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimos to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo create
   */
  export type EmprestimoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to create a Emprestimo.
     */
    data: XOR<EmprestimoCreateInput, EmprestimoUncheckedCreateInput>
  }

  /**
   * Emprestimo createMany
   */
  export type EmprestimoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emprestimos.
     */
    data: EmprestimoCreateManyInput | EmprestimoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emprestimo update
   */
  export type EmprestimoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to update a Emprestimo.
     */
    data: XOR<EmprestimoUpdateInput, EmprestimoUncheckedUpdateInput>
    /**
     * Choose, which Emprestimo to update.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo updateMany
   */
  export type EmprestimoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emprestimos.
     */
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestimos to update
     */
    where?: EmprestimoWhereInput
  }

  /**
   * Emprestimo upsert
   */
  export type EmprestimoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The filter to search for the Emprestimo to update in case it exists.
     */
    where: EmprestimoWhereUniqueInput
    /**
     * In case the Emprestimo found by the `where` argument doesn't exist, create a new Emprestimo with this data.
     */
    create: XOR<EmprestimoCreateInput, EmprestimoUncheckedCreateInput>
    /**
     * In case the Emprestimo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmprestimoUpdateInput, EmprestimoUncheckedUpdateInput>
  }

  /**
   * Emprestimo delete
   */
  export type EmprestimoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter which Emprestimo to delete.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo deleteMany
   */
  export type EmprestimoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestimos to delete
     */
    where?: EmprestimoWhereInput
  }

  /**
   * Emprestimo without action
   */
  export type EmprestimoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OpmScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    nome: 'nome',
    municipio: 'municipio',
    macroComando: 'macroComando'
  };

  export type OpmScalarFieldEnum = (typeof OpmScalarFieldEnum)[keyof typeof OpmScalarFieldEnum]


  export const QffMetaScalarFieldEnum: {
    id: 'id',
    opmCodigo: 'opmCodigo',
    grupo: 'grupo',
    programa: 'programa',
    quantidadeFixada: 'quantidadeFixada'
  };

  export type QffMetaScalarFieldEnum = (typeof QffMetaScalarFieldEnum)[keyof typeof QffMetaScalarFieldEnum]


  export const VeiculoScalarFieldEnum: {
    id: 'id',
    patrimonio: 'patrimonio',
    placa: 'placa',
    marcaModelo: 'marcaModelo',
    ano: 'ano',
    grupo: 'grupo',
    programa: 'programa',
    opmCodigo: 'opmCodigo',
    prefixo: 'prefixo',
    situacao: 'situacao',
    pertence: 'pertence',
    informacaoAdicional: 'informacaoAdicional',
    tipoTracao: 'tipoTracao',
    cambio: 'cambio',
    licenciamento: 'licenciamento',
    apresentacao: 'apresentacao',
    estribo: 'estribo',
    radio: 'radio',
    grafismo: 'grafismo',
    monocela: 'monocela',
    ultimaRevisao: 'ultimaRevisao',
    localizacao: 'localizacao'
  };

  export type VeiculoScalarFieldEnum = (typeof VeiculoScalarFieldEnum)[keyof typeof VeiculoScalarFieldEnum]


  export const VeiculoAjusteScalarFieldEnum: {
    id: 'id',
    patrimonio: 'patrimonio',
    placa: 'placa',
    marcaModelo: 'marcaModelo',
    ano: 'ano',
    grupo: 'grupo',
    programa: 'programa',
    opmCodigo: 'opmCodigo',
    prefixo: 'prefixo',
    situacao: 'situacao',
    pertence: 'pertence',
    informacaoAdicional: 'informacaoAdicional',
    tipoTracao: 'tipoTracao',
    cambio: 'cambio',
    licenciamento: 'licenciamento',
    apresentacao: 'apresentacao',
    estribo: 'estribo',
    radio: 'radio',
    grafismo: 'grafismo',
    monocela: 'monocela',
    ultimaRevisao: 'ultimaRevisao',
    localizacao: 'localizacao',
    alteradoEm: 'alteradoEm'
  };

  export type VeiculoAjusteScalarFieldEnum = (typeof VeiculoAjusteScalarFieldEnum)[keyof typeof VeiculoAjusteScalarFieldEnum]


  export const VeiculoSnapshotScalarFieldEnum: {
    id: 'id',
    mesReferencia: 'mesReferencia',
    patrimonio: 'patrimonio',
    placa: 'placa',
    marcaModelo: 'marcaModelo',
    ano: 'ano',
    grupo: 'grupo',
    programa: 'programa',
    opmCodigo: 'opmCodigo',
    prefixo: 'prefixo',
    situacao: 'situacao',
    pertence: 'pertence',
    informacaoAdicional: 'informacaoAdicional',
    tipoTracao: 'tipoTracao',
    cambio: 'cambio',
    licenciamento: 'licenciamento',
    apresentacao: 'apresentacao',
    estribo: 'estribo',
    radio: 'radio',
    grafismo: 'grafismo',
    monocela: 'monocela',
    ultimaRevisao: 'ultimaRevisao',
    localizacao: 'localizacao'
  };

  export type VeiculoSnapshotScalarFieldEnum = (typeof VeiculoSnapshotScalarFieldEnum)[keyof typeof VeiculoSnapshotScalarFieldEnum]


  export const VeiculoEmprestimoScalarFieldEnum: {
    id: 'id',
    placa: 'placa',
    patrimonio: 'patrimonio',
    prefixo: 'prefixo',
    marcaModelo: 'marcaModelo',
    ano: 'ano',
    cor: 'cor',
    pertence: 'pertence',
    observacoes: 'observacoes',
    detentorAtual: 'detentorAtual',
    unidade: 'unidade',
    motivo: 'motivo',
    informacaoAdicional: 'informacaoAdicional',
    tipoTracao: 'tipoTracao',
    cambio: 'cambio',
    licenciamento: 'licenciamento',
    apresentacao: 'apresentacao',
    estribo: 'estribo',
    radio: 'radio',
    grafismo: 'grafismo',
    monocela: 'monocela',
    ultimaRevisao: 'ultimaRevisao',
    localizacao: 'localizacao',
    statusUso: 'statusUso',
    ativo: 'ativo',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type VeiculoEmprestimoScalarFieldEnum = (typeof VeiculoEmprestimoScalarFieldEnum)[keyof typeof VeiculoEmprestimoScalarFieldEnum]


  export const EmprestimoScalarFieldEnum: {
    id: 'id',
    veiculoId: 'veiculoId',
    dataRetirada: 'dataRetirada',
    quemRetirou: 'quemRetirou',
    kmRetirada: 'kmRetirada',
    dataDevolucao: 'dataDevolucao',
    quemEntregou: 'quemEntregou',
    kmDevolucao: 'kmDevolucao',
    observacao: 'observacao',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type EmprestimoScalarFieldEnum = (typeof EmprestimoScalarFieldEnum)[keyof typeof EmprestimoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type OpmWhereInput = {
    AND?: OpmWhereInput | OpmWhereInput[]
    OR?: OpmWhereInput[]
    NOT?: OpmWhereInput | OpmWhereInput[]
    id?: StringFilter<"Opm"> | string
    codigo?: StringFilter<"Opm"> | string
    nome?: StringFilter<"Opm"> | string
    municipio?: StringNullableFilter<"Opm"> | string | null
    macroComando?: StringNullableFilter<"Opm"> | string | null
    metas?: QffMetaListRelationFilter
    veiculos?: VeiculoListRelationFilter
    veiculosAjuste?: VeiculoAjusteListRelationFilter
    veiculosSnapshot?: VeiculoSnapshotListRelationFilter
  }

  export type OpmOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    nome?: SortOrder
    municipio?: SortOrderInput | SortOrder
    macroComando?: SortOrderInput | SortOrder
    metas?: QffMetaOrderByRelationAggregateInput
    veiculos?: VeiculoOrderByRelationAggregateInput
    veiculosAjuste?: VeiculoAjusteOrderByRelationAggregateInput
    veiculosSnapshot?: VeiculoSnapshotOrderByRelationAggregateInput
  }

  export type OpmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: OpmWhereInput | OpmWhereInput[]
    OR?: OpmWhereInput[]
    NOT?: OpmWhereInput | OpmWhereInput[]
    nome?: StringFilter<"Opm"> | string
    municipio?: StringNullableFilter<"Opm"> | string | null
    macroComando?: StringNullableFilter<"Opm"> | string | null
    metas?: QffMetaListRelationFilter
    veiculos?: VeiculoListRelationFilter
    veiculosAjuste?: VeiculoAjusteListRelationFilter
    veiculosSnapshot?: VeiculoSnapshotListRelationFilter
  }, "id" | "codigo">

  export type OpmOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    nome?: SortOrder
    municipio?: SortOrderInput | SortOrder
    macroComando?: SortOrderInput | SortOrder
    _count?: OpmCountOrderByAggregateInput
    _max?: OpmMaxOrderByAggregateInput
    _min?: OpmMinOrderByAggregateInput
  }

  export type OpmScalarWhereWithAggregatesInput = {
    AND?: OpmScalarWhereWithAggregatesInput | OpmScalarWhereWithAggregatesInput[]
    OR?: OpmScalarWhereWithAggregatesInput[]
    NOT?: OpmScalarWhereWithAggregatesInput | OpmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Opm"> | string
    codigo?: StringWithAggregatesFilter<"Opm"> | string
    nome?: StringWithAggregatesFilter<"Opm"> | string
    municipio?: StringNullableWithAggregatesFilter<"Opm"> | string | null
    macroComando?: StringNullableWithAggregatesFilter<"Opm"> | string | null
  }

  export type QffMetaWhereInput = {
    AND?: QffMetaWhereInput | QffMetaWhereInput[]
    OR?: QffMetaWhereInput[]
    NOT?: QffMetaWhereInput | QffMetaWhereInput[]
    id?: StringFilter<"QffMeta"> | string
    opmCodigo?: StringFilter<"QffMeta"> | string
    grupo?: StringFilter<"QffMeta"> | string
    programa?: StringFilter<"QffMeta"> | string
    quantidadeFixada?: IntFilter<"QffMeta"> | number
    opm?: XOR<OpmRelationFilter, OpmWhereInput>
  }

  export type QffMetaOrderByWithRelationInput = {
    id?: SortOrder
    opmCodigo?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    quantidadeFixada?: SortOrder
    opm?: OpmOrderByWithRelationInput
  }

  export type QffMetaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    opmCodigo_grupo_programa?: QffMetaOpmCodigoGrupoProgramaCompoundUniqueInput
    AND?: QffMetaWhereInput | QffMetaWhereInput[]
    OR?: QffMetaWhereInput[]
    NOT?: QffMetaWhereInput | QffMetaWhereInput[]
    opmCodigo?: StringFilter<"QffMeta"> | string
    grupo?: StringFilter<"QffMeta"> | string
    programa?: StringFilter<"QffMeta"> | string
    quantidadeFixada?: IntFilter<"QffMeta"> | number
    opm?: XOR<OpmRelationFilter, OpmWhereInput>
  }, "id" | "opmCodigo_grupo_programa">

  export type QffMetaOrderByWithAggregationInput = {
    id?: SortOrder
    opmCodigo?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    quantidadeFixada?: SortOrder
    _count?: QffMetaCountOrderByAggregateInput
    _avg?: QffMetaAvgOrderByAggregateInput
    _max?: QffMetaMaxOrderByAggregateInput
    _min?: QffMetaMinOrderByAggregateInput
    _sum?: QffMetaSumOrderByAggregateInput
  }

  export type QffMetaScalarWhereWithAggregatesInput = {
    AND?: QffMetaScalarWhereWithAggregatesInput | QffMetaScalarWhereWithAggregatesInput[]
    OR?: QffMetaScalarWhereWithAggregatesInput[]
    NOT?: QffMetaScalarWhereWithAggregatesInput | QffMetaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QffMeta"> | string
    opmCodigo?: StringWithAggregatesFilter<"QffMeta"> | string
    grupo?: StringWithAggregatesFilter<"QffMeta"> | string
    programa?: StringWithAggregatesFilter<"QffMeta"> | string
    quantidadeFixada?: IntWithAggregatesFilter<"QffMeta"> | number
  }

  export type VeiculoWhereInput = {
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    id?: StringFilter<"Veiculo"> | string
    patrimonio?: StringFilter<"Veiculo"> | string
    placa?: StringFilter<"Veiculo"> | string
    marcaModelo?: StringFilter<"Veiculo"> | string
    ano?: IntFilter<"Veiculo"> | number
    grupo?: StringFilter<"Veiculo"> | string
    programa?: StringFilter<"Veiculo"> | string
    opmCodigo?: StringFilter<"Veiculo"> | string
    prefixo?: StringNullableFilter<"Veiculo"> | string | null
    situacao?: StringNullableFilter<"Veiculo"> | string | null
    pertence?: StringNullableFilter<"Veiculo"> | string | null
    informacaoAdicional?: StringNullableFilter<"Veiculo"> | string | null
    tipoTracao?: StringNullableFilter<"Veiculo"> | string | null
    cambio?: StringNullableFilter<"Veiculo"> | string | null
    licenciamento?: StringNullableFilter<"Veiculo"> | string | null
    apresentacao?: StringNullableFilter<"Veiculo"> | string | null
    estribo?: StringNullableFilter<"Veiculo"> | string | null
    radio?: StringNullableFilter<"Veiculo"> | string | null
    grafismo?: StringNullableFilter<"Veiculo"> | string | null
    monocela?: StringNullableFilter<"Veiculo"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"Veiculo"> | Date | string | null
    localizacao?: StringNullableFilter<"Veiculo"> | string | null
    opm?: XOR<OpmRelationFilter, OpmWhereInput>
  }

  export type VeiculoOrderByWithRelationInput = {
    id?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrderInput | SortOrder
    situacao?: SortOrderInput | SortOrder
    pertence?: SortOrderInput | SortOrder
    informacaoAdicional?: SortOrderInput | SortOrder
    tipoTracao?: SortOrderInput | SortOrder
    cambio?: SortOrderInput | SortOrder
    licenciamento?: SortOrderInput | SortOrder
    apresentacao?: SortOrderInput | SortOrder
    estribo?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    grafismo?: SortOrderInput | SortOrder
    monocela?: SortOrderInput | SortOrder
    ultimaRevisao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    opm?: OpmOrderByWithRelationInput
  }

  export type VeiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patrimonio?: string
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    placa?: StringFilter<"Veiculo"> | string
    marcaModelo?: StringFilter<"Veiculo"> | string
    ano?: IntFilter<"Veiculo"> | number
    grupo?: StringFilter<"Veiculo"> | string
    programa?: StringFilter<"Veiculo"> | string
    opmCodigo?: StringFilter<"Veiculo"> | string
    prefixo?: StringNullableFilter<"Veiculo"> | string | null
    situacao?: StringNullableFilter<"Veiculo"> | string | null
    pertence?: StringNullableFilter<"Veiculo"> | string | null
    informacaoAdicional?: StringNullableFilter<"Veiculo"> | string | null
    tipoTracao?: StringNullableFilter<"Veiculo"> | string | null
    cambio?: StringNullableFilter<"Veiculo"> | string | null
    licenciamento?: StringNullableFilter<"Veiculo"> | string | null
    apresentacao?: StringNullableFilter<"Veiculo"> | string | null
    estribo?: StringNullableFilter<"Veiculo"> | string | null
    radio?: StringNullableFilter<"Veiculo"> | string | null
    grafismo?: StringNullableFilter<"Veiculo"> | string | null
    monocela?: StringNullableFilter<"Veiculo"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"Veiculo"> | Date | string | null
    localizacao?: StringNullableFilter<"Veiculo"> | string | null
    opm?: XOR<OpmRelationFilter, OpmWhereInput>
  }, "id" | "patrimonio">

  export type VeiculoOrderByWithAggregationInput = {
    id?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrderInput | SortOrder
    situacao?: SortOrderInput | SortOrder
    pertence?: SortOrderInput | SortOrder
    informacaoAdicional?: SortOrderInput | SortOrder
    tipoTracao?: SortOrderInput | SortOrder
    cambio?: SortOrderInput | SortOrder
    licenciamento?: SortOrderInput | SortOrder
    apresentacao?: SortOrderInput | SortOrder
    estribo?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    grafismo?: SortOrderInput | SortOrder
    monocela?: SortOrderInput | SortOrder
    ultimaRevisao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    _count?: VeiculoCountOrderByAggregateInput
    _avg?: VeiculoAvgOrderByAggregateInput
    _max?: VeiculoMaxOrderByAggregateInput
    _min?: VeiculoMinOrderByAggregateInput
    _sum?: VeiculoSumOrderByAggregateInput
  }

  export type VeiculoScalarWhereWithAggregatesInput = {
    AND?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    OR?: VeiculoScalarWhereWithAggregatesInput[]
    NOT?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Veiculo"> | string
    patrimonio?: StringWithAggregatesFilter<"Veiculo"> | string
    placa?: StringWithAggregatesFilter<"Veiculo"> | string
    marcaModelo?: StringWithAggregatesFilter<"Veiculo"> | string
    ano?: IntWithAggregatesFilter<"Veiculo"> | number
    grupo?: StringWithAggregatesFilter<"Veiculo"> | string
    programa?: StringWithAggregatesFilter<"Veiculo"> | string
    opmCodigo?: StringWithAggregatesFilter<"Veiculo"> | string
    prefixo?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    situacao?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    pertence?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    informacaoAdicional?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    tipoTracao?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    cambio?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    licenciamento?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    apresentacao?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    estribo?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    radio?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    grafismo?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    monocela?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
    ultimaRevisao?: DateTimeNullableWithAggregatesFilter<"Veiculo"> | Date | string | null
    localizacao?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
  }

  export type VeiculoAjusteWhereInput = {
    AND?: VeiculoAjusteWhereInput | VeiculoAjusteWhereInput[]
    OR?: VeiculoAjusteWhereInput[]
    NOT?: VeiculoAjusteWhereInput | VeiculoAjusteWhereInput[]
    id?: StringFilter<"VeiculoAjuste"> | string
    patrimonio?: StringFilter<"VeiculoAjuste"> | string
    placa?: StringFilter<"VeiculoAjuste"> | string
    marcaModelo?: StringFilter<"VeiculoAjuste"> | string
    ano?: IntFilter<"VeiculoAjuste"> | number
    grupo?: StringFilter<"VeiculoAjuste"> | string
    programa?: StringFilter<"VeiculoAjuste"> | string
    opmCodigo?: StringFilter<"VeiculoAjuste"> | string
    prefixo?: StringNullableFilter<"VeiculoAjuste"> | string | null
    situacao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    pertence?: StringNullableFilter<"VeiculoAjuste"> | string | null
    informacaoAdicional?: StringNullableFilter<"VeiculoAjuste"> | string | null
    tipoTracao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    cambio?: StringNullableFilter<"VeiculoAjuste"> | string | null
    licenciamento?: StringNullableFilter<"VeiculoAjuste"> | string | null
    apresentacao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    estribo?: StringNullableFilter<"VeiculoAjuste"> | string | null
    radio?: StringNullableFilter<"VeiculoAjuste"> | string | null
    grafismo?: StringNullableFilter<"VeiculoAjuste"> | string | null
    monocela?: StringNullableFilter<"VeiculoAjuste"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"VeiculoAjuste"> | Date | string | null
    localizacao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    alteradoEm?: DateTimeNullableFilter<"VeiculoAjuste"> | Date | string | null
    opm?: XOR<OpmRelationFilter, OpmWhereInput>
  }

  export type VeiculoAjusteOrderByWithRelationInput = {
    id?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrderInput | SortOrder
    situacao?: SortOrderInput | SortOrder
    pertence?: SortOrderInput | SortOrder
    informacaoAdicional?: SortOrderInput | SortOrder
    tipoTracao?: SortOrderInput | SortOrder
    cambio?: SortOrderInput | SortOrder
    licenciamento?: SortOrderInput | SortOrder
    apresentacao?: SortOrderInput | SortOrder
    estribo?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    grafismo?: SortOrderInput | SortOrder
    monocela?: SortOrderInput | SortOrder
    ultimaRevisao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    alteradoEm?: SortOrderInput | SortOrder
    opm?: OpmOrderByWithRelationInput
  }

  export type VeiculoAjusteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patrimonio?: string
    AND?: VeiculoAjusteWhereInput | VeiculoAjusteWhereInput[]
    OR?: VeiculoAjusteWhereInput[]
    NOT?: VeiculoAjusteWhereInput | VeiculoAjusteWhereInput[]
    placa?: StringFilter<"VeiculoAjuste"> | string
    marcaModelo?: StringFilter<"VeiculoAjuste"> | string
    ano?: IntFilter<"VeiculoAjuste"> | number
    grupo?: StringFilter<"VeiculoAjuste"> | string
    programa?: StringFilter<"VeiculoAjuste"> | string
    opmCodigo?: StringFilter<"VeiculoAjuste"> | string
    prefixo?: StringNullableFilter<"VeiculoAjuste"> | string | null
    situacao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    pertence?: StringNullableFilter<"VeiculoAjuste"> | string | null
    informacaoAdicional?: StringNullableFilter<"VeiculoAjuste"> | string | null
    tipoTracao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    cambio?: StringNullableFilter<"VeiculoAjuste"> | string | null
    licenciamento?: StringNullableFilter<"VeiculoAjuste"> | string | null
    apresentacao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    estribo?: StringNullableFilter<"VeiculoAjuste"> | string | null
    radio?: StringNullableFilter<"VeiculoAjuste"> | string | null
    grafismo?: StringNullableFilter<"VeiculoAjuste"> | string | null
    monocela?: StringNullableFilter<"VeiculoAjuste"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"VeiculoAjuste"> | Date | string | null
    localizacao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    alteradoEm?: DateTimeNullableFilter<"VeiculoAjuste"> | Date | string | null
    opm?: XOR<OpmRelationFilter, OpmWhereInput>
  }, "id" | "patrimonio">

  export type VeiculoAjusteOrderByWithAggregationInput = {
    id?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrderInput | SortOrder
    situacao?: SortOrderInput | SortOrder
    pertence?: SortOrderInput | SortOrder
    informacaoAdicional?: SortOrderInput | SortOrder
    tipoTracao?: SortOrderInput | SortOrder
    cambio?: SortOrderInput | SortOrder
    licenciamento?: SortOrderInput | SortOrder
    apresentacao?: SortOrderInput | SortOrder
    estribo?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    grafismo?: SortOrderInput | SortOrder
    monocela?: SortOrderInput | SortOrder
    ultimaRevisao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    alteradoEm?: SortOrderInput | SortOrder
    _count?: VeiculoAjusteCountOrderByAggregateInput
    _avg?: VeiculoAjusteAvgOrderByAggregateInput
    _max?: VeiculoAjusteMaxOrderByAggregateInput
    _min?: VeiculoAjusteMinOrderByAggregateInput
    _sum?: VeiculoAjusteSumOrderByAggregateInput
  }

  export type VeiculoAjusteScalarWhereWithAggregatesInput = {
    AND?: VeiculoAjusteScalarWhereWithAggregatesInput | VeiculoAjusteScalarWhereWithAggregatesInput[]
    OR?: VeiculoAjusteScalarWhereWithAggregatesInput[]
    NOT?: VeiculoAjusteScalarWhereWithAggregatesInput | VeiculoAjusteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VeiculoAjuste"> | string
    patrimonio?: StringWithAggregatesFilter<"VeiculoAjuste"> | string
    placa?: StringWithAggregatesFilter<"VeiculoAjuste"> | string
    marcaModelo?: StringWithAggregatesFilter<"VeiculoAjuste"> | string
    ano?: IntWithAggregatesFilter<"VeiculoAjuste"> | number
    grupo?: StringWithAggregatesFilter<"VeiculoAjuste"> | string
    programa?: StringWithAggregatesFilter<"VeiculoAjuste"> | string
    opmCodigo?: StringWithAggregatesFilter<"VeiculoAjuste"> | string
    prefixo?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    situacao?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    pertence?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    informacaoAdicional?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    tipoTracao?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    cambio?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    licenciamento?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    apresentacao?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    estribo?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    radio?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    grafismo?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    monocela?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    ultimaRevisao?: DateTimeNullableWithAggregatesFilter<"VeiculoAjuste"> | Date | string | null
    localizacao?: StringNullableWithAggregatesFilter<"VeiculoAjuste"> | string | null
    alteradoEm?: DateTimeNullableWithAggregatesFilter<"VeiculoAjuste"> | Date | string | null
  }

  export type VeiculoSnapshotWhereInput = {
    AND?: VeiculoSnapshotWhereInput | VeiculoSnapshotWhereInput[]
    OR?: VeiculoSnapshotWhereInput[]
    NOT?: VeiculoSnapshotWhereInput | VeiculoSnapshotWhereInput[]
    id?: StringFilter<"VeiculoSnapshot"> | string
    mesReferencia?: StringFilter<"VeiculoSnapshot"> | string
    patrimonio?: StringFilter<"VeiculoSnapshot"> | string
    placa?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    marcaModelo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    ano?: IntNullableFilter<"VeiculoSnapshot"> | number | null
    grupo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    programa?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    opmCodigo?: StringFilter<"VeiculoSnapshot"> | string
    prefixo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    situacao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    pertence?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    informacaoAdicional?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    tipoTracao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    cambio?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    licenciamento?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    apresentacao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    estribo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    radio?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    grafismo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    monocela?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"VeiculoSnapshot"> | Date | string | null
    localizacao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    opm?: XOR<OpmRelationFilter, OpmWhereInput>
  }

  export type VeiculoSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    mesReferencia?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrderInput | SortOrder
    marcaModelo?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    grupo?: SortOrderInput | SortOrder
    programa?: SortOrderInput | SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrderInput | SortOrder
    situacao?: SortOrderInput | SortOrder
    pertence?: SortOrderInput | SortOrder
    informacaoAdicional?: SortOrderInput | SortOrder
    tipoTracao?: SortOrderInput | SortOrder
    cambio?: SortOrderInput | SortOrder
    licenciamento?: SortOrderInput | SortOrder
    apresentacao?: SortOrderInput | SortOrder
    estribo?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    grafismo?: SortOrderInput | SortOrder
    monocela?: SortOrderInput | SortOrder
    ultimaRevisao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    opm?: OpmOrderByWithRelationInput
  }

  export type VeiculoSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mesReferencia_patrimonio?: VeiculoSnapshotMesReferenciaPatrimonioCompoundUniqueInput
    AND?: VeiculoSnapshotWhereInput | VeiculoSnapshotWhereInput[]
    OR?: VeiculoSnapshotWhereInput[]
    NOT?: VeiculoSnapshotWhereInput | VeiculoSnapshotWhereInput[]
    mesReferencia?: StringFilter<"VeiculoSnapshot"> | string
    patrimonio?: StringFilter<"VeiculoSnapshot"> | string
    placa?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    marcaModelo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    ano?: IntNullableFilter<"VeiculoSnapshot"> | number | null
    grupo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    programa?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    opmCodigo?: StringFilter<"VeiculoSnapshot"> | string
    prefixo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    situacao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    pertence?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    informacaoAdicional?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    tipoTracao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    cambio?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    licenciamento?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    apresentacao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    estribo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    radio?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    grafismo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    monocela?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"VeiculoSnapshot"> | Date | string | null
    localizacao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    opm?: XOR<OpmRelationFilter, OpmWhereInput>
  }, "id" | "mesReferencia_patrimonio">

  export type VeiculoSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    mesReferencia?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrderInput | SortOrder
    marcaModelo?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    grupo?: SortOrderInput | SortOrder
    programa?: SortOrderInput | SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrderInput | SortOrder
    situacao?: SortOrderInput | SortOrder
    pertence?: SortOrderInput | SortOrder
    informacaoAdicional?: SortOrderInput | SortOrder
    tipoTracao?: SortOrderInput | SortOrder
    cambio?: SortOrderInput | SortOrder
    licenciamento?: SortOrderInput | SortOrder
    apresentacao?: SortOrderInput | SortOrder
    estribo?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    grafismo?: SortOrderInput | SortOrder
    monocela?: SortOrderInput | SortOrder
    ultimaRevisao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    _count?: VeiculoSnapshotCountOrderByAggregateInput
    _avg?: VeiculoSnapshotAvgOrderByAggregateInput
    _max?: VeiculoSnapshotMaxOrderByAggregateInput
    _min?: VeiculoSnapshotMinOrderByAggregateInput
    _sum?: VeiculoSnapshotSumOrderByAggregateInput
  }

  export type VeiculoSnapshotScalarWhereWithAggregatesInput = {
    AND?: VeiculoSnapshotScalarWhereWithAggregatesInput | VeiculoSnapshotScalarWhereWithAggregatesInput[]
    OR?: VeiculoSnapshotScalarWhereWithAggregatesInput[]
    NOT?: VeiculoSnapshotScalarWhereWithAggregatesInput | VeiculoSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VeiculoSnapshot"> | string
    mesReferencia?: StringWithAggregatesFilter<"VeiculoSnapshot"> | string
    patrimonio?: StringWithAggregatesFilter<"VeiculoSnapshot"> | string
    placa?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    marcaModelo?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    ano?: IntNullableWithAggregatesFilter<"VeiculoSnapshot"> | number | null
    grupo?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    programa?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    opmCodigo?: StringWithAggregatesFilter<"VeiculoSnapshot"> | string
    prefixo?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    situacao?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    pertence?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    informacaoAdicional?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    tipoTracao?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    cambio?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    licenciamento?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    apresentacao?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    estribo?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    radio?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    grafismo?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    monocela?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
    ultimaRevisao?: DateTimeNullableWithAggregatesFilter<"VeiculoSnapshot"> | Date | string | null
    localizacao?: StringNullableWithAggregatesFilter<"VeiculoSnapshot"> | string | null
  }

  export type VeiculoEmprestimoWhereInput = {
    AND?: VeiculoEmprestimoWhereInput | VeiculoEmprestimoWhereInput[]
    OR?: VeiculoEmprestimoWhereInput[]
    NOT?: VeiculoEmprestimoWhereInput | VeiculoEmprestimoWhereInput[]
    id?: StringFilter<"VeiculoEmprestimo"> | string
    placa?: StringFilter<"VeiculoEmprestimo"> | string
    patrimonio?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    prefixo?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    marcaModelo?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    ano?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    cor?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    pertence?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    observacoes?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    detentorAtual?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    unidade?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    motivo?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    informacaoAdicional?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    tipoTracao?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    cambio?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    licenciamento?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    apresentacao?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    estribo?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    radio?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    grafismo?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    monocela?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"VeiculoEmprestimo"> | Date | string | null
    localizacao?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    statusUso?: StringFilter<"VeiculoEmprestimo"> | string
    ativo?: BoolFilter<"VeiculoEmprestimo"> | boolean
    criadoEm?: DateTimeFilter<"VeiculoEmprestimo"> | Date | string
    atualizadoEm?: DateTimeFilter<"VeiculoEmprestimo"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
  }

  export type VeiculoEmprestimoOrderByWithRelationInput = {
    id?: SortOrder
    placa?: SortOrder
    patrimonio?: SortOrderInput | SortOrder
    prefixo?: SortOrderInput | SortOrder
    marcaModelo?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    cor?: SortOrderInput | SortOrder
    pertence?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    detentorAtual?: SortOrderInput | SortOrder
    unidade?: SortOrderInput | SortOrder
    motivo?: SortOrderInput | SortOrder
    informacaoAdicional?: SortOrderInput | SortOrder
    tipoTracao?: SortOrderInput | SortOrder
    cambio?: SortOrderInput | SortOrder
    licenciamento?: SortOrderInput | SortOrder
    apresentacao?: SortOrderInput | SortOrder
    estribo?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    grafismo?: SortOrderInput | SortOrder
    monocela?: SortOrderInput | SortOrder
    ultimaRevisao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    statusUso?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    emprestimos?: EmprestimoOrderByRelationAggregateInput
  }

  export type VeiculoEmprestimoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    placa?: string
    AND?: VeiculoEmprestimoWhereInput | VeiculoEmprestimoWhereInput[]
    OR?: VeiculoEmprestimoWhereInput[]
    NOT?: VeiculoEmprestimoWhereInput | VeiculoEmprestimoWhereInput[]
    patrimonio?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    prefixo?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    marcaModelo?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    ano?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    cor?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    pertence?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    observacoes?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    detentorAtual?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    unidade?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    motivo?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    informacaoAdicional?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    tipoTracao?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    cambio?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    licenciamento?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    apresentacao?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    estribo?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    radio?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    grafismo?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    monocela?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"VeiculoEmprestimo"> | Date | string | null
    localizacao?: StringNullableFilter<"VeiculoEmprestimo"> | string | null
    statusUso?: StringFilter<"VeiculoEmprestimo"> | string
    ativo?: BoolFilter<"VeiculoEmprestimo"> | boolean
    criadoEm?: DateTimeFilter<"VeiculoEmprestimo"> | Date | string
    atualizadoEm?: DateTimeFilter<"VeiculoEmprestimo"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
  }, "id" | "placa">

  export type VeiculoEmprestimoOrderByWithAggregationInput = {
    id?: SortOrder
    placa?: SortOrder
    patrimonio?: SortOrderInput | SortOrder
    prefixo?: SortOrderInput | SortOrder
    marcaModelo?: SortOrderInput | SortOrder
    ano?: SortOrderInput | SortOrder
    cor?: SortOrderInput | SortOrder
    pertence?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    detentorAtual?: SortOrderInput | SortOrder
    unidade?: SortOrderInput | SortOrder
    motivo?: SortOrderInput | SortOrder
    informacaoAdicional?: SortOrderInput | SortOrder
    tipoTracao?: SortOrderInput | SortOrder
    cambio?: SortOrderInput | SortOrder
    licenciamento?: SortOrderInput | SortOrder
    apresentacao?: SortOrderInput | SortOrder
    estribo?: SortOrderInput | SortOrder
    radio?: SortOrderInput | SortOrder
    grafismo?: SortOrderInput | SortOrder
    monocela?: SortOrderInput | SortOrder
    ultimaRevisao?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    statusUso?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: VeiculoEmprestimoCountOrderByAggregateInput
    _max?: VeiculoEmprestimoMaxOrderByAggregateInput
    _min?: VeiculoEmprestimoMinOrderByAggregateInput
  }

  export type VeiculoEmprestimoScalarWhereWithAggregatesInput = {
    AND?: VeiculoEmprestimoScalarWhereWithAggregatesInput | VeiculoEmprestimoScalarWhereWithAggregatesInput[]
    OR?: VeiculoEmprestimoScalarWhereWithAggregatesInput[]
    NOT?: VeiculoEmprestimoScalarWhereWithAggregatesInput | VeiculoEmprestimoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VeiculoEmprestimo"> | string
    placa?: StringWithAggregatesFilter<"VeiculoEmprestimo"> | string
    patrimonio?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    prefixo?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    marcaModelo?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    ano?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    cor?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    pertence?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    detentorAtual?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    unidade?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    motivo?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    informacaoAdicional?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    tipoTracao?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    cambio?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    licenciamento?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    apresentacao?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    estribo?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    radio?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    grafismo?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    monocela?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    ultimaRevisao?: DateTimeNullableWithAggregatesFilter<"VeiculoEmprestimo"> | Date | string | null
    localizacao?: StringNullableWithAggregatesFilter<"VeiculoEmprestimo"> | string | null
    statusUso?: StringWithAggregatesFilter<"VeiculoEmprestimo"> | string
    ativo?: BoolWithAggregatesFilter<"VeiculoEmprestimo"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"VeiculoEmprestimo"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"VeiculoEmprestimo"> | Date | string
  }

  export type EmprestimoWhereInput = {
    AND?: EmprestimoWhereInput | EmprestimoWhereInput[]
    OR?: EmprestimoWhereInput[]
    NOT?: EmprestimoWhereInput | EmprestimoWhereInput[]
    id?: StringFilter<"Emprestimo"> | string
    veiculoId?: StringFilter<"Emprestimo"> | string
    dataRetirada?: DateTimeFilter<"Emprestimo"> | Date | string
    quemRetirou?: StringFilter<"Emprestimo"> | string
    kmRetirada?: IntNullableFilter<"Emprestimo"> | number | null
    dataDevolucao?: DateTimeNullableFilter<"Emprestimo"> | Date | string | null
    quemEntregou?: StringNullableFilter<"Emprestimo"> | string | null
    kmDevolucao?: IntNullableFilter<"Emprestimo"> | number | null
    observacao?: StringNullableFilter<"Emprestimo"> | string | null
    criadoEm?: DateTimeFilter<"Emprestimo"> | Date | string
    atualizadoEm?: DateTimeFilter<"Emprestimo"> | Date | string
    veiculo?: XOR<VeiculoEmprestimoRelationFilter, VeiculoEmprestimoWhereInput>
  }

  export type EmprestimoOrderByWithRelationInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    dataRetirada?: SortOrder
    quemRetirou?: SortOrder
    kmRetirada?: SortOrderInput | SortOrder
    dataDevolucao?: SortOrderInput | SortOrder
    quemEntregou?: SortOrderInput | SortOrder
    kmDevolucao?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    veiculo?: VeiculoEmprestimoOrderByWithRelationInput
  }

  export type EmprestimoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmprestimoWhereInput | EmprestimoWhereInput[]
    OR?: EmprestimoWhereInput[]
    NOT?: EmprestimoWhereInput | EmprestimoWhereInput[]
    veiculoId?: StringFilter<"Emprestimo"> | string
    dataRetirada?: DateTimeFilter<"Emprestimo"> | Date | string
    quemRetirou?: StringFilter<"Emprestimo"> | string
    kmRetirada?: IntNullableFilter<"Emprestimo"> | number | null
    dataDevolucao?: DateTimeNullableFilter<"Emprestimo"> | Date | string | null
    quemEntregou?: StringNullableFilter<"Emprestimo"> | string | null
    kmDevolucao?: IntNullableFilter<"Emprestimo"> | number | null
    observacao?: StringNullableFilter<"Emprestimo"> | string | null
    criadoEm?: DateTimeFilter<"Emprestimo"> | Date | string
    atualizadoEm?: DateTimeFilter<"Emprestimo"> | Date | string
    veiculo?: XOR<VeiculoEmprestimoRelationFilter, VeiculoEmprestimoWhereInput>
  }, "id">

  export type EmprestimoOrderByWithAggregationInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    dataRetirada?: SortOrder
    quemRetirou?: SortOrder
    kmRetirada?: SortOrderInput | SortOrder
    dataDevolucao?: SortOrderInput | SortOrder
    quemEntregou?: SortOrderInput | SortOrder
    kmDevolucao?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: EmprestimoCountOrderByAggregateInput
    _avg?: EmprestimoAvgOrderByAggregateInput
    _max?: EmprestimoMaxOrderByAggregateInput
    _min?: EmprestimoMinOrderByAggregateInput
    _sum?: EmprestimoSumOrderByAggregateInput
  }

  export type EmprestimoScalarWhereWithAggregatesInput = {
    AND?: EmprestimoScalarWhereWithAggregatesInput | EmprestimoScalarWhereWithAggregatesInput[]
    OR?: EmprestimoScalarWhereWithAggregatesInput[]
    NOT?: EmprestimoScalarWhereWithAggregatesInput | EmprestimoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Emprestimo"> | string
    veiculoId?: StringWithAggregatesFilter<"Emprestimo"> | string
    dataRetirada?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    quemRetirou?: StringWithAggregatesFilter<"Emprestimo"> | string
    kmRetirada?: IntNullableWithAggregatesFilter<"Emprestimo"> | number | null
    dataDevolucao?: DateTimeNullableWithAggregatesFilter<"Emprestimo"> | Date | string | null
    quemEntregou?: StringNullableWithAggregatesFilter<"Emprestimo"> | string | null
    kmDevolucao?: IntNullableWithAggregatesFilter<"Emprestimo"> | number | null
    observacao?: StringNullableWithAggregatesFilter<"Emprestimo"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
  }

  export type OpmCreateInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
    metas?: QffMetaCreateNestedManyWithoutOpmInput
    veiculos?: VeiculoCreateNestedManyWithoutOpmInput
    veiculosAjuste?: VeiculoAjusteCreateNestedManyWithoutOpmInput
    veiculosSnapshot?: VeiculoSnapshotCreateNestedManyWithoutOpmInput
  }

  export type OpmUncheckedCreateInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
    metas?: QffMetaUncheckedCreateNestedManyWithoutOpmInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutOpmInput
    veiculosAjuste?: VeiculoAjusteUncheckedCreateNestedManyWithoutOpmInput
    veiculosSnapshot?: VeiculoSnapshotUncheckedCreateNestedManyWithoutOpmInput
  }

  export type OpmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: QffMetaUpdateManyWithoutOpmNestedInput
    veiculos?: VeiculoUpdateManyWithoutOpmNestedInput
    veiculosAjuste?: VeiculoAjusteUpdateManyWithoutOpmNestedInput
    veiculosSnapshot?: VeiculoSnapshotUpdateManyWithoutOpmNestedInput
  }

  export type OpmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: QffMetaUncheckedUpdateManyWithoutOpmNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutOpmNestedInput
    veiculosAjuste?: VeiculoAjusteUncheckedUpdateManyWithoutOpmNestedInput
    veiculosSnapshot?: VeiculoSnapshotUncheckedUpdateManyWithoutOpmNestedInput
  }

  export type OpmCreateManyInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
  }

  export type OpmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OpmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QffMetaCreateInput = {
    id?: string
    grupo: string
    programa: string
    quantidadeFixada: number
    opm: OpmCreateNestedOneWithoutMetasInput
  }

  export type QffMetaUncheckedCreateInput = {
    id?: string
    opmCodigo: string
    grupo: string
    programa: string
    quantidadeFixada: number
  }

  export type QffMetaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    quantidadeFixada?: IntFieldUpdateOperationsInput | number
    opm?: OpmUpdateOneRequiredWithoutMetasNestedInput
  }

  export type QffMetaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opmCodigo?: StringFieldUpdateOperationsInput | string
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    quantidadeFixada?: IntFieldUpdateOperationsInput | number
  }

  export type QffMetaCreateManyInput = {
    id?: string
    opmCodigo: string
    grupo: string
    programa: string
    quantidadeFixada: number
  }

  export type QffMetaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    quantidadeFixada?: IntFieldUpdateOperationsInput | number
  }

  export type QffMetaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    opmCodigo?: StringFieldUpdateOperationsInput | string
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    quantidadeFixada?: IntFieldUpdateOperationsInput | number
  }

  export type VeiculoCreateInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    opm: OpmCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculoUncheckedCreateInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    opmCodigo: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
  }

  export type VeiculoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    opm?: OpmUpdateOneRequiredWithoutVeiculosNestedInput
  }

  export type VeiculoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    opmCodigo?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoCreateManyInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    opmCodigo: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
  }

  export type VeiculoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    opmCodigo?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoAjusteCreateInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    alteradoEm?: Date | string | null
    opm: OpmCreateNestedOneWithoutVeiculosAjusteInput
  }

  export type VeiculoAjusteUncheckedCreateInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    opmCodigo: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    alteradoEm?: Date | string | null
  }

  export type VeiculoAjusteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opm?: OpmUpdateOneRequiredWithoutVeiculosAjusteNestedInput
  }

  export type VeiculoAjusteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    opmCodigo?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VeiculoAjusteCreateManyInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    opmCodigo: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    alteradoEm?: Date | string | null
  }

  export type VeiculoAjusteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VeiculoAjusteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    opmCodigo?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VeiculoSnapshotCreateInput = {
    id?: string
    mesReferencia: string
    patrimonio: string
    placa?: string | null
    marcaModelo?: string | null
    ano?: number | null
    grupo?: string | null
    programa?: string | null
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    opm: OpmCreateNestedOneWithoutVeiculosSnapshotInput
  }

  export type VeiculoSnapshotUncheckedCreateInput = {
    id?: string
    mesReferencia: string
    patrimonio: string
    placa?: string | null
    marcaModelo?: string | null
    ano?: number | null
    grupo?: string | null
    programa?: string | null
    opmCodigo: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
  }

  export type VeiculoSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    programa?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    opm?: OpmUpdateOneRequiredWithoutVeiculosSnapshotNestedInput
  }

  export type VeiculoSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    programa?: NullableStringFieldUpdateOperationsInput | string | null
    opmCodigo?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoSnapshotCreateManyInput = {
    id?: string
    mesReferencia: string
    patrimonio: string
    placa?: string | null
    marcaModelo?: string | null
    ano?: number | null
    grupo?: string | null
    programa?: string | null
    opmCodigo: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
  }

  export type VeiculoSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    programa?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    programa?: NullableStringFieldUpdateOperationsInput | string | null
    opmCodigo?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoEmprestimoCreateInput = {
    id?: string
    placa: string
    patrimonio?: string | null
    prefixo?: string | null
    marcaModelo?: string | null
    ano?: string | null
    cor?: string | null
    pertence?: string | null
    observacoes?: string | null
    detentorAtual?: string | null
    unidade?: string | null
    motivo?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    statusUso?: string
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoEmprestimoUncheckedCreateInput = {
    id?: string
    placa: string
    patrimonio?: string | null
    prefixo?: string | null
    marcaModelo?: string | null
    ano?: string | null
    cor?: string | null
    pertence?: string | null
    observacoes?: string | null
    detentorAtual?: string | null
    unidade?: string | null
    motivo?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    statusUso?: string
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoEmprestimoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    patrimonio?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    detentorAtual?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    statusUso?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoEmprestimoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    patrimonio?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    detentorAtual?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    statusUso?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoEmprestimoCreateManyInput = {
    id?: string
    placa: string
    patrimonio?: string | null
    prefixo?: string | null
    marcaModelo?: string | null
    ano?: string | null
    cor?: string | null
    pertence?: string | null
    observacoes?: string | null
    detentorAtual?: string | null
    unidade?: string | null
    motivo?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    statusUso?: string
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type VeiculoEmprestimoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    patrimonio?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    detentorAtual?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    statusUso?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeiculoEmprestimoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    patrimonio?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    detentorAtual?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    statusUso?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoCreateInput = {
    id?: string
    dataRetirada?: Date | string
    quemRetirou: string
    kmRetirada?: number | null
    dataDevolucao?: Date | string | null
    quemEntregou?: string | null
    kmDevolucao?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    veiculo: VeiculoEmprestimoCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestimoUncheckedCreateInput = {
    id?: string
    veiculoId: string
    dataRetirada?: Date | string
    quemRetirou: string
    kmRetirada?: number | null
    dataDevolucao?: Date | string | null
    quemEntregou?: string | null
    kmDevolucao?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type EmprestimoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataRetirada?: DateTimeFieldUpdateOperationsInput | Date | string
    quemRetirou?: StringFieldUpdateOperationsInput | string
    kmRetirada?: NullableIntFieldUpdateOperationsInput | number | null
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quemEntregou?: NullableStringFieldUpdateOperationsInput | string | null
    kmDevolucao?: NullableIntFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculo?: VeiculoEmprestimoUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestimoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
    dataRetirada?: DateTimeFieldUpdateOperationsInput | Date | string
    quemRetirou?: StringFieldUpdateOperationsInput | string
    kmRetirada?: NullableIntFieldUpdateOperationsInput | number | null
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quemEntregou?: NullableStringFieldUpdateOperationsInput | string | null
    kmDevolucao?: NullableIntFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoCreateManyInput = {
    id?: string
    veiculoId: string
    dataRetirada?: Date | string
    quemRetirou: string
    kmRetirada?: number | null
    dataDevolucao?: Date | string | null
    quemEntregou?: string | null
    kmDevolucao?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type EmprestimoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataRetirada?: DateTimeFieldUpdateOperationsInput | Date | string
    quemRetirou?: StringFieldUpdateOperationsInput | string
    kmRetirada?: NullableIntFieldUpdateOperationsInput | number | null
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quemEntregou?: NullableStringFieldUpdateOperationsInput | string | null
    kmDevolucao?: NullableIntFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    veiculoId?: StringFieldUpdateOperationsInput | string
    dataRetirada?: DateTimeFieldUpdateOperationsInput | Date | string
    quemRetirou?: StringFieldUpdateOperationsInput | string
    kmRetirada?: NullableIntFieldUpdateOperationsInput | number | null
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quemEntregou?: NullableStringFieldUpdateOperationsInput | string | null
    kmDevolucao?: NullableIntFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type QffMetaListRelationFilter = {
    every?: QffMetaWhereInput
    some?: QffMetaWhereInput
    none?: QffMetaWhereInput
  }

  export type VeiculoListRelationFilter = {
    every?: VeiculoWhereInput
    some?: VeiculoWhereInput
    none?: VeiculoWhereInput
  }

  export type VeiculoAjusteListRelationFilter = {
    every?: VeiculoAjusteWhereInput
    some?: VeiculoAjusteWhereInput
    none?: VeiculoAjusteWhereInput
  }

  export type VeiculoSnapshotListRelationFilter = {
    every?: VeiculoSnapshotWhereInput
    some?: VeiculoSnapshotWhereInput
    none?: VeiculoSnapshotWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QffMetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoAjusteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpmCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nome?: SortOrder
    municipio?: SortOrder
    macroComando?: SortOrder
  }

  export type OpmMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nome?: SortOrder
    municipio?: SortOrder
    macroComando?: SortOrder
  }

  export type OpmMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nome?: SortOrder
    municipio?: SortOrder
    macroComando?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OpmRelationFilter = {
    is?: OpmWhereInput
    isNot?: OpmWhereInput
  }

  export type QffMetaOpmCodigoGrupoProgramaCompoundUniqueInput = {
    opmCodigo: string
    grupo: string
    programa: string
  }

  export type QffMetaCountOrderByAggregateInput = {
    id?: SortOrder
    opmCodigo?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    quantidadeFixada?: SortOrder
  }

  export type QffMetaAvgOrderByAggregateInput = {
    quantidadeFixada?: SortOrder
  }

  export type QffMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    opmCodigo?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    quantidadeFixada?: SortOrder
  }

  export type QffMetaMinOrderByAggregateInput = {
    id?: SortOrder
    opmCodigo?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    quantidadeFixada?: SortOrder
  }

  export type QffMetaSumOrderByAggregateInput = {
    quantidadeFixada?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VeiculoCountOrderByAggregateInput = {
    id?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrder
    situacao?: SortOrder
    pertence?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
  }

  export type VeiculoAvgOrderByAggregateInput = {
    ano?: SortOrder
  }

  export type VeiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrder
    situacao?: SortOrder
    pertence?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
  }

  export type VeiculoMinOrderByAggregateInput = {
    id?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrder
    situacao?: SortOrder
    pertence?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
  }

  export type VeiculoSumOrderByAggregateInput = {
    ano?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VeiculoAjusteCountOrderByAggregateInput = {
    id?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrder
    situacao?: SortOrder
    pertence?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
    alteradoEm?: SortOrder
  }

  export type VeiculoAjusteAvgOrderByAggregateInput = {
    ano?: SortOrder
  }

  export type VeiculoAjusteMaxOrderByAggregateInput = {
    id?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrder
    situacao?: SortOrder
    pertence?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
    alteradoEm?: SortOrder
  }

  export type VeiculoAjusteMinOrderByAggregateInput = {
    id?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrder
    situacao?: SortOrder
    pertence?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
    alteradoEm?: SortOrder
  }

  export type VeiculoAjusteSumOrderByAggregateInput = {
    ano?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VeiculoSnapshotMesReferenciaPatrimonioCompoundUniqueInput = {
    mesReferencia: string
    patrimonio: string
  }

  export type VeiculoSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    mesReferencia?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrder
    situacao?: SortOrder
    pertence?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
  }

  export type VeiculoSnapshotAvgOrderByAggregateInput = {
    ano?: SortOrder
  }

  export type VeiculoSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    mesReferencia?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrder
    situacao?: SortOrder
    pertence?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
  }

  export type VeiculoSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    mesReferencia?: SortOrder
    patrimonio?: SortOrder
    placa?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    grupo?: SortOrder
    programa?: SortOrder
    opmCodigo?: SortOrder
    prefixo?: SortOrder
    situacao?: SortOrder
    pertence?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
  }

  export type VeiculoSnapshotSumOrderByAggregateInput = {
    ano?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmprestimoListRelationFilter = {
    every?: EmprestimoWhereInput
    some?: EmprestimoWhereInput
    none?: EmprestimoWhereInput
  }

  export type EmprestimoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoEmprestimoCountOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    patrimonio?: SortOrder
    prefixo?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    pertence?: SortOrder
    observacoes?: SortOrder
    detentorAtual?: SortOrder
    unidade?: SortOrder
    motivo?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
    statusUso?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type VeiculoEmprestimoMaxOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    patrimonio?: SortOrder
    prefixo?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    pertence?: SortOrder
    observacoes?: SortOrder
    detentorAtual?: SortOrder
    unidade?: SortOrder
    motivo?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
    statusUso?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type VeiculoEmprestimoMinOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    patrimonio?: SortOrder
    prefixo?: SortOrder
    marcaModelo?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    pertence?: SortOrder
    observacoes?: SortOrder
    detentorAtual?: SortOrder
    unidade?: SortOrder
    motivo?: SortOrder
    informacaoAdicional?: SortOrder
    tipoTracao?: SortOrder
    cambio?: SortOrder
    licenciamento?: SortOrder
    apresentacao?: SortOrder
    estribo?: SortOrder
    radio?: SortOrder
    grafismo?: SortOrder
    monocela?: SortOrder
    ultimaRevisao?: SortOrder
    localizacao?: SortOrder
    statusUso?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VeiculoEmprestimoRelationFilter = {
    is?: VeiculoEmprestimoWhereInput
    isNot?: VeiculoEmprestimoWhereInput
  }

  export type EmprestimoCountOrderByAggregateInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    dataRetirada?: SortOrder
    quemRetirou?: SortOrder
    kmRetirada?: SortOrder
    dataDevolucao?: SortOrder
    quemEntregou?: SortOrder
    kmDevolucao?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type EmprestimoAvgOrderByAggregateInput = {
    kmRetirada?: SortOrder
    kmDevolucao?: SortOrder
  }

  export type EmprestimoMaxOrderByAggregateInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    dataRetirada?: SortOrder
    quemRetirou?: SortOrder
    kmRetirada?: SortOrder
    dataDevolucao?: SortOrder
    quemEntregou?: SortOrder
    kmDevolucao?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type EmprestimoMinOrderByAggregateInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    dataRetirada?: SortOrder
    quemRetirou?: SortOrder
    kmRetirada?: SortOrder
    dataDevolucao?: SortOrder
    quemEntregou?: SortOrder
    kmDevolucao?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type EmprestimoSumOrderByAggregateInput = {
    kmRetirada?: SortOrder
    kmDevolucao?: SortOrder
  }

  export type QffMetaCreateNestedManyWithoutOpmInput = {
    create?: XOR<QffMetaCreateWithoutOpmInput, QffMetaUncheckedCreateWithoutOpmInput> | QffMetaCreateWithoutOpmInput[] | QffMetaUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: QffMetaCreateOrConnectWithoutOpmInput | QffMetaCreateOrConnectWithoutOpmInput[]
    createMany?: QffMetaCreateManyOpmInputEnvelope
    connect?: QffMetaWhereUniqueInput | QffMetaWhereUniqueInput[]
  }

  export type VeiculoCreateNestedManyWithoutOpmInput = {
    create?: XOR<VeiculoCreateWithoutOpmInput, VeiculoUncheckedCreateWithoutOpmInput> | VeiculoCreateWithoutOpmInput[] | VeiculoUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutOpmInput | VeiculoCreateOrConnectWithoutOpmInput[]
    createMany?: VeiculoCreateManyOpmInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type VeiculoAjusteCreateNestedManyWithoutOpmInput = {
    create?: XOR<VeiculoAjusteCreateWithoutOpmInput, VeiculoAjusteUncheckedCreateWithoutOpmInput> | VeiculoAjusteCreateWithoutOpmInput[] | VeiculoAjusteUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoAjusteCreateOrConnectWithoutOpmInput | VeiculoAjusteCreateOrConnectWithoutOpmInput[]
    createMany?: VeiculoAjusteCreateManyOpmInputEnvelope
    connect?: VeiculoAjusteWhereUniqueInput | VeiculoAjusteWhereUniqueInput[]
  }

  export type VeiculoSnapshotCreateNestedManyWithoutOpmInput = {
    create?: XOR<VeiculoSnapshotCreateWithoutOpmInput, VeiculoSnapshotUncheckedCreateWithoutOpmInput> | VeiculoSnapshotCreateWithoutOpmInput[] | VeiculoSnapshotUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoSnapshotCreateOrConnectWithoutOpmInput | VeiculoSnapshotCreateOrConnectWithoutOpmInput[]
    createMany?: VeiculoSnapshotCreateManyOpmInputEnvelope
    connect?: VeiculoSnapshotWhereUniqueInput | VeiculoSnapshotWhereUniqueInput[]
  }

  export type QffMetaUncheckedCreateNestedManyWithoutOpmInput = {
    create?: XOR<QffMetaCreateWithoutOpmInput, QffMetaUncheckedCreateWithoutOpmInput> | QffMetaCreateWithoutOpmInput[] | QffMetaUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: QffMetaCreateOrConnectWithoutOpmInput | QffMetaCreateOrConnectWithoutOpmInput[]
    createMany?: QffMetaCreateManyOpmInputEnvelope
    connect?: QffMetaWhereUniqueInput | QffMetaWhereUniqueInput[]
  }

  export type VeiculoUncheckedCreateNestedManyWithoutOpmInput = {
    create?: XOR<VeiculoCreateWithoutOpmInput, VeiculoUncheckedCreateWithoutOpmInput> | VeiculoCreateWithoutOpmInput[] | VeiculoUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutOpmInput | VeiculoCreateOrConnectWithoutOpmInput[]
    createMany?: VeiculoCreateManyOpmInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type VeiculoAjusteUncheckedCreateNestedManyWithoutOpmInput = {
    create?: XOR<VeiculoAjusteCreateWithoutOpmInput, VeiculoAjusteUncheckedCreateWithoutOpmInput> | VeiculoAjusteCreateWithoutOpmInput[] | VeiculoAjusteUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoAjusteCreateOrConnectWithoutOpmInput | VeiculoAjusteCreateOrConnectWithoutOpmInput[]
    createMany?: VeiculoAjusteCreateManyOpmInputEnvelope
    connect?: VeiculoAjusteWhereUniqueInput | VeiculoAjusteWhereUniqueInput[]
  }

  export type VeiculoSnapshotUncheckedCreateNestedManyWithoutOpmInput = {
    create?: XOR<VeiculoSnapshotCreateWithoutOpmInput, VeiculoSnapshotUncheckedCreateWithoutOpmInput> | VeiculoSnapshotCreateWithoutOpmInput[] | VeiculoSnapshotUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoSnapshotCreateOrConnectWithoutOpmInput | VeiculoSnapshotCreateOrConnectWithoutOpmInput[]
    createMany?: VeiculoSnapshotCreateManyOpmInputEnvelope
    connect?: VeiculoSnapshotWhereUniqueInput | VeiculoSnapshotWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type QffMetaUpdateManyWithoutOpmNestedInput = {
    create?: XOR<QffMetaCreateWithoutOpmInput, QffMetaUncheckedCreateWithoutOpmInput> | QffMetaCreateWithoutOpmInput[] | QffMetaUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: QffMetaCreateOrConnectWithoutOpmInput | QffMetaCreateOrConnectWithoutOpmInput[]
    upsert?: QffMetaUpsertWithWhereUniqueWithoutOpmInput | QffMetaUpsertWithWhereUniqueWithoutOpmInput[]
    createMany?: QffMetaCreateManyOpmInputEnvelope
    set?: QffMetaWhereUniqueInput | QffMetaWhereUniqueInput[]
    disconnect?: QffMetaWhereUniqueInput | QffMetaWhereUniqueInput[]
    delete?: QffMetaWhereUniqueInput | QffMetaWhereUniqueInput[]
    connect?: QffMetaWhereUniqueInput | QffMetaWhereUniqueInput[]
    update?: QffMetaUpdateWithWhereUniqueWithoutOpmInput | QffMetaUpdateWithWhereUniqueWithoutOpmInput[]
    updateMany?: QffMetaUpdateManyWithWhereWithoutOpmInput | QffMetaUpdateManyWithWhereWithoutOpmInput[]
    deleteMany?: QffMetaScalarWhereInput | QffMetaScalarWhereInput[]
  }

  export type VeiculoUpdateManyWithoutOpmNestedInput = {
    create?: XOR<VeiculoCreateWithoutOpmInput, VeiculoUncheckedCreateWithoutOpmInput> | VeiculoCreateWithoutOpmInput[] | VeiculoUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutOpmInput | VeiculoCreateOrConnectWithoutOpmInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutOpmInput | VeiculoUpsertWithWhereUniqueWithoutOpmInput[]
    createMany?: VeiculoCreateManyOpmInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutOpmInput | VeiculoUpdateWithWhereUniqueWithoutOpmInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutOpmInput | VeiculoUpdateManyWithWhereWithoutOpmInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type VeiculoAjusteUpdateManyWithoutOpmNestedInput = {
    create?: XOR<VeiculoAjusteCreateWithoutOpmInput, VeiculoAjusteUncheckedCreateWithoutOpmInput> | VeiculoAjusteCreateWithoutOpmInput[] | VeiculoAjusteUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoAjusteCreateOrConnectWithoutOpmInput | VeiculoAjusteCreateOrConnectWithoutOpmInput[]
    upsert?: VeiculoAjusteUpsertWithWhereUniqueWithoutOpmInput | VeiculoAjusteUpsertWithWhereUniqueWithoutOpmInput[]
    createMany?: VeiculoAjusteCreateManyOpmInputEnvelope
    set?: VeiculoAjusteWhereUniqueInput | VeiculoAjusteWhereUniqueInput[]
    disconnect?: VeiculoAjusteWhereUniqueInput | VeiculoAjusteWhereUniqueInput[]
    delete?: VeiculoAjusteWhereUniqueInput | VeiculoAjusteWhereUniqueInput[]
    connect?: VeiculoAjusteWhereUniqueInput | VeiculoAjusteWhereUniqueInput[]
    update?: VeiculoAjusteUpdateWithWhereUniqueWithoutOpmInput | VeiculoAjusteUpdateWithWhereUniqueWithoutOpmInput[]
    updateMany?: VeiculoAjusteUpdateManyWithWhereWithoutOpmInput | VeiculoAjusteUpdateManyWithWhereWithoutOpmInput[]
    deleteMany?: VeiculoAjusteScalarWhereInput | VeiculoAjusteScalarWhereInput[]
  }

  export type VeiculoSnapshotUpdateManyWithoutOpmNestedInput = {
    create?: XOR<VeiculoSnapshotCreateWithoutOpmInput, VeiculoSnapshotUncheckedCreateWithoutOpmInput> | VeiculoSnapshotCreateWithoutOpmInput[] | VeiculoSnapshotUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoSnapshotCreateOrConnectWithoutOpmInput | VeiculoSnapshotCreateOrConnectWithoutOpmInput[]
    upsert?: VeiculoSnapshotUpsertWithWhereUniqueWithoutOpmInput | VeiculoSnapshotUpsertWithWhereUniqueWithoutOpmInput[]
    createMany?: VeiculoSnapshotCreateManyOpmInputEnvelope
    set?: VeiculoSnapshotWhereUniqueInput | VeiculoSnapshotWhereUniqueInput[]
    disconnect?: VeiculoSnapshotWhereUniqueInput | VeiculoSnapshotWhereUniqueInput[]
    delete?: VeiculoSnapshotWhereUniqueInput | VeiculoSnapshotWhereUniqueInput[]
    connect?: VeiculoSnapshotWhereUniqueInput | VeiculoSnapshotWhereUniqueInput[]
    update?: VeiculoSnapshotUpdateWithWhereUniqueWithoutOpmInput | VeiculoSnapshotUpdateWithWhereUniqueWithoutOpmInput[]
    updateMany?: VeiculoSnapshotUpdateManyWithWhereWithoutOpmInput | VeiculoSnapshotUpdateManyWithWhereWithoutOpmInput[]
    deleteMany?: VeiculoSnapshotScalarWhereInput | VeiculoSnapshotScalarWhereInput[]
  }

  export type QffMetaUncheckedUpdateManyWithoutOpmNestedInput = {
    create?: XOR<QffMetaCreateWithoutOpmInput, QffMetaUncheckedCreateWithoutOpmInput> | QffMetaCreateWithoutOpmInput[] | QffMetaUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: QffMetaCreateOrConnectWithoutOpmInput | QffMetaCreateOrConnectWithoutOpmInput[]
    upsert?: QffMetaUpsertWithWhereUniqueWithoutOpmInput | QffMetaUpsertWithWhereUniqueWithoutOpmInput[]
    createMany?: QffMetaCreateManyOpmInputEnvelope
    set?: QffMetaWhereUniqueInput | QffMetaWhereUniqueInput[]
    disconnect?: QffMetaWhereUniqueInput | QffMetaWhereUniqueInput[]
    delete?: QffMetaWhereUniqueInput | QffMetaWhereUniqueInput[]
    connect?: QffMetaWhereUniqueInput | QffMetaWhereUniqueInput[]
    update?: QffMetaUpdateWithWhereUniqueWithoutOpmInput | QffMetaUpdateWithWhereUniqueWithoutOpmInput[]
    updateMany?: QffMetaUpdateManyWithWhereWithoutOpmInput | QffMetaUpdateManyWithWhereWithoutOpmInput[]
    deleteMany?: QffMetaScalarWhereInput | QffMetaScalarWhereInput[]
  }

  export type VeiculoUncheckedUpdateManyWithoutOpmNestedInput = {
    create?: XOR<VeiculoCreateWithoutOpmInput, VeiculoUncheckedCreateWithoutOpmInput> | VeiculoCreateWithoutOpmInput[] | VeiculoUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutOpmInput | VeiculoCreateOrConnectWithoutOpmInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutOpmInput | VeiculoUpsertWithWhereUniqueWithoutOpmInput[]
    createMany?: VeiculoCreateManyOpmInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutOpmInput | VeiculoUpdateWithWhereUniqueWithoutOpmInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutOpmInput | VeiculoUpdateManyWithWhereWithoutOpmInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type VeiculoAjusteUncheckedUpdateManyWithoutOpmNestedInput = {
    create?: XOR<VeiculoAjusteCreateWithoutOpmInput, VeiculoAjusteUncheckedCreateWithoutOpmInput> | VeiculoAjusteCreateWithoutOpmInput[] | VeiculoAjusteUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoAjusteCreateOrConnectWithoutOpmInput | VeiculoAjusteCreateOrConnectWithoutOpmInput[]
    upsert?: VeiculoAjusteUpsertWithWhereUniqueWithoutOpmInput | VeiculoAjusteUpsertWithWhereUniqueWithoutOpmInput[]
    createMany?: VeiculoAjusteCreateManyOpmInputEnvelope
    set?: VeiculoAjusteWhereUniqueInput | VeiculoAjusteWhereUniqueInput[]
    disconnect?: VeiculoAjusteWhereUniqueInput | VeiculoAjusteWhereUniqueInput[]
    delete?: VeiculoAjusteWhereUniqueInput | VeiculoAjusteWhereUniqueInput[]
    connect?: VeiculoAjusteWhereUniqueInput | VeiculoAjusteWhereUniqueInput[]
    update?: VeiculoAjusteUpdateWithWhereUniqueWithoutOpmInput | VeiculoAjusteUpdateWithWhereUniqueWithoutOpmInput[]
    updateMany?: VeiculoAjusteUpdateManyWithWhereWithoutOpmInput | VeiculoAjusteUpdateManyWithWhereWithoutOpmInput[]
    deleteMany?: VeiculoAjusteScalarWhereInput | VeiculoAjusteScalarWhereInput[]
  }

  export type VeiculoSnapshotUncheckedUpdateManyWithoutOpmNestedInput = {
    create?: XOR<VeiculoSnapshotCreateWithoutOpmInput, VeiculoSnapshotUncheckedCreateWithoutOpmInput> | VeiculoSnapshotCreateWithoutOpmInput[] | VeiculoSnapshotUncheckedCreateWithoutOpmInput[]
    connectOrCreate?: VeiculoSnapshotCreateOrConnectWithoutOpmInput | VeiculoSnapshotCreateOrConnectWithoutOpmInput[]
    upsert?: VeiculoSnapshotUpsertWithWhereUniqueWithoutOpmInput | VeiculoSnapshotUpsertWithWhereUniqueWithoutOpmInput[]
    createMany?: VeiculoSnapshotCreateManyOpmInputEnvelope
    set?: VeiculoSnapshotWhereUniqueInput | VeiculoSnapshotWhereUniqueInput[]
    disconnect?: VeiculoSnapshotWhereUniqueInput | VeiculoSnapshotWhereUniqueInput[]
    delete?: VeiculoSnapshotWhereUniqueInput | VeiculoSnapshotWhereUniqueInput[]
    connect?: VeiculoSnapshotWhereUniqueInput | VeiculoSnapshotWhereUniqueInput[]
    update?: VeiculoSnapshotUpdateWithWhereUniqueWithoutOpmInput | VeiculoSnapshotUpdateWithWhereUniqueWithoutOpmInput[]
    updateMany?: VeiculoSnapshotUpdateManyWithWhereWithoutOpmInput | VeiculoSnapshotUpdateManyWithWhereWithoutOpmInput[]
    deleteMany?: VeiculoSnapshotScalarWhereInput | VeiculoSnapshotScalarWhereInput[]
  }

  export type OpmCreateNestedOneWithoutMetasInput = {
    create?: XOR<OpmCreateWithoutMetasInput, OpmUncheckedCreateWithoutMetasInput>
    connectOrCreate?: OpmCreateOrConnectWithoutMetasInput
    connect?: OpmWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OpmUpdateOneRequiredWithoutMetasNestedInput = {
    create?: XOR<OpmCreateWithoutMetasInput, OpmUncheckedCreateWithoutMetasInput>
    connectOrCreate?: OpmCreateOrConnectWithoutMetasInput
    upsert?: OpmUpsertWithoutMetasInput
    connect?: OpmWhereUniqueInput
    update?: XOR<XOR<OpmUpdateToOneWithWhereWithoutMetasInput, OpmUpdateWithoutMetasInput>, OpmUncheckedUpdateWithoutMetasInput>
  }

  export type OpmCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<OpmCreateWithoutVeiculosInput, OpmUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: OpmCreateOrConnectWithoutVeiculosInput
    connect?: OpmWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OpmUpdateOneRequiredWithoutVeiculosNestedInput = {
    create?: XOR<OpmCreateWithoutVeiculosInput, OpmUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: OpmCreateOrConnectWithoutVeiculosInput
    upsert?: OpmUpsertWithoutVeiculosInput
    connect?: OpmWhereUniqueInput
    update?: XOR<XOR<OpmUpdateToOneWithWhereWithoutVeiculosInput, OpmUpdateWithoutVeiculosInput>, OpmUncheckedUpdateWithoutVeiculosInput>
  }

  export type OpmCreateNestedOneWithoutVeiculosAjusteInput = {
    create?: XOR<OpmCreateWithoutVeiculosAjusteInput, OpmUncheckedCreateWithoutVeiculosAjusteInput>
    connectOrCreate?: OpmCreateOrConnectWithoutVeiculosAjusteInput
    connect?: OpmWhereUniqueInput
  }

  export type OpmUpdateOneRequiredWithoutVeiculosAjusteNestedInput = {
    create?: XOR<OpmCreateWithoutVeiculosAjusteInput, OpmUncheckedCreateWithoutVeiculosAjusteInput>
    connectOrCreate?: OpmCreateOrConnectWithoutVeiculosAjusteInput
    upsert?: OpmUpsertWithoutVeiculosAjusteInput
    connect?: OpmWhereUniqueInput
    update?: XOR<XOR<OpmUpdateToOneWithWhereWithoutVeiculosAjusteInput, OpmUpdateWithoutVeiculosAjusteInput>, OpmUncheckedUpdateWithoutVeiculosAjusteInput>
  }

  export type OpmCreateNestedOneWithoutVeiculosSnapshotInput = {
    create?: XOR<OpmCreateWithoutVeiculosSnapshotInput, OpmUncheckedCreateWithoutVeiculosSnapshotInput>
    connectOrCreate?: OpmCreateOrConnectWithoutVeiculosSnapshotInput
    connect?: OpmWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OpmUpdateOneRequiredWithoutVeiculosSnapshotNestedInput = {
    create?: XOR<OpmCreateWithoutVeiculosSnapshotInput, OpmUncheckedCreateWithoutVeiculosSnapshotInput>
    connectOrCreate?: OpmCreateOrConnectWithoutVeiculosSnapshotInput
    upsert?: OpmUpsertWithoutVeiculosSnapshotInput
    connect?: OpmWhereUniqueInput
    update?: XOR<XOR<OpmUpdateToOneWithWhereWithoutVeiculosSnapshotInput, OpmUpdateWithoutVeiculosSnapshotInput>, OpmUncheckedUpdateWithoutVeiculosSnapshotInput>
  }

  export type EmprestimoCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<EmprestimoCreateWithoutVeiculoInput, EmprestimoUncheckedCreateWithoutVeiculoInput> | EmprestimoCreateWithoutVeiculoInput[] | EmprestimoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutVeiculoInput | EmprestimoCreateOrConnectWithoutVeiculoInput[]
    createMany?: EmprestimoCreateManyVeiculoInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type EmprestimoUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<EmprestimoCreateWithoutVeiculoInput, EmprestimoUncheckedCreateWithoutVeiculoInput> | EmprestimoCreateWithoutVeiculoInput[] | EmprestimoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutVeiculoInput | EmprestimoCreateOrConnectWithoutVeiculoInput[]
    createMany?: EmprestimoCreateManyVeiculoInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmprestimoUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<EmprestimoCreateWithoutVeiculoInput, EmprestimoUncheckedCreateWithoutVeiculoInput> | EmprestimoCreateWithoutVeiculoInput[] | EmprestimoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutVeiculoInput | EmprestimoCreateOrConnectWithoutVeiculoInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutVeiculoInput | EmprestimoUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: EmprestimoCreateManyVeiculoInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutVeiculoInput | EmprestimoUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutVeiculoInput | EmprestimoUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type EmprestimoUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<EmprestimoCreateWithoutVeiculoInput, EmprestimoUncheckedCreateWithoutVeiculoInput> | EmprestimoCreateWithoutVeiculoInput[] | EmprestimoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutVeiculoInput | EmprestimoCreateOrConnectWithoutVeiculoInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutVeiculoInput | EmprestimoUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: EmprestimoCreateManyVeiculoInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutVeiculoInput | EmprestimoUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutVeiculoInput | EmprestimoUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type VeiculoEmprestimoCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<VeiculoEmprestimoCreateWithoutEmprestimosInput, VeiculoEmprestimoUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: VeiculoEmprestimoCreateOrConnectWithoutEmprestimosInput
    connect?: VeiculoEmprestimoWhereUniqueInput
  }

  export type VeiculoEmprestimoUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<VeiculoEmprestimoCreateWithoutEmprestimosInput, VeiculoEmprestimoUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: VeiculoEmprestimoCreateOrConnectWithoutEmprestimosInput
    upsert?: VeiculoEmprestimoUpsertWithoutEmprestimosInput
    connect?: VeiculoEmprestimoWhereUniqueInput
    update?: XOR<XOR<VeiculoEmprestimoUpdateToOneWithWhereWithoutEmprestimosInput, VeiculoEmprestimoUpdateWithoutEmprestimosInput>, VeiculoEmprestimoUncheckedUpdateWithoutEmprestimosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type QffMetaCreateWithoutOpmInput = {
    id?: string
    grupo: string
    programa: string
    quantidadeFixada: number
  }

  export type QffMetaUncheckedCreateWithoutOpmInput = {
    id?: string
    grupo: string
    programa: string
    quantidadeFixada: number
  }

  export type QffMetaCreateOrConnectWithoutOpmInput = {
    where: QffMetaWhereUniqueInput
    create: XOR<QffMetaCreateWithoutOpmInput, QffMetaUncheckedCreateWithoutOpmInput>
  }

  export type QffMetaCreateManyOpmInputEnvelope = {
    data: QffMetaCreateManyOpmInput | QffMetaCreateManyOpmInput[]
    skipDuplicates?: boolean
  }

  export type VeiculoCreateWithoutOpmInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
  }

  export type VeiculoUncheckedCreateWithoutOpmInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
  }

  export type VeiculoCreateOrConnectWithoutOpmInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutOpmInput, VeiculoUncheckedCreateWithoutOpmInput>
  }

  export type VeiculoCreateManyOpmInputEnvelope = {
    data: VeiculoCreateManyOpmInput | VeiculoCreateManyOpmInput[]
    skipDuplicates?: boolean
  }

  export type VeiculoAjusteCreateWithoutOpmInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    alteradoEm?: Date | string | null
  }

  export type VeiculoAjusteUncheckedCreateWithoutOpmInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    alteradoEm?: Date | string | null
  }

  export type VeiculoAjusteCreateOrConnectWithoutOpmInput = {
    where: VeiculoAjusteWhereUniqueInput
    create: XOR<VeiculoAjusteCreateWithoutOpmInput, VeiculoAjusteUncheckedCreateWithoutOpmInput>
  }

  export type VeiculoAjusteCreateManyOpmInputEnvelope = {
    data: VeiculoAjusteCreateManyOpmInput | VeiculoAjusteCreateManyOpmInput[]
    skipDuplicates?: boolean
  }

  export type VeiculoSnapshotCreateWithoutOpmInput = {
    id?: string
    mesReferencia: string
    patrimonio: string
    placa?: string | null
    marcaModelo?: string | null
    ano?: number | null
    grupo?: string | null
    programa?: string | null
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
  }

  export type VeiculoSnapshotUncheckedCreateWithoutOpmInput = {
    id?: string
    mesReferencia: string
    patrimonio: string
    placa?: string | null
    marcaModelo?: string | null
    ano?: number | null
    grupo?: string | null
    programa?: string | null
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
  }

  export type VeiculoSnapshotCreateOrConnectWithoutOpmInput = {
    where: VeiculoSnapshotWhereUniqueInput
    create: XOR<VeiculoSnapshotCreateWithoutOpmInput, VeiculoSnapshotUncheckedCreateWithoutOpmInput>
  }

  export type VeiculoSnapshotCreateManyOpmInputEnvelope = {
    data: VeiculoSnapshotCreateManyOpmInput | VeiculoSnapshotCreateManyOpmInput[]
    skipDuplicates?: boolean
  }

  export type QffMetaUpsertWithWhereUniqueWithoutOpmInput = {
    where: QffMetaWhereUniqueInput
    update: XOR<QffMetaUpdateWithoutOpmInput, QffMetaUncheckedUpdateWithoutOpmInput>
    create: XOR<QffMetaCreateWithoutOpmInput, QffMetaUncheckedCreateWithoutOpmInput>
  }

  export type QffMetaUpdateWithWhereUniqueWithoutOpmInput = {
    where: QffMetaWhereUniqueInput
    data: XOR<QffMetaUpdateWithoutOpmInput, QffMetaUncheckedUpdateWithoutOpmInput>
  }

  export type QffMetaUpdateManyWithWhereWithoutOpmInput = {
    where: QffMetaScalarWhereInput
    data: XOR<QffMetaUpdateManyMutationInput, QffMetaUncheckedUpdateManyWithoutOpmInput>
  }

  export type QffMetaScalarWhereInput = {
    AND?: QffMetaScalarWhereInput | QffMetaScalarWhereInput[]
    OR?: QffMetaScalarWhereInput[]
    NOT?: QffMetaScalarWhereInput | QffMetaScalarWhereInput[]
    id?: StringFilter<"QffMeta"> | string
    opmCodigo?: StringFilter<"QffMeta"> | string
    grupo?: StringFilter<"QffMeta"> | string
    programa?: StringFilter<"QffMeta"> | string
    quantidadeFixada?: IntFilter<"QffMeta"> | number
  }

  export type VeiculoUpsertWithWhereUniqueWithoutOpmInput = {
    where: VeiculoWhereUniqueInput
    update: XOR<VeiculoUpdateWithoutOpmInput, VeiculoUncheckedUpdateWithoutOpmInput>
    create: XOR<VeiculoCreateWithoutOpmInput, VeiculoUncheckedCreateWithoutOpmInput>
  }

  export type VeiculoUpdateWithWhereUniqueWithoutOpmInput = {
    where: VeiculoWhereUniqueInput
    data: XOR<VeiculoUpdateWithoutOpmInput, VeiculoUncheckedUpdateWithoutOpmInput>
  }

  export type VeiculoUpdateManyWithWhereWithoutOpmInput = {
    where: VeiculoScalarWhereInput
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyWithoutOpmInput>
  }

  export type VeiculoScalarWhereInput = {
    AND?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
    OR?: VeiculoScalarWhereInput[]
    NOT?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
    id?: StringFilter<"Veiculo"> | string
    patrimonio?: StringFilter<"Veiculo"> | string
    placa?: StringFilter<"Veiculo"> | string
    marcaModelo?: StringFilter<"Veiculo"> | string
    ano?: IntFilter<"Veiculo"> | number
    grupo?: StringFilter<"Veiculo"> | string
    programa?: StringFilter<"Veiculo"> | string
    opmCodigo?: StringFilter<"Veiculo"> | string
    prefixo?: StringNullableFilter<"Veiculo"> | string | null
    situacao?: StringNullableFilter<"Veiculo"> | string | null
    pertence?: StringNullableFilter<"Veiculo"> | string | null
    informacaoAdicional?: StringNullableFilter<"Veiculo"> | string | null
    tipoTracao?: StringNullableFilter<"Veiculo"> | string | null
    cambio?: StringNullableFilter<"Veiculo"> | string | null
    licenciamento?: StringNullableFilter<"Veiculo"> | string | null
    apresentacao?: StringNullableFilter<"Veiculo"> | string | null
    estribo?: StringNullableFilter<"Veiculo"> | string | null
    radio?: StringNullableFilter<"Veiculo"> | string | null
    grafismo?: StringNullableFilter<"Veiculo"> | string | null
    monocela?: StringNullableFilter<"Veiculo"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"Veiculo"> | Date | string | null
    localizacao?: StringNullableFilter<"Veiculo"> | string | null
  }

  export type VeiculoAjusteUpsertWithWhereUniqueWithoutOpmInput = {
    where: VeiculoAjusteWhereUniqueInput
    update: XOR<VeiculoAjusteUpdateWithoutOpmInput, VeiculoAjusteUncheckedUpdateWithoutOpmInput>
    create: XOR<VeiculoAjusteCreateWithoutOpmInput, VeiculoAjusteUncheckedCreateWithoutOpmInput>
  }

  export type VeiculoAjusteUpdateWithWhereUniqueWithoutOpmInput = {
    where: VeiculoAjusteWhereUniqueInput
    data: XOR<VeiculoAjusteUpdateWithoutOpmInput, VeiculoAjusteUncheckedUpdateWithoutOpmInput>
  }

  export type VeiculoAjusteUpdateManyWithWhereWithoutOpmInput = {
    where: VeiculoAjusteScalarWhereInput
    data: XOR<VeiculoAjusteUpdateManyMutationInput, VeiculoAjusteUncheckedUpdateManyWithoutOpmInput>
  }

  export type VeiculoAjusteScalarWhereInput = {
    AND?: VeiculoAjusteScalarWhereInput | VeiculoAjusteScalarWhereInput[]
    OR?: VeiculoAjusteScalarWhereInput[]
    NOT?: VeiculoAjusteScalarWhereInput | VeiculoAjusteScalarWhereInput[]
    id?: StringFilter<"VeiculoAjuste"> | string
    patrimonio?: StringFilter<"VeiculoAjuste"> | string
    placa?: StringFilter<"VeiculoAjuste"> | string
    marcaModelo?: StringFilter<"VeiculoAjuste"> | string
    ano?: IntFilter<"VeiculoAjuste"> | number
    grupo?: StringFilter<"VeiculoAjuste"> | string
    programa?: StringFilter<"VeiculoAjuste"> | string
    opmCodigo?: StringFilter<"VeiculoAjuste"> | string
    prefixo?: StringNullableFilter<"VeiculoAjuste"> | string | null
    situacao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    pertence?: StringNullableFilter<"VeiculoAjuste"> | string | null
    informacaoAdicional?: StringNullableFilter<"VeiculoAjuste"> | string | null
    tipoTracao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    cambio?: StringNullableFilter<"VeiculoAjuste"> | string | null
    licenciamento?: StringNullableFilter<"VeiculoAjuste"> | string | null
    apresentacao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    estribo?: StringNullableFilter<"VeiculoAjuste"> | string | null
    radio?: StringNullableFilter<"VeiculoAjuste"> | string | null
    grafismo?: StringNullableFilter<"VeiculoAjuste"> | string | null
    monocela?: StringNullableFilter<"VeiculoAjuste"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"VeiculoAjuste"> | Date | string | null
    localizacao?: StringNullableFilter<"VeiculoAjuste"> | string | null
    alteradoEm?: DateTimeNullableFilter<"VeiculoAjuste"> | Date | string | null
  }

  export type VeiculoSnapshotUpsertWithWhereUniqueWithoutOpmInput = {
    where: VeiculoSnapshotWhereUniqueInput
    update: XOR<VeiculoSnapshotUpdateWithoutOpmInput, VeiculoSnapshotUncheckedUpdateWithoutOpmInput>
    create: XOR<VeiculoSnapshotCreateWithoutOpmInput, VeiculoSnapshotUncheckedCreateWithoutOpmInput>
  }

  export type VeiculoSnapshotUpdateWithWhereUniqueWithoutOpmInput = {
    where: VeiculoSnapshotWhereUniqueInput
    data: XOR<VeiculoSnapshotUpdateWithoutOpmInput, VeiculoSnapshotUncheckedUpdateWithoutOpmInput>
  }

  export type VeiculoSnapshotUpdateManyWithWhereWithoutOpmInput = {
    where: VeiculoSnapshotScalarWhereInput
    data: XOR<VeiculoSnapshotUpdateManyMutationInput, VeiculoSnapshotUncheckedUpdateManyWithoutOpmInput>
  }

  export type VeiculoSnapshotScalarWhereInput = {
    AND?: VeiculoSnapshotScalarWhereInput | VeiculoSnapshotScalarWhereInput[]
    OR?: VeiculoSnapshotScalarWhereInput[]
    NOT?: VeiculoSnapshotScalarWhereInput | VeiculoSnapshotScalarWhereInput[]
    id?: StringFilter<"VeiculoSnapshot"> | string
    mesReferencia?: StringFilter<"VeiculoSnapshot"> | string
    patrimonio?: StringFilter<"VeiculoSnapshot"> | string
    placa?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    marcaModelo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    ano?: IntNullableFilter<"VeiculoSnapshot"> | number | null
    grupo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    programa?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    opmCodigo?: StringFilter<"VeiculoSnapshot"> | string
    prefixo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    situacao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    pertence?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    informacaoAdicional?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    tipoTracao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    cambio?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    licenciamento?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    apresentacao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    estribo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    radio?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    grafismo?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    monocela?: StringNullableFilter<"VeiculoSnapshot"> | string | null
    ultimaRevisao?: DateTimeNullableFilter<"VeiculoSnapshot"> | Date | string | null
    localizacao?: StringNullableFilter<"VeiculoSnapshot"> | string | null
  }

  export type OpmCreateWithoutMetasInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
    veiculos?: VeiculoCreateNestedManyWithoutOpmInput
    veiculosAjuste?: VeiculoAjusteCreateNestedManyWithoutOpmInput
    veiculosSnapshot?: VeiculoSnapshotCreateNestedManyWithoutOpmInput
  }

  export type OpmUncheckedCreateWithoutMetasInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutOpmInput
    veiculosAjuste?: VeiculoAjusteUncheckedCreateNestedManyWithoutOpmInput
    veiculosSnapshot?: VeiculoSnapshotUncheckedCreateNestedManyWithoutOpmInput
  }

  export type OpmCreateOrConnectWithoutMetasInput = {
    where: OpmWhereUniqueInput
    create: XOR<OpmCreateWithoutMetasInput, OpmUncheckedCreateWithoutMetasInput>
  }

  export type OpmUpsertWithoutMetasInput = {
    update: XOR<OpmUpdateWithoutMetasInput, OpmUncheckedUpdateWithoutMetasInput>
    create: XOR<OpmCreateWithoutMetasInput, OpmUncheckedCreateWithoutMetasInput>
    where?: OpmWhereInput
  }

  export type OpmUpdateToOneWithWhereWithoutMetasInput = {
    where?: OpmWhereInput
    data: XOR<OpmUpdateWithoutMetasInput, OpmUncheckedUpdateWithoutMetasInput>
  }

  export type OpmUpdateWithoutMetasInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
    veiculos?: VeiculoUpdateManyWithoutOpmNestedInput
    veiculosAjuste?: VeiculoAjusteUpdateManyWithoutOpmNestedInput
    veiculosSnapshot?: VeiculoSnapshotUpdateManyWithoutOpmNestedInput
  }

  export type OpmUncheckedUpdateWithoutMetasInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
    veiculos?: VeiculoUncheckedUpdateManyWithoutOpmNestedInput
    veiculosAjuste?: VeiculoAjusteUncheckedUpdateManyWithoutOpmNestedInput
    veiculosSnapshot?: VeiculoSnapshotUncheckedUpdateManyWithoutOpmNestedInput
  }

  export type OpmCreateWithoutVeiculosInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
    metas?: QffMetaCreateNestedManyWithoutOpmInput
    veiculosAjuste?: VeiculoAjusteCreateNestedManyWithoutOpmInput
    veiculosSnapshot?: VeiculoSnapshotCreateNestedManyWithoutOpmInput
  }

  export type OpmUncheckedCreateWithoutVeiculosInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
    metas?: QffMetaUncheckedCreateNestedManyWithoutOpmInput
    veiculosAjuste?: VeiculoAjusteUncheckedCreateNestedManyWithoutOpmInput
    veiculosSnapshot?: VeiculoSnapshotUncheckedCreateNestedManyWithoutOpmInput
  }

  export type OpmCreateOrConnectWithoutVeiculosInput = {
    where: OpmWhereUniqueInput
    create: XOR<OpmCreateWithoutVeiculosInput, OpmUncheckedCreateWithoutVeiculosInput>
  }

  export type OpmUpsertWithoutVeiculosInput = {
    update: XOR<OpmUpdateWithoutVeiculosInput, OpmUncheckedUpdateWithoutVeiculosInput>
    create: XOR<OpmCreateWithoutVeiculosInput, OpmUncheckedCreateWithoutVeiculosInput>
    where?: OpmWhereInput
  }

  export type OpmUpdateToOneWithWhereWithoutVeiculosInput = {
    where?: OpmWhereInput
    data: XOR<OpmUpdateWithoutVeiculosInput, OpmUncheckedUpdateWithoutVeiculosInput>
  }

  export type OpmUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: QffMetaUpdateManyWithoutOpmNestedInput
    veiculosAjuste?: VeiculoAjusteUpdateManyWithoutOpmNestedInput
    veiculosSnapshot?: VeiculoSnapshotUpdateManyWithoutOpmNestedInput
  }

  export type OpmUncheckedUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: QffMetaUncheckedUpdateManyWithoutOpmNestedInput
    veiculosAjuste?: VeiculoAjusteUncheckedUpdateManyWithoutOpmNestedInput
    veiculosSnapshot?: VeiculoSnapshotUncheckedUpdateManyWithoutOpmNestedInput
  }

  export type OpmCreateWithoutVeiculosAjusteInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
    metas?: QffMetaCreateNestedManyWithoutOpmInput
    veiculos?: VeiculoCreateNestedManyWithoutOpmInput
    veiculosSnapshot?: VeiculoSnapshotCreateNestedManyWithoutOpmInput
  }

  export type OpmUncheckedCreateWithoutVeiculosAjusteInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
    metas?: QffMetaUncheckedCreateNestedManyWithoutOpmInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutOpmInput
    veiculosSnapshot?: VeiculoSnapshotUncheckedCreateNestedManyWithoutOpmInput
  }

  export type OpmCreateOrConnectWithoutVeiculosAjusteInput = {
    where: OpmWhereUniqueInput
    create: XOR<OpmCreateWithoutVeiculosAjusteInput, OpmUncheckedCreateWithoutVeiculosAjusteInput>
  }

  export type OpmUpsertWithoutVeiculosAjusteInput = {
    update: XOR<OpmUpdateWithoutVeiculosAjusteInput, OpmUncheckedUpdateWithoutVeiculosAjusteInput>
    create: XOR<OpmCreateWithoutVeiculosAjusteInput, OpmUncheckedCreateWithoutVeiculosAjusteInput>
    where?: OpmWhereInput
  }

  export type OpmUpdateToOneWithWhereWithoutVeiculosAjusteInput = {
    where?: OpmWhereInput
    data: XOR<OpmUpdateWithoutVeiculosAjusteInput, OpmUncheckedUpdateWithoutVeiculosAjusteInput>
  }

  export type OpmUpdateWithoutVeiculosAjusteInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: QffMetaUpdateManyWithoutOpmNestedInput
    veiculos?: VeiculoUpdateManyWithoutOpmNestedInput
    veiculosSnapshot?: VeiculoSnapshotUpdateManyWithoutOpmNestedInput
  }

  export type OpmUncheckedUpdateWithoutVeiculosAjusteInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: QffMetaUncheckedUpdateManyWithoutOpmNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutOpmNestedInput
    veiculosSnapshot?: VeiculoSnapshotUncheckedUpdateManyWithoutOpmNestedInput
  }

  export type OpmCreateWithoutVeiculosSnapshotInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
    metas?: QffMetaCreateNestedManyWithoutOpmInput
    veiculos?: VeiculoCreateNestedManyWithoutOpmInput
    veiculosAjuste?: VeiculoAjusteCreateNestedManyWithoutOpmInput
  }

  export type OpmUncheckedCreateWithoutVeiculosSnapshotInput = {
    id?: string
    codigo: string
    nome: string
    municipio?: string | null
    macroComando?: string | null
    metas?: QffMetaUncheckedCreateNestedManyWithoutOpmInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutOpmInput
    veiculosAjuste?: VeiculoAjusteUncheckedCreateNestedManyWithoutOpmInput
  }

  export type OpmCreateOrConnectWithoutVeiculosSnapshotInput = {
    where: OpmWhereUniqueInput
    create: XOR<OpmCreateWithoutVeiculosSnapshotInput, OpmUncheckedCreateWithoutVeiculosSnapshotInput>
  }

  export type OpmUpsertWithoutVeiculosSnapshotInput = {
    update: XOR<OpmUpdateWithoutVeiculosSnapshotInput, OpmUncheckedUpdateWithoutVeiculosSnapshotInput>
    create: XOR<OpmCreateWithoutVeiculosSnapshotInput, OpmUncheckedCreateWithoutVeiculosSnapshotInput>
    where?: OpmWhereInput
  }

  export type OpmUpdateToOneWithWhereWithoutVeiculosSnapshotInput = {
    where?: OpmWhereInput
    data: XOR<OpmUpdateWithoutVeiculosSnapshotInput, OpmUncheckedUpdateWithoutVeiculosSnapshotInput>
  }

  export type OpmUpdateWithoutVeiculosSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: QffMetaUpdateManyWithoutOpmNestedInput
    veiculos?: VeiculoUpdateManyWithoutOpmNestedInput
    veiculosAjuste?: VeiculoAjusteUpdateManyWithoutOpmNestedInput
  }

  export type OpmUncheckedUpdateWithoutVeiculosSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    macroComando?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: QffMetaUncheckedUpdateManyWithoutOpmNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutOpmNestedInput
    veiculosAjuste?: VeiculoAjusteUncheckedUpdateManyWithoutOpmNestedInput
  }

  export type EmprestimoCreateWithoutVeiculoInput = {
    id?: string
    dataRetirada?: Date | string
    quemRetirou: string
    kmRetirada?: number | null
    dataDevolucao?: Date | string | null
    quemEntregou?: string | null
    kmDevolucao?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type EmprestimoUncheckedCreateWithoutVeiculoInput = {
    id?: string
    dataRetirada?: Date | string
    quemRetirou: string
    kmRetirada?: number | null
    dataDevolucao?: Date | string | null
    quemEntregou?: string | null
    kmDevolucao?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type EmprestimoCreateOrConnectWithoutVeiculoInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutVeiculoInput, EmprestimoUncheckedCreateWithoutVeiculoInput>
  }

  export type EmprestimoCreateManyVeiculoInputEnvelope = {
    data: EmprestimoCreateManyVeiculoInput | EmprestimoCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type EmprestimoUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: EmprestimoWhereUniqueInput
    update: XOR<EmprestimoUpdateWithoutVeiculoInput, EmprestimoUncheckedUpdateWithoutVeiculoInput>
    create: XOR<EmprestimoCreateWithoutVeiculoInput, EmprestimoUncheckedCreateWithoutVeiculoInput>
  }

  export type EmprestimoUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: EmprestimoWhereUniqueInput
    data: XOR<EmprestimoUpdateWithoutVeiculoInput, EmprestimoUncheckedUpdateWithoutVeiculoInput>
  }

  export type EmprestimoUpdateManyWithWhereWithoutVeiculoInput = {
    where: EmprestimoScalarWhereInput
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type EmprestimoScalarWhereInput = {
    AND?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
    OR?: EmprestimoScalarWhereInput[]
    NOT?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
    id?: StringFilter<"Emprestimo"> | string
    veiculoId?: StringFilter<"Emprestimo"> | string
    dataRetirada?: DateTimeFilter<"Emprestimo"> | Date | string
    quemRetirou?: StringFilter<"Emprestimo"> | string
    kmRetirada?: IntNullableFilter<"Emprestimo"> | number | null
    dataDevolucao?: DateTimeNullableFilter<"Emprestimo"> | Date | string | null
    quemEntregou?: StringNullableFilter<"Emprestimo"> | string | null
    kmDevolucao?: IntNullableFilter<"Emprestimo"> | number | null
    observacao?: StringNullableFilter<"Emprestimo"> | string | null
    criadoEm?: DateTimeFilter<"Emprestimo"> | Date | string
    atualizadoEm?: DateTimeFilter<"Emprestimo"> | Date | string
  }

  export type VeiculoEmprestimoCreateWithoutEmprestimosInput = {
    id?: string
    placa: string
    patrimonio?: string | null
    prefixo?: string | null
    marcaModelo?: string | null
    ano?: string | null
    cor?: string | null
    pertence?: string | null
    observacoes?: string | null
    detentorAtual?: string | null
    unidade?: string | null
    motivo?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    statusUso?: string
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type VeiculoEmprestimoUncheckedCreateWithoutEmprestimosInput = {
    id?: string
    placa: string
    patrimonio?: string | null
    prefixo?: string | null
    marcaModelo?: string | null
    ano?: string | null
    cor?: string | null
    pertence?: string | null
    observacoes?: string | null
    detentorAtual?: string | null
    unidade?: string | null
    motivo?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    statusUso?: string
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type VeiculoEmprestimoCreateOrConnectWithoutEmprestimosInput = {
    where: VeiculoEmprestimoWhereUniqueInput
    create: XOR<VeiculoEmprestimoCreateWithoutEmprestimosInput, VeiculoEmprestimoUncheckedCreateWithoutEmprestimosInput>
  }

  export type VeiculoEmprestimoUpsertWithoutEmprestimosInput = {
    update: XOR<VeiculoEmprestimoUpdateWithoutEmprestimosInput, VeiculoEmprestimoUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<VeiculoEmprestimoCreateWithoutEmprestimosInput, VeiculoEmprestimoUncheckedCreateWithoutEmprestimosInput>
    where?: VeiculoEmprestimoWhereInput
  }

  export type VeiculoEmprestimoUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: VeiculoEmprestimoWhereInput
    data: XOR<VeiculoEmprestimoUpdateWithoutEmprestimosInput, VeiculoEmprestimoUncheckedUpdateWithoutEmprestimosInput>
  }

  export type VeiculoEmprestimoUpdateWithoutEmprestimosInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    patrimonio?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    detentorAtual?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    statusUso?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeiculoEmprestimoUncheckedUpdateWithoutEmprestimosInput = {
    id?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    patrimonio?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    detentorAtual?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    statusUso?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QffMetaCreateManyOpmInput = {
    id?: string
    grupo: string
    programa: string
    quantidadeFixada: number
  }

  export type VeiculoCreateManyOpmInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
  }

  export type VeiculoAjusteCreateManyOpmInput = {
    id?: string
    patrimonio: string
    placa: string
    marcaModelo: string
    ano: number
    grupo: string
    programa: string
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
    alteradoEm?: Date | string | null
  }

  export type VeiculoSnapshotCreateManyOpmInput = {
    id?: string
    mesReferencia: string
    patrimonio: string
    placa?: string | null
    marcaModelo?: string | null
    ano?: number | null
    grupo?: string | null
    programa?: string | null
    prefixo?: string | null
    situacao?: string | null
    pertence?: string | null
    informacaoAdicional?: string | null
    tipoTracao?: string | null
    cambio?: string | null
    licenciamento?: string | null
    apresentacao?: string | null
    estribo?: string | null
    radio?: string | null
    grafismo?: string | null
    monocela?: string | null
    ultimaRevisao?: Date | string | null
    localizacao?: string | null
  }

  export type QffMetaUpdateWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    quantidadeFixada?: IntFieldUpdateOperationsInput | number
  }

  export type QffMetaUncheckedUpdateWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    quantidadeFixada?: IntFieldUpdateOperationsInput | number
  }

  export type QffMetaUncheckedUpdateManyWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    quantidadeFixada?: IntFieldUpdateOperationsInput | number
  }

  export type VeiculoUpdateWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoUncheckedUpdateWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoUncheckedUpdateManyWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoAjusteUpdateWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VeiculoAjusteUncheckedUpdateWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VeiculoAjusteUncheckedUpdateManyWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    marcaModelo?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    grupo?: StringFieldUpdateOperationsInput | string
    programa?: StringFieldUpdateOperationsInput | string
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VeiculoSnapshotUpdateWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    programa?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoSnapshotUncheckedUpdateWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    programa?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoSnapshotUncheckedUpdateManyWithoutOpmInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    patrimonio?: StringFieldUpdateOperationsInput | string
    placa?: NullableStringFieldUpdateOperationsInput | string | null
    marcaModelo?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    programa?: NullableStringFieldUpdateOperationsInput | string | null
    prefixo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    pertence?: NullableStringFieldUpdateOperationsInput | string | null
    informacaoAdicional?: NullableStringFieldUpdateOperationsInput | string | null
    tipoTracao?: NullableStringFieldUpdateOperationsInput | string | null
    cambio?: NullableStringFieldUpdateOperationsInput | string | null
    licenciamento?: NullableStringFieldUpdateOperationsInput | string | null
    apresentacao?: NullableStringFieldUpdateOperationsInput | string | null
    estribo?: NullableStringFieldUpdateOperationsInput | string | null
    radio?: NullableStringFieldUpdateOperationsInput | string | null
    grafismo?: NullableStringFieldUpdateOperationsInput | string | null
    monocela?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaRevisao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmprestimoCreateManyVeiculoInput = {
    id?: string
    dataRetirada?: Date | string
    quemRetirou: string
    kmRetirada?: number | null
    dataDevolucao?: Date | string | null
    quemEntregou?: string | null
    kmDevolucao?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type EmprestimoUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataRetirada?: DateTimeFieldUpdateOperationsInput | Date | string
    quemRetirou?: StringFieldUpdateOperationsInput | string
    kmRetirada?: NullableIntFieldUpdateOperationsInput | number | null
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quemEntregou?: NullableStringFieldUpdateOperationsInput | string | null
    kmDevolucao?: NullableIntFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoUncheckedUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataRetirada?: DateTimeFieldUpdateOperationsInput | Date | string
    quemRetirou?: StringFieldUpdateOperationsInput | string
    kmRetirada?: NullableIntFieldUpdateOperationsInput | number | null
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quemEntregou?: NullableStringFieldUpdateOperationsInput | string | null
    kmDevolucao?: NullableIntFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoUncheckedUpdateManyWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataRetirada?: DateTimeFieldUpdateOperationsInput | Date | string
    quemRetirou?: StringFieldUpdateOperationsInput | string
    kmRetirada?: NullableIntFieldUpdateOperationsInput | number | null
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quemEntregou?: NullableStringFieldUpdateOperationsInput | string | null
    kmDevolucao?: NullableIntFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OpmCountOutputTypeDefaultArgs instead
     */
    export type OpmCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OpmCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VeiculoEmprestimoCountOutputTypeDefaultArgs instead
     */
    export type VeiculoEmprestimoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VeiculoEmprestimoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OpmDefaultArgs instead
     */
    export type OpmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OpmDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QffMetaDefaultArgs instead
     */
    export type QffMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QffMetaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VeiculoDefaultArgs instead
     */
    export type VeiculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VeiculoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VeiculoAjusteDefaultArgs instead
     */
    export type VeiculoAjusteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VeiculoAjusteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VeiculoSnapshotDefaultArgs instead
     */
    export type VeiculoSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VeiculoSnapshotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VeiculoEmprestimoDefaultArgs instead
     */
    export type VeiculoEmprestimoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VeiculoEmprestimoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmprestimoDefaultArgs instead
     */
    export type EmprestimoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmprestimoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}