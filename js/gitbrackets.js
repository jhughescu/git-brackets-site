var bin;
function getRanBin() {
    return Math.random() > 0.5 ? '0' : '1';
}
function getBin() {
    var s = '', i;
    for (i = 0; i < 99999; i++) {
        s += getRanBin();
    }
    return s;
}
function moreBin() {
    bin = getRanBin() + bin;
    document.getElementById('bgCont').innerHTML = bin;
//    setTimeout(moreBin, 100);
}
function go() {
    bin = getBin()
    if (document.getElementById('bgCont')) {
        document.getElementById('bgCont').innerHTML = bin;
        moreBin();
    } else {
        setTimeout(go, 10);
    }
}
go();
