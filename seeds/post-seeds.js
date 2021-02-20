const { Post } = require('../models');

const postdata = [
    {
        title: 'Lost city of Tanis found',
        content: 'Great turbulent clouds of brilliant syntheses quasar rings of Uranus decipherment take root and flourish. Dispassionate extraterrestrial observer the ash of stellar alchemy bits of moving fluff a mote of dust suspended in a sunbeam bits of moving fluff ship of the imagination? The sky calls to us rich in heavy atoms across the centuries not a sunrise but a galaxyrise kindling the energy hidden in matter concept of the number one and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
        user_id: 1
    },
    {
        title: 'Purpose of the staff of Ra headpiece ',
        content: 'Hearts of the stars brain is the seed of intelligence rogue kindling the energy hidden in matter something incredible is waiting to be known cosmic ocean. Dream of the minds eye corpus callosum intelligent beings invent the universe network of wormholes stirred by starlight? Across the centuries how far away dispassionate extraterrestrial observer inconspicuous motes of rock and gas inconspicuous motes of rock and gas courage of our questions and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
        user_id: 2
    },
    {
        title: 'Radio to the sky',
        content: 'Drake Equation extraplanetary a very small stage in a vast cosmic arena as a patch of light brain is the seed of intelligence invent the universe? Vanquish the impossible from which we spring great turbulent clouds globular star cluster kindling the energy hidden in matter hearts of the stars. The only home weve ever known are creatures of the cosmos astonishment muse about network of wormholes shores of the cosmic ocean and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
        user_id: 3
    },
    {
        title: 'Club Obi Wan',
        content: 'Keelhaul deadlights cutlass Corsair keel ho main sheet Yellow Jack coxswain warp. Quarterdeck Corsair Pirate Round spanker reef killick lugger ballast warp yard. Barkadeer squiffy quarterdeck shrouds coffer knave case shot hearties rigging loot.',
        user_id: 4
    },
    {
        title: 'This belongs in a museum',
        content: 'Mutiny lateen sail scurvy execution dock draught hardtack Gold Road doubloon hempen halter yardarm. Measured fer yer chains come about Pieces of Eight ropes end deadlights holystone wherry barque starboard overhaul.Lookout Sink me line scurvy case shot holystone sutler sheet draught wench.',
        user_id: 1
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        content: 'Holystone me trysail crimp rigging killick code of conduct list Plate Fleet port. Cutlass Sea Legs six pounders Jack Tar warp keel shrouds sloop hempen halter sheet. Grog blossom strike colors man-of-war dead men tell no tales hands cutlass mutiny jolly boat nipperkin me.',
        user_id: 4
    },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
