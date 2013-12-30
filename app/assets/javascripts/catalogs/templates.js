(function() {
  var template = Handlebars.template, templates = Ember.TEMPLATES = Ember.TEMPLATES || {};
templates['application'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"page-header\">\n\n        <h1>Catalogs Home Page</h1>\n\n</div>\n<nav>\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</nav>\n<div class=\"row\">\n    ";
  if (stack2 = helpers.outlet) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.outlet; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n</div>";
  return buffer;
  });
templates['catalogs/index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h3>Catalogs Index</h3>";
  });
templates['catalogs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<h2>Outlets</h2>\n\n<div class=\"col-md-4\">\n    <div class=\"list-group\">\n        <div class=\"list-group-item\">\n            ";
  options = {hash:{
    'type': ("text"),
    'value': (depth0.newCatalog)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options)))
    + "\n        </div>\n    </div>\n</div>\n<div class=\"col-md-8\">\n    <div class=\"list-group\">\n        ";
  if (stack2 = helpers.outlet) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.outlet; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n    </div>\n</div>";
  return buffer;
  });
})();