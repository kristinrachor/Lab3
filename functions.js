/**
 * Created by racho008 on 1/28/14.
 */
function fun() {
    var saves = [];
    var count = 0;
    return {
        saves: saves,

    saveWords: function saveWords(text) {
    saves.unshift(text);
    if(saves.length > 5 ){
        saves.splice(5,1);
    }
},

    undo: function undo() {
       // if (saves[count].isEmpty) {
       //     return "";
      //  }
       // else {
            if (count < 5)
                count++;
            return saves[count-1];
       // }
},

    redo: function redo() {
        if (saves[count].isEmpty) {
            return "";
        }
        else {
            if (count >= 0)
                count--;
            return saves[count];
        }
}
}
}

module.exports.fun = fun;