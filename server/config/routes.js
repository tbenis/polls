/***********************************
	BENIS TAMBE MEAN BELT EXAM OPTION F
	will.jenifer@yahoo.com
************************************/

var user = require('../controllers/users.js'),
		poll = require('../controllers/polls.js');

module.exports = function(app){

	app.post('/register', user.register)
	app.post('/login', user.login)
	app.post('/logout', user.logout)
	app.get('/session', user.session)

	app.get('/allSurvey', poll.allSurvey)
	app.get('/getOne/:surveyId', poll.getOne)
	app.post('/create', poll.create)
	app.post('/increaseVote/:optionId', poll.increaseVote)
	app.post('/delete/:pollId', poll.delete)

}
