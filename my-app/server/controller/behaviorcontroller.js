const User = require("../model/user");
const Behavior = require("../model/behavior");

const BehaviorController = {
   createBehavior : async(req , res)=>{
      try{
         const newBehavior = new Behavior(req.body);
         const savedBehavior = await newBehavior.save();
         res.status(200).json(savedBehavior);
      }catch(err){
         res.status(500).json(err);
      }
   },
   getAllBehavior: async(req, res)=>{
      try {
         Behavior.find().then((result)=>{
            res.send(result);
         });
      } catch (err) {
         res.status(500).json(err);
         console.log(err);
      }
   },
   getBehaviorByUser: async(req, res)=>{
      try { 
         Behavior.find({
            like:
            {$elemMatch:{'user': req.params.id}}
         }).populate('post').then((result)=>{
            res.send(result);
            console.log(req.params.id);
         });
      } catch (error) {
         res.status(500).json(error);
      }
   }
}

module.exports = BehaviorController;