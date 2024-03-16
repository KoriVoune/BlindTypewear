function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

document.getElementById('c1').innerHTML = makeid(1)
document.getElementById('c2').innerHTML = makeid(1)
document.getElementById('c3').innerHTML = makeid(1)
document.getElementById('c4').innerHTML = makeid(1)
document.getElementById('c5').innerHTML = makeid(1)