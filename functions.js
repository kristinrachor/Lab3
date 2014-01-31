/**
 * Created by racho008 on 1/28/14.
 */
function countWords(text) {
    return text.length;
}

function saveWords(arr, text) {
    arr.unshift(text);
    if(arr.length > 5 ){
        arr.splice(5,1);
    }
}

function undo(arr, num) {
    if(arr[num] != undefined){
        return arr[num];
    }
}

function redo(arr, num) {
    if(arr[num] != undefined){
        return arr[num];
    }
}

module.exports.countWords = countWords;
module.exports.saveWords = saveWords;