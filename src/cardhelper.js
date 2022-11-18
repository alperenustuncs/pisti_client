
//returns path of the card from card json
export function returnCardPhotoPath(cardJson){
    //path of the cards
    const card_path = '../public/cards/';

    var card_name = json_to_file_name(cardJson);
    
    return (card_path+card_name+".png")
}


const type_dict = {
    sinek: "clubs",
    karo: "diamonds",
    kupa: "hearts",
    maca: "spades"
}

const desc_dict = {
    1: "ace",
    vale: "jack",
    papaz: "king",
    kiz: "queen"
}

//card json {"type":"", "description": ""}
export function json_to_file_name(cardJson){
    var card_obj = JSON.parse(cardJson);
    //filename is description_of_type
    return obj_to_file_name(card_obj);
}

export function obj_to_file_name(card_obj){
    var type = card_obj["type"];
    var desc = card_obj["description"] 
    var description = desc in desc_dict ? desc_dict[desc] : desc;
    var file_name = description + "_of_"+ type_dict[type];
    return file_name;
}

var json_obj = '{"type":"sinek", "description": "1"}';

var path = returnCardPhotoPath(json_obj);

console.log(path);
