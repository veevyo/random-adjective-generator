function generateWord() {
    rootWords = ["blerp", "clong", "flen", "cleek", "flerk", "clumb", "flerhgh", "minko", "ximp", "flen", "xorg", "frink", "crep", "fone"];
    suffixes = ["-core", "-coded", "-pilled", "ian", "ios", "inni", "ean", "-beaned"]

    index1 = Math.floor(Math.random() * rootWords.length);
    index2 = Math.floor(Math.random() * suffixes.length);

    randomWord = rootWords[index1] + suffixes[index2];

    document.getElementById("randomWord").innerHTML= ">~ " + randomWord
    return randomWord
}
