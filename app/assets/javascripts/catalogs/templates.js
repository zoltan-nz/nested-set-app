(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['application'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"page-header\">\n        <h1>Catalogs</h1>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <h3>List of catalogs</h3>\n    </div>\n    <div class=\"col-md-6\">\n        <h3>Editing area</h3>\n    </div>\n    <div class=\"col-md-3\">\n        <h3>Select from this collection</h3>\n    </div>\n\n\n</div>";
  });
templates['catalogs/index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h3>Catalogs Index</h3>";
  });
templates['catalogs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n        <div class=\"list-group-item\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <div class=\"input-group\">\n            ";
  options = {hash:{
    'type': ("text"),
    'value': ((depth0 && depth0.newCatalog)),
    'class': ("form-control")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options)))
    + "\n            <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary new-catalog-button\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.action || (depth0 && depth0.action)),stack1 ? stack1.call(depth0, "createCatalog", options) : helperMissing.call(depth0, "action", "createCatalog", options)))
    + " ";
  options = {hash:{
    'disabled': ((depth0 && depth0.disabled))
  },data:data};
  buffer += escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options)))
    + "\n                            type=\"button\">Add\n                    </button>\n                </span>\n        </div>\n    </div>\n\n    ";
  stack2 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  return buffer;
  });
templates['categories/category'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var escapeExpression=this.escapeExpression;


  return escapeExpression(helpers.each.call(depth0, (depth0 && depth0.children), {hash:{
    'itemController': ("category")
  },data:data}));
  });
templates['categories/index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
templates['categories'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.control || (depth0 && depth0.control)),stack1 ? stack1.call(depth0, "CategoriesCategory", (depth0 && depth0.content), options) : helperMissing.call(depth0, "control", "CategoriesCategory", (depth0 && depth0.content), options)))
    + "\n\n\n";
  return buffer;
  });
templates['category_root'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "category root";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Index template";
  });
})();