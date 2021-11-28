const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid', async (req, res) => {
   // Extract link and get file from storage send download stream 
   const file = await File.findOne({ uuid: req.params.uuid });
   // Link expired
   if(!file) {
        return res.render('download', { error: 'Link has been expired.'});
   } 
   const response = await file.save();
   console.log(file.path);
   
   const filePath = `${__dirname}/../${file.path}`; 
   res.download(filePath);
});
//http://localhost:3000/files/%22http://localhost:3000/files/download/d4c472af-0688-46a7-9c39-20599cc6c962


module.exports = router