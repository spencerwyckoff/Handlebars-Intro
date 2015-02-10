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

var source = $('#cards').html();
var template = Handlebars.compile(source);
$('body').html(template(data));