const { Comment } = require('../models');

const commentData = [{
    comment_text: 'Cat onine tails reef lateen sail gunwalls avast draught salmagundi six pounders hang the jib dance the hempen jig. Spirits rigging scourge of the seven seas doubloon parrel aft ahoy chandler piracy Pirate Round. Cog run a shot across the bow blow the man down ahoy splice the main brace reef belay Blimey lugsail marooned.',
    user_id: 1,
    post_id: 2
},
{
    comment_text: 'Scurvy interloper American Main jib chase overhaul gibbet lee ho Nelsons folly. Nelsons folly maroon poop deck Chain Shot quarter ho gun deadlights lass splice the main brace. Belaying pin gibbet yawl starboard quarterdeck furl gunwalls plunder wench lad.',
    user_id: 2,
    post_id: 3
},
{
    comment_text: 'Jack six pounders Admiral of the Black parrel list lass swing the lead poop deck topgallant schooner. Chain Shot lass gangplank holystone jib tender square-rigged lanyard long clothes main sheet. Black jack American Main black spot line wherry lateen sail Blimey long clothes grog blossom skysail.',
    user_id: 3,
    post_id: 1
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;