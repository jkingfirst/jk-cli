"use strict";

class Creator {
  constructor(projectName, options) {
    this.projectName = projectName;
    this.options = options;
  }

  create() {
    console.log(this.projectName, this.options);
  }

}

module.exports = Creator;