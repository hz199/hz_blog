//评测题目: 无

Promise.resolve({
    then
}).then(console.log)

Promise.all = (promises) => {
    const promisesLength = promises.length
    const resoveList = new Array(promisesLength)
    let resolveNum = 0

    return new Promsie((resolve, reject) => {
        promises.forEach((p, index) => {
            Promise
                .resolve(p)
                .then(res => {
                    resoveList[index] = res

                    if (++resolveNum === promisesLength) {
                        resolve(promisesLength)
                    }

                })
                .catch(reject)


        })
    })
};

// Generator

function* a() {
    yield 1;
    yield 2;
}

b = a();

b.next() // { done, value }

// Iterator


const a = {
    test1: 1,
    test2: 2,
    test3: 3
    [Symbol.iterator]() {

        return {
            items: Object.values(this),
                next() {
    value: items.pop()
    done: items.length === 0

}
          
          }
      }
  
  }

for (let item of a) {
    console.log(item) // 1 /. 2 / 3
}



function

  // TypeScript
  
  extends ? :

infer

is

inflect - metadata

// React

setState((prevState) => {

    return nextState;
}, () => {

});

// Hooks

<Select value={undefined} onChange={() => { }} />

[1, 2, 3]

function Select({ value, onChange }) {
    // [] => [1,2,3]
    const [options] = useState();

    // ...

    useEffect(() => {
        !value && onChange(options[0])
    }, [value])
}