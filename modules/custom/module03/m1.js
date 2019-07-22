console.log('m1은 Object를 exports 하는 모듈.');

// module.exports = {
//   name: 'm1',
//   type: '객체'
// };

// module.exports.name = 'm1';
// module.exports.type = '객체';

// module.exports = exports = {};
// exports.name = 'm1';
// exports.type = '객체';

exports = {
  name: 'm1',
  type: '객체'
};

// return module.exports;