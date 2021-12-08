'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
  var sess = req.session;

  console.log(sess);

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

exports.default = router;