const mongoose = require('mongoose');

const nftSchema = mongoose.Schema({
    nft_img:{
        type:String
    },
    nft_name:{
        type:String,
        required:true
    },
    minted_time:{
        type:Date,
        default: Date.now
    },
    created_by:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   details:{
        type:[mongoose.Schema.Types.Mixed],
    },
    tags:{
        type:[String],
        required:true
    },
    auction:{
        type:String,
        required:true
    },
    bided_users_info:{
        type:[mongoose.Schema.Types.Mixed],
    },
   base_price:{
        type:Number,
        required:true
    },
   owner_info:{
        type:String,
    },
})


module.exports = mongoose.model('nfts',nftSchema);
