// 5)
module.exports = techList;
function techList(techName, name) {
    let ordem = techName.sort();
    let res = [];
    if (techName == 0) {
      return "Vazio!"
    } else {
      for (let i in techName) {
        res.push({ tech: ordem[i], name: name })
      }
      return res;
    }
    
  }