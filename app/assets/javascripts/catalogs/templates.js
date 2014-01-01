(function() {
  var template = Ember.Handlebars.template, templates = Ember.TEMPLATES = Ember.TEMPLATES || {};
templates['application'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"page-header\">\n        <h1>Catalogs</h1>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <h3>List of catalogs</h3>\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || (depth0 && depth0.outlet)),stack1 ? stack1.call(depth0, "catalogs", options) : helperMissing.call(depth0, "outlet", "catalogs", options))));
  data.buffer.push("\n    </div>\n    <div class=\"col-md-6\">\n        <h3>Editing area</h3>\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"col-md-3\">\n        <h3>Select from this collection</h3>\n        ");
  hashContexts = {'controlID': depth0};
  hashTypes = {'controlID': "STRING"};
  options = {hash:{
    'controlID': ("ember13885938331581")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.control || (depth0 && depth0.control)),stack1 ? stack1.call(depth0, "Categories", "App.Category", options) : helperMissing.call(depth0, "control", "Categories", "App.Category", options))));
  data.buffer.push("\n    </div>\n\n\n</div>");
  return buffer;
  
});
templates['catalogs/index'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h3>Catalogs Index</h3>");
  
});
templates['catalogs'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n        <div class=\"list-group-item\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <div class=\"input-group\">\n            ");
  hashContexts = {'type': depth0,'value': depth0,'class': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'class': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("newCatalog"),
    'class': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary new-catalog-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createCatalog", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'disabled': depth0};
  hashTypes = {'disabled': "ID"};
  options = {hash:{
    'disabled': ("disabled")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n                            type=\"button\">Add\n                    </button>\n                </span>\n        </div>\n    </div>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
templates['categories/category'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  data.buffer.push(escapeExpression(helpers.each.call(depth0, "children", {hash:{
    'itemController': ("category")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  
});
templates['categories/index'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});
templates['categories'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'controlID': depth0};
  hashTypes = {'controlID': "STRING"};
  options = {hash:{
    'controlID': ("ember13885938331582")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.control || (depth0 && depth0.control)),stack1 ? stack1.call(depth0, "CategoriesCategory", "content", options) : helperMissing.call(depth0, "control", "CategoriesCategory", "content", options))));
  data.buffer.push("\n\n\n");
  return buffer;
  
});
templates['index'] = template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Index template");
  
});
})();