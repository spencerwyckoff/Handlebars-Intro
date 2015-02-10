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
var data = {

players: [

{ player: 'Chipper Jones', 
team: 'Atlanta Braves', 
bats: 'left', 
throws: 'left', 
BA: '.295', 
OBP: '.405', 
HR: '480', 
hits: '1127', 
SO: '524' },

{ player: 'Derek Jeter', 
team: 'New York Yankees', 
bats: 'right', 
throws: 'right', 
BA: '.302', 
OBP: '.425', 
HR: '380', 
hits: '1220', 
SO: '515' },

{ player: 'Albert Pujols', 
team: 'St. Louis Cardinals', 
bats: 'right', 
throws: 'right', 
BA: '.274', 
OBP: '.398', 
HR: '520', 
hits: '1098', 
SO: '502' },

{ player: 'Greg Maddux', 
team: 'Atlanta Braves', 
bats: 'right', 
throws: 'right', 
BA: '.198', 
OBP: '.230', 
HR: '2', 
hits: '187', 
SO: '132' },

{ player: 'Ken Griffey Jr.', 
team: 'Seattle Mariners', 
bats: 'left', 
throws: 'right', 
BA: '.282', 
OBP: '.442', 
HR: '587', 
hits: '1364', 
SO: '743' },

]
};

var missingData = {

players: [

{ player: 'Andruw Jones', 
team: 'Atlanta Braves', 
bats: 'right', 
throws: 'right', 
BA: '.240', 
OBP: '.304', 
HR: '302', 
hits: '876', 
SO: '4029' },

{ player: 'Rafael Furcal', 
team: 'LA Dodgers', 
bats: 'right', 
throws: 'right', 
BA: '.297', 
OBP: '.476', 
HR: '140', 
hits: '937', 
SO: '437' },
	
]

}; 



var source = $('#cards').html();
var template = Handlebars.compile(source);
$('.myCollection').html(template(data));

var templateB = Handlebars.templates.missing;
var missingHTML = templateB(missingData);
$('.myMissingCollection').html(missingHTML);