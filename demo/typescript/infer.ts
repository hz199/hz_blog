
type inferType<T> = T extends (param: infer P) => any ? P : T;

interface User {
  name: string;
  age: number;
}

type Func = (user: User) => string

type Param = inferType<Func>

type AA = inferType<string>

class TestClass {

  constructor(
    public name: string,
    public string: number
  ) {}
}

class ClassTest1 {
  constructor (age: number, params: Function) {

  }

  public name: string

  eat () {}

  work () {}
}

type ClassType = typeof TestClass

type Params = ConstructorParameters<typeof ClassTest1>;  // [string, numbder]

type ReturnClassType = ReturnType<Func>

type Instance = InstanceType<ClassType>; 


type TTuple = [string, number];
type Res = TTuple[number];


type UnionToIntersection<U> = 
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never

type Weird = UnionToIntersection<string | number>
