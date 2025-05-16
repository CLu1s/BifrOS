
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
 * Model WallpaperQueue
 * 
 */
export type WallpaperQueue = $Result.DefaultSelection<Prisma.$WallpaperQueuePayload>
/**
 * Model WallpaperHistory
 * 
 */
export type WallpaperHistory = $Result.DefaultSelection<Prisma.$WallpaperHistoryPayload>
/**
 * Model FavoriteWallpaper
 * 
 */
export type FavoriteWallpaper = $Result.DefaultSelection<Prisma.$FavoriteWallpaperPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model SystemSettings
 * 
 */
export type SystemSettings = $Result.DefaultSelection<Prisma.$SystemSettingsPayload>
/**
 * Model ScheduledTask
 * 
 */
export type ScheduledTask = $Result.DefaultSelection<Prisma.$ScheduledTaskPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WallpaperQueues
 * const wallpaperQueues = await prisma.wallpaperQueue.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more WallpaperQueues
   * const wallpaperQueues = await prisma.wallpaperQueue.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.wallpaperQueue`: Exposes CRUD operations for the **WallpaperQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WallpaperQueues
    * const wallpaperQueues = await prisma.wallpaperQueue.findMany()
    * ```
    */
  get wallpaperQueue(): Prisma.WallpaperQueueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallpaperHistory`: Exposes CRUD operations for the **WallpaperHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WallpaperHistories
    * const wallpaperHistories = await prisma.wallpaperHistory.findMany()
    * ```
    */
  get wallpaperHistory(): Prisma.WallpaperHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteWallpaper`: Exposes CRUD operations for the **FavoriteWallpaper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteWallpapers
    * const favoriteWallpapers = await prisma.favoriteWallpaper.findMany()
    * ```
    */
  get favoriteWallpaper(): Prisma.FavoriteWallpaperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSettings`: Exposes CRUD operations for the **SystemSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSettings.findMany()
    * ```
    */
  get systemSettings(): Prisma.SystemSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduledTask`: Exposes CRUD operations for the **ScheduledTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduledTasks
    * const scheduledTasks = await prisma.scheduledTask.findMany()
    * ```
    */
  get scheduledTask(): Prisma.ScheduledTaskDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    WallpaperQueue: 'WallpaperQueue',
    WallpaperHistory: 'WallpaperHistory',
    FavoriteWallpaper: 'FavoriteWallpaper',
    Device: 'Device',
    SystemSettings: 'SystemSettings',
    ScheduledTask: 'ScheduledTask'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "wallpaperQueue" | "wallpaperHistory" | "favoriteWallpaper" | "device" | "systemSettings" | "scheduledTask"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WallpaperQueue: {
        payload: Prisma.$WallpaperQueuePayload<ExtArgs>
        fields: Prisma.WallpaperQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WallpaperQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WallpaperQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload>
          }
          findFirst: {
            args: Prisma.WallpaperQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WallpaperQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload>
          }
          findMany: {
            args: Prisma.WallpaperQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload>[]
          }
          create: {
            args: Prisma.WallpaperQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload>
          }
          createMany: {
            args: Prisma.WallpaperQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WallpaperQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload>[]
          }
          delete: {
            args: Prisma.WallpaperQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload>
          }
          update: {
            args: Prisma.WallpaperQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload>
          }
          deleteMany: {
            args: Prisma.WallpaperQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WallpaperQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WallpaperQueueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload>[]
          }
          upsert: {
            args: Prisma.WallpaperQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperQueuePayload>
          }
          aggregate: {
            args: Prisma.WallpaperQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallpaperQueue>
          }
          groupBy: {
            args: Prisma.WallpaperQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<WallpaperQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.WallpaperQueueCountArgs<ExtArgs>
            result: $Utils.Optional<WallpaperQueueCountAggregateOutputType> | number
          }
        }
      }
      WallpaperHistory: {
        payload: Prisma.$WallpaperHistoryPayload<ExtArgs>
        fields: Prisma.WallpaperHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WallpaperHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WallpaperHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload>
          }
          findFirst: {
            args: Prisma.WallpaperHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WallpaperHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload>
          }
          findMany: {
            args: Prisma.WallpaperHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload>[]
          }
          create: {
            args: Prisma.WallpaperHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload>
          }
          createMany: {
            args: Prisma.WallpaperHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WallpaperHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload>[]
          }
          delete: {
            args: Prisma.WallpaperHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload>
          }
          update: {
            args: Prisma.WallpaperHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload>
          }
          deleteMany: {
            args: Prisma.WallpaperHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WallpaperHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WallpaperHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload>[]
          }
          upsert: {
            args: Prisma.WallpaperHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpaperHistoryPayload>
          }
          aggregate: {
            args: Prisma.WallpaperHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallpaperHistory>
          }
          groupBy: {
            args: Prisma.WallpaperHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WallpaperHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WallpaperHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<WallpaperHistoryCountAggregateOutputType> | number
          }
        }
      }
      FavoriteWallpaper: {
        payload: Prisma.$FavoriteWallpaperPayload<ExtArgs>
        fields: Prisma.FavoriteWallpaperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteWallpaperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteWallpaperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload>
          }
          findFirst: {
            args: Prisma.FavoriteWallpaperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteWallpaperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload>
          }
          findMany: {
            args: Prisma.FavoriteWallpaperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload>[]
          }
          create: {
            args: Prisma.FavoriteWallpaperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload>
          }
          createMany: {
            args: Prisma.FavoriteWallpaperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteWallpaperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload>[]
          }
          delete: {
            args: Prisma.FavoriteWallpaperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload>
          }
          update: {
            args: Prisma.FavoriteWallpaperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteWallpaperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteWallpaperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteWallpaperUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload>[]
          }
          upsert: {
            args: Prisma.FavoriteWallpaperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteWallpaperPayload>
          }
          aggregate: {
            args: Prisma.FavoriteWallpaperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteWallpaper>
          }
          groupBy: {
            args: Prisma.FavoriteWallpaperGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteWallpaperGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteWallpaperCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteWallpaperCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      SystemSettings: {
        payload: Prisma.$SystemSettingsPayload<ExtArgs>
        fields: Prisma.SystemSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findMany: {
            args: Prisma.SystemSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          create: {
            args: Prisma.SystemSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          createMany: {
            args: Prisma.SystemSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          update: {
            args: Prisma.SystemSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSettings>
          }
          groupBy: {
            args: Prisma.SystemSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsCountAggregateOutputType> | number
          }
        }
      }
      ScheduledTask: {
        payload: Prisma.$ScheduledTaskPayload<ExtArgs>
        fields: Prisma.ScheduledTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduledTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduledTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload>
          }
          findFirst: {
            args: Prisma.ScheduledTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduledTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload>
          }
          findMany: {
            args: Prisma.ScheduledTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload>[]
          }
          create: {
            args: Prisma.ScheduledTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload>
          }
          createMany: {
            args: Prisma.ScheduledTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduledTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload>[]
          }
          delete: {
            args: Prisma.ScheduledTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload>
          }
          update: {
            args: Prisma.ScheduledTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload>
          }
          deleteMany: {
            args: Prisma.ScheduledTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduledTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduledTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload>[]
          }
          upsert: {
            args: Prisma.ScheduledTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTaskPayload>
          }
          aggregate: {
            args: Prisma.ScheduledTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduledTask>
          }
          groupBy: {
            args: Prisma.ScheduledTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduledTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduledTaskCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduledTaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    wallpaperQueue?: WallpaperQueueOmit
    wallpaperHistory?: WallpaperHistoryOmit
    favoriteWallpaper?: FavoriteWallpaperOmit
    device?: DeviceOmit
    systemSettings?: SystemSettingsOmit
    scheduledTask?: ScheduledTaskOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model WallpaperQueue
   */

  export type AggregateWallpaperQueue = {
    _count: WallpaperQueueCountAggregateOutputType | null
    _avg: WallpaperQueueAvgAggregateOutputType | null
    _sum: WallpaperQueueSumAggregateOutputType | null
    _min: WallpaperQueueMinAggregateOutputType | null
    _max: WallpaperQueueMaxAggregateOutputType | null
  }

  export type WallpaperQueueAvgAggregateOutputType = {
    priority: number | null
    aiNsfwScore: number | null
  }

  export type WallpaperQueueSumAggregateOutputType = {
    priority: number | null
    aiNsfwScore: number | null
  }

  export type WallpaperQueueMinAggregateOutputType = {
    id: string | null
    wallhavenId: string | null
    imageUrl: string | null
    thumbnailUrl: string | null
    addedAt: Date | null
    priority: number | null
    deviceId: string | null
    status: string | null
    purity: string | null
    resolution: string | null
    category: string | null
    aiProcessingStatus: string | null
    aiTags: string | null
    aiColors: string | null
    aiContentLabels: string | null
    aiNsfwScore: number | null
    aiProcessedAt: Date | null
  }

  export type WallpaperQueueMaxAggregateOutputType = {
    id: string | null
    wallhavenId: string | null
    imageUrl: string | null
    thumbnailUrl: string | null
    addedAt: Date | null
    priority: number | null
    deviceId: string | null
    status: string | null
    purity: string | null
    resolution: string | null
    category: string | null
    aiProcessingStatus: string | null
    aiTags: string | null
    aiColors: string | null
    aiContentLabels: string | null
    aiNsfwScore: number | null
    aiProcessedAt: Date | null
  }

  export type WallpaperQueueCountAggregateOutputType = {
    id: number
    wallhavenId: number
    imageUrl: number
    thumbnailUrl: number
    addedAt: number
    priority: number
    deviceId: number
    status: number
    purity: number
    resolution: number
    category: number
    aiProcessingStatus: number
    aiTags: number
    aiColors: number
    aiContentLabels: number
    aiNsfwScore: number
    aiProcessedAt: number
    _all: number
  }


  export type WallpaperQueueAvgAggregateInputType = {
    priority?: true
    aiNsfwScore?: true
  }

  export type WallpaperQueueSumAggregateInputType = {
    priority?: true
    aiNsfwScore?: true
  }

  export type WallpaperQueueMinAggregateInputType = {
    id?: true
    wallhavenId?: true
    imageUrl?: true
    thumbnailUrl?: true
    addedAt?: true
    priority?: true
    deviceId?: true
    status?: true
    purity?: true
    resolution?: true
    category?: true
    aiProcessingStatus?: true
    aiTags?: true
    aiColors?: true
    aiContentLabels?: true
    aiNsfwScore?: true
    aiProcessedAt?: true
  }

  export type WallpaperQueueMaxAggregateInputType = {
    id?: true
    wallhavenId?: true
    imageUrl?: true
    thumbnailUrl?: true
    addedAt?: true
    priority?: true
    deviceId?: true
    status?: true
    purity?: true
    resolution?: true
    category?: true
    aiProcessingStatus?: true
    aiTags?: true
    aiColors?: true
    aiContentLabels?: true
    aiNsfwScore?: true
    aiProcessedAt?: true
  }

  export type WallpaperQueueCountAggregateInputType = {
    id?: true
    wallhavenId?: true
    imageUrl?: true
    thumbnailUrl?: true
    addedAt?: true
    priority?: true
    deviceId?: true
    status?: true
    purity?: true
    resolution?: true
    category?: true
    aiProcessingStatus?: true
    aiTags?: true
    aiColors?: true
    aiContentLabels?: true
    aiNsfwScore?: true
    aiProcessedAt?: true
    _all?: true
  }

  export type WallpaperQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WallpaperQueue to aggregate.
     */
    where?: WallpaperQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallpaperQueues to fetch.
     */
    orderBy?: WallpaperQueueOrderByWithRelationInput | WallpaperQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WallpaperQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallpaperQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallpaperQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WallpaperQueues
    **/
    _count?: true | WallpaperQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WallpaperQueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WallpaperQueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WallpaperQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WallpaperQueueMaxAggregateInputType
  }

  export type GetWallpaperQueueAggregateType<T extends WallpaperQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateWallpaperQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallpaperQueue[P]>
      : GetScalarType<T[P], AggregateWallpaperQueue[P]>
  }




  export type WallpaperQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WallpaperQueueWhereInput
    orderBy?: WallpaperQueueOrderByWithAggregationInput | WallpaperQueueOrderByWithAggregationInput[]
    by: WallpaperQueueScalarFieldEnum[] | WallpaperQueueScalarFieldEnum
    having?: WallpaperQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WallpaperQueueCountAggregateInputType | true
    _avg?: WallpaperQueueAvgAggregateInputType
    _sum?: WallpaperQueueSumAggregateInputType
    _min?: WallpaperQueueMinAggregateInputType
    _max?: WallpaperQueueMaxAggregateInputType
  }

  export type WallpaperQueueGroupByOutputType = {
    id: string
    wallhavenId: string
    imageUrl: string
    thumbnailUrl: string
    addedAt: Date
    priority: number
    deviceId: string | null
    status: string
    purity: string
    resolution: string
    category: string
    aiProcessingStatus: string | null
    aiTags: string | null
    aiColors: string | null
    aiContentLabels: string | null
    aiNsfwScore: number | null
    aiProcessedAt: Date | null
    _count: WallpaperQueueCountAggregateOutputType | null
    _avg: WallpaperQueueAvgAggregateOutputType | null
    _sum: WallpaperQueueSumAggregateOutputType | null
    _min: WallpaperQueueMinAggregateOutputType | null
    _max: WallpaperQueueMaxAggregateOutputType | null
  }

  type GetWallpaperQueueGroupByPayload<T extends WallpaperQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WallpaperQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WallpaperQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WallpaperQueueGroupByOutputType[P]>
            : GetScalarType<T[P], WallpaperQueueGroupByOutputType[P]>
        }
      >
    >


  export type WallpaperQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallhavenId?: boolean
    imageUrl?: boolean
    thumbnailUrl?: boolean
    addedAt?: boolean
    priority?: boolean
    deviceId?: boolean
    status?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    aiProcessingStatus?: boolean
    aiTags?: boolean
    aiColors?: boolean
    aiContentLabels?: boolean
    aiNsfwScore?: boolean
    aiProcessedAt?: boolean
  }, ExtArgs["result"]["wallpaperQueue"]>

  export type WallpaperQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallhavenId?: boolean
    imageUrl?: boolean
    thumbnailUrl?: boolean
    addedAt?: boolean
    priority?: boolean
    deviceId?: boolean
    status?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    aiProcessingStatus?: boolean
    aiTags?: boolean
    aiColors?: boolean
    aiContentLabels?: boolean
    aiNsfwScore?: boolean
    aiProcessedAt?: boolean
  }, ExtArgs["result"]["wallpaperQueue"]>

  export type WallpaperQueueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallhavenId?: boolean
    imageUrl?: boolean
    thumbnailUrl?: boolean
    addedAt?: boolean
    priority?: boolean
    deviceId?: boolean
    status?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    aiProcessingStatus?: boolean
    aiTags?: boolean
    aiColors?: boolean
    aiContentLabels?: boolean
    aiNsfwScore?: boolean
    aiProcessedAt?: boolean
  }, ExtArgs["result"]["wallpaperQueue"]>

  export type WallpaperQueueSelectScalar = {
    id?: boolean
    wallhavenId?: boolean
    imageUrl?: boolean
    thumbnailUrl?: boolean
    addedAt?: boolean
    priority?: boolean
    deviceId?: boolean
    status?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    aiProcessingStatus?: boolean
    aiTags?: boolean
    aiColors?: boolean
    aiContentLabels?: boolean
    aiNsfwScore?: boolean
    aiProcessedAt?: boolean
  }

  export type WallpaperQueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wallhavenId" | "imageUrl" | "thumbnailUrl" | "addedAt" | "priority" | "deviceId" | "status" | "purity" | "resolution" | "category" | "aiProcessingStatus" | "aiTags" | "aiColors" | "aiContentLabels" | "aiNsfwScore" | "aiProcessedAt", ExtArgs["result"]["wallpaperQueue"]>

  export type $WallpaperQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WallpaperQueue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wallhavenId: string
      imageUrl: string
      thumbnailUrl: string
      addedAt: Date
      priority: number
      deviceId: string | null
      status: string
      purity: string
      resolution: string
      category: string
      aiProcessingStatus: string | null
      aiTags: string | null
      aiColors: string | null
      aiContentLabels: string | null
      aiNsfwScore: number | null
      aiProcessedAt: Date | null
    }, ExtArgs["result"]["wallpaperQueue"]>
    composites: {}
  }

  type WallpaperQueueGetPayload<S extends boolean | null | undefined | WallpaperQueueDefaultArgs> = $Result.GetResult<Prisma.$WallpaperQueuePayload, S>

  type WallpaperQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WallpaperQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WallpaperQueueCountAggregateInputType | true
    }

  export interface WallpaperQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WallpaperQueue'], meta: { name: 'WallpaperQueue' } }
    /**
     * Find zero or one WallpaperQueue that matches the filter.
     * @param {WallpaperQueueFindUniqueArgs} args - Arguments to find a WallpaperQueue
     * @example
     * // Get one WallpaperQueue
     * const wallpaperQueue = await prisma.wallpaperQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WallpaperQueueFindUniqueArgs>(args: SelectSubset<T, WallpaperQueueFindUniqueArgs<ExtArgs>>): Prisma__WallpaperQueueClient<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WallpaperQueue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WallpaperQueueFindUniqueOrThrowArgs} args - Arguments to find a WallpaperQueue
     * @example
     * // Get one WallpaperQueue
     * const wallpaperQueue = await prisma.wallpaperQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WallpaperQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, WallpaperQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WallpaperQueueClient<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WallpaperQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperQueueFindFirstArgs} args - Arguments to find a WallpaperQueue
     * @example
     * // Get one WallpaperQueue
     * const wallpaperQueue = await prisma.wallpaperQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WallpaperQueueFindFirstArgs>(args?: SelectSubset<T, WallpaperQueueFindFirstArgs<ExtArgs>>): Prisma__WallpaperQueueClient<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WallpaperQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperQueueFindFirstOrThrowArgs} args - Arguments to find a WallpaperQueue
     * @example
     * // Get one WallpaperQueue
     * const wallpaperQueue = await prisma.wallpaperQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WallpaperQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, WallpaperQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__WallpaperQueueClient<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WallpaperQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WallpaperQueues
     * const wallpaperQueues = await prisma.wallpaperQueue.findMany()
     * 
     * // Get first 10 WallpaperQueues
     * const wallpaperQueues = await prisma.wallpaperQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wallpaperQueueWithIdOnly = await prisma.wallpaperQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WallpaperQueueFindManyArgs>(args?: SelectSubset<T, WallpaperQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WallpaperQueue.
     * @param {WallpaperQueueCreateArgs} args - Arguments to create a WallpaperQueue.
     * @example
     * // Create one WallpaperQueue
     * const WallpaperQueue = await prisma.wallpaperQueue.create({
     *   data: {
     *     // ... data to create a WallpaperQueue
     *   }
     * })
     * 
     */
    create<T extends WallpaperQueueCreateArgs>(args: SelectSubset<T, WallpaperQueueCreateArgs<ExtArgs>>): Prisma__WallpaperQueueClient<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WallpaperQueues.
     * @param {WallpaperQueueCreateManyArgs} args - Arguments to create many WallpaperQueues.
     * @example
     * // Create many WallpaperQueues
     * const wallpaperQueue = await prisma.wallpaperQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WallpaperQueueCreateManyArgs>(args?: SelectSubset<T, WallpaperQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WallpaperQueues and returns the data saved in the database.
     * @param {WallpaperQueueCreateManyAndReturnArgs} args - Arguments to create many WallpaperQueues.
     * @example
     * // Create many WallpaperQueues
     * const wallpaperQueue = await prisma.wallpaperQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WallpaperQueues and only return the `id`
     * const wallpaperQueueWithIdOnly = await prisma.wallpaperQueue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WallpaperQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, WallpaperQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WallpaperQueue.
     * @param {WallpaperQueueDeleteArgs} args - Arguments to delete one WallpaperQueue.
     * @example
     * // Delete one WallpaperQueue
     * const WallpaperQueue = await prisma.wallpaperQueue.delete({
     *   where: {
     *     // ... filter to delete one WallpaperQueue
     *   }
     * })
     * 
     */
    delete<T extends WallpaperQueueDeleteArgs>(args: SelectSubset<T, WallpaperQueueDeleteArgs<ExtArgs>>): Prisma__WallpaperQueueClient<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WallpaperQueue.
     * @param {WallpaperQueueUpdateArgs} args - Arguments to update one WallpaperQueue.
     * @example
     * // Update one WallpaperQueue
     * const wallpaperQueue = await prisma.wallpaperQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WallpaperQueueUpdateArgs>(args: SelectSubset<T, WallpaperQueueUpdateArgs<ExtArgs>>): Prisma__WallpaperQueueClient<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WallpaperQueues.
     * @param {WallpaperQueueDeleteManyArgs} args - Arguments to filter WallpaperQueues to delete.
     * @example
     * // Delete a few WallpaperQueues
     * const { count } = await prisma.wallpaperQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WallpaperQueueDeleteManyArgs>(args?: SelectSubset<T, WallpaperQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WallpaperQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WallpaperQueues
     * const wallpaperQueue = await prisma.wallpaperQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WallpaperQueueUpdateManyArgs>(args: SelectSubset<T, WallpaperQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WallpaperQueues and returns the data updated in the database.
     * @param {WallpaperQueueUpdateManyAndReturnArgs} args - Arguments to update many WallpaperQueues.
     * @example
     * // Update many WallpaperQueues
     * const wallpaperQueue = await prisma.wallpaperQueue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WallpaperQueues and only return the `id`
     * const wallpaperQueueWithIdOnly = await prisma.wallpaperQueue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WallpaperQueueUpdateManyAndReturnArgs>(args: SelectSubset<T, WallpaperQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WallpaperQueue.
     * @param {WallpaperQueueUpsertArgs} args - Arguments to update or create a WallpaperQueue.
     * @example
     * // Update or create a WallpaperQueue
     * const wallpaperQueue = await prisma.wallpaperQueue.upsert({
     *   create: {
     *     // ... data to create a WallpaperQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WallpaperQueue we want to update
     *   }
     * })
     */
    upsert<T extends WallpaperQueueUpsertArgs>(args: SelectSubset<T, WallpaperQueueUpsertArgs<ExtArgs>>): Prisma__WallpaperQueueClient<$Result.GetResult<Prisma.$WallpaperQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WallpaperQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperQueueCountArgs} args - Arguments to filter WallpaperQueues to count.
     * @example
     * // Count the number of WallpaperQueues
     * const count = await prisma.wallpaperQueue.count({
     *   where: {
     *     // ... the filter for the WallpaperQueues we want to count
     *   }
     * })
    **/
    count<T extends WallpaperQueueCountArgs>(
      args?: Subset<T, WallpaperQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WallpaperQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WallpaperQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WallpaperQueueAggregateArgs>(args: Subset<T, WallpaperQueueAggregateArgs>): Prisma.PrismaPromise<GetWallpaperQueueAggregateType<T>>

    /**
     * Group by WallpaperQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperQueueGroupByArgs} args - Group by arguments.
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
      T extends WallpaperQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WallpaperQueueGroupByArgs['orderBy'] }
        : { orderBy?: WallpaperQueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WallpaperQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWallpaperQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WallpaperQueue model
   */
  readonly fields: WallpaperQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WallpaperQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WallpaperQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WallpaperQueue model
   */
  interface WallpaperQueueFieldRefs {
    readonly id: FieldRef<"WallpaperQueue", 'String'>
    readonly wallhavenId: FieldRef<"WallpaperQueue", 'String'>
    readonly imageUrl: FieldRef<"WallpaperQueue", 'String'>
    readonly thumbnailUrl: FieldRef<"WallpaperQueue", 'String'>
    readonly addedAt: FieldRef<"WallpaperQueue", 'DateTime'>
    readonly priority: FieldRef<"WallpaperQueue", 'Int'>
    readonly deviceId: FieldRef<"WallpaperQueue", 'String'>
    readonly status: FieldRef<"WallpaperQueue", 'String'>
    readonly purity: FieldRef<"WallpaperQueue", 'String'>
    readonly resolution: FieldRef<"WallpaperQueue", 'String'>
    readonly category: FieldRef<"WallpaperQueue", 'String'>
    readonly aiProcessingStatus: FieldRef<"WallpaperQueue", 'String'>
    readonly aiTags: FieldRef<"WallpaperQueue", 'String'>
    readonly aiColors: FieldRef<"WallpaperQueue", 'String'>
    readonly aiContentLabels: FieldRef<"WallpaperQueue", 'String'>
    readonly aiNsfwScore: FieldRef<"WallpaperQueue", 'Float'>
    readonly aiProcessedAt: FieldRef<"WallpaperQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WallpaperQueue findUnique
   */
  export type WallpaperQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * Filter, which WallpaperQueue to fetch.
     */
    where: WallpaperQueueWhereUniqueInput
  }

  /**
   * WallpaperQueue findUniqueOrThrow
   */
  export type WallpaperQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * Filter, which WallpaperQueue to fetch.
     */
    where: WallpaperQueueWhereUniqueInput
  }

  /**
   * WallpaperQueue findFirst
   */
  export type WallpaperQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * Filter, which WallpaperQueue to fetch.
     */
    where?: WallpaperQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallpaperQueues to fetch.
     */
    orderBy?: WallpaperQueueOrderByWithRelationInput | WallpaperQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WallpaperQueues.
     */
    cursor?: WallpaperQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallpaperQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallpaperQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WallpaperQueues.
     */
    distinct?: WallpaperQueueScalarFieldEnum | WallpaperQueueScalarFieldEnum[]
  }

  /**
   * WallpaperQueue findFirstOrThrow
   */
  export type WallpaperQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * Filter, which WallpaperQueue to fetch.
     */
    where?: WallpaperQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallpaperQueues to fetch.
     */
    orderBy?: WallpaperQueueOrderByWithRelationInput | WallpaperQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WallpaperQueues.
     */
    cursor?: WallpaperQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallpaperQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallpaperQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WallpaperQueues.
     */
    distinct?: WallpaperQueueScalarFieldEnum | WallpaperQueueScalarFieldEnum[]
  }

  /**
   * WallpaperQueue findMany
   */
  export type WallpaperQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * Filter, which WallpaperQueues to fetch.
     */
    where?: WallpaperQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallpaperQueues to fetch.
     */
    orderBy?: WallpaperQueueOrderByWithRelationInput | WallpaperQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WallpaperQueues.
     */
    cursor?: WallpaperQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallpaperQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallpaperQueues.
     */
    skip?: number
    distinct?: WallpaperQueueScalarFieldEnum | WallpaperQueueScalarFieldEnum[]
  }

  /**
   * WallpaperQueue create
   */
  export type WallpaperQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * The data needed to create a WallpaperQueue.
     */
    data: XOR<WallpaperQueueCreateInput, WallpaperQueueUncheckedCreateInput>
  }

  /**
   * WallpaperQueue createMany
   */
  export type WallpaperQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WallpaperQueues.
     */
    data: WallpaperQueueCreateManyInput | WallpaperQueueCreateManyInput[]
  }

  /**
   * WallpaperQueue createManyAndReturn
   */
  export type WallpaperQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * The data used to create many WallpaperQueues.
     */
    data: WallpaperQueueCreateManyInput | WallpaperQueueCreateManyInput[]
  }

  /**
   * WallpaperQueue update
   */
  export type WallpaperQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * The data needed to update a WallpaperQueue.
     */
    data: XOR<WallpaperQueueUpdateInput, WallpaperQueueUncheckedUpdateInput>
    /**
     * Choose, which WallpaperQueue to update.
     */
    where: WallpaperQueueWhereUniqueInput
  }

  /**
   * WallpaperQueue updateMany
   */
  export type WallpaperQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WallpaperQueues.
     */
    data: XOR<WallpaperQueueUpdateManyMutationInput, WallpaperQueueUncheckedUpdateManyInput>
    /**
     * Filter which WallpaperQueues to update
     */
    where?: WallpaperQueueWhereInput
    /**
     * Limit how many WallpaperQueues to update.
     */
    limit?: number
  }

  /**
   * WallpaperQueue updateManyAndReturn
   */
  export type WallpaperQueueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * The data used to update WallpaperQueues.
     */
    data: XOR<WallpaperQueueUpdateManyMutationInput, WallpaperQueueUncheckedUpdateManyInput>
    /**
     * Filter which WallpaperQueues to update
     */
    where?: WallpaperQueueWhereInput
    /**
     * Limit how many WallpaperQueues to update.
     */
    limit?: number
  }

  /**
   * WallpaperQueue upsert
   */
  export type WallpaperQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * The filter to search for the WallpaperQueue to update in case it exists.
     */
    where: WallpaperQueueWhereUniqueInput
    /**
     * In case the WallpaperQueue found by the `where` argument doesn't exist, create a new WallpaperQueue with this data.
     */
    create: XOR<WallpaperQueueCreateInput, WallpaperQueueUncheckedCreateInput>
    /**
     * In case the WallpaperQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WallpaperQueueUpdateInput, WallpaperQueueUncheckedUpdateInput>
  }

  /**
   * WallpaperQueue delete
   */
  export type WallpaperQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
    /**
     * Filter which WallpaperQueue to delete.
     */
    where: WallpaperQueueWhereUniqueInput
  }

  /**
   * WallpaperQueue deleteMany
   */
  export type WallpaperQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WallpaperQueues to delete
     */
    where?: WallpaperQueueWhereInput
    /**
     * Limit how many WallpaperQueues to delete.
     */
    limit?: number
  }

  /**
   * WallpaperQueue without action
   */
  export type WallpaperQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperQueue
     */
    select?: WallpaperQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperQueue
     */
    omit?: WallpaperQueueOmit<ExtArgs> | null
  }


  /**
   * Model WallpaperHistory
   */

  export type AggregateWallpaperHistory = {
    _count: WallpaperHistoryCountAggregateOutputType | null
    _avg: WallpaperHistoryAvgAggregateOutputType | null
    _sum: WallpaperHistorySumAggregateOutputType | null
    _min: WallpaperHistoryMinAggregateOutputType | null
    _max: WallpaperHistoryMaxAggregateOutputType | null
  }

  export type WallpaperHistoryAvgAggregateOutputType = {
    duration: number | null
    aspectRatio: number | null
    fileSize: number | null
    timeOfDay: number | null
    dayOfWeek: number | null
    explicitRating: number | null
  }

  export type WallpaperHistorySumAggregateOutputType = {
    duration: number | null
    aspectRatio: number | null
    fileSize: number | null
    timeOfDay: number | null
    dayOfWeek: number | null
    explicitRating: number | null
  }

  export type WallpaperHistoryMinAggregateOutputType = {
    id: string | null
    wallhavenId: string | null
    imageUrl: string | null
    thumbnailUrl: string | null
    usedAt: Date | null
    deviceId: string | null
    duration: number | null
    feedback: string | null
    purity: string | null
    resolution: string | null
    category: string | null
    tags: string | null
    colors: string | null
    aspectRatio: number | null
    fileSize: number | null
    timeOfDay: number | null
    dayOfWeek: number | null
    explicitRating: number | null
    isFavorite: boolean | null
  }

  export type WallpaperHistoryMaxAggregateOutputType = {
    id: string | null
    wallhavenId: string | null
    imageUrl: string | null
    thumbnailUrl: string | null
    usedAt: Date | null
    deviceId: string | null
    duration: number | null
    feedback: string | null
    purity: string | null
    resolution: string | null
    category: string | null
    tags: string | null
    colors: string | null
    aspectRatio: number | null
    fileSize: number | null
    timeOfDay: number | null
    dayOfWeek: number | null
    explicitRating: number | null
    isFavorite: boolean | null
  }

  export type WallpaperHistoryCountAggregateOutputType = {
    id: number
    wallhavenId: number
    imageUrl: number
    thumbnailUrl: number
    usedAt: number
    deviceId: number
    duration: number
    feedback: number
    purity: number
    resolution: number
    category: number
    tags: number
    colors: number
    aspectRatio: number
    fileSize: number
    timeOfDay: number
    dayOfWeek: number
    explicitRating: number
    isFavorite: number
    _all: number
  }


  export type WallpaperHistoryAvgAggregateInputType = {
    duration?: true
    aspectRatio?: true
    fileSize?: true
    timeOfDay?: true
    dayOfWeek?: true
    explicitRating?: true
  }

  export type WallpaperHistorySumAggregateInputType = {
    duration?: true
    aspectRatio?: true
    fileSize?: true
    timeOfDay?: true
    dayOfWeek?: true
    explicitRating?: true
  }

  export type WallpaperHistoryMinAggregateInputType = {
    id?: true
    wallhavenId?: true
    imageUrl?: true
    thumbnailUrl?: true
    usedAt?: true
    deviceId?: true
    duration?: true
    feedback?: true
    purity?: true
    resolution?: true
    category?: true
    tags?: true
    colors?: true
    aspectRatio?: true
    fileSize?: true
    timeOfDay?: true
    dayOfWeek?: true
    explicitRating?: true
    isFavorite?: true
  }

  export type WallpaperHistoryMaxAggregateInputType = {
    id?: true
    wallhavenId?: true
    imageUrl?: true
    thumbnailUrl?: true
    usedAt?: true
    deviceId?: true
    duration?: true
    feedback?: true
    purity?: true
    resolution?: true
    category?: true
    tags?: true
    colors?: true
    aspectRatio?: true
    fileSize?: true
    timeOfDay?: true
    dayOfWeek?: true
    explicitRating?: true
    isFavorite?: true
  }

  export type WallpaperHistoryCountAggregateInputType = {
    id?: true
    wallhavenId?: true
    imageUrl?: true
    thumbnailUrl?: true
    usedAt?: true
    deviceId?: true
    duration?: true
    feedback?: true
    purity?: true
    resolution?: true
    category?: true
    tags?: true
    colors?: true
    aspectRatio?: true
    fileSize?: true
    timeOfDay?: true
    dayOfWeek?: true
    explicitRating?: true
    isFavorite?: true
    _all?: true
  }

  export type WallpaperHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WallpaperHistory to aggregate.
     */
    where?: WallpaperHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallpaperHistories to fetch.
     */
    orderBy?: WallpaperHistoryOrderByWithRelationInput | WallpaperHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WallpaperHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallpaperHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallpaperHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WallpaperHistories
    **/
    _count?: true | WallpaperHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WallpaperHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WallpaperHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WallpaperHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WallpaperHistoryMaxAggregateInputType
  }

  export type GetWallpaperHistoryAggregateType<T extends WallpaperHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWallpaperHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallpaperHistory[P]>
      : GetScalarType<T[P], AggregateWallpaperHistory[P]>
  }




  export type WallpaperHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WallpaperHistoryWhereInput
    orderBy?: WallpaperHistoryOrderByWithAggregationInput | WallpaperHistoryOrderByWithAggregationInput[]
    by: WallpaperHistoryScalarFieldEnum[] | WallpaperHistoryScalarFieldEnum
    having?: WallpaperHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WallpaperHistoryCountAggregateInputType | true
    _avg?: WallpaperHistoryAvgAggregateInputType
    _sum?: WallpaperHistorySumAggregateInputType
    _min?: WallpaperHistoryMinAggregateInputType
    _max?: WallpaperHistoryMaxAggregateInputType
  }

  export type WallpaperHistoryGroupByOutputType = {
    id: string
    wallhavenId: string
    imageUrl: string
    thumbnailUrl: string
    usedAt: Date
    deviceId: string
    duration: number | null
    feedback: string | null
    purity: string
    resolution: string
    category: string
    tags: string | null
    colors: string | null
    aspectRatio: number | null
    fileSize: number | null
    timeOfDay: number | null
    dayOfWeek: number | null
    explicitRating: number | null
    isFavorite: boolean | null
    _count: WallpaperHistoryCountAggregateOutputType | null
    _avg: WallpaperHistoryAvgAggregateOutputType | null
    _sum: WallpaperHistorySumAggregateOutputType | null
    _min: WallpaperHistoryMinAggregateOutputType | null
    _max: WallpaperHistoryMaxAggregateOutputType | null
  }

  type GetWallpaperHistoryGroupByPayload<T extends WallpaperHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WallpaperHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WallpaperHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WallpaperHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], WallpaperHistoryGroupByOutputType[P]>
        }
      >
    >


  export type WallpaperHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallhavenId?: boolean
    imageUrl?: boolean
    thumbnailUrl?: boolean
    usedAt?: boolean
    deviceId?: boolean
    duration?: boolean
    feedback?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    tags?: boolean
    colors?: boolean
    aspectRatio?: boolean
    fileSize?: boolean
    timeOfDay?: boolean
    dayOfWeek?: boolean
    explicitRating?: boolean
    isFavorite?: boolean
  }, ExtArgs["result"]["wallpaperHistory"]>

  export type WallpaperHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallhavenId?: boolean
    imageUrl?: boolean
    thumbnailUrl?: boolean
    usedAt?: boolean
    deviceId?: boolean
    duration?: boolean
    feedback?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    tags?: boolean
    colors?: boolean
    aspectRatio?: boolean
    fileSize?: boolean
    timeOfDay?: boolean
    dayOfWeek?: boolean
    explicitRating?: boolean
    isFavorite?: boolean
  }, ExtArgs["result"]["wallpaperHistory"]>

  export type WallpaperHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallhavenId?: boolean
    imageUrl?: boolean
    thumbnailUrl?: boolean
    usedAt?: boolean
    deviceId?: boolean
    duration?: boolean
    feedback?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    tags?: boolean
    colors?: boolean
    aspectRatio?: boolean
    fileSize?: boolean
    timeOfDay?: boolean
    dayOfWeek?: boolean
    explicitRating?: boolean
    isFavorite?: boolean
  }, ExtArgs["result"]["wallpaperHistory"]>

  export type WallpaperHistorySelectScalar = {
    id?: boolean
    wallhavenId?: boolean
    imageUrl?: boolean
    thumbnailUrl?: boolean
    usedAt?: boolean
    deviceId?: boolean
    duration?: boolean
    feedback?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    tags?: boolean
    colors?: boolean
    aspectRatio?: boolean
    fileSize?: boolean
    timeOfDay?: boolean
    dayOfWeek?: boolean
    explicitRating?: boolean
    isFavorite?: boolean
  }

  export type WallpaperHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wallhavenId" | "imageUrl" | "thumbnailUrl" | "usedAt" | "deviceId" | "duration" | "feedback" | "purity" | "resolution" | "category" | "tags" | "colors" | "aspectRatio" | "fileSize" | "timeOfDay" | "dayOfWeek" | "explicitRating" | "isFavorite", ExtArgs["result"]["wallpaperHistory"]>

  export type $WallpaperHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WallpaperHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wallhavenId: string
      imageUrl: string
      thumbnailUrl: string
      usedAt: Date
      deviceId: string
      duration: number | null
      feedback: string | null
      purity: string
      resolution: string
      category: string
      tags: string | null
      colors: string | null
      aspectRatio: number | null
      fileSize: number | null
      timeOfDay: number | null
      dayOfWeek: number | null
      explicitRating: number | null
      isFavorite: boolean | null
    }, ExtArgs["result"]["wallpaperHistory"]>
    composites: {}
  }

  type WallpaperHistoryGetPayload<S extends boolean | null | undefined | WallpaperHistoryDefaultArgs> = $Result.GetResult<Prisma.$WallpaperHistoryPayload, S>

  type WallpaperHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WallpaperHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WallpaperHistoryCountAggregateInputType | true
    }

  export interface WallpaperHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WallpaperHistory'], meta: { name: 'WallpaperHistory' } }
    /**
     * Find zero or one WallpaperHistory that matches the filter.
     * @param {WallpaperHistoryFindUniqueArgs} args - Arguments to find a WallpaperHistory
     * @example
     * // Get one WallpaperHistory
     * const wallpaperHistory = await prisma.wallpaperHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WallpaperHistoryFindUniqueArgs>(args: SelectSubset<T, WallpaperHistoryFindUniqueArgs<ExtArgs>>): Prisma__WallpaperHistoryClient<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WallpaperHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WallpaperHistoryFindUniqueOrThrowArgs} args - Arguments to find a WallpaperHistory
     * @example
     * // Get one WallpaperHistory
     * const wallpaperHistory = await prisma.wallpaperHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WallpaperHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WallpaperHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WallpaperHistoryClient<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WallpaperHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperHistoryFindFirstArgs} args - Arguments to find a WallpaperHistory
     * @example
     * // Get one WallpaperHistory
     * const wallpaperHistory = await prisma.wallpaperHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WallpaperHistoryFindFirstArgs>(args?: SelectSubset<T, WallpaperHistoryFindFirstArgs<ExtArgs>>): Prisma__WallpaperHistoryClient<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WallpaperHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperHistoryFindFirstOrThrowArgs} args - Arguments to find a WallpaperHistory
     * @example
     * // Get one WallpaperHistory
     * const wallpaperHistory = await prisma.wallpaperHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WallpaperHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WallpaperHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WallpaperHistoryClient<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WallpaperHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WallpaperHistories
     * const wallpaperHistories = await prisma.wallpaperHistory.findMany()
     * 
     * // Get first 10 WallpaperHistories
     * const wallpaperHistories = await prisma.wallpaperHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wallpaperHistoryWithIdOnly = await prisma.wallpaperHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WallpaperHistoryFindManyArgs>(args?: SelectSubset<T, WallpaperHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WallpaperHistory.
     * @param {WallpaperHistoryCreateArgs} args - Arguments to create a WallpaperHistory.
     * @example
     * // Create one WallpaperHistory
     * const WallpaperHistory = await prisma.wallpaperHistory.create({
     *   data: {
     *     // ... data to create a WallpaperHistory
     *   }
     * })
     * 
     */
    create<T extends WallpaperHistoryCreateArgs>(args: SelectSubset<T, WallpaperHistoryCreateArgs<ExtArgs>>): Prisma__WallpaperHistoryClient<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WallpaperHistories.
     * @param {WallpaperHistoryCreateManyArgs} args - Arguments to create many WallpaperHistories.
     * @example
     * // Create many WallpaperHistories
     * const wallpaperHistory = await prisma.wallpaperHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WallpaperHistoryCreateManyArgs>(args?: SelectSubset<T, WallpaperHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WallpaperHistories and returns the data saved in the database.
     * @param {WallpaperHistoryCreateManyAndReturnArgs} args - Arguments to create many WallpaperHistories.
     * @example
     * // Create many WallpaperHistories
     * const wallpaperHistory = await prisma.wallpaperHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WallpaperHistories and only return the `id`
     * const wallpaperHistoryWithIdOnly = await prisma.wallpaperHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WallpaperHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, WallpaperHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WallpaperHistory.
     * @param {WallpaperHistoryDeleteArgs} args - Arguments to delete one WallpaperHistory.
     * @example
     * // Delete one WallpaperHistory
     * const WallpaperHistory = await prisma.wallpaperHistory.delete({
     *   where: {
     *     // ... filter to delete one WallpaperHistory
     *   }
     * })
     * 
     */
    delete<T extends WallpaperHistoryDeleteArgs>(args: SelectSubset<T, WallpaperHistoryDeleteArgs<ExtArgs>>): Prisma__WallpaperHistoryClient<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WallpaperHistory.
     * @param {WallpaperHistoryUpdateArgs} args - Arguments to update one WallpaperHistory.
     * @example
     * // Update one WallpaperHistory
     * const wallpaperHistory = await prisma.wallpaperHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WallpaperHistoryUpdateArgs>(args: SelectSubset<T, WallpaperHistoryUpdateArgs<ExtArgs>>): Prisma__WallpaperHistoryClient<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WallpaperHistories.
     * @param {WallpaperHistoryDeleteManyArgs} args - Arguments to filter WallpaperHistories to delete.
     * @example
     * // Delete a few WallpaperHistories
     * const { count } = await prisma.wallpaperHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WallpaperHistoryDeleteManyArgs>(args?: SelectSubset<T, WallpaperHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WallpaperHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WallpaperHistories
     * const wallpaperHistory = await prisma.wallpaperHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WallpaperHistoryUpdateManyArgs>(args: SelectSubset<T, WallpaperHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WallpaperHistories and returns the data updated in the database.
     * @param {WallpaperHistoryUpdateManyAndReturnArgs} args - Arguments to update many WallpaperHistories.
     * @example
     * // Update many WallpaperHistories
     * const wallpaperHistory = await prisma.wallpaperHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WallpaperHistories and only return the `id`
     * const wallpaperHistoryWithIdOnly = await prisma.wallpaperHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WallpaperHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, WallpaperHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WallpaperHistory.
     * @param {WallpaperHistoryUpsertArgs} args - Arguments to update or create a WallpaperHistory.
     * @example
     * // Update or create a WallpaperHistory
     * const wallpaperHistory = await prisma.wallpaperHistory.upsert({
     *   create: {
     *     // ... data to create a WallpaperHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WallpaperHistory we want to update
     *   }
     * })
     */
    upsert<T extends WallpaperHistoryUpsertArgs>(args: SelectSubset<T, WallpaperHistoryUpsertArgs<ExtArgs>>): Prisma__WallpaperHistoryClient<$Result.GetResult<Prisma.$WallpaperHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WallpaperHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperHistoryCountArgs} args - Arguments to filter WallpaperHistories to count.
     * @example
     * // Count the number of WallpaperHistories
     * const count = await prisma.wallpaperHistory.count({
     *   where: {
     *     // ... the filter for the WallpaperHistories we want to count
     *   }
     * })
    **/
    count<T extends WallpaperHistoryCountArgs>(
      args?: Subset<T, WallpaperHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WallpaperHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WallpaperHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WallpaperHistoryAggregateArgs>(args: Subset<T, WallpaperHistoryAggregateArgs>): Prisma.PrismaPromise<GetWallpaperHistoryAggregateType<T>>

    /**
     * Group by WallpaperHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpaperHistoryGroupByArgs} args - Group by arguments.
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
      T extends WallpaperHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WallpaperHistoryGroupByArgs['orderBy'] }
        : { orderBy?: WallpaperHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WallpaperHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWallpaperHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WallpaperHistory model
   */
  readonly fields: WallpaperHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WallpaperHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WallpaperHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WallpaperHistory model
   */
  interface WallpaperHistoryFieldRefs {
    readonly id: FieldRef<"WallpaperHistory", 'String'>
    readonly wallhavenId: FieldRef<"WallpaperHistory", 'String'>
    readonly imageUrl: FieldRef<"WallpaperHistory", 'String'>
    readonly thumbnailUrl: FieldRef<"WallpaperHistory", 'String'>
    readonly usedAt: FieldRef<"WallpaperHistory", 'DateTime'>
    readonly deviceId: FieldRef<"WallpaperHistory", 'String'>
    readonly duration: FieldRef<"WallpaperHistory", 'Int'>
    readonly feedback: FieldRef<"WallpaperHistory", 'String'>
    readonly purity: FieldRef<"WallpaperHistory", 'String'>
    readonly resolution: FieldRef<"WallpaperHistory", 'String'>
    readonly category: FieldRef<"WallpaperHistory", 'String'>
    readonly tags: FieldRef<"WallpaperHistory", 'String'>
    readonly colors: FieldRef<"WallpaperHistory", 'String'>
    readonly aspectRatio: FieldRef<"WallpaperHistory", 'Float'>
    readonly fileSize: FieldRef<"WallpaperHistory", 'Int'>
    readonly timeOfDay: FieldRef<"WallpaperHistory", 'Int'>
    readonly dayOfWeek: FieldRef<"WallpaperHistory", 'Int'>
    readonly explicitRating: FieldRef<"WallpaperHistory", 'Int'>
    readonly isFavorite: FieldRef<"WallpaperHistory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * WallpaperHistory findUnique
   */
  export type WallpaperHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * Filter, which WallpaperHistory to fetch.
     */
    where: WallpaperHistoryWhereUniqueInput
  }

  /**
   * WallpaperHistory findUniqueOrThrow
   */
  export type WallpaperHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * Filter, which WallpaperHistory to fetch.
     */
    where: WallpaperHistoryWhereUniqueInput
  }

  /**
   * WallpaperHistory findFirst
   */
  export type WallpaperHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * Filter, which WallpaperHistory to fetch.
     */
    where?: WallpaperHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallpaperHistories to fetch.
     */
    orderBy?: WallpaperHistoryOrderByWithRelationInput | WallpaperHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WallpaperHistories.
     */
    cursor?: WallpaperHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallpaperHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallpaperHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WallpaperHistories.
     */
    distinct?: WallpaperHistoryScalarFieldEnum | WallpaperHistoryScalarFieldEnum[]
  }

  /**
   * WallpaperHistory findFirstOrThrow
   */
  export type WallpaperHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * Filter, which WallpaperHistory to fetch.
     */
    where?: WallpaperHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallpaperHistories to fetch.
     */
    orderBy?: WallpaperHistoryOrderByWithRelationInput | WallpaperHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WallpaperHistories.
     */
    cursor?: WallpaperHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallpaperHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallpaperHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WallpaperHistories.
     */
    distinct?: WallpaperHistoryScalarFieldEnum | WallpaperHistoryScalarFieldEnum[]
  }

  /**
   * WallpaperHistory findMany
   */
  export type WallpaperHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * Filter, which WallpaperHistories to fetch.
     */
    where?: WallpaperHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallpaperHistories to fetch.
     */
    orderBy?: WallpaperHistoryOrderByWithRelationInput | WallpaperHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WallpaperHistories.
     */
    cursor?: WallpaperHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallpaperHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallpaperHistories.
     */
    skip?: number
    distinct?: WallpaperHistoryScalarFieldEnum | WallpaperHistoryScalarFieldEnum[]
  }

  /**
   * WallpaperHistory create
   */
  export type WallpaperHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a WallpaperHistory.
     */
    data: XOR<WallpaperHistoryCreateInput, WallpaperHistoryUncheckedCreateInput>
  }

  /**
   * WallpaperHistory createMany
   */
  export type WallpaperHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WallpaperHistories.
     */
    data: WallpaperHistoryCreateManyInput | WallpaperHistoryCreateManyInput[]
  }

  /**
   * WallpaperHistory createManyAndReturn
   */
  export type WallpaperHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many WallpaperHistories.
     */
    data: WallpaperHistoryCreateManyInput | WallpaperHistoryCreateManyInput[]
  }

  /**
   * WallpaperHistory update
   */
  export type WallpaperHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a WallpaperHistory.
     */
    data: XOR<WallpaperHistoryUpdateInput, WallpaperHistoryUncheckedUpdateInput>
    /**
     * Choose, which WallpaperHistory to update.
     */
    where: WallpaperHistoryWhereUniqueInput
  }

  /**
   * WallpaperHistory updateMany
   */
  export type WallpaperHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WallpaperHistories.
     */
    data: XOR<WallpaperHistoryUpdateManyMutationInput, WallpaperHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WallpaperHistories to update
     */
    where?: WallpaperHistoryWhereInput
    /**
     * Limit how many WallpaperHistories to update.
     */
    limit?: number
  }

  /**
   * WallpaperHistory updateManyAndReturn
   */
  export type WallpaperHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * The data used to update WallpaperHistories.
     */
    data: XOR<WallpaperHistoryUpdateManyMutationInput, WallpaperHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WallpaperHistories to update
     */
    where?: WallpaperHistoryWhereInput
    /**
     * Limit how many WallpaperHistories to update.
     */
    limit?: number
  }

  /**
   * WallpaperHistory upsert
   */
  export type WallpaperHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the WallpaperHistory to update in case it exists.
     */
    where: WallpaperHistoryWhereUniqueInput
    /**
     * In case the WallpaperHistory found by the `where` argument doesn't exist, create a new WallpaperHistory with this data.
     */
    create: XOR<WallpaperHistoryCreateInput, WallpaperHistoryUncheckedCreateInput>
    /**
     * In case the WallpaperHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WallpaperHistoryUpdateInput, WallpaperHistoryUncheckedUpdateInput>
  }

  /**
   * WallpaperHistory delete
   */
  export type WallpaperHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
    /**
     * Filter which WallpaperHistory to delete.
     */
    where: WallpaperHistoryWhereUniqueInput
  }

  /**
   * WallpaperHistory deleteMany
   */
  export type WallpaperHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WallpaperHistories to delete
     */
    where?: WallpaperHistoryWhereInput
    /**
     * Limit how many WallpaperHistories to delete.
     */
    limit?: number
  }

  /**
   * WallpaperHistory without action
   */
  export type WallpaperHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpaperHistory
     */
    select?: WallpaperHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallpaperHistory
     */
    omit?: WallpaperHistoryOmit<ExtArgs> | null
  }


  /**
   * Model FavoriteWallpaper
   */

  export type AggregateFavoriteWallpaper = {
    _count: FavoriteWallpaperCountAggregateOutputType | null
    _avg: FavoriteWallpaperAvgAggregateOutputType | null
    _sum: FavoriteWallpaperSumAggregateOutputType | null
    _min: FavoriteWallpaperMinAggregateOutputType | null
    _max: FavoriteWallpaperMaxAggregateOutputType | null
  }

  export type FavoriteWallpaperAvgAggregateOutputType = {
    size: number | null
    aiNsfwScore: number | null
  }

  export type FavoriteWallpaperSumAggregateOutputType = {
    size: number | null
    aiNsfwScore: number | null
  }

  export type FavoriteWallpaperMinAggregateOutputType = {
    id: string | null
    wallhavenId: string | null
    originalUrl: string | null
    localPath: string | null
    thumbnailPath: string | null
    addedAt: Date | null
    userId: string | null
    title: string | null
    description: string | null
    tags: string | null
    purity: string | null
    resolution: string | null
    category: string | null
    size: number | null
    aiTags: string | null
    aiColors: string | null
    aiContentLabels: string | null
    aiNsfwScore: number | null
  }

  export type FavoriteWallpaperMaxAggregateOutputType = {
    id: string | null
    wallhavenId: string | null
    originalUrl: string | null
    localPath: string | null
    thumbnailPath: string | null
    addedAt: Date | null
    userId: string | null
    title: string | null
    description: string | null
    tags: string | null
    purity: string | null
    resolution: string | null
    category: string | null
    size: number | null
    aiTags: string | null
    aiColors: string | null
    aiContentLabels: string | null
    aiNsfwScore: number | null
  }

  export type FavoriteWallpaperCountAggregateOutputType = {
    id: number
    wallhavenId: number
    originalUrl: number
    localPath: number
    thumbnailPath: number
    addedAt: number
    userId: number
    title: number
    description: number
    tags: number
    purity: number
    resolution: number
    category: number
    size: number
    aiTags: number
    aiColors: number
    aiContentLabels: number
    aiNsfwScore: number
    _all: number
  }


  export type FavoriteWallpaperAvgAggregateInputType = {
    size?: true
    aiNsfwScore?: true
  }

  export type FavoriteWallpaperSumAggregateInputType = {
    size?: true
    aiNsfwScore?: true
  }

  export type FavoriteWallpaperMinAggregateInputType = {
    id?: true
    wallhavenId?: true
    originalUrl?: true
    localPath?: true
    thumbnailPath?: true
    addedAt?: true
    userId?: true
    title?: true
    description?: true
    tags?: true
    purity?: true
    resolution?: true
    category?: true
    size?: true
    aiTags?: true
    aiColors?: true
    aiContentLabels?: true
    aiNsfwScore?: true
  }

  export type FavoriteWallpaperMaxAggregateInputType = {
    id?: true
    wallhavenId?: true
    originalUrl?: true
    localPath?: true
    thumbnailPath?: true
    addedAt?: true
    userId?: true
    title?: true
    description?: true
    tags?: true
    purity?: true
    resolution?: true
    category?: true
    size?: true
    aiTags?: true
    aiColors?: true
    aiContentLabels?: true
    aiNsfwScore?: true
  }

  export type FavoriteWallpaperCountAggregateInputType = {
    id?: true
    wallhavenId?: true
    originalUrl?: true
    localPath?: true
    thumbnailPath?: true
    addedAt?: true
    userId?: true
    title?: true
    description?: true
    tags?: true
    purity?: true
    resolution?: true
    category?: true
    size?: true
    aiTags?: true
    aiColors?: true
    aiContentLabels?: true
    aiNsfwScore?: true
    _all?: true
  }

  export type FavoriteWallpaperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteWallpaper to aggregate.
     */
    where?: FavoriteWallpaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteWallpapers to fetch.
     */
    orderBy?: FavoriteWallpaperOrderByWithRelationInput | FavoriteWallpaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWallpaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteWallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteWallpapers
    **/
    _count?: true | FavoriteWallpaperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteWallpaperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteWallpaperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteWallpaperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteWallpaperMaxAggregateInputType
  }

  export type GetFavoriteWallpaperAggregateType<T extends FavoriteWallpaperAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteWallpaper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteWallpaper[P]>
      : GetScalarType<T[P], AggregateFavoriteWallpaper[P]>
  }




  export type FavoriteWallpaperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWallpaperWhereInput
    orderBy?: FavoriteWallpaperOrderByWithAggregationInput | FavoriteWallpaperOrderByWithAggregationInput[]
    by: FavoriteWallpaperScalarFieldEnum[] | FavoriteWallpaperScalarFieldEnum
    having?: FavoriteWallpaperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteWallpaperCountAggregateInputType | true
    _avg?: FavoriteWallpaperAvgAggregateInputType
    _sum?: FavoriteWallpaperSumAggregateInputType
    _min?: FavoriteWallpaperMinAggregateInputType
    _max?: FavoriteWallpaperMaxAggregateInputType
  }

  export type FavoriteWallpaperGroupByOutputType = {
    id: string
    wallhavenId: string
    originalUrl: string
    localPath: string
    thumbnailPath: string | null
    addedAt: Date
    userId: string
    title: string | null
    description: string | null
    tags: string | null
    purity: string
    resolution: string
    category: string
    size: number
    aiTags: string | null
    aiColors: string | null
    aiContentLabels: string | null
    aiNsfwScore: number | null
    _count: FavoriteWallpaperCountAggregateOutputType | null
    _avg: FavoriteWallpaperAvgAggregateOutputType | null
    _sum: FavoriteWallpaperSumAggregateOutputType | null
    _min: FavoriteWallpaperMinAggregateOutputType | null
    _max: FavoriteWallpaperMaxAggregateOutputType | null
  }

  type GetFavoriteWallpaperGroupByPayload<T extends FavoriteWallpaperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteWallpaperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteWallpaperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteWallpaperGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteWallpaperGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteWallpaperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallhavenId?: boolean
    originalUrl?: boolean
    localPath?: boolean
    thumbnailPath?: boolean
    addedAt?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    size?: boolean
    aiTags?: boolean
    aiColors?: boolean
    aiContentLabels?: boolean
    aiNsfwScore?: boolean
  }, ExtArgs["result"]["favoriteWallpaper"]>

  export type FavoriteWallpaperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallhavenId?: boolean
    originalUrl?: boolean
    localPath?: boolean
    thumbnailPath?: boolean
    addedAt?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    size?: boolean
    aiTags?: boolean
    aiColors?: boolean
    aiContentLabels?: boolean
    aiNsfwScore?: boolean
  }, ExtArgs["result"]["favoriteWallpaper"]>

  export type FavoriteWallpaperSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallhavenId?: boolean
    originalUrl?: boolean
    localPath?: boolean
    thumbnailPath?: boolean
    addedAt?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    size?: boolean
    aiTags?: boolean
    aiColors?: boolean
    aiContentLabels?: boolean
    aiNsfwScore?: boolean
  }, ExtArgs["result"]["favoriteWallpaper"]>

  export type FavoriteWallpaperSelectScalar = {
    id?: boolean
    wallhavenId?: boolean
    originalUrl?: boolean
    localPath?: boolean
    thumbnailPath?: boolean
    addedAt?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    purity?: boolean
    resolution?: boolean
    category?: boolean
    size?: boolean
    aiTags?: boolean
    aiColors?: boolean
    aiContentLabels?: boolean
    aiNsfwScore?: boolean
  }

  export type FavoriteWallpaperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wallhavenId" | "originalUrl" | "localPath" | "thumbnailPath" | "addedAt" | "userId" | "title" | "description" | "tags" | "purity" | "resolution" | "category" | "size" | "aiTags" | "aiColors" | "aiContentLabels" | "aiNsfwScore", ExtArgs["result"]["favoriteWallpaper"]>

  export type $FavoriteWallpaperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteWallpaper"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wallhavenId: string
      originalUrl: string
      localPath: string
      thumbnailPath: string | null
      addedAt: Date
      userId: string
      title: string | null
      description: string | null
      tags: string | null
      purity: string
      resolution: string
      category: string
      size: number
      aiTags: string | null
      aiColors: string | null
      aiContentLabels: string | null
      aiNsfwScore: number | null
    }, ExtArgs["result"]["favoriteWallpaper"]>
    composites: {}
  }

  type FavoriteWallpaperGetPayload<S extends boolean | null | undefined | FavoriteWallpaperDefaultArgs> = $Result.GetResult<Prisma.$FavoriteWallpaperPayload, S>

  type FavoriteWallpaperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteWallpaperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteWallpaperCountAggregateInputType | true
    }

  export interface FavoriteWallpaperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteWallpaper'], meta: { name: 'FavoriteWallpaper' } }
    /**
     * Find zero or one FavoriteWallpaper that matches the filter.
     * @param {FavoriteWallpaperFindUniqueArgs} args - Arguments to find a FavoriteWallpaper
     * @example
     * // Get one FavoriteWallpaper
     * const favoriteWallpaper = await prisma.favoriteWallpaper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteWallpaperFindUniqueArgs>(args: SelectSubset<T, FavoriteWallpaperFindUniqueArgs<ExtArgs>>): Prisma__FavoriteWallpaperClient<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteWallpaper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteWallpaperFindUniqueOrThrowArgs} args - Arguments to find a FavoriteWallpaper
     * @example
     * // Get one FavoriteWallpaper
     * const favoriteWallpaper = await prisma.favoriteWallpaper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteWallpaperFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteWallpaperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteWallpaperClient<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteWallpaper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteWallpaperFindFirstArgs} args - Arguments to find a FavoriteWallpaper
     * @example
     * // Get one FavoriteWallpaper
     * const favoriteWallpaper = await prisma.favoriteWallpaper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteWallpaperFindFirstArgs>(args?: SelectSubset<T, FavoriteWallpaperFindFirstArgs<ExtArgs>>): Prisma__FavoriteWallpaperClient<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteWallpaper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteWallpaperFindFirstOrThrowArgs} args - Arguments to find a FavoriteWallpaper
     * @example
     * // Get one FavoriteWallpaper
     * const favoriteWallpaper = await prisma.favoriteWallpaper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteWallpaperFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteWallpaperFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteWallpaperClient<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteWallpapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteWallpaperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteWallpapers
     * const favoriteWallpapers = await prisma.favoriteWallpaper.findMany()
     * 
     * // Get first 10 FavoriteWallpapers
     * const favoriteWallpapers = await prisma.favoriteWallpaper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWallpaperWithIdOnly = await prisma.favoriteWallpaper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteWallpaperFindManyArgs>(args?: SelectSubset<T, FavoriteWallpaperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteWallpaper.
     * @param {FavoriteWallpaperCreateArgs} args - Arguments to create a FavoriteWallpaper.
     * @example
     * // Create one FavoriteWallpaper
     * const FavoriteWallpaper = await prisma.favoriteWallpaper.create({
     *   data: {
     *     // ... data to create a FavoriteWallpaper
     *   }
     * })
     * 
     */
    create<T extends FavoriteWallpaperCreateArgs>(args: SelectSubset<T, FavoriteWallpaperCreateArgs<ExtArgs>>): Prisma__FavoriteWallpaperClient<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteWallpapers.
     * @param {FavoriteWallpaperCreateManyArgs} args - Arguments to create many FavoriteWallpapers.
     * @example
     * // Create many FavoriteWallpapers
     * const favoriteWallpaper = await prisma.favoriteWallpaper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteWallpaperCreateManyArgs>(args?: SelectSubset<T, FavoriteWallpaperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteWallpapers and returns the data saved in the database.
     * @param {FavoriteWallpaperCreateManyAndReturnArgs} args - Arguments to create many FavoriteWallpapers.
     * @example
     * // Create many FavoriteWallpapers
     * const favoriteWallpaper = await prisma.favoriteWallpaper.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteWallpapers and only return the `id`
     * const favoriteWallpaperWithIdOnly = await prisma.favoriteWallpaper.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteWallpaperCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteWallpaperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteWallpaper.
     * @param {FavoriteWallpaperDeleteArgs} args - Arguments to delete one FavoriteWallpaper.
     * @example
     * // Delete one FavoriteWallpaper
     * const FavoriteWallpaper = await prisma.favoriteWallpaper.delete({
     *   where: {
     *     // ... filter to delete one FavoriteWallpaper
     *   }
     * })
     * 
     */
    delete<T extends FavoriteWallpaperDeleteArgs>(args: SelectSubset<T, FavoriteWallpaperDeleteArgs<ExtArgs>>): Prisma__FavoriteWallpaperClient<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteWallpaper.
     * @param {FavoriteWallpaperUpdateArgs} args - Arguments to update one FavoriteWallpaper.
     * @example
     * // Update one FavoriteWallpaper
     * const favoriteWallpaper = await prisma.favoriteWallpaper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteWallpaperUpdateArgs>(args: SelectSubset<T, FavoriteWallpaperUpdateArgs<ExtArgs>>): Prisma__FavoriteWallpaperClient<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteWallpapers.
     * @param {FavoriteWallpaperDeleteManyArgs} args - Arguments to filter FavoriteWallpapers to delete.
     * @example
     * // Delete a few FavoriteWallpapers
     * const { count } = await prisma.favoriteWallpaper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteWallpaperDeleteManyArgs>(args?: SelectSubset<T, FavoriteWallpaperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteWallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteWallpaperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteWallpapers
     * const favoriteWallpaper = await prisma.favoriteWallpaper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteWallpaperUpdateManyArgs>(args: SelectSubset<T, FavoriteWallpaperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteWallpapers and returns the data updated in the database.
     * @param {FavoriteWallpaperUpdateManyAndReturnArgs} args - Arguments to update many FavoriteWallpapers.
     * @example
     * // Update many FavoriteWallpapers
     * const favoriteWallpaper = await prisma.favoriteWallpaper.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteWallpapers and only return the `id`
     * const favoriteWallpaperWithIdOnly = await prisma.favoriteWallpaper.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteWallpaperUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteWallpaperUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteWallpaper.
     * @param {FavoriteWallpaperUpsertArgs} args - Arguments to update or create a FavoriteWallpaper.
     * @example
     * // Update or create a FavoriteWallpaper
     * const favoriteWallpaper = await prisma.favoriteWallpaper.upsert({
     *   create: {
     *     // ... data to create a FavoriteWallpaper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteWallpaper we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteWallpaperUpsertArgs>(args: SelectSubset<T, FavoriteWallpaperUpsertArgs<ExtArgs>>): Prisma__FavoriteWallpaperClient<$Result.GetResult<Prisma.$FavoriteWallpaperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteWallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteWallpaperCountArgs} args - Arguments to filter FavoriteWallpapers to count.
     * @example
     * // Count the number of FavoriteWallpapers
     * const count = await prisma.favoriteWallpaper.count({
     *   where: {
     *     // ... the filter for the FavoriteWallpapers we want to count
     *   }
     * })
    **/
    count<T extends FavoriteWallpaperCountArgs>(
      args?: Subset<T, FavoriteWallpaperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteWallpaperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteWallpaper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteWallpaperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteWallpaperAggregateArgs>(args: Subset<T, FavoriteWallpaperAggregateArgs>): Prisma.PrismaPromise<GetFavoriteWallpaperAggregateType<T>>

    /**
     * Group by FavoriteWallpaper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteWallpaperGroupByArgs} args - Group by arguments.
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
      T extends FavoriteWallpaperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteWallpaperGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteWallpaperGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteWallpaperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteWallpaperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteWallpaper model
   */
  readonly fields: FavoriteWallpaperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteWallpaper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteWallpaperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteWallpaper model
   */
  interface FavoriteWallpaperFieldRefs {
    readonly id: FieldRef<"FavoriteWallpaper", 'String'>
    readonly wallhavenId: FieldRef<"FavoriteWallpaper", 'String'>
    readonly originalUrl: FieldRef<"FavoriteWallpaper", 'String'>
    readonly localPath: FieldRef<"FavoriteWallpaper", 'String'>
    readonly thumbnailPath: FieldRef<"FavoriteWallpaper", 'String'>
    readonly addedAt: FieldRef<"FavoriteWallpaper", 'DateTime'>
    readonly userId: FieldRef<"FavoriteWallpaper", 'String'>
    readonly title: FieldRef<"FavoriteWallpaper", 'String'>
    readonly description: FieldRef<"FavoriteWallpaper", 'String'>
    readonly tags: FieldRef<"FavoriteWallpaper", 'String'>
    readonly purity: FieldRef<"FavoriteWallpaper", 'String'>
    readonly resolution: FieldRef<"FavoriteWallpaper", 'String'>
    readonly category: FieldRef<"FavoriteWallpaper", 'String'>
    readonly size: FieldRef<"FavoriteWallpaper", 'Int'>
    readonly aiTags: FieldRef<"FavoriteWallpaper", 'String'>
    readonly aiColors: FieldRef<"FavoriteWallpaper", 'String'>
    readonly aiContentLabels: FieldRef<"FavoriteWallpaper", 'String'>
    readonly aiNsfwScore: FieldRef<"FavoriteWallpaper", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteWallpaper findUnique
   */
  export type FavoriteWallpaperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * Filter, which FavoriteWallpaper to fetch.
     */
    where: FavoriteWallpaperWhereUniqueInput
  }

  /**
   * FavoriteWallpaper findUniqueOrThrow
   */
  export type FavoriteWallpaperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * Filter, which FavoriteWallpaper to fetch.
     */
    where: FavoriteWallpaperWhereUniqueInput
  }

  /**
   * FavoriteWallpaper findFirst
   */
  export type FavoriteWallpaperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * Filter, which FavoriteWallpaper to fetch.
     */
    where?: FavoriteWallpaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteWallpapers to fetch.
     */
    orderBy?: FavoriteWallpaperOrderByWithRelationInput | FavoriteWallpaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteWallpapers.
     */
    cursor?: FavoriteWallpaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteWallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteWallpapers.
     */
    distinct?: FavoriteWallpaperScalarFieldEnum | FavoriteWallpaperScalarFieldEnum[]
  }

  /**
   * FavoriteWallpaper findFirstOrThrow
   */
  export type FavoriteWallpaperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * Filter, which FavoriteWallpaper to fetch.
     */
    where?: FavoriteWallpaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteWallpapers to fetch.
     */
    orderBy?: FavoriteWallpaperOrderByWithRelationInput | FavoriteWallpaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteWallpapers.
     */
    cursor?: FavoriteWallpaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteWallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteWallpapers.
     */
    distinct?: FavoriteWallpaperScalarFieldEnum | FavoriteWallpaperScalarFieldEnum[]
  }

  /**
   * FavoriteWallpaper findMany
   */
  export type FavoriteWallpaperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * Filter, which FavoriteWallpapers to fetch.
     */
    where?: FavoriteWallpaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteWallpapers to fetch.
     */
    orderBy?: FavoriteWallpaperOrderByWithRelationInput | FavoriteWallpaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteWallpapers.
     */
    cursor?: FavoriteWallpaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteWallpapers.
     */
    skip?: number
    distinct?: FavoriteWallpaperScalarFieldEnum | FavoriteWallpaperScalarFieldEnum[]
  }

  /**
   * FavoriteWallpaper create
   */
  export type FavoriteWallpaperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * The data needed to create a FavoriteWallpaper.
     */
    data: XOR<FavoriteWallpaperCreateInput, FavoriteWallpaperUncheckedCreateInput>
  }

  /**
   * FavoriteWallpaper createMany
   */
  export type FavoriteWallpaperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteWallpapers.
     */
    data: FavoriteWallpaperCreateManyInput | FavoriteWallpaperCreateManyInput[]
  }

  /**
   * FavoriteWallpaper createManyAndReturn
   */
  export type FavoriteWallpaperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteWallpapers.
     */
    data: FavoriteWallpaperCreateManyInput | FavoriteWallpaperCreateManyInput[]
  }

  /**
   * FavoriteWallpaper update
   */
  export type FavoriteWallpaperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * The data needed to update a FavoriteWallpaper.
     */
    data: XOR<FavoriteWallpaperUpdateInput, FavoriteWallpaperUncheckedUpdateInput>
    /**
     * Choose, which FavoriteWallpaper to update.
     */
    where: FavoriteWallpaperWhereUniqueInput
  }

  /**
   * FavoriteWallpaper updateMany
   */
  export type FavoriteWallpaperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteWallpapers.
     */
    data: XOR<FavoriteWallpaperUpdateManyMutationInput, FavoriteWallpaperUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteWallpapers to update
     */
    where?: FavoriteWallpaperWhereInput
    /**
     * Limit how many FavoriteWallpapers to update.
     */
    limit?: number
  }

  /**
   * FavoriteWallpaper updateManyAndReturn
   */
  export type FavoriteWallpaperUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteWallpapers.
     */
    data: XOR<FavoriteWallpaperUpdateManyMutationInput, FavoriteWallpaperUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteWallpapers to update
     */
    where?: FavoriteWallpaperWhereInput
    /**
     * Limit how many FavoriteWallpapers to update.
     */
    limit?: number
  }

  /**
   * FavoriteWallpaper upsert
   */
  export type FavoriteWallpaperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * The filter to search for the FavoriteWallpaper to update in case it exists.
     */
    where: FavoriteWallpaperWhereUniqueInput
    /**
     * In case the FavoriteWallpaper found by the `where` argument doesn't exist, create a new FavoriteWallpaper with this data.
     */
    create: XOR<FavoriteWallpaperCreateInput, FavoriteWallpaperUncheckedCreateInput>
    /**
     * In case the FavoriteWallpaper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteWallpaperUpdateInput, FavoriteWallpaperUncheckedUpdateInput>
  }

  /**
   * FavoriteWallpaper delete
   */
  export type FavoriteWallpaperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
    /**
     * Filter which FavoriteWallpaper to delete.
     */
    where: FavoriteWallpaperWhereUniqueInput
  }

  /**
   * FavoriteWallpaper deleteMany
   */
  export type FavoriteWallpaperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteWallpapers to delete
     */
    where?: FavoriteWallpaperWhereInput
    /**
     * Limit how many FavoriteWallpapers to delete.
     */
    limit?: number
  }

  /**
   * FavoriteWallpaper without action
   */
  export type FavoriteWallpaperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteWallpaper
     */
    select?: FavoriteWallpaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteWallpaper
     */
    omit?: FavoriteWallpaperOmit<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    name: string | null
    deviceIdentifier: string | null
    platform: string | null
    resolution: string | null
    lastSeen: Date | null
    userPreferences: string | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    deviceIdentifier: string | null
    platform: string | null
    resolution: string | null
    lastSeen: Date | null
    userPreferences: string | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    deviceIdentifier: number
    platform: number
    resolution: number
    lastSeen: number
    userPreferences: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
    deviceIdentifier?: true
    platform?: true
    resolution?: true
    lastSeen?: true
    userPreferences?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
    deviceIdentifier?: true
    platform?: true
    resolution?: true
    lastSeen?: true
    userPreferences?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    deviceIdentifier?: true
    platform?: true
    resolution?: true
    lastSeen?: true
    userPreferences?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    name: string
    deviceIdentifier: string
    platform: string
    resolution: string | null
    lastSeen: Date
    userPreferences: string | null
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceIdentifier?: boolean
    platform?: boolean
    resolution?: boolean
    lastSeen?: boolean
    userPreferences?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceIdentifier?: boolean
    platform?: boolean
    resolution?: boolean
    lastSeen?: boolean
    userPreferences?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deviceIdentifier?: boolean
    platform?: boolean
    resolution?: boolean
    lastSeen?: boolean
    userPreferences?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    name?: boolean
    deviceIdentifier?: boolean
    platform?: boolean
    resolution?: boolean
    lastSeen?: boolean
    userPreferences?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "deviceIdentifier" | "platform" | "resolution" | "lastSeen" | "userPreferences", ExtArgs["result"]["device"]>

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      deviceIdentifier: string
      platform: string
      resolution: string | null
      lastSeen: Date
      userPreferences: string | null
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly deviceIdentifier: FieldRef<"Device", 'String'>
    readonly platform: FieldRef<"Device", 'String'>
    readonly resolution: FieldRef<"Device", 'String'>
    readonly lastSeen: FieldRef<"Device", 'DateTime'>
    readonly userPreferences: FieldRef<"Device", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
  }


  /**
   * Model SystemSettings
   */

  export type AggregateSystemSettings = {
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  export type SystemSettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SystemSettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SystemSettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingsMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SystemSettingsMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SystemSettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to aggregate.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type GetSystemSettingsAggregateType<T extends SystemSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSettings[P]>
      : GetScalarType<T[P], AggregateSystemSettings[P]>
  }




  export type SystemSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingsWhereInput
    orderBy?: SystemSettingsOrderByWithAggregationInput | SystemSettingsOrderByWithAggregationInput[]
    by: SystemSettingsScalarFieldEnum[] | SystemSettingsScalarFieldEnum
    having?: SystemSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingsCountAggregateInputType | true
    _min?: SystemSettingsMinAggregateInputType
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type SystemSettingsGroupByOutputType = {
    id: string
    key: string
    value: string
    updatedAt: Date
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  type GetSystemSettingsGroupByPayload<T extends SystemSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }

  export type SystemSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "updatedAt", ExtArgs["result"]["systemSettings"]>

  export type $SystemSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      updatedAt: Date
    }, ExtArgs["result"]["systemSettings"]>
    composites: {}
  }

  type SystemSettingsGetPayload<S extends boolean | null | undefined | SystemSettingsDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingsPayload, S>

  type SystemSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingsCountAggregateInputType | true
    }

  export interface SystemSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSettings'], meta: { name: 'SystemSettings' } }
    /**
     * Find zero or one SystemSettings that matches the filter.
     * @param {SystemSettingsFindUniqueArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingsFindUniqueArgs>(args: SelectSubset<T, SystemSettingsFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingsFindUniqueOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingsFindFirstArgs>(args?: SelectSubset<T, SystemSettingsFindFirstArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingsFindManyArgs>(args?: SelectSubset<T, SystemSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSettings.
     * @param {SystemSettingsCreateArgs} args - Arguments to create a SystemSettings.
     * @example
     * // Create one SystemSettings
     * const SystemSettings = await prisma.systemSettings.create({
     *   data: {
     *     // ... data to create a SystemSettings
     *   }
     * })
     * 
     */
    create<T extends SystemSettingsCreateArgs>(args: SelectSubset<T, SystemSettingsCreateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingsCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingsCreateManyArgs>(args?: SelectSubset<T, SystemSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingsCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSettings.
     * @param {SystemSettingsDeleteArgs} args - Arguments to delete one SystemSettings.
     * @example
     * // Delete one SystemSettings
     * const SystemSettings = await prisma.systemSettings.delete({
     *   where: {
     *     // ... filter to delete one SystemSettings
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingsDeleteArgs>(args: SelectSubset<T, SystemSettingsDeleteArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSettings.
     * @param {SystemSettingsUpdateArgs} args - Arguments to update one SystemSettings.
     * @example
     * // Update one SystemSettings
     * const systemSettings = await prisma.systemSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingsUpdateArgs>(args: SelectSubset<T, SystemSettingsUpdateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingsDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingsDeleteManyArgs>(args?: SelectSubset<T, SystemSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingsUpdateManyArgs>(args: SelectSubset<T, SystemSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingsUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSettings.
     * @param {SystemSettingsUpsertArgs} args - Arguments to update or create a SystemSettings.
     * @example
     * // Update or create a SystemSettings
     * const systemSettings = await prisma.systemSettings.upsert({
     *   create: {
     *     // ... data to create a SystemSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSettings we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingsUpsertArgs>(args: SelectSubset<T, SystemSettingsUpsertArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSettings.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingsCountArgs>(
      args?: Subset<T, SystemSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemSettingsAggregateArgs>(args: Subset<T, SystemSettingsAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingsAggregateType<T>>

    /**
     * Group by SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsGroupByArgs} args - Group by arguments.
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
      T extends SystemSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSettings model
   */
  readonly fields: SystemSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSettings model
   */
  interface SystemSettingsFieldRefs {
    readonly id: FieldRef<"SystemSettings", 'String'>
    readonly key: FieldRef<"SystemSettings", 'String'>
    readonly value: FieldRef<"SystemSettings", 'String'>
    readonly updatedAt: FieldRef<"SystemSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSettings findUnique
   */
  export type SystemSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findUniqueOrThrow
   */
  export type SystemSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findFirst
   */
  export type SystemSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findFirstOrThrow
   */
  export type SystemSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findMany
   */
  export type SystemSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings create
   */
  export type SystemSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSettings.
     */
    data: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
  }

  /**
   * SystemSettings createMany
   */
  export type SystemSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
  }

  /**
   * SystemSettings createManyAndReturn
   */
  export type SystemSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
  }

  /**
   * SystemSettings update
   */
  export type SystemSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSettings.
     */
    data: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
    /**
     * Choose, which SystemSettings to update.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings updateMany
   */
  export type SystemSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings updateManyAndReturn
   */
  export type SystemSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings upsert
   */
  export type SystemSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSettings to update in case it exists.
     */
    where: SystemSettingsWhereUniqueInput
    /**
     * In case the SystemSettings found by the `where` argument doesn't exist, create a new SystemSettings with this data.
     */
    create: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
    /**
     * In case the SystemSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
  }

  /**
   * SystemSettings delete
   */
  export type SystemSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter which SystemSettings to delete.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings deleteMany
   */
  export type SystemSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSettings without action
   */
  export type SystemSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
  }


  /**
   * Model ScheduledTask
   */

  export type AggregateScheduledTask = {
    _count: ScheduledTaskCountAggregateOutputType | null
    _avg: ScheduledTaskAvgAggregateOutputType | null
    _sum: ScheduledTaskSumAggregateOutputType | null
    _min: ScheduledTaskMinAggregateOutputType | null
    _max: ScheduledTaskMaxAggregateOutputType | null
  }

  export type ScheduledTaskAvgAggregateOutputType = {
    priority: number | null
    attempts: number | null
  }

  export type ScheduledTaskSumAggregateOutputType = {
    priority: number | null
    attempts: number | null
  }

  export type ScheduledTaskMinAggregateOutputType = {
    id: string | null
    type: string | null
    status: string | null
    data: string | null
    priority: number | null
    scheduledFor: Date | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    lastError: string | null
    attempts: number | null
  }

  export type ScheduledTaskMaxAggregateOutputType = {
    id: string | null
    type: string | null
    status: string | null
    data: string | null
    priority: number | null
    scheduledFor: Date | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    lastError: string | null
    attempts: number | null
  }

  export type ScheduledTaskCountAggregateOutputType = {
    id: number
    type: number
    status: number
    data: number
    priority: number
    scheduledFor: number
    createdAt: number
    startedAt: number
    completedAt: number
    lastError: number
    attempts: number
    _all: number
  }


  export type ScheduledTaskAvgAggregateInputType = {
    priority?: true
    attempts?: true
  }

  export type ScheduledTaskSumAggregateInputType = {
    priority?: true
    attempts?: true
  }

  export type ScheduledTaskMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    data?: true
    priority?: true
    scheduledFor?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    lastError?: true
    attempts?: true
  }

  export type ScheduledTaskMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    data?: true
    priority?: true
    scheduledFor?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    lastError?: true
    attempts?: true
  }

  export type ScheduledTaskCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    data?: true
    priority?: true
    scheduledFor?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    lastError?: true
    attempts?: true
    _all?: true
  }

  export type ScheduledTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledTask to aggregate.
     */
    where?: ScheduledTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledTasks to fetch.
     */
    orderBy?: ScheduledTaskOrderByWithRelationInput | ScheduledTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduledTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduledTasks
    **/
    _count?: true | ScheduledTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduledTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduledTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduledTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduledTaskMaxAggregateInputType
  }

  export type GetScheduledTaskAggregateType<T extends ScheduledTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduledTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduledTask[P]>
      : GetScalarType<T[P], AggregateScheduledTask[P]>
  }




  export type ScheduledTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledTaskWhereInput
    orderBy?: ScheduledTaskOrderByWithAggregationInput | ScheduledTaskOrderByWithAggregationInput[]
    by: ScheduledTaskScalarFieldEnum[] | ScheduledTaskScalarFieldEnum
    having?: ScheduledTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduledTaskCountAggregateInputType | true
    _avg?: ScheduledTaskAvgAggregateInputType
    _sum?: ScheduledTaskSumAggregateInputType
    _min?: ScheduledTaskMinAggregateInputType
    _max?: ScheduledTaskMaxAggregateInputType
  }

  export type ScheduledTaskGroupByOutputType = {
    id: string
    type: string
    status: string
    data: string | null
    priority: number
    scheduledFor: Date
    createdAt: Date
    startedAt: Date | null
    completedAt: Date | null
    lastError: string | null
    attempts: number
    _count: ScheduledTaskCountAggregateOutputType | null
    _avg: ScheduledTaskAvgAggregateOutputType | null
    _sum: ScheduledTaskSumAggregateOutputType | null
    _min: ScheduledTaskMinAggregateOutputType | null
    _max: ScheduledTaskMaxAggregateOutputType | null
  }

  type GetScheduledTaskGroupByPayload<T extends ScheduledTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduledTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduledTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduledTaskGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduledTaskGroupByOutputType[P]>
        }
      >
    >


  export type ScheduledTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    data?: boolean
    priority?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastError?: boolean
    attempts?: boolean
  }, ExtArgs["result"]["scheduledTask"]>

  export type ScheduledTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    data?: boolean
    priority?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastError?: boolean
    attempts?: boolean
  }, ExtArgs["result"]["scheduledTask"]>

  export type ScheduledTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    data?: boolean
    priority?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastError?: boolean
    attempts?: boolean
  }, ExtArgs["result"]["scheduledTask"]>

  export type ScheduledTaskSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    data?: boolean
    priority?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastError?: boolean
    attempts?: boolean
  }

  export type ScheduledTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "data" | "priority" | "scheduledFor" | "createdAt" | "startedAt" | "completedAt" | "lastError" | "attempts", ExtArgs["result"]["scheduledTask"]>

  export type $ScheduledTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduledTask"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      status: string
      data: string | null
      priority: number
      scheduledFor: Date
      createdAt: Date
      startedAt: Date | null
      completedAt: Date | null
      lastError: string | null
      attempts: number
    }, ExtArgs["result"]["scheduledTask"]>
    composites: {}
  }

  type ScheduledTaskGetPayload<S extends boolean | null | undefined | ScheduledTaskDefaultArgs> = $Result.GetResult<Prisma.$ScheduledTaskPayload, S>

  type ScheduledTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduledTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduledTaskCountAggregateInputType | true
    }

  export interface ScheduledTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduledTask'], meta: { name: 'ScheduledTask' } }
    /**
     * Find zero or one ScheduledTask that matches the filter.
     * @param {ScheduledTaskFindUniqueArgs} args - Arguments to find a ScheduledTask
     * @example
     * // Get one ScheduledTask
     * const scheduledTask = await prisma.scheduledTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduledTaskFindUniqueArgs>(args: SelectSubset<T, ScheduledTaskFindUniqueArgs<ExtArgs>>): Prisma__ScheduledTaskClient<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduledTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduledTaskFindUniqueOrThrowArgs} args - Arguments to find a ScheduledTask
     * @example
     * // Get one ScheduledTask
     * const scheduledTask = await prisma.scheduledTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduledTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduledTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduledTaskClient<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTaskFindFirstArgs} args - Arguments to find a ScheduledTask
     * @example
     * // Get one ScheduledTask
     * const scheduledTask = await prisma.scheduledTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduledTaskFindFirstArgs>(args?: SelectSubset<T, ScheduledTaskFindFirstArgs<ExtArgs>>): Prisma__ScheduledTaskClient<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTaskFindFirstOrThrowArgs} args - Arguments to find a ScheduledTask
     * @example
     * // Get one ScheduledTask
     * const scheduledTask = await prisma.scheduledTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduledTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduledTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduledTaskClient<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduledTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduledTasks
     * const scheduledTasks = await prisma.scheduledTask.findMany()
     * 
     * // Get first 10 ScheduledTasks
     * const scheduledTasks = await prisma.scheduledTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduledTaskWithIdOnly = await prisma.scheduledTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduledTaskFindManyArgs>(args?: SelectSubset<T, ScheduledTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduledTask.
     * @param {ScheduledTaskCreateArgs} args - Arguments to create a ScheduledTask.
     * @example
     * // Create one ScheduledTask
     * const ScheduledTask = await prisma.scheduledTask.create({
     *   data: {
     *     // ... data to create a ScheduledTask
     *   }
     * })
     * 
     */
    create<T extends ScheduledTaskCreateArgs>(args: SelectSubset<T, ScheduledTaskCreateArgs<ExtArgs>>): Prisma__ScheduledTaskClient<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduledTasks.
     * @param {ScheduledTaskCreateManyArgs} args - Arguments to create many ScheduledTasks.
     * @example
     * // Create many ScheduledTasks
     * const scheduledTask = await prisma.scheduledTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduledTaskCreateManyArgs>(args?: SelectSubset<T, ScheduledTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduledTasks and returns the data saved in the database.
     * @param {ScheduledTaskCreateManyAndReturnArgs} args - Arguments to create many ScheduledTasks.
     * @example
     * // Create many ScheduledTasks
     * const scheduledTask = await prisma.scheduledTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduledTasks and only return the `id`
     * const scheduledTaskWithIdOnly = await prisma.scheduledTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduledTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduledTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduledTask.
     * @param {ScheduledTaskDeleteArgs} args - Arguments to delete one ScheduledTask.
     * @example
     * // Delete one ScheduledTask
     * const ScheduledTask = await prisma.scheduledTask.delete({
     *   where: {
     *     // ... filter to delete one ScheduledTask
     *   }
     * })
     * 
     */
    delete<T extends ScheduledTaskDeleteArgs>(args: SelectSubset<T, ScheduledTaskDeleteArgs<ExtArgs>>): Prisma__ScheduledTaskClient<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduledTask.
     * @param {ScheduledTaskUpdateArgs} args - Arguments to update one ScheduledTask.
     * @example
     * // Update one ScheduledTask
     * const scheduledTask = await prisma.scheduledTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduledTaskUpdateArgs>(args: SelectSubset<T, ScheduledTaskUpdateArgs<ExtArgs>>): Prisma__ScheduledTaskClient<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduledTasks.
     * @param {ScheduledTaskDeleteManyArgs} args - Arguments to filter ScheduledTasks to delete.
     * @example
     * // Delete a few ScheduledTasks
     * const { count } = await prisma.scheduledTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduledTaskDeleteManyArgs>(args?: SelectSubset<T, ScheduledTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduledTasks
     * const scheduledTask = await prisma.scheduledTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduledTaskUpdateManyArgs>(args: SelectSubset<T, ScheduledTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledTasks and returns the data updated in the database.
     * @param {ScheduledTaskUpdateManyAndReturnArgs} args - Arguments to update many ScheduledTasks.
     * @example
     * // Update many ScheduledTasks
     * const scheduledTask = await prisma.scheduledTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduledTasks and only return the `id`
     * const scheduledTaskWithIdOnly = await prisma.scheduledTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduledTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduledTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduledTask.
     * @param {ScheduledTaskUpsertArgs} args - Arguments to update or create a ScheduledTask.
     * @example
     * // Update or create a ScheduledTask
     * const scheduledTask = await prisma.scheduledTask.upsert({
     *   create: {
     *     // ... data to create a ScheduledTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduledTask we want to update
     *   }
     * })
     */
    upsert<T extends ScheduledTaskUpsertArgs>(args: SelectSubset<T, ScheduledTaskUpsertArgs<ExtArgs>>): Prisma__ScheduledTaskClient<$Result.GetResult<Prisma.$ScheduledTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduledTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTaskCountArgs} args - Arguments to filter ScheduledTasks to count.
     * @example
     * // Count the number of ScheduledTasks
     * const count = await prisma.scheduledTask.count({
     *   where: {
     *     // ... the filter for the ScheduledTasks we want to count
     *   }
     * })
    **/
    count<T extends ScheduledTaskCountArgs>(
      args?: Subset<T, ScheduledTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduledTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduledTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduledTaskAggregateArgs>(args: Subset<T, ScheduledTaskAggregateArgs>): Prisma.PrismaPromise<GetScheduledTaskAggregateType<T>>

    /**
     * Group by ScheduledTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTaskGroupByArgs} args - Group by arguments.
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
      T extends ScheduledTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduledTaskGroupByArgs['orderBy'] }
        : { orderBy?: ScheduledTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduledTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduledTask model
   */
  readonly fields: ScheduledTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduledTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduledTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduledTask model
   */
  interface ScheduledTaskFieldRefs {
    readonly id: FieldRef<"ScheduledTask", 'String'>
    readonly type: FieldRef<"ScheduledTask", 'String'>
    readonly status: FieldRef<"ScheduledTask", 'String'>
    readonly data: FieldRef<"ScheduledTask", 'String'>
    readonly priority: FieldRef<"ScheduledTask", 'Int'>
    readonly scheduledFor: FieldRef<"ScheduledTask", 'DateTime'>
    readonly createdAt: FieldRef<"ScheduledTask", 'DateTime'>
    readonly startedAt: FieldRef<"ScheduledTask", 'DateTime'>
    readonly completedAt: FieldRef<"ScheduledTask", 'DateTime'>
    readonly lastError: FieldRef<"ScheduledTask", 'String'>
    readonly attempts: FieldRef<"ScheduledTask", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ScheduledTask findUnique
   */
  export type ScheduledTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * Filter, which ScheduledTask to fetch.
     */
    where: ScheduledTaskWhereUniqueInput
  }

  /**
   * ScheduledTask findUniqueOrThrow
   */
  export type ScheduledTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * Filter, which ScheduledTask to fetch.
     */
    where: ScheduledTaskWhereUniqueInput
  }

  /**
   * ScheduledTask findFirst
   */
  export type ScheduledTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * Filter, which ScheduledTask to fetch.
     */
    where?: ScheduledTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledTasks to fetch.
     */
    orderBy?: ScheduledTaskOrderByWithRelationInput | ScheduledTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledTasks.
     */
    cursor?: ScheduledTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledTasks.
     */
    distinct?: ScheduledTaskScalarFieldEnum | ScheduledTaskScalarFieldEnum[]
  }

  /**
   * ScheduledTask findFirstOrThrow
   */
  export type ScheduledTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * Filter, which ScheduledTask to fetch.
     */
    where?: ScheduledTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledTasks to fetch.
     */
    orderBy?: ScheduledTaskOrderByWithRelationInput | ScheduledTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledTasks.
     */
    cursor?: ScheduledTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledTasks.
     */
    distinct?: ScheduledTaskScalarFieldEnum | ScheduledTaskScalarFieldEnum[]
  }

  /**
   * ScheduledTask findMany
   */
  export type ScheduledTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * Filter, which ScheduledTasks to fetch.
     */
    where?: ScheduledTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledTasks to fetch.
     */
    orderBy?: ScheduledTaskOrderByWithRelationInput | ScheduledTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduledTasks.
     */
    cursor?: ScheduledTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledTasks.
     */
    skip?: number
    distinct?: ScheduledTaskScalarFieldEnum | ScheduledTaskScalarFieldEnum[]
  }

  /**
   * ScheduledTask create
   */
  export type ScheduledTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * The data needed to create a ScheduledTask.
     */
    data: XOR<ScheduledTaskCreateInput, ScheduledTaskUncheckedCreateInput>
  }

  /**
   * ScheduledTask createMany
   */
  export type ScheduledTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduledTasks.
     */
    data: ScheduledTaskCreateManyInput | ScheduledTaskCreateManyInput[]
  }

  /**
   * ScheduledTask createManyAndReturn
   */
  export type ScheduledTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduledTasks.
     */
    data: ScheduledTaskCreateManyInput | ScheduledTaskCreateManyInput[]
  }

  /**
   * ScheduledTask update
   */
  export type ScheduledTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * The data needed to update a ScheduledTask.
     */
    data: XOR<ScheduledTaskUpdateInput, ScheduledTaskUncheckedUpdateInput>
    /**
     * Choose, which ScheduledTask to update.
     */
    where: ScheduledTaskWhereUniqueInput
  }

  /**
   * ScheduledTask updateMany
   */
  export type ScheduledTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduledTasks.
     */
    data: XOR<ScheduledTaskUpdateManyMutationInput, ScheduledTaskUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledTasks to update
     */
    where?: ScheduledTaskWhereInput
    /**
     * Limit how many ScheduledTasks to update.
     */
    limit?: number
  }

  /**
   * ScheduledTask updateManyAndReturn
   */
  export type ScheduledTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * The data used to update ScheduledTasks.
     */
    data: XOR<ScheduledTaskUpdateManyMutationInput, ScheduledTaskUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledTasks to update
     */
    where?: ScheduledTaskWhereInput
    /**
     * Limit how many ScheduledTasks to update.
     */
    limit?: number
  }

  /**
   * ScheduledTask upsert
   */
  export type ScheduledTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * The filter to search for the ScheduledTask to update in case it exists.
     */
    where: ScheduledTaskWhereUniqueInput
    /**
     * In case the ScheduledTask found by the `where` argument doesn't exist, create a new ScheduledTask with this data.
     */
    create: XOR<ScheduledTaskCreateInput, ScheduledTaskUncheckedCreateInput>
    /**
     * In case the ScheduledTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduledTaskUpdateInput, ScheduledTaskUncheckedUpdateInput>
  }

  /**
   * ScheduledTask delete
   */
  export type ScheduledTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
    /**
     * Filter which ScheduledTask to delete.
     */
    where: ScheduledTaskWhereUniqueInput
  }

  /**
   * ScheduledTask deleteMany
   */
  export type ScheduledTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledTasks to delete
     */
    where?: ScheduledTaskWhereInput
    /**
     * Limit how many ScheduledTasks to delete.
     */
    limit?: number
  }

  /**
   * ScheduledTask without action
   */
  export type ScheduledTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTask
     */
    select?: ScheduledTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTask
     */
    omit?: ScheduledTaskOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WallpaperQueueScalarFieldEnum: {
    id: 'id',
    wallhavenId: 'wallhavenId',
    imageUrl: 'imageUrl',
    thumbnailUrl: 'thumbnailUrl',
    addedAt: 'addedAt',
    priority: 'priority',
    deviceId: 'deviceId',
    status: 'status',
    purity: 'purity',
    resolution: 'resolution',
    category: 'category',
    aiProcessingStatus: 'aiProcessingStatus',
    aiTags: 'aiTags',
    aiColors: 'aiColors',
    aiContentLabels: 'aiContentLabels',
    aiNsfwScore: 'aiNsfwScore',
    aiProcessedAt: 'aiProcessedAt'
  };

  export type WallpaperQueueScalarFieldEnum = (typeof WallpaperQueueScalarFieldEnum)[keyof typeof WallpaperQueueScalarFieldEnum]


  export const WallpaperHistoryScalarFieldEnum: {
    id: 'id',
    wallhavenId: 'wallhavenId',
    imageUrl: 'imageUrl',
    thumbnailUrl: 'thumbnailUrl',
    usedAt: 'usedAt',
    deviceId: 'deviceId',
    duration: 'duration',
    feedback: 'feedback',
    purity: 'purity',
    resolution: 'resolution',
    category: 'category',
    tags: 'tags',
    colors: 'colors',
    aspectRatio: 'aspectRatio',
    fileSize: 'fileSize',
    timeOfDay: 'timeOfDay',
    dayOfWeek: 'dayOfWeek',
    explicitRating: 'explicitRating',
    isFavorite: 'isFavorite'
  };

  export type WallpaperHistoryScalarFieldEnum = (typeof WallpaperHistoryScalarFieldEnum)[keyof typeof WallpaperHistoryScalarFieldEnum]


  export const FavoriteWallpaperScalarFieldEnum: {
    id: 'id',
    wallhavenId: 'wallhavenId',
    originalUrl: 'originalUrl',
    localPath: 'localPath',
    thumbnailPath: 'thumbnailPath',
    addedAt: 'addedAt',
    userId: 'userId',
    title: 'title',
    description: 'description',
    tags: 'tags',
    purity: 'purity',
    resolution: 'resolution',
    category: 'category',
    size: 'size',
    aiTags: 'aiTags',
    aiColors: 'aiColors',
    aiContentLabels: 'aiContentLabels',
    aiNsfwScore: 'aiNsfwScore'
  };

  export type FavoriteWallpaperScalarFieldEnum = (typeof FavoriteWallpaperScalarFieldEnum)[keyof typeof FavoriteWallpaperScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deviceIdentifier: 'deviceIdentifier',
    platform: 'platform',
    resolution: 'resolution',
    lastSeen: 'lastSeen',
    userPreferences: 'userPreferences'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const SystemSettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingsScalarFieldEnum = (typeof SystemSettingsScalarFieldEnum)[keyof typeof SystemSettingsScalarFieldEnum]


  export const ScheduledTaskScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    data: 'data',
    priority: 'priority',
    scheduledFor: 'scheduledFor',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    lastError: 'lastError',
    attempts: 'attempts'
  };

  export type ScheduledTaskScalarFieldEnum = (typeof ScheduledTaskScalarFieldEnum)[keyof typeof ScheduledTaskScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type WallpaperQueueWhereInput = {
    AND?: WallpaperQueueWhereInput | WallpaperQueueWhereInput[]
    OR?: WallpaperQueueWhereInput[]
    NOT?: WallpaperQueueWhereInput | WallpaperQueueWhereInput[]
    id?: StringFilter<"WallpaperQueue"> | string
    wallhavenId?: StringFilter<"WallpaperQueue"> | string
    imageUrl?: StringFilter<"WallpaperQueue"> | string
    thumbnailUrl?: StringFilter<"WallpaperQueue"> | string
    addedAt?: DateTimeFilter<"WallpaperQueue"> | Date | string
    priority?: IntFilter<"WallpaperQueue"> | number
    deviceId?: StringNullableFilter<"WallpaperQueue"> | string | null
    status?: StringFilter<"WallpaperQueue"> | string
    purity?: StringFilter<"WallpaperQueue"> | string
    resolution?: StringFilter<"WallpaperQueue"> | string
    category?: StringFilter<"WallpaperQueue"> | string
    aiProcessingStatus?: StringNullableFilter<"WallpaperQueue"> | string | null
    aiTags?: StringNullableFilter<"WallpaperQueue"> | string | null
    aiColors?: StringNullableFilter<"WallpaperQueue"> | string | null
    aiContentLabels?: StringNullableFilter<"WallpaperQueue"> | string | null
    aiNsfwScore?: FloatNullableFilter<"WallpaperQueue"> | number | null
    aiProcessedAt?: DateTimeNullableFilter<"WallpaperQueue"> | Date | string | null
  }

  export type WallpaperQueueOrderByWithRelationInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    imageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    addedAt?: SortOrder
    priority?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    status?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    aiProcessingStatus?: SortOrderInput | SortOrder
    aiTags?: SortOrderInput | SortOrder
    aiColors?: SortOrderInput | SortOrder
    aiContentLabels?: SortOrderInput | SortOrder
    aiNsfwScore?: SortOrderInput | SortOrder
    aiProcessedAt?: SortOrderInput | SortOrder
  }

  export type WallpaperQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WallpaperQueueWhereInput | WallpaperQueueWhereInput[]
    OR?: WallpaperQueueWhereInput[]
    NOT?: WallpaperQueueWhereInput | WallpaperQueueWhereInput[]
    wallhavenId?: StringFilter<"WallpaperQueue"> | string
    imageUrl?: StringFilter<"WallpaperQueue"> | string
    thumbnailUrl?: StringFilter<"WallpaperQueue"> | string
    addedAt?: DateTimeFilter<"WallpaperQueue"> | Date | string
    priority?: IntFilter<"WallpaperQueue"> | number
    deviceId?: StringNullableFilter<"WallpaperQueue"> | string | null
    status?: StringFilter<"WallpaperQueue"> | string
    purity?: StringFilter<"WallpaperQueue"> | string
    resolution?: StringFilter<"WallpaperQueue"> | string
    category?: StringFilter<"WallpaperQueue"> | string
    aiProcessingStatus?: StringNullableFilter<"WallpaperQueue"> | string | null
    aiTags?: StringNullableFilter<"WallpaperQueue"> | string | null
    aiColors?: StringNullableFilter<"WallpaperQueue"> | string | null
    aiContentLabels?: StringNullableFilter<"WallpaperQueue"> | string | null
    aiNsfwScore?: FloatNullableFilter<"WallpaperQueue"> | number | null
    aiProcessedAt?: DateTimeNullableFilter<"WallpaperQueue"> | Date | string | null
  }, "id">

  export type WallpaperQueueOrderByWithAggregationInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    imageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    addedAt?: SortOrder
    priority?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    status?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    aiProcessingStatus?: SortOrderInput | SortOrder
    aiTags?: SortOrderInput | SortOrder
    aiColors?: SortOrderInput | SortOrder
    aiContentLabels?: SortOrderInput | SortOrder
    aiNsfwScore?: SortOrderInput | SortOrder
    aiProcessedAt?: SortOrderInput | SortOrder
    _count?: WallpaperQueueCountOrderByAggregateInput
    _avg?: WallpaperQueueAvgOrderByAggregateInput
    _max?: WallpaperQueueMaxOrderByAggregateInput
    _min?: WallpaperQueueMinOrderByAggregateInput
    _sum?: WallpaperQueueSumOrderByAggregateInput
  }

  export type WallpaperQueueScalarWhereWithAggregatesInput = {
    AND?: WallpaperQueueScalarWhereWithAggregatesInput | WallpaperQueueScalarWhereWithAggregatesInput[]
    OR?: WallpaperQueueScalarWhereWithAggregatesInput[]
    NOT?: WallpaperQueueScalarWhereWithAggregatesInput | WallpaperQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WallpaperQueue"> | string
    wallhavenId?: StringWithAggregatesFilter<"WallpaperQueue"> | string
    imageUrl?: StringWithAggregatesFilter<"WallpaperQueue"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"WallpaperQueue"> | string
    addedAt?: DateTimeWithAggregatesFilter<"WallpaperQueue"> | Date | string
    priority?: IntWithAggregatesFilter<"WallpaperQueue"> | number
    deviceId?: StringNullableWithAggregatesFilter<"WallpaperQueue"> | string | null
    status?: StringWithAggregatesFilter<"WallpaperQueue"> | string
    purity?: StringWithAggregatesFilter<"WallpaperQueue"> | string
    resolution?: StringWithAggregatesFilter<"WallpaperQueue"> | string
    category?: StringWithAggregatesFilter<"WallpaperQueue"> | string
    aiProcessingStatus?: StringNullableWithAggregatesFilter<"WallpaperQueue"> | string | null
    aiTags?: StringNullableWithAggregatesFilter<"WallpaperQueue"> | string | null
    aiColors?: StringNullableWithAggregatesFilter<"WallpaperQueue"> | string | null
    aiContentLabels?: StringNullableWithAggregatesFilter<"WallpaperQueue"> | string | null
    aiNsfwScore?: FloatNullableWithAggregatesFilter<"WallpaperQueue"> | number | null
    aiProcessedAt?: DateTimeNullableWithAggregatesFilter<"WallpaperQueue"> | Date | string | null
  }

  export type WallpaperHistoryWhereInput = {
    AND?: WallpaperHistoryWhereInput | WallpaperHistoryWhereInput[]
    OR?: WallpaperHistoryWhereInput[]
    NOT?: WallpaperHistoryWhereInput | WallpaperHistoryWhereInput[]
    id?: StringFilter<"WallpaperHistory"> | string
    wallhavenId?: StringFilter<"WallpaperHistory"> | string
    imageUrl?: StringFilter<"WallpaperHistory"> | string
    thumbnailUrl?: StringFilter<"WallpaperHistory"> | string
    usedAt?: DateTimeFilter<"WallpaperHistory"> | Date | string
    deviceId?: StringFilter<"WallpaperHistory"> | string
    duration?: IntNullableFilter<"WallpaperHistory"> | number | null
    feedback?: StringNullableFilter<"WallpaperHistory"> | string | null
    purity?: StringFilter<"WallpaperHistory"> | string
    resolution?: StringFilter<"WallpaperHistory"> | string
    category?: StringFilter<"WallpaperHistory"> | string
    tags?: StringNullableFilter<"WallpaperHistory"> | string | null
    colors?: StringNullableFilter<"WallpaperHistory"> | string | null
    aspectRatio?: FloatNullableFilter<"WallpaperHistory"> | number | null
    fileSize?: IntNullableFilter<"WallpaperHistory"> | number | null
    timeOfDay?: IntNullableFilter<"WallpaperHistory"> | number | null
    dayOfWeek?: IntNullableFilter<"WallpaperHistory"> | number | null
    explicitRating?: IntNullableFilter<"WallpaperHistory"> | number | null
    isFavorite?: BoolNullableFilter<"WallpaperHistory"> | boolean | null
  }

  export type WallpaperHistoryOrderByWithRelationInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    imageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    usedAt?: SortOrder
    deviceId?: SortOrder
    duration?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    tags?: SortOrderInput | SortOrder
    colors?: SortOrderInput | SortOrder
    aspectRatio?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    timeOfDay?: SortOrderInput | SortOrder
    dayOfWeek?: SortOrderInput | SortOrder
    explicitRating?: SortOrderInput | SortOrder
    isFavorite?: SortOrderInput | SortOrder
  }

  export type WallpaperHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WallpaperHistoryWhereInput | WallpaperHistoryWhereInput[]
    OR?: WallpaperHistoryWhereInput[]
    NOT?: WallpaperHistoryWhereInput | WallpaperHistoryWhereInput[]
    wallhavenId?: StringFilter<"WallpaperHistory"> | string
    imageUrl?: StringFilter<"WallpaperHistory"> | string
    thumbnailUrl?: StringFilter<"WallpaperHistory"> | string
    usedAt?: DateTimeFilter<"WallpaperHistory"> | Date | string
    deviceId?: StringFilter<"WallpaperHistory"> | string
    duration?: IntNullableFilter<"WallpaperHistory"> | number | null
    feedback?: StringNullableFilter<"WallpaperHistory"> | string | null
    purity?: StringFilter<"WallpaperHistory"> | string
    resolution?: StringFilter<"WallpaperHistory"> | string
    category?: StringFilter<"WallpaperHistory"> | string
    tags?: StringNullableFilter<"WallpaperHistory"> | string | null
    colors?: StringNullableFilter<"WallpaperHistory"> | string | null
    aspectRatio?: FloatNullableFilter<"WallpaperHistory"> | number | null
    fileSize?: IntNullableFilter<"WallpaperHistory"> | number | null
    timeOfDay?: IntNullableFilter<"WallpaperHistory"> | number | null
    dayOfWeek?: IntNullableFilter<"WallpaperHistory"> | number | null
    explicitRating?: IntNullableFilter<"WallpaperHistory"> | number | null
    isFavorite?: BoolNullableFilter<"WallpaperHistory"> | boolean | null
  }, "id">

  export type WallpaperHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    imageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    usedAt?: SortOrder
    deviceId?: SortOrder
    duration?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    tags?: SortOrderInput | SortOrder
    colors?: SortOrderInput | SortOrder
    aspectRatio?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    timeOfDay?: SortOrderInput | SortOrder
    dayOfWeek?: SortOrderInput | SortOrder
    explicitRating?: SortOrderInput | SortOrder
    isFavorite?: SortOrderInput | SortOrder
    _count?: WallpaperHistoryCountOrderByAggregateInput
    _avg?: WallpaperHistoryAvgOrderByAggregateInput
    _max?: WallpaperHistoryMaxOrderByAggregateInput
    _min?: WallpaperHistoryMinOrderByAggregateInput
    _sum?: WallpaperHistorySumOrderByAggregateInput
  }

  export type WallpaperHistoryScalarWhereWithAggregatesInput = {
    AND?: WallpaperHistoryScalarWhereWithAggregatesInput | WallpaperHistoryScalarWhereWithAggregatesInput[]
    OR?: WallpaperHistoryScalarWhereWithAggregatesInput[]
    NOT?: WallpaperHistoryScalarWhereWithAggregatesInput | WallpaperHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WallpaperHistory"> | string
    wallhavenId?: StringWithAggregatesFilter<"WallpaperHistory"> | string
    imageUrl?: StringWithAggregatesFilter<"WallpaperHistory"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"WallpaperHistory"> | string
    usedAt?: DateTimeWithAggregatesFilter<"WallpaperHistory"> | Date | string
    deviceId?: StringWithAggregatesFilter<"WallpaperHistory"> | string
    duration?: IntNullableWithAggregatesFilter<"WallpaperHistory"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"WallpaperHistory"> | string | null
    purity?: StringWithAggregatesFilter<"WallpaperHistory"> | string
    resolution?: StringWithAggregatesFilter<"WallpaperHistory"> | string
    category?: StringWithAggregatesFilter<"WallpaperHistory"> | string
    tags?: StringNullableWithAggregatesFilter<"WallpaperHistory"> | string | null
    colors?: StringNullableWithAggregatesFilter<"WallpaperHistory"> | string | null
    aspectRatio?: FloatNullableWithAggregatesFilter<"WallpaperHistory"> | number | null
    fileSize?: IntNullableWithAggregatesFilter<"WallpaperHistory"> | number | null
    timeOfDay?: IntNullableWithAggregatesFilter<"WallpaperHistory"> | number | null
    dayOfWeek?: IntNullableWithAggregatesFilter<"WallpaperHistory"> | number | null
    explicitRating?: IntNullableWithAggregatesFilter<"WallpaperHistory"> | number | null
    isFavorite?: BoolNullableWithAggregatesFilter<"WallpaperHistory"> | boolean | null
  }

  export type FavoriteWallpaperWhereInput = {
    AND?: FavoriteWallpaperWhereInput | FavoriteWallpaperWhereInput[]
    OR?: FavoriteWallpaperWhereInput[]
    NOT?: FavoriteWallpaperWhereInput | FavoriteWallpaperWhereInput[]
    id?: StringFilter<"FavoriteWallpaper"> | string
    wallhavenId?: StringFilter<"FavoriteWallpaper"> | string
    originalUrl?: StringFilter<"FavoriteWallpaper"> | string
    localPath?: StringFilter<"FavoriteWallpaper"> | string
    thumbnailPath?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    addedAt?: DateTimeFilter<"FavoriteWallpaper"> | Date | string
    userId?: StringFilter<"FavoriteWallpaper"> | string
    title?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    description?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    tags?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    purity?: StringFilter<"FavoriteWallpaper"> | string
    resolution?: StringFilter<"FavoriteWallpaper"> | string
    category?: StringFilter<"FavoriteWallpaper"> | string
    size?: IntFilter<"FavoriteWallpaper"> | number
    aiTags?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    aiColors?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    aiContentLabels?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    aiNsfwScore?: FloatNullableFilter<"FavoriteWallpaper"> | number | null
  }

  export type FavoriteWallpaperOrderByWithRelationInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    originalUrl?: SortOrder
    localPath?: SortOrder
    thumbnailPath?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    size?: SortOrder
    aiTags?: SortOrderInput | SortOrder
    aiColors?: SortOrderInput | SortOrder
    aiContentLabels?: SortOrderInput | SortOrder
    aiNsfwScore?: SortOrderInput | SortOrder
  }

  export type FavoriteWallpaperWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavoriteWallpaperWhereInput | FavoriteWallpaperWhereInput[]
    OR?: FavoriteWallpaperWhereInput[]
    NOT?: FavoriteWallpaperWhereInput | FavoriteWallpaperWhereInput[]
    wallhavenId?: StringFilter<"FavoriteWallpaper"> | string
    originalUrl?: StringFilter<"FavoriteWallpaper"> | string
    localPath?: StringFilter<"FavoriteWallpaper"> | string
    thumbnailPath?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    addedAt?: DateTimeFilter<"FavoriteWallpaper"> | Date | string
    userId?: StringFilter<"FavoriteWallpaper"> | string
    title?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    description?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    tags?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    purity?: StringFilter<"FavoriteWallpaper"> | string
    resolution?: StringFilter<"FavoriteWallpaper"> | string
    category?: StringFilter<"FavoriteWallpaper"> | string
    size?: IntFilter<"FavoriteWallpaper"> | number
    aiTags?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    aiColors?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    aiContentLabels?: StringNullableFilter<"FavoriteWallpaper"> | string | null
    aiNsfwScore?: FloatNullableFilter<"FavoriteWallpaper"> | number | null
  }, "id">

  export type FavoriteWallpaperOrderByWithAggregationInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    originalUrl?: SortOrder
    localPath?: SortOrder
    thumbnailPath?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    size?: SortOrder
    aiTags?: SortOrderInput | SortOrder
    aiColors?: SortOrderInput | SortOrder
    aiContentLabels?: SortOrderInput | SortOrder
    aiNsfwScore?: SortOrderInput | SortOrder
    _count?: FavoriteWallpaperCountOrderByAggregateInput
    _avg?: FavoriteWallpaperAvgOrderByAggregateInput
    _max?: FavoriteWallpaperMaxOrderByAggregateInput
    _min?: FavoriteWallpaperMinOrderByAggregateInput
    _sum?: FavoriteWallpaperSumOrderByAggregateInput
  }

  export type FavoriteWallpaperScalarWhereWithAggregatesInput = {
    AND?: FavoriteWallpaperScalarWhereWithAggregatesInput | FavoriteWallpaperScalarWhereWithAggregatesInput[]
    OR?: FavoriteWallpaperScalarWhereWithAggregatesInput[]
    NOT?: FavoriteWallpaperScalarWhereWithAggregatesInput | FavoriteWallpaperScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FavoriteWallpaper"> | string
    wallhavenId?: StringWithAggregatesFilter<"FavoriteWallpaper"> | string
    originalUrl?: StringWithAggregatesFilter<"FavoriteWallpaper"> | string
    localPath?: StringWithAggregatesFilter<"FavoriteWallpaper"> | string
    thumbnailPath?: StringNullableWithAggregatesFilter<"FavoriteWallpaper"> | string | null
    addedAt?: DateTimeWithAggregatesFilter<"FavoriteWallpaper"> | Date | string
    userId?: StringWithAggregatesFilter<"FavoriteWallpaper"> | string
    title?: StringNullableWithAggregatesFilter<"FavoriteWallpaper"> | string | null
    description?: StringNullableWithAggregatesFilter<"FavoriteWallpaper"> | string | null
    tags?: StringNullableWithAggregatesFilter<"FavoriteWallpaper"> | string | null
    purity?: StringWithAggregatesFilter<"FavoriteWallpaper"> | string
    resolution?: StringWithAggregatesFilter<"FavoriteWallpaper"> | string
    category?: StringWithAggregatesFilter<"FavoriteWallpaper"> | string
    size?: IntWithAggregatesFilter<"FavoriteWallpaper"> | number
    aiTags?: StringNullableWithAggregatesFilter<"FavoriteWallpaper"> | string | null
    aiColors?: StringNullableWithAggregatesFilter<"FavoriteWallpaper"> | string | null
    aiContentLabels?: StringNullableWithAggregatesFilter<"FavoriteWallpaper"> | string | null
    aiNsfwScore?: FloatNullableWithAggregatesFilter<"FavoriteWallpaper"> | number | null
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    deviceIdentifier?: StringFilter<"Device"> | string
    platform?: StringFilter<"Device"> | string
    resolution?: StringNullableFilter<"Device"> | string | null
    lastSeen?: DateTimeFilter<"Device"> | Date | string
    userPreferences?: StringNullableFilter<"Device"> | string | null
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deviceIdentifier?: SortOrder
    platform?: SortOrder
    resolution?: SortOrderInput | SortOrder
    lastSeen?: SortOrder
    userPreferences?: SortOrderInput | SortOrder
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceIdentifier?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringFilter<"Device"> | string
    platform?: StringFilter<"Device"> | string
    resolution?: StringNullableFilter<"Device"> | string | null
    lastSeen?: DateTimeFilter<"Device"> | Date | string
    userPreferences?: StringNullableFilter<"Device"> | string | null
  }, "id" | "deviceIdentifier">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deviceIdentifier?: SortOrder
    platform?: SortOrder
    resolution?: SortOrderInput | SortOrder
    lastSeen?: SortOrder
    userPreferences?: SortOrderInput | SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
    deviceIdentifier?: StringWithAggregatesFilter<"Device"> | string
    platform?: StringWithAggregatesFilter<"Device"> | string
    resolution?: StringNullableWithAggregatesFilter<"Device"> | string | null
    lastSeen?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    userPreferences?: StringNullableWithAggregatesFilter<"Device"> | string | null
  }

  export type SystemSettingsWhereInput = {
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    id?: StringFilter<"SystemSettings"> | string
    key?: StringFilter<"SystemSettings"> | string
    value?: StringFilter<"SystemSettings"> | string
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }

  export type SystemSettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    value?: StringFilter<"SystemSettings"> | string
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }, "id" | "key">

  export type SystemSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingsCountOrderByAggregateInput
    _max?: SystemSettingsMaxOrderByAggregateInput
    _min?: SystemSettingsMinOrderByAggregateInput
  }

  export type SystemSettingsScalarWhereWithAggregatesInput = {
    AND?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    OR?: SystemSettingsScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSettings"> | string
    key?: StringWithAggregatesFilter<"SystemSettings"> | string
    value?: StringWithAggregatesFilter<"SystemSettings"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
  }

  export type ScheduledTaskWhereInput = {
    AND?: ScheduledTaskWhereInput | ScheduledTaskWhereInput[]
    OR?: ScheduledTaskWhereInput[]
    NOT?: ScheduledTaskWhereInput | ScheduledTaskWhereInput[]
    id?: StringFilter<"ScheduledTask"> | string
    type?: StringFilter<"ScheduledTask"> | string
    status?: StringFilter<"ScheduledTask"> | string
    data?: StringNullableFilter<"ScheduledTask"> | string | null
    priority?: IntFilter<"ScheduledTask"> | number
    scheduledFor?: DateTimeFilter<"ScheduledTask"> | Date | string
    createdAt?: DateTimeFilter<"ScheduledTask"> | Date | string
    startedAt?: DateTimeNullableFilter<"ScheduledTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScheduledTask"> | Date | string | null
    lastError?: StringNullableFilter<"ScheduledTask"> | string | null
    attempts?: IntFilter<"ScheduledTask"> | number
  }

  export type ScheduledTaskOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    data?: SortOrderInput | SortOrder
    priority?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    attempts?: SortOrder
  }

  export type ScheduledTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduledTaskWhereInput | ScheduledTaskWhereInput[]
    OR?: ScheduledTaskWhereInput[]
    NOT?: ScheduledTaskWhereInput | ScheduledTaskWhereInput[]
    type?: StringFilter<"ScheduledTask"> | string
    status?: StringFilter<"ScheduledTask"> | string
    data?: StringNullableFilter<"ScheduledTask"> | string | null
    priority?: IntFilter<"ScheduledTask"> | number
    scheduledFor?: DateTimeFilter<"ScheduledTask"> | Date | string
    createdAt?: DateTimeFilter<"ScheduledTask"> | Date | string
    startedAt?: DateTimeNullableFilter<"ScheduledTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScheduledTask"> | Date | string | null
    lastError?: StringNullableFilter<"ScheduledTask"> | string | null
    attempts?: IntFilter<"ScheduledTask"> | number
  }, "id">

  export type ScheduledTaskOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    data?: SortOrderInput | SortOrder
    priority?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    attempts?: SortOrder
    _count?: ScheduledTaskCountOrderByAggregateInput
    _avg?: ScheduledTaskAvgOrderByAggregateInput
    _max?: ScheduledTaskMaxOrderByAggregateInput
    _min?: ScheduledTaskMinOrderByAggregateInput
    _sum?: ScheduledTaskSumOrderByAggregateInput
  }

  export type ScheduledTaskScalarWhereWithAggregatesInput = {
    AND?: ScheduledTaskScalarWhereWithAggregatesInput | ScheduledTaskScalarWhereWithAggregatesInput[]
    OR?: ScheduledTaskScalarWhereWithAggregatesInput[]
    NOT?: ScheduledTaskScalarWhereWithAggregatesInput | ScheduledTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduledTask"> | string
    type?: StringWithAggregatesFilter<"ScheduledTask"> | string
    status?: StringWithAggregatesFilter<"ScheduledTask"> | string
    data?: StringNullableWithAggregatesFilter<"ScheduledTask"> | string | null
    priority?: IntWithAggregatesFilter<"ScheduledTask"> | number
    scheduledFor?: DateTimeWithAggregatesFilter<"ScheduledTask"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ScheduledTask"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"ScheduledTask"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ScheduledTask"> | Date | string | null
    lastError?: StringNullableWithAggregatesFilter<"ScheduledTask"> | string | null
    attempts?: IntWithAggregatesFilter<"ScheduledTask"> | number
  }

  export type WallpaperQueueCreateInput = {
    id?: string
    wallhavenId: string
    imageUrl: string
    thumbnailUrl: string
    addedAt?: Date | string
    priority?: number
    deviceId?: string | null
    status?: string
    purity: string
    resolution: string
    category: string
    aiProcessingStatus?: string | null
    aiTags?: string | null
    aiColors?: string | null
    aiContentLabels?: string | null
    aiNsfwScore?: number | null
    aiProcessedAt?: Date | string | null
  }

  export type WallpaperQueueUncheckedCreateInput = {
    id?: string
    wallhavenId: string
    imageUrl: string
    thumbnailUrl: string
    addedAt?: Date | string
    priority?: number
    deviceId?: string | null
    status?: string
    purity: string
    resolution: string
    category: string
    aiProcessingStatus?: string | null
    aiTags?: string | null
    aiColors?: string | null
    aiContentLabels?: string | null
    aiNsfwScore?: number | null
    aiProcessedAt?: Date | string | null
  }

  export type WallpaperQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: IntFieldUpdateOperationsInput | number
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    aiProcessingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiTags?: NullableStringFieldUpdateOperationsInput | string | null
    aiColors?: NullableStringFieldUpdateOperationsInput | string | null
    aiContentLabels?: NullableStringFieldUpdateOperationsInput | string | null
    aiNsfwScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WallpaperQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: IntFieldUpdateOperationsInput | number
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    aiProcessingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiTags?: NullableStringFieldUpdateOperationsInput | string | null
    aiColors?: NullableStringFieldUpdateOperationsInput | string | null
    aiContentLabels?: NullableStringFieldUpdateOperationsInput | string | null
    aiNsfwScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WallpaperQueueCreateManyInput = {
    id?: string
    wallhavenId: string
    imageUrl: string
    thumbnailUrl: string
    addedAt?: Date | string
    priority?: number
    deviceId?: string | null
    status?: string
    purity: string
    resolution: string
    category: string
    aiProcessingStatus?: string | null
    aiTags?: string | null
    aiColors?: string | null
    aiContentLabels?: string | null
    aiNsfwScore?: number | null
    aiProcessedAt?: Date | string | null
  }

  export type WallpaperQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: IntFieldUpdateOperationsInput | number
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    aiProcessingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiTags?: NullableStringFieldUpdateOperationsInput | string | null
    aiColors?: NullableStringFieldUpdateOperationsInput | string | null
    aiContentLabels?: NullableStringFieldUpdateOperationsInput | string | null
    aiNsfwScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WallpaperQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: IntFieldUpdateOperationsInput | number
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    aiProcessingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiTags?: NullableStringFieldUpdateOperationsInput | string | null
    aiColors?: NullableStringFieldUpdateOperationsInput | string | null
    aiContentLabels?: NullableStringFieldUpdateOperationsInput | string | null
    aiNsfwScore?: NullableFloatFieldUpdateOperationsInput | number | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WallpaperHistoryCreateInput = {
    id?: string
    wallhavenId: string
    imageUrl: string
    thumbnailUrl: string
    usedAt?: Date | string
    deviceId: string
    duration?: number | null
    feedback?: string | null
    purity: string
    resolution: string
    category: string
    tags?: string | null
    colors?: string | null
    aspectRatio?: number | null
    fileSize?: number | null
    timeOfDay?: number | null
    dayOfWeek?: number | null
    explicitRating?: number | null
    isFavorite?: boolean | null
  }

  export type WallpaperHistoryUncheckedCreateInput = {
    id?: string
    wallhavenId: string
    imageUrl: string
    thumbnailUrl: string
    usedAt?: Date | string
    deviceId: string
    duration?: number | null
    feedback?: string | null
    purity: string
    resolution: string
    category: string
    tags?: string | null
    colors?: string | null
    aspectRatio?: number | null
    fileSize?: number | null
    timeOfDay?: number | null
    dayOfWeek?: number | null
    explicitRating?: number | null
    isFavorite?: boolean | null
  }

  export type WallpaperHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    timeOfDay?: NullableIntFieldUpdateOperationsInput | number | null
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    explicitRating?: NullableIntFieldUpdateOperationsInput | number | null
    isFavorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type WallpaperHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    timeOfDay?: NullableIntFieldUpdateOperationsInput | number | null
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    explicitRating?: NullableIntFieldUpdateOperationsInput | number | null
    isFavorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type WallpaperHistoryCreateManyInput = {
    id?: string
    wallhavenId: string
    imageUrl: string
    thumbnailUrl: string
    usedAt?: Date | string
    deviceId: string
    duration?: number | null
    feedback?: string | null
    purity: string
    resolution: string
    category: string
    tags?: string | null
    colors?: string | null
    aspectRatio?: number | null
    fileSize?: number | null
    timeOfDay?: number | null
    dayOfWeek?: number | null
    explicitRating?: number | null
    isFavorite?: boolean | null
  }

  export type WallpaperHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    timeOfDay?: NullableIntFieldUpdateOperationsInput | number | null
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    explicitRating?: NullableIntFieldUpdateOperationsInput | number | null
    isFavorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type WallpaperHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    timeOfDay?: NullableIntFieldUpdateOperationsInput | number | null
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    explicitRating?: NullableIntFieldUpdateOperationsInput | number | null
    isFavorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FavoriteWallpaperCreateInput = {
    id?: string
    wallhavenId: string
    originalUrl: string
    localPath: string
    thumbnailPath?: string | null
    addedAt?: Date | string
    userId: string
    title?: string | null
    description?: string | null
    tags?: string | null
    purity: string
    resolution: string
    category: string
    size: number
    aiTags?: string | null
    aiColors?: string | null
    aiContentLabels?: string | null
    aiNsfwScore?: number | null
  }

  export type FavoriteWallpaperUncheckedCreateInput = {
    id?: string
    wallhavenId: string
    originalUrl: string
    localPath: string
    thumbnailPath?: string | null
    addedAt?: Date | string
    userId: string
    title?: string | null
    description?: string | null
    tags?: string | null
    purity: string
    resolution: string
    category: string
    size: number
    aiTags?: string | null
    aiColors?: string | null
    aiContentLabels?: string | null
    aiNsfwScore?: number | null
  }

  export type FavoriteWallpaperUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    localPath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    aiTags?: NullableStringFieldUpdateOperationsInput | string | null
    aiColors?: NullableStringFieldUpdateOperationsInput | string | null
    aiContentLabels?: NullableStringFieldUpdateOperationsInput | string | null
    aiNsfwScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FavoriteWallpaperUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    localPath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    aiTags?: NullableStringFieldUpdateOperationsInput | string | null
    aiColors?: NullableStringFieldUpdateOperationsInput | string | null
    aiContentLabels?: NullableStringFieldUpdateOperationsInput | string | null
    aiNsfwScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FavoriteWallpaperCreateManyInput = {
    id?: string
    wallhavenId: string
    originalUrl: string
    localPath: string
    thumbnailPath?: string | null
    addedAt?: Date | string
    userId: string
    title?: string | null
    description?: string | null
    tags?: string | null
    purity: string
    resolution: string
    category: string
    size: number
    aiTags?: string | null
    aiColors?: string | null
    aiContentLabels?: string | null
    aiNsfwScore?: number | null
  }

  export type FavoriteWallpaperUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    localPath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    aiTags?: NullableStringFieldUpdateOperationsInput | string | null
    aiColors?: NullableStringFieldUpdateOperationsInput | string | null
    aiContentLabels?: NullableStringFieldUpdateOperationsInput | string | null
    aiNsfwScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FavoriteWallpaperUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallhavenId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    localPath?: StringFieldUpdateOperationsInput | string
    thumbnailPath?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    purity?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    aiTags?: NullableStringFieldUpdateOperationsInput | string | null
    aiColors?: NullableStringFieldUpdateOperationsInput | string | null
    aiContentLabels?: NullableStringFieldUpdateOperationsInput | string | null
    aiNsfwScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DeviceCreateInput = {
    id?: string
    name: string
    deviceIdentifier: string
    platform: string
    resolution?: string | null
    lastSeen?: Date | string
    userPreferences?: string | null
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    name: string
    deviceIdentifier: string
    platform: string
    resolution?: string | null
    lastSeen?: Date | string
    userPreferences?: string | null
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceIdentifier?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    userPreferences?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceIdentifier?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    userPreferences?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceCreateManyInput = {
    id?: string
    name: string
    deviceIdentifier: string
    platform: string
    resolution?: string | null
    lastSeen?: Date | string
    userPreferences?: string | null
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceIdentifier?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    userPreferences?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceIdentifier?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    userPreferences?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemSettingsCreateInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SystemSettingsUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateManyInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledTaskCreateInput = {
    id?: string
    type: string
    status?: string
    data?: string | null
    priority?: number
    scheduledFor: Date | string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastError?: string | null
    attempts?: number
  }

  export type ScheduledTaskUncheckedCreateInput = {
    id?: string
    type: string
    status?: string
    data?: string | null
    priority?: number
    scheduledFor: Date | string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastError?: string | null
    attempts?: number
  }

  export type ScheduledTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduledTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduledTaskCreateManyInput = {
    id?: string
    type: string
    status?: string
    data?: string | null
    priority?: number
    scheduledFor: Date | string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastError?: string | null
    attempts?: number
  }

  export type ScheduledTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduledTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WallpaperQueueCountOrderByAggregateInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    imageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    addedAt?: SortOrder
    priority?: SortOrder
    deviceId?: SortOrder
    status?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    aiProcessingStatus?: SortOrder
    aiTags?: SortOrder
    aiColors?: SortOrder
    aiContentLabels?: SortOrder
    aiNsfwScore?: SortOrder
    aiProcessedAt?: SortOrder
  }

  export type WallpaperQueueAvgOrderByAggregateInput = {
    priority?: SortOrder
    aiNsfwScore?: SortOrder
  }

  export type WallpaperQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    imageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    addedAt?: SortOrder
    priority?: SortOrder
    deviceId?: SortOrder
    status?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    aiProcessingStatus?: SortOrder
    aiTags?: SortOrder
    aiColors?: SortOrder
    aiContentLabels?: SortOrder
    aiNsfwScore?: SortOrder
    aiProcessedAt?: SortOrder
  }

  export type WallpaperQueueMinOrderByAggregateInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    imageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    addedAt?: SortOrder
    priority?: SortOrder
    deviceId?: SortOrder
    status?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    aiProcessingStatus?: SortOrder
    aiTags?: SortOrder
    aiColors?: SortOrder
    aiContentLabels?: SortOrder
    aiNsfwScore?: SortOrder
    aiProcessedAt?: SortOrder
  }

  export type WallpaperQueueSumOrderByAggregateInput = {
    priority?: SortOrder
    aiNsfwScore?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type WallpaperHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    imageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    usedAt?: SortOrder
    deviceId?: SortOrder
    duration?: SortOrder
    feedback?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    colors?: SortOrder
    aspectRatio?: SortOrder
    fileSize?: SortOrder
    timeOfDay?: SortOrder
    dayOfWeek?: SortOrder
    explicitRating?: SortOrder
    isFavorite?: SortOrder
  }

  export type WallpaperHistoryAvgOrderByAggregateInput = {
    duration?: SortOrder
    aspectRatio?: SortOrder
    fileSize?: SortOrder
    timeOfDay?: SortOrder
    dayOfWeek?: SortOrder
    explicitRating?: SortOrder
  }

  export type WallpaperHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    imageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    usedAt?: SortOrder
    deviceId?: SortOrder
    duration?: SortOrder
    feedback?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    colors?: SortOrder
    aspectRatio?: SortOrder
    fileSize?: SortOrder
    timeOfDay?: SortOrder
    dayOfWeek?: SortOrder
    explicitRating?: SortOrder
    isFavorite?: SortOrder
  }

  export type WallpaperHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    imageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    usedAt?: SortOrder
    deviceId?: SortOrder
    duration?: SortOrder
    feedback?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    colors?: SortOrder
    aspectRatio?: SortOrder
    fileSize?: SortOrder
    timeOfDay?: SortOrder
    dayOfWeek?: SortOrder
    explicitRating?: SortOrder
    isFavorite?: SortOrder
  }

  export type WallpaperHistorySumOrderByAggregateInput = {
    duration?: SortOrder
    aspectRatio?: SortOrder
    fileSize?: SortOrder
    timeOfDay?: SortOrder
    dayOfWeek?: SortOrder
    explicitRating?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FavoriteWallpaperCountOrderByAggregateInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    originalUrl?: SortOrder
    localPath?: SortOrder
    thumbnailPath?: SortOrder
    addedAt?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    size?: SortOrder
    aiTags?: SortOrder
    aiColors?: SortOrder
    aiContentLabels?: SortOrder
    aiNsfwScore?: SortOrder
  }

  export type FavoriteWallpaperAvgOrderByAggregateInput = {
    size?: SortOrder
    aiNsfwScore?: SortOrder
  }

  export type FavoriteWallpaperMaxOrderByAggregateInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    originalUrl?: SortOrder
    localPath?: SortOrder
    thumbnailPath?: SortOrder
    addedAt?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    size?: SortOrder
    aiTags?: SortOrder
    aiColors?: SortOrder
    aiContentLabels?: SortOrder
    aiNsfwScore?: SortOrder
  }

  export type FavoriteWallpaperMinOrderByAggregateInput = {
    id?: SortOrder
    wallhavenId?: SortOrder
    originalUrl?: SortOrder
    localPath?: SortOrder
    thumbnailPath?: SortOrder
    addedAt?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    purity?: SortOrder
    resolution?: SortOrder
    category?: SortOrder
    size?: SortOrder
    aiTags?: SortOrder
    aiColors?: SortOrder
    aiContentLabels?: SortOrder
    aiNsfwScore?: SortOrder
  }

  export type FavoriteWallpaperSumOrderByAggregateInput = {
    size?: SortOrder
    aiNsfwScore?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceIdentifier?: SortOrder
    platform?: SortOrder
    resolution?: SortOrder
    lastSeen?: SortOrder
    userPreferences?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceIdentifier?: SortOrder
    platform?: SortOrder
    resolution?: SortOrder
    lastSeen?: SortOrder
    userPreferences?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceIdentifier?: SortOrder
    platform?: SortOrder
    resolution?: SortOrder
    lastSeen?: SortOrder
    userPreferences?: SortOrder
  }

  export type SystemSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledTaskCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    data?: SortOrder
    priority?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    lastError?: SortOrder
    attempts?: SortOrder
  }

  export type ScheduledTaskAvgOrderByAggregateInput = {
    priority?: SortOrder
    attempts?: SortOrder
  }

  export type ScheduledTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    data?: SortOrder
    priority?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    lastError?: SortOrder
    attempts?: SortOrder
  }

  export type ScheduledTaskMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    data?: SortOrder
    priority?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    lastError?: SortOrder
    attempts?: SortOrder
  }

  export type ScheduledTaskSumOrderByAggregateInput = {
    priority?: SortOrder
    attempts?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }



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