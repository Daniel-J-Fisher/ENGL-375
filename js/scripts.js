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
var vert_value_20_0 = "'I can save the citizens'";
var vert_value_20_1 = "'This is my fight, the Destroyer is mine'";

var node_value_21 = "In the distance, the clouds turn black and spiral forms, looking like some strange tornado, but you know it is not. Everyone turns to look at the thing that has drawn your gaze. The cyclone grows and the air becomes cold as the sky darkens. The center of the cyclone comes crashing down to the desert ground, sending a shockwave of dust in all directions. You can feel the ground shake from here. As the dust clears you can make out a huge metal beast shooting fire out of its eyes: The Destroyer. With anger in your stomach you clench your fist. ‘Loki sent the destroyer here for me. He thinks one of his silly toys and kill the god of thunder, HA!’";
var vert_value_21_0 = "Thor and his warriors will never be defeated! TO GLORY!!!";
var vert_value_21_1 = "This beast is mine to defeat. Stand back!";

var node_value_22 = "In the distance, the clouds turn black and spiral forms, looking like some strange tornado, but you know it is not. Everyone turns to look at the thing that has drawn your gaze. The cyclone grows and the air becomes cold as the sky darkens. The center of the cyclone comes crashing down to the desert ground, sending a shockwave of dust in all directions. You can feel the ground shake from here. As the dust clears you can make out a huge metal beast shooting fire out of its eyes: The Destroyer. Loki wants to kick me while I’m down, huh?’";
var vert_value_22_0 = "Well that was a bad idea";
var vert_value_22_1 = "‘There is no point in fighting back, Loki will always win now...’";

//----- Build the story Tree -----

var tree = new Tree(node_vlaue_00);

//Node 00 (Starting Node)
tree._root.children.push(new Node(node_value_10,vert_value_00_0));
tree._root.children.push(new Node(node_value_11,vert_value_00_1));
tree._root.children.push(new Node(node_value_12,vert_value_00_2));

//Node 10
tree._root.children[0].children.push(new Node(tbd,vert_value_10_0));
tree._root.children[0].children.push(new Node(tbd,vert_value_10_1));
tree._root.children[0].children.push(new Node(tbd,vert_value_10_2));

//Node 11
tree._root.children[1].children.push(new Node(node_value_20,vert_value_11_0));
tree._root.children[1].children.push(new Node(node_value_21,vert_value_11_1));

//Node 12
tree._root.children[2].children.push(new Node(node_value_20, vert_value_12_0));
tree._root.children[2].children.push(new Node(node_value_21, vert_value_12_1));
tree._root.children[2].children.push(new Node(node_value_22, vert_value_12_2));

//Node 20
tree._root.children[1].children[0].children.push(new Node(tbd, vert_value_22_0));
tree._root.children[1].children[0].children.push(new Node(tbd, vert_value_22_1));

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