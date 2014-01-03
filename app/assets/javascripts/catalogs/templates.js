(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['application'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"page-header\">\n        <h1>Catalogs</h1>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <h3>List of catalogs</h3>\n        <div id=\"catalogs\"></div>\n    </div>\n    <div class=\"col-md-6\">\n        <h3>Editing area</h3>\n    </div>\n    <div class=\"col-md-3\">\n        <h3>Select from this collection</h3>\n    </div>\n\n\n</div>";
  });
templates['catalog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n";
  return buffer;
  });
templates['catalog_new_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"input-group\">\n    <input type='text' class='form-control' />\n        <span class=\"input-group-btn\">\n                <button class=\"btn btn-primary new-catalog-button\" type=\"button\">\n                    Add\n                </button>\n        </span>\n</div>\n\n";
  });
templates['catalogs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n\n";
  });
templates['categories'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += escapeExpression((helper = helpers.control || (depth0 && depth0.control),options={hash:{},data:data},helper ? helper.call(depth0, "CategoriesCategory", (depth0 && depth0.content), options) : helperMissing.call(depth0, "control", "CategoriesCategory", (depth0 && depth0.content), options)))
    + "\n\n\n";
  return buffer;
  });
})();