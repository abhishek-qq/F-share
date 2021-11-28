const router = require(`express`).Router();
const File = require(`../models/file`);

router.get(`/:uuid`, async (req,res)=>{
    try{
        const file = await File.findOne({uuid :req.params.uuid});
        if(!file){
            return res.render(`download`, {error : "Link has expired"})

        }
        return res.render(`download`,{
            uuid : file.uuid,
            fileName : file.filename,
            fileSize : file.size,
            downloadLink : `${file.uuid}`,
            //http://localhost:3000/files/%22http://localhost:3000/files/download/d4c472af-0688-46a7-9c39-20599cc6c962
        })
    }catch (err){
            return res.render(`download`, {error : "something went wrong"})
    }
})

module.exports = router;