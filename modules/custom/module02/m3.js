console.log('m3 로딩 시작.');
console.log(__dirname);
console.log(__filename);
require('./m2');

// console.log(require.cache);
console.log('main', require.main.filename);
console.log('m3.filename', module.filename);
console.log('parent', module.parent && module.parent.filename);
console.log('children', module.children[0] && module.children[0].filename);

console.log('m3 로딩 완료.');
