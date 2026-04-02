// 测试筛选逻辑
const NUMBERS = Array.from({length: 49}, (_, i) => i + 1);

// 数据定义（简化版用于测试）
const WAVE_MAP = {
  red: [1,2,7,8,12,13,18,19,23,24,29,30,34,35,40,45,46],
  blue: [3,4,9,10,14,15,20,25,26,31,36,37,41,42,47,48],
  green: [5,6,11,16,17,21,22,27,28,32,33,38,39,43,44,49]
};

const GROUP6_OPTIONS = [
  { label: '家禽', val: '家禽', predicateSet: [
    1,6,8,9,10,12,13,18,20,21,22,24,25,30,32,33,34,36,37,42,44,45,46,48,49
  ]},
  { label: '野兽', val: '野兽', predicateSet: [
    2,3,4,5,7,11,14,15,16,17,19,23,26,27,28,29,31,35,38,39,40,41,43,47
  ]}
];

const GROUP7_OPTIONS = [
  { label: '红波', val: '红波', sets: [new Set(WAVE_MAP.red)] },
  { label: '蓝波', val: '蓝波', sets: [new Set(WAVE_MAP.blue)] },
  { label: '绿波', val: '绿波', sets: [new Set(WAVE_MAP.green)] }
];

// 测试函数
function testGroup7() {
  console.log('\n=== 测试问题1：红波/蓝波/绿波 ===');
  ['红波', '蓝波', '绿波'].forEach(wave => {
    const opt = GROUP7_OPTIONS.find(o => o.val === wave);
    const result = NUMBERS.filter(n => opt.sets.some(s => s.has(n)));
    console.log(`${wave}: ${result.length} 个数字`);
    console.log(`  列表:`, result.join(', '));
  });
}

function testGroup6() {
  console.log('\n=== 测试问题2：家禽/野兽 ===');
  ['家禽', '野兽'].forEach(type => {
    const opt = GROUP6_OPTIONS.find(o => o.val === type);
    const result = NUMBERS.filter(n => opt.predicateSet.includes(n));
    console.log(`${type}: ${result.length} 个数字`);
    console.log(`  列表:`, result.join(', '));
  });
}

// 运行测试
testGroup7();
testGroup6();
console.log('\n=== 所有测试完成 ===');