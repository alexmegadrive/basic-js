const { NotImplementedError } = require('../extensions/index.js');


const chainMaker = {
  chainArr : [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    let elementPos = position - 1;
    if (elementPos < this.chainArr.length && elementPos>=0 ) {
     this.chainArr.splice(elementPos, 1);
     return this;
    }
    else {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    const res = this.chainArr.join('~~')
    this.chainArr = [];
    return res
  }
};

module.exports = {
  chainMaker
};
