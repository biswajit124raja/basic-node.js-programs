const object={a:1,b:2}
const object1={b:2,c:3}
const object2={c:5,d:6}
const object3={...object,...object1,...object2,e:8}
console.log(object3)
