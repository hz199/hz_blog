
interface User {
  name: string
  age: number
  address: string
}

type MyPartial<T> = {
    [P in keyof T]?: T[P];
}

type MyPartialUser = MyPartial<User>

/**
 * 选出某个接口的子集
 */
type MyPick<T, U extends keyof T> = {
  [P in U]: T[P]
}

type ChildUser = MyPick<User, 'age' | 'name'>

type Diff<T, U> = {
}

interface Animal {
  name: string
  age: number
  eat: (food: string) => void
}

interface Dog {
  name: string
  age: number
}

type AnimalDiff = Diff<Dog, Animal>

type MyDiff<T, U> = T extends U ? never : T

type AnimalKey = 'name' | 'age' | 'eat'
type DogKey = 'name' | 'age'

type AnimalDogDiff = MyDiff<AnimalKey, DogKey>