var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Crazy Rider..' });
  //<img class="logo" src="http://localhost:3000/images/car.jpeg" alt="My_Logo"></img>
});

const Datas = [
  {
    route: 'Home',
   data1: '.......................................................',
   data2: '.......................................................',
   data3: '                                AMAL  BAIJU',
   data4: '.......................................................',
   data5: '........................................................'
  },
  {
    route: 'About Me',
    data1: 'Its me Amal Baiju(AMALUU)',
    data2: 'I am just 20',
    data3: 'Basicaly i am from INDIA . But i am settel in Barrie',
    data4: 'I have a puppy called Toby',
    data5: 'My main hobby is Riding  with My Car.'
  },
  {
    route: 'Contact Me',
    data1: 'My ph:+1 705 816 4562',
    data2: '+1 409 575 9345',
    data3: 'email: amalbaiju1999@gmail.com',
    data4: 'my instagarm id : crazy_r_i_d_e_r',
    data5: 'facebook : imamalbaiiju'
   
  },
  {
    route: 'Services',
    data1: 'Data Entry  and management ',
    data2: 'Can delevop moblie appliactions',
    data3: 'Java applictions for applications and websites',
    data4: 'HtML desigings for big projects',
    data5: 'Website Mangamenst.'
  },
  {
    route: 'My Project',
    data1: 'Java Application',
    data2: 'HTML web Application',
    data3: 'MainFrame Envirornment app',
    data4: 'Moblie Development (Swift)',
    data5: 'PHP website.'
  }


];

router.get('/:route', (req, res, next) => {
  // Find the person where their route string equals the route parameter
  const data = Datas.find(per => per.route === req.params.route);

  // if no person - render the error page
  if (!data) return next(new Error('Cannot find person'));

  // Res.render - renders a view from our views folder.
  // Pass the person we found in the array above
  return res.render('data', data);
});


module.exports = router;