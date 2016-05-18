//Dan Fisher

//Ready function to init the program
$(document).ready(function(){
    //Set the init state of the card
    initState(tree._root);
    //Add a listener to the optionPicker to change the text
    $('#optionPicker').submit(function(event){
        event.preventDefault(); //Stop the normal submission
        processSubmit();
    });
    //Add a listener to the start over button
    $('#btnStartOver').click(function(){
        //Init the start state again
        initState(tree._root);
        //Click somewhere else to close the side bar
        $("#sidenav-overlay").trigger("click");
    })
});

//----- Define the Tree structure -----

//A node in my story tree
function Node(storyData,vertData){
    this.data = storyData;
    this.vert = vertData;
    //This is an array of Nodes
    this.children = [];
}

//The story Tree which contains nodes
function Tree(data){
    var node = new Node(data);
    this._root = node;
}

//The Current state of the program
var state;

//----- Define the Node values -----

var tbd = "Work in progress";

var node_vlaue_00 = "The cup of coffee feels heavier than it should as you lift it to your mouth and sip the bitter drink. You, Thor the god of thunder, have been stranded on Earth and stripped of your god like powers, leaving you as powerless as these mortals around you. But one of the mortals, Jane, is quite nice. Maybe it is not so bad to be a mortal. As you contemplate this, the door bursts open revealing four strange fellows dressed in ridiculous armor. You realise they are Asgardians, your people! More so, they are your close friends Sif and the Warriors Three. They smile and seem to jump for joy at the sight of you, one of the warriors yells ‘Thor!’";
var vert_value_00_0 = "Finally, let’s party!";
var vert_value_00_1 = "I’m so happy to see you, but…";
var vert_value_00_2 = "Go away, don’t remind me of my failure!";

var node_value_10 = "Sif rolls her eyes but from her smile you can see that she is happy to see you haven't been changed by this exile. The Warriors Three shout and cheer as they rush you out the door to the nearest bar, leaving Jane staring in amazement and disappointment. In just a few minutes you and your gang manage to down most of the alcohol in the establishment even though it is little effect on Asgardians. You enjoy the company and it reminds you of the good times, when you were not trapped on this god-forsaken realm. It does not last long. With a crash and an explosion, the building across the street erupts in flames. Sif rushes to the door and you stumble after her. In the middle of the street, stands a massive metal man: a Destroyer from Asgard. ‘What is that thing doing here!?’ you shout to no one in particular. Sif turns to you, ‘It must be your brother, Loki! We came here to bring you back to Asgard. In your absence, Odin fell into the Odinsleep leaving Loki on the throne’. You manage to shout out ‘Loki wants the throne for himself!’";
var vert_value_10_0 = "He will never take what is rightfully mine! TO GLORY!!!";
var vert_value_10_1 = "The glory shall be mine. Stand back!";
var vert_value_10_2 = "Jane...";

var node_value_11 = "‘You should not have come’. With that, one of the warriors exclaims ‘We are here to take you home’. Perplexing, why would they be trying to bring you back after what happened? ‘You know I can’t go home. My father is … dead because of me and I must remain in exile’. Sif looks shocked as you stares into you with her dark eyes. Eventually, after the initial shock passes, she says ‘Thor, your father still lives. He fell into the Odinsleep and you brother, Loki, sits on the Throne in his absence’ Slowly, you begin to realize what has happened.";
var vert_value_11_0 = "This is just personal, Loki did not want me me to have the throne";
var vert_value_11_1 = "Loki deceived me to take the throne for himself!";

var node_value_12 = "‘I am a disgrace. My father is.... dead and I am left here on Earth, stranded and powerless, reduced to a mere mortal. Why would you come?!’. The all seem to have the same taken-aback expression on their faces as they stare in confusion. Sif speaks up, ‘Thor, what are you talking about? Your father still lives. He fell into the Odinsleep and you brother, Loki, sits on the Throne in his absence’ Slowly, you begin to realize what has happened.";
var vert_value_12_0 = vert_value_11_0;
var vert_value_12_1 = vert_value_11_1;
var vert_value_12_2 = "None of this matters. Nothing matters"; 

var node_value_20 = "In the distance, the clouds turn black and spiral forms, looking like some strange tornado, but you know it is not. Everyone turns to look at the thing that has drawn your gaze. The cyclone grows and the air becomes cold as the sky darkens. The center of the cyclone comes crashing down to the desert ground, sending a shockwave of dust in all directions. You can feel the ground shake from here. As the dust clears you can make out a huge metal beast shooting fire out of its eyes: The Destroyer. ‘Loki sent the destroyer here for me’";
var vert_value_20_0 = "'This is my fight, the Destroyer is mine'";
var vert_value_20_1 = "'I can save the citizens'";

var node_value_21 = "In the distance, the clouds turn black and spiral forms, looking like some strange tornado, but you know it is not. Everyone turns to look at the thing that has drawn your gaze. The cyclone grows and the air becomes cold as the sky darkens. The center of the cyclone comes crashing down to the desert ground, sending a shockwave of dust in all directions. You can feel the ground shake from here. As the dust clears you can make out a huge metal beast shooting fire out of its eyes: The Destroyer. With anger in your stomach you clench your fist. ‘Loki sent the destroyer here for me. He thinks one of his silly toys and kill the god of thunder, HA!’";
var vert_value_21_0 = "Thor and his warriors will never be defeated! TO GLORY!!!";
var vert_value_21_1 = "This beast is mine to defeat. Stand back!";

var node_value_22 = "In the distance, the clouds turn black and spiral forms, looking like some strange tornado, but you know it is not. Everyone turns to look at the thing that has drawn your gaze. The cyclone grows and the air becomes cold as the sky darkens. The center of the cyclone comes crashing down to the desert ground, sending a shockwave of dust in all directions. You can feel the ground shake from here. As the dust clears you can make out a huge metal beast shooting fire out of its eyes: The Destroyer. Loki wants to kick me while I’m down, huh?’";
var vert_value_22_0 = "Well that was a bad idea";
var vert_value_22_1 = "‘There is no point in fighting back, Loki will always win now...’";

var node_value_30 = "You look left. You look right. Your friends, warriors, stand by your side. This feels right, this is how it should be. In their presence you feel your strength grow and you believe that you are a powerful god once more. You rush forward at the huge metal beast, Sif staying by your side while the rest of the warriors peel off the left and right to flank the enemy. They know exactly what to do without being told, it’s just like the wild beast hunts back on Asgard. Different enemy, same tactic. As you rush down the street, the destroyer lumber toward you and takes aim. It’s face seems to open and a fire builds in the back of its skull as as deadly blast charges up. You and Sif seem to notice at the same time and dive in opposite directions just as a fiery beam of energy explodes the ground where the two of you stood, sending dirt and asphalt flying in all directions. Jane screams as she barely avoids the deadly shrapnel yards behind you. From your prone position you lift your head to see one of the warriors jump towards the Destroyer from the left. His flight is brought to an early end as his body meets a metal fist that sends him flying into the nearest coffee shop. You hear screams of terror from within before they are abruptly cut off as the shop collapses. The other two warriors take the opportunity to jump on its back, using their blades to stab into its back. The attack seems to have little effect. Like a giant scratching an itch, the beast reaches up and grabs hold of one of the warriors, and brings him smashing down to the ground with such force that the entire town shakes. The warrior moans as the metal hand picks him up and slams him down again. And again. And again. By the time the beast releases him from his grasp, the warrior lies in a crumpled pile, lifeless. Dead. Sif screams beside you and jumps to her feet, ready to rush in again.";
var vert_value_30_00 = "We need to make that thing pay!";
var vert_value_30_01 = "No one else dies for me";

var node_value_31 = "You turn to your fellow warriors and say ‘This is my fight and I will not have any of you die fighting my battle. Stay back and evacuate the citizens, they are not a part of this either’ You take Sif’s shield and spear as well as one of the warrior’s axes ‘I’ll buy you some time’. You rush down the center of the street directly towards the lumbering Destroyer. Its metal skin glistens and flashes as it approaches. The back of its skull begins to glow red as some sort of flame builds up. Out of its face comes a solid beam of energy aimed directly at you. Quicker than humanly possible, you dodge to the left and barely escape the leathley blast as shards of asphalt are strewn all throughout town. You hear people screaming and scrambling away. You continue with your advance and dodge a few more blasts from the monster, rolling away to just barely avoid death at each one. You finally close within range of your spear and you immediately go into offensive mode, stabbing it as much and as often as you can. With every blow struck, the beast dodges one. You stay out of range of its large and dangerous arms, but just barely. With every attack you land, the beast seems to be becoming quicker, batting away your spear more often than naught and forcing you to dodge and roll out of the way of its own attacks. You are outmatched. IT’s only a matter of time before you mistime a dodge or fail a roll. It happens: the Destroyer swings high with one arm and you duck but just as you do it brings around its second arm and makes contact with your shield, sending you flying through the air. While you fly helplessly you flail your arms and in the process lose grip on you spear which goes scatters across the ground ten yards away. You land hard on a nearby car, cracking its windshield. The broken glass sticks into your back and you grunt in pain. You are clearly outmatched. You look around and see that Sif and the warriors are still trying to evacuate the citizens, and one of them is Jane. Jane is still in danger. The Destroyer turns its gaze to the citizens and powers up its beam.";
var vert_value_31_00 = "This beast will die eventually";
var vert_value_31_01 = "No one will die because of me";

var node_value_32 = "‘Jane you need to leave’ she turns to you and you can tell that she wants to stay. But she trusts you. ‘I need to get these citizens out of here. This town is about to be destroyed’. Sif exclaims, ‘We can buy you some time’. The warriors move down the street to engage the approaching monster. You work frantically to clear all of the surrounding buildings and convince everyone to leave. Through the window of the shop you are clearing you see Jane helping townspeople across the street. You smile. She is a good person, risking her own life to help these strangers. Just then you hear a loud explosion and see Sif’s body crash down onto the asphalt nearby. You run over to her and kneel down next to her. She is alive. Infact, in just a few moments she seems to have regained her strength and is ready to go back into the fight. Another explosion. The shot hit front of a storefront that you didn't clear yet. You hear one voice cry out before the it is cut off quickly when the building collapses. That’s an innocent, dead because of you. The Destroyer turns its gaze to a group of citizens at the top of the road. The group of citizens lead by Jane. The brutal destroyer powers up its beam it fire…";
var vert_value_32_00 = "This beast needs to die";
var vert_value_32_01 = "No one will die because of me";

var node_vlaue_40 = "A terrible roar escapes from your mouth as you scramble to your feet and rush forward with Sif. The remaining warrior seems to be fairing his own by dodging the Destroyer's attempts to grab him off of his back. With the distraction, Sif breaks out into a full sprint, easily outpacing you. She wields a small shield in one hand and she unsheathes a huge spear with the other. Sif charges forward and drives the spear through the beast’s chest and it topples over from the force of the strike. The warrior drops off his back just in time to avoid being crushed and now brings his mace down on the head of the foe repeatedly but even with the strength of an Asgardian its metal skin is not even dented. On its back, the Destroyer builds up another shot and fires. The beam hits the warrior dead center in his chest sending him flying into a nearby car which explodes in flames killing several innocent bystanders. Sif is swatted aside and skids several yards down the road before tumbling to a halt while the Destroyer pulls itself free of her spear. It is now that you finally make it to the beast. Now is your chance to make it pay. Now is when it dies. You leap towards it and bring you arms over your head and then down onto its metal chest as you suddenly notice the lack of a hammer in your hand. The strike lands without effect and you fall to the ground with a thud. You roll over onto you back look around you in a daze. The town is in flames, several buildings are collapsed and you have difficulty keeping averting your gaze from the crumpled corpse of the fallen warrior. Several townspeople lay limp on the ground, motionless. As you scan the lifeless faces, you recognize one: Jane. She must have gotten caught by one of the blasts and now she lies dead and it’s all your fault. The only good thing in this mortality and she is dead because of you. A huge metal boot clamps down on your chest and you scream in pain as the bones in your chest strain against the weight. You look up to see the the Destroyer’s fiery skull looming over you. The fire parts for a moment and you can almost see Loki’s face form in the flames. With feigned pity on his face, he says ‘Sorry, brother’. His face disappears into the flames as the charge up for the final shot. Time seems to slows down as the beam shoots toward your helpless body. The world turns white hot as your mortal body succumbs to the flames before your existence fades to black and finally… nothing. So ends the epic of Thor, the former god of thunder.";

var node_value_41 = "You ignore the pain and launch yourself off the broken vehicle in for a final attack. You take the axe off of your back and sprint in close. You duck under the beast’s arm to land a heavy blow against its torso. The Destroyer is knocked off balance and the shot goes off harmlessly into the sky. It responds by swinging its huge fit directly at you. You didge and bring the axe down on the beast’s inside knee, bringing it down to the  ground with a crash. This is it, this is your chance to end it. You climb on top of its chest and bring the axe up over your head to deal the final blow. Before the axe falls, one of the monster’s arms comes out of nowhere lightning fast and lands a solid blow on your unprotected ribs. You are sent skidding and rolling across the road. When you finally stop you are on your back in immense pain. It feels as if every one of your ribs has been broken and you cannot move. On your back, defenseless, the destroyer steps forward to loom over you. It leans down and picks you up by the neck, standing straight again. Your body feels broken and there is nothing you can do to fight back. The fire in the Destroyer’s head part’s for a moment and you see an image of Loki’s face. He mocks you and says ‘You were never better than me. The throne was always going to be mine’. With that, he disappears and the lifeless face of the Destroyer returns as its grip around your neck tightens. You vision fades as you gasp for air but the monster does not wait for you to suffocate, its grip tightens more. Tighter. Tighter. Tighter. Your body is numb with pain and you can feel the bones in your neck compressing under the force. Tighter. You can’t take much more. Tighter. Snap! Nothing remains but darkness... So ends the epic of Thor, the former god of thunder, defeated by his own brother.";

var node_value_42 = "You are devastated. Angry. Enraged. You turn to Sif. One life is already too many. No one else will die for you. Just as she is about to sprint forward, you grab her arm,  ‘Sif, don’t! This is my fight after all and no one else should die for me. People will sing of this day and the glorious battle’. Before she has a chance to protest, you take her spear and shield from her and sunter toward the foe that will be slain. The remaining warrior on its back it finally dislodged and swatted away, allow it to focus on you. The destroyer faces you, feet wide with a charging fireball, while you march forward at an even pace. As the charge builds, you raise your shield and duck behind it as the blast of fire strikes the shield. You press against the force of the beam and struggle to stay on your feet. The heat builds behind the shield's protection and the sweat begins to pour down your face. You manage to take one step forward, then another , then another. The beam stops and you come out from behind the red hot shield to launch your attack. The spear in your hand is massive and has even more reach than the Destroyer. You extend your arm and drive the spearhead into the monster's face before removing it quickly and stabbing again in the chest before it has a chance to react. It tries to launch a counter attack with its long arms but you are able to swiftly deflect them and roll away to get more distance. Even as a mortal, you are still quite quick to react. The fighting continues like this for several grueling minutes, with both sides taking an losing ground as they try to get the upper hand. You feel your arms tire with every strike and your legs burn with every dodge. Eventually, it happens: you slip up. You leave the spear in its arm just a second too long and it grasps the shaft, wrenching it from your grasp. In one swift motion the Destroyer removes the spear and brings it down hard on your shielded arm. You hear a loud pop and crack as you are violently forced to the ground from the force and the pain of the impact. Your arm irrupts in unbearable pain and you realize the bones have shattered from the attack. On your back, defenseless, the destroyer steps forward to loom over you. It leans down and picks you up by the neck, standing straight again. Your body feels broken and there is nothing you can do to fight back. The fire in the Destroyer’s head part’s for a moment and you see an image of Loki’s face. He mocks you and says ‘You were never better than me. The throne was always going to be mine’. With that, he disappears and the lifeless face of the Destroyer returns as its grip around your neck tightens. You vision fades as you gasp for air but the monster does not wait for you to suffocate, its grip tightens more. Tighter. Tighter. Tighter. Your body is numb with pain and you can feel the bones in your neck compressing under the force. Tighter. You can’t take much more. Tighter. Snap! Nothing remains but darkness... So ends the epic of Thor, the former god of thunder, defeated by his own brother.";

var node_value_43 = "You know what you have to do. You set down Sif and run in front of the Destroyer staring past the mechanical face to its distant controller: Loki. The beam powers down as you slowly walk towards it. ‘Brother, whatever I have done to wrong you, whatever I have done to lead you to do this, I am truly sorry. But these people are innocent. Taking their lives will gain you nothing...’ You are now standing only feet away from the towering monster and you gaze up into it’s emotionless face. You feel at peace. With a deep breath, you say ‘So take mine and end this.’ The Destroyer hesitates. Thinking, or at least Loki is. It powers down its beam weapon and starts to turn around. You smile. Loki understands. Just as the metal man is about to walk away, its arm fly towards you and slams you with a lightning fast backhand that sends your head back and your body flying. You tumble and land on your back in the middle of rubble, desperately gasping for air. ‘No!’ Jane cries as she runs to your side. She sits over your body and holds your head. ‘It’s over’ you say. ‘No, it’s not over!’ she says, trying to hold back the tears. You shake your head, ‘I mean, you’re safe’. She nods and says ‘We’re safe’, with a small smile. You are finding it difficult to breath now and the world is being washed out by white. ‘It’s over’ you say, and take one last gasping breath before everything becomes white. You can hear a whisper. Your father’s whisper ‘Whosoever holds this hammer, if he be worthy, shall possess the power of Thor’. Suddenly lightning and thunder engulfs everything and you feel again. You feel power again. You breathe life again. In you hand is your powerful hammer and your body is covered in your armor. You are a god again. The world returns to you and you see the Destroyer charging up another blast at you. Instinctively, you throw your hammer with all of your might and the metal man comes crashing down to the ground. But quickly regains its footing and stands back up. The beast fires. You deflect the beam harmlessly into the air with your hammer. It fires again, this time you redirect the beam to fire directly back at the Destroyer. You fly (literally fly) towards the monster while still directing the beam and once you reach its face it disappears in a fiery explosion that rocks the whole town. When the dust clears, the metal man in dead on the ground headless, and you stand victorious in your shining armor and flowing red cape. The day is won. Most importantly, Jane is safe. Now all you have to do is stop Loki... ";

var node_value_44 = "Your friends stare at you in disgust. Jane looks at you, ‘There’s nothing you can do?!’ you turn to her with an expressionless face. ‘No’ you say and go back to the kitchen to get yourself some more coffee. Sif looks like she is trying to forget she ever knew you, ‘Well, if you will not do something, we will have to’. She and her warriors head off into the street to fight the Destroyer while you try your hardest to ignore the action. You hear explosions, yells, scraping metal, and abruptly ended screams. You smell smoke as the town burns down around you. Turning back to the street after a while, you see all of your friends scattered about on the ground wailing in pain or silent in death. With that, you know it is only inevitable that the monster will soon take your life too. You walk into the street and shout over to the destroyer, ‘Loki! Come on, kill me already!’ and it lumber over to your location. The fire in the Destroyer’s head part’s for a moment and you see an image of Loki’s face, confirming your suspicions. He feigns pitty and says ‘Don’t worry, brother, I will make it quick’. Good, it’s about time this was over with. The robot pulls back its arms and swings a lightning fast light cross at you face. You do not dodge. Suddenly the lights go out… So ends the epic of Thor, the former god of thunder, long live Loki, King of Asgard.";

//----- Build the story Tree -----

var tree = new Tree(node_vlaue_00);

//Node 00 (Starting Node)
tree._root.children.push(new Node(node_value_10,vert_value_00_0));
tree._root.children.push(new Node(node_value_11,vert_value_00_1));
tree._root.children.push(new Node(node_value_12,vert_value_00_2));

//Node 10
tree._root.children[0].children.push(new Node(node_value_30,vert_value_10_0));
tree._root.children[0].children.push(new Node(node_value_31,vert_value_10_1));
tree._root.children[0].children.push(new Node(node_value_32,vert_value_10_2));

//Node 11
tree._root.children[1].children.push(new Node(node_value_20,vert_value_11_0));
tree._root.children[1].children.push(new Node(node_value_21,vert_value_11_1));

//Node 12
tree._root.children[2].children.push(new Node(node_value_20, vert_value_12_0));
tree._root.children[2].children.push(new Node(node_value_21, vert_value_12_1));
tree._root.children[2].children.push(new Node(node_value_22, vert_value_12_2));

//Node 20
tree._root.children[1].children[0].children.push(new Node(node_value_31, vert_value_20_0));
tree._root.children[1].children[0].children.push(new Node(node_value_32, vert_value_20_1));
tree._root.children[2].children[0].children.push(new Node(node_value_31, vert_value_20_0));
tree._root.children[2].children[0].children.push(new Node(node_value_32, vert_value_20_1));

//Node 21
tree._root.children[1].children[1].children.push(new Node(node_value_30, vert_value_21_0));
tree._root.children[1].children[1].children.push(new Node(node_value_31, vert_value_21_1));
tree._root.children[2].children[1].children.push(new Node(node_value_30, vert_value_21_0));
tree._root.children[2].children[1].children.push(new Node(node_value_31, vert_value_21_1));

//Node 22
tree._root.children[2].children[2].children.push(new Node(node_value_32, vert_value_22_0));
tree._root.children[2].children[2].children.push(new Node(node_value_44, vert_value_22_1));

//Node 30
tree._root.children[0].children[0].children.push(new Node(node_vlaue_40, vert_value_30_00));
tree._root.children[0].children[0].children.push(new Node(node_value_42, vert_value_30_01));
tree._root.children[1].children[1].children[0].children.push(new Node(node_vlaue_40, vert_value_30_00));
tree._root.children[1].children[1].children[0].children.push(new Node(node_value_42, vert_value_30_01));
tree._root.children[2].children[1].children[0].children.push(new Node(node_vlaue_40, vert_value_30_00));
tree._root.children[2].children[1].children[0].children.push(new Node(node_value_42, vert_value_30_01));

//Node 31
tree._root.children[0].children[1].children.push(new Node(node_value_41, vert_value_31_00));
tree._root.children[0].children[1].children.push(new Node(node_value_43, vert_value_31_01));
tree._root.children[1].children[0].children[0].children.push(new Node(node_value_41, vert_value_31_00));
tree._root.children[1].children[0].children[0].children.push(new Node(node_value_43, vert_value_31_01));
tree._root.children[1].children[1].children[1].children.push(new Node(node_value_41, vert_value_31_00));
tree._root.children[1].children[1].children[1].children.push(new Node(node_value_43, vert_value_31_01));
tree._root.children[2].children[0].children[0].children.push(new Node(node_value_41, vert_value_31_00));
tree._root.children[2].children[0].children[0].children.push(new Node(node_value_43, vert_value_31_01));
tree._root.children[2].children[1].children[1].children.push(new Node(node_value_41, vert_value_31_00));
tree._root.children[2].children[1].children[1].children.push(new Node(node_value_43, vert_value_31_01));

//Node 32
tree._root.children[0].children[2].children.push(new Node(node_value_42, vert_value_32_00));
tree._root.children[0].children[2].children.push(new Node(node_value_43, vert_value_32_01));
tree._root.children[1].children[0].children[1].children.push(new Node(node_value_42, vert_value_32_00));
tree._root.children[1].children[0].children[1].children.push(new Node(node_value_43, vert_value_32_01));
tree._root.children[2].children[2].children[0].children.push(new Node(node_value_42, vert_value_32_00));
tree._root.children[2].children[2].children[0].children.push(new Node(node_value_43, vert_value_32_01));

//----- Functions -----

//Set the card to the start state on the tree
function initState(stateData){
    //Set the state to be the root of the Tree 
    state = stateData;
    $('#storyText').text(state.data);
    //Clear the choice_area div before adding anything new
    clearDiv();
    var counter = 0;
    //Add all Radio Buttons
    state.children.forEach(function(child){
        var btnRadio = $('<p><input type="radio" class="with-gap" name="group1" id="option'+counter+'" value="'+counter+'"/><label for="option'+ counter +'">'+ child.vert +'</label></p>');
        $('#choice_area').append(btnRadio);
        counter++;
    });

}

//Clear the choice_area div
function clearDiv(){
    $('#choice_area').empty();
}

//Process a submit and change content and state
function processSubmit(){
    var selectedValue = $('input[type="radio"]:checked').val();
    if(selectedValue >= 0){
        initState(state.children[selectedValue]);
    }
}