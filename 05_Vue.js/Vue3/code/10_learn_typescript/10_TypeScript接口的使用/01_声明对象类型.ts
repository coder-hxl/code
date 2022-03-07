// 通过类型(type)别名声明对象类型
// type InfoType = {name: string, age: number}

// 另外一种方式声明对象类型：接口interface
// 在其中可以定义可选类型
// 也可以定义只读属性
interface IInfoType {
  readonly name: string,
  age: number,
  friend?: {
    name: string,
  }
}

const info: IInfoType = {
  name: 'fh',
  age: 18,
  friend: {
    name: 'code'
  }
}

console.log(info.name);
console.log(info.friend?.name);

// info.name = 'why
info.age = 20
