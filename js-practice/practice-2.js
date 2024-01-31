

function modTime(velue) {
    const hours = String(Math.floor(velue/60)).padStart(2, '0');
    const minutes = String(velue % 60).padStart(2, '0');
    return `${hours}:${minutes}`;
}
console.log(modTime(70));

const velue = 70;
const hours = String(Math.floor(velue/60)).padStart(2, '0');
const minutes = String(velue % 60).padStart(2, '0');
console.log(`${hours}:${minutes}`);
// console.log(str1.padStart(2, '0')); shift+alt+down(Win) shift+option+down(Mac)
// console.log(str1.padStart(2, '0'));
// console.log(str1.padStart(2, '0'));
// console.log(str1.padStart(2, '0'));
// console.log(str1.padStart(2, '0'));
// console.log(str1.padStart(2, '0'));