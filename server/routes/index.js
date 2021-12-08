import express from 'express';
var router = express.Router();

router.get('/', function(req, res) {
  let sess = req.session;

  sess.sliderSettings = {
    'visible': false,
    'totSlider': 1,
    'diversitySlider': 200,
    'sensitivitySlider': 10,
    'bounceSlider': 1,
    'pairSlider': 1,
    'backgroundSlider': 225,
    'gazeSlider': 1,
    'tensionSlider': 1,
    'bodySlider': 1
  };

  res.render('index', { title: "Index", next_page: "Looking", session: sess });
});

export default router;