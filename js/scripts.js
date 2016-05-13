$(document).ready(function(){
    //Ready the Side Bar on Ready
    $(".button-collapse").sideNav();
    
    //Add a listener to thr optionPicker to change the text
    $('#optionPicker').submit(function(event){
        event.preventDefault(); //Stop the normal submission
        
        var textToSet = "None Selected";
        if ($("#option1").is(":checked")){
            textToSet = $("#option1").text();
        }
        console.log(textToSet);
        $('#storyText').text(function(i, oldText){
            return "Testing";
        });
    });
});

//----- Define the Tree structure -----

//A node in my story tree
function Node(storyData){
    this.storyData = storyData;
    this.parent = null;
    //This is an array of Verts
    this.children = []
}

//A verticy object which connects nodes
function Vert(choice, node){
    this.choice = choice;
    this.node = node;
}

//The story Tree which contains nodes and verts
function Tree(data){
    var node = new Node(data);
    this._root = node;
}

//----- Define the Node values -----

var tbd = "Work in progress";

var node_vlaue_00 = "You, Thor the god of thunder, have been stranded on Earth and stripped of your god like powers, leaving you as powerless as these mortals around you. But one of the mortals, Jane, is quite nice. Maybe it is not so bad to be a mortal. As you contemplate this, the door bursts open revealing four juvent fellows dressed in ridiculous armor. You realise they are Asgardians, your people! More so, they are your close friends Sif and the Warriors Three. They smile and seem to jump for joy at the sight of you, one of the warriors says 'Thor!'";
var vert_value_00_0 = "Finally, let’s party!";
var vert_value_00_1 = "I’m so happy to see you, but…";
var vert_value_00_2 = "Go away, don’t remind me of my failure!";

var node_value_10 = "Sif rolls her eyes but from her smile you can see that she is happy to see you haven't been changed by this exile. The Warriors Three shout and cheer as they rush you out the door to the nearest bar, leaving Jane staring in amazement and disappointment. In just a few minutes you and your gang manage to down most of the alcohol in the establishment even though it is little effect on Asgardians. You enjoy the company and it reminds you of the good times, when you were not trapped on this god-forsaken realm. It does not last long. With a crash and an explosion, the building across the street erupts in flames/. Sif rushes to the door and you stumble after her. In the middle of the street, stands a massive metal man: a Destroyer from Asgard. ‘What is that thing doing here!?’ you shout to no one in particular. Sif turns to you, ‘It must be Loki! We came here to bring you back to Asgard. In your absence, Odin fell into the Odinsleep leaving Loki on the throne’. You manage to shout out ‘Loki wants the throne for himself!’";
var vert_value_10_0 = "He will never take what is rightfully mine! TO GLORY!!!";
var vert_value_10_1 = "The glory shall be mine. Stand back!";
var vert_value_10_2 = "Jane...";

//----- Build the story Tree -----

var tree = new Tree(node_vlaue_00);

//Node 00 (Starting Node)
tree._root.children.push(new Vert(vert_value_00_0,new Node(node_value_10)));
tree._root.children[0].parent = tree;
tree._root.children.push(new Vert(vert_value_00_1, new Node(tbd)));
tree._root.children[1].parent = tree;
tree._root.children.push(new Vert(vert_value_00_2, new Node(tbd)));
tree._root.children[2].parent = tree;

//Node 10
tree._root.children.push(new Vert(vert))

//----- Functions -----

//Set the card to the start state on the tree
function initState(){
    return;
}