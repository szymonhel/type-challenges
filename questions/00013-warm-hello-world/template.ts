import { Equal, Expect } from '@type-challenges/utils';

type HelloWorld = string // expected to be a string
// you should make this work
type test = Expect<Equal<HelloWorld, string>>