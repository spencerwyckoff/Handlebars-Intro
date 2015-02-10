(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['missing'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"baseballCard\">     \n  <h2>"
    + escapeExpression(((helper = (helper = helpers.player || (depth0 != null ? depth0.player : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"player","hash":{},"data":data}) : helper)))
    + "</h2>\n  <h4>"
    + escapeExpression(((helper = (helper = helpers.team || (depth0 != null ? depth0.team : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"team","hash":{},"data":data}) : helper)))
    + "</h4>\n  <ul>\n    <li>Throws: "
    + escapeExpression(((helper = (helper = helpers['throws'] || (depth0 != null ? depth0['throws'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"throws","hash":{},"data":data}) : helper)))
    + "</li>\n    <li>Bats: "
    + escapeExpression(((helper = (helper = helpers.bats || (depth0 != null ? depth0.bats : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bats","hash":{},"data":data}) : helper)))
    + "</li>\n    <li>BA: "
    + escapeExpression(((helper = (helper = helpers.BA || (depth0 != null ? depth0.BA : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"BA","hash":{},"data":data}) : helper)))
    + "</li>\n    <li>OBP%: "
    + escapeExpression(((helper = (helper = helpers.OBP || (depth0 != null ? depth0.OBP : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"OBP","hash":{},"data":data}) : helper)))
    + "</li>\n    <li>HR: "
    + escapeExpression(((helper = (helper = helpers.HR || (depth0 != null ? depth0.HR : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"HR","hash":{},"data":data}) : helper)))
    + "</li>\n    <li>Hits: "
    + escapeExpression(((helper = (helper = helpers.hits || (depth0 != null ? depth0.hits : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hits","hash":{},"data":data}) : helper)))
    + "</li>\n    <li>SO: "
    + escapeExpression(((helper = (helper = helpers.SO || (depth0 != null ? depth0.SO : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"SO","hash":{},"data":data}) : helper)))
    + "</li>\n  </ul>\n</div> \n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.players : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();