const foo = {
    name: 'foo',
}

const bar ={
    name: 'bar',
    getName() {
        return this.name;
    }
}

bar.getName.call(foo);