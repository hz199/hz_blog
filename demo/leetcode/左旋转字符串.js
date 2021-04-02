// // 输入: s = "abcdefg", k = 2
// // 输出: "cdefgab"

// /**
//  * @param {string} s
//  * @param {number} n
//  * @return {string}
//  */
// var reverseLeftWords = function(s, n) {
//   const len = s.length
//   if (len <= n) return s

//   return s.slice(n, len) + s.slice(0, n)
// }

var findCenter = function (edges) {
  /* 
       根据题意可知 中心节点出现的次数 等于 edges.length 的长度 而其他节点出现的次数只会出现一次 
       故可以通过构建哈希表 存储 节点-出现次数
       当遇到次数等于 edges.length 时 此时的节点即为所求的中心节点
       可以巧用数组构造哈希map 因为 3 <= n <= 105
   */
  const l = edges.length,
    hash = new Array(l + 2).fill(0)
  let i = l,
    u, v

    // console.log(hash)

  while (i--) {
    [u, v] = edges[i]

    console.log(hash[u], hash[v])
    if (++hash[u] === l) return u
    if (++hash[v] === l) return v
  }
};

const edges = [[1,2],[5,1],[1,3],[1,4]]

console.log(findCenter(edges))