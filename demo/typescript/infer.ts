
type inferType<T> = T extends (param: infer P) => any ? P : T;

interface User {
  name: string;
  age: number;
}

type Func = (user: User) => number

type Param = inferType<Func>

type AA = inferType<string>

class TestClass3 {

  constructor(
    public name: string,
    public string: string
  ) {
    this.name = name
    this.string = string
  }
}

class ClassTest extends TestClass3 {
  constructor () {
    super('小明', '小明小明')
  }

  public name: string

  eat () {
  }

  work () {}
}

type ClassType = typeof TestClass3

type Params = ConstructorParameters<typeof ClassTest>;  // [string, numbder]

type ReturnClassType = ReturnType<Func>

type Instance = InstanceType<ClassType>; 


type TTuple = [string, number];
type Res = TTuple[number];


type UnionToIntersection<U> = 
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never

type Weird = UnionToIntersection<string | number>
