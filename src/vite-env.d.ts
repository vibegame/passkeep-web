/// <reference types="vite/client" />

interface ArrayConstructor {
  isArray(arg: ReadonlyArray<any> | any): arg is ReadonlyArray<any>;
}
