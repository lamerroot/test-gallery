var express = require('express');
var router = express.Router();

var imageData = require('../imagerepo/image-data');
var imageRepo = require('../imagerepo/imagerepo');
imageRepo.imageList = imageData;

router.get('/', function(req, res, next) {
  res.json(imageRepo.getImages());
});

router.get('/:imageId', function(req, res, next) {
  let imageId = parseInt(req.params.imageId), image = null;
  if (imageId && (image = imageRepo.getImageDetails(imageId))) {
    res.json(image);
  } else {
    res.status(404);
    res.send('Not Found');
  }
});

router.post('/:imageId/comments', function(req, res, next) {
  let imageId = parseInt(req.params.imageId);
  if (imageId && req.body.comment && imageRepo.addComment(imageId, req.body.comment)) {
      res.status(204);
      res.send('OK');
  } else {
    res.status(403);
    res.send('Forbidden');
  }
});

module.exports = router;
