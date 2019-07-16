class A {
  func1 () {
    print('A::::::;');
  }
}

class B {
  func2 () {
    print('B::::::;');
  }
}

class C with A,B {
  
}

void main() {
  C c = new C();
  c.func1();
  c.func2();
}