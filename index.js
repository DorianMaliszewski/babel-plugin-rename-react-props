const { transformCamelToKebab } = require("./utils");

function transformJSXAttribute (path, options) {

  const target = options.attributes.find((attribute) => {
    if (attribute[0] === "regex") {
      return new RegExp(attribute[1]).test(path.node.name.name)
    }
    if (attribute[0] === "string") {
      return attribute[1] === path.node.name.name
    }
    return false
  })

  transformJSXObjectProperty(path, target);
}


function transformJSXObjectProperty (path, target) {
  if (target && target[2] === null) {
    path.remove();
  }
  if (target && target[2]) {
    const prop = path.node.name;
    if (prop.name) {
      if (target[2] === "transformCamelToKebab") {
        prop.name = transformCamelToKebab(prop.name)
      } else {
        prop.name = target[2];
      }
    }
    
    if (prop.value && target[2]) {
      prop.value = target[2];
    }
  }
}

module.exports = function() {
  return {
    name: 'rename-react-props',
    visitor: {
      'JSXAttribute': function (path) {
        if (path.node.type) {
          transformJSXAttribute(path, this.opts)
        }
      },
    }
  }
};
