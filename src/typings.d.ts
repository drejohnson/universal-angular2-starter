declare const ROOT_DIR: string;
declare const SRC_DIR: string;
declare const DIST_DIR: string;
declare const CLIENT_DIR: string;
declare const SERVER_DIR: string;
declare const SERVER_SRC: string;

declare const HOST: string;
declare const PORT: number;

declare const VENDOR_NAME: string;
declare const SERVER_NAME: string;
declare const CLIENT_NAME: string;

declare const NODE_MODULES: string[];

declare const PREBOOT: {
  appRoot: string,
  freeze:  any,
  replay:  string,
  buffer:  boolean,
  debug:   boolean,
  uglify:  boolean,
};

// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;
declare var HMR: boolean;
interface GlobalEnvironment {
  ENV;
  HMR;
}

interface WebpackConfig {
  cache?: boolean;
  devtool?: string;
  entry: Entry;
  output: any;
  module?: {
    loaders?: Array<any>
  };
  plugins?: Array<any>;
  resolve?: {
    extensions?: Array<string>;
  };
  devServer?: {
    contentBase?: string;
    port?: number;
    historyApiFallback?: boolean;
    hot?: boolean;
  };
  node?: {
    process?: boolean;
    global?: boolean;
    Buffer?: boolean;
    crypto?: string | boolean;
    module?: boolean;
    clearImmediate?: boolean;
    setImmediate?: boolean
    clearTimeout?: boolean;
    setTimeout?: boolean
  };
}

interface WebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    decline(dependencies?: string | string[]): void;
    dispose(callback?: (data?: any) => void): void;
    addDisposeHandler(callback?: (data?: any) => void): void;
    removeDisposeHandler(callback?: (data?: any) => void): void;
    check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    status(callback?: (status?: string) => void): void | string;
    removeStatusHandler(callback?: (status?: string) => void): void;
  };
}

interface WebpackRequire {
  context(file: string, flag?: boolean, exp?: RegExp): any;
}


interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}


// Extend typings
interface NodeRequire extends WebpackRequire {}
interface ErrorConstructor extends ErrorStackTraceLimit {}
interface NodeModule extends WebpackModule {}
interface Global extends GlobalEnvironment  {}

// Types
type Entry = Array<string> | Object;

type Output = Array<string> | {
  path: string,
  filename: string
};

type ENV_OPTIONS = any;

interface Thenable<T> {
  then<U>(
    onFulfilled?: (value: T) => U | Thenable<U>,
    onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
  then<U>(
    onFulfilled?: (value: T) => U | Thenable<U>,
    onRejected?: (error: any) => void): Thenable<U>;
  catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
}
