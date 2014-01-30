/**
 * Created by racho008 on 1/28/14.
 */
function countWords(text) {
    return text.length;
}

function saveWords(arr, text) {
    arr.unshift(text);
    if(arr.length > 5 ){
        arr.remove(5);
    }
}

function undo(arr, num) {
    if(num > 0 ){
        return arr[num + 1];
    }
}

function redo(text) {

}

module.exports.countWords = countWords;
module.exports.saveWords = saveWords; 