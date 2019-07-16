
// String func (String name) {
//   return name;
// }

// String func1 (String name, [int age]) {
//   return "$name ___${age != 0 ? age: 0}";
// }

// String func2 (String name, [int age = 20]) {
//   return "$name ___${age}";
// }

// String func3 (String name, {int age, String sex = '男'}) {
//   return "$name ___${age} __$sex";
// }


abstract class Person {
  eat(String data);
}

abstract class A {
  a();
}

// p1 必须实现接口中定义的方法
class p1 implements Person, A {
  @override
  eat(String data) {
    // TODO: implement eat
    return null;
  }

  @override
  a() {
    // TODO: implement a
    return null;
  }
}

void main() {
  // print(func3('哈哈', age: 30));
}