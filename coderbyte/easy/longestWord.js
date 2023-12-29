function LongestWord(sen) { 

    const filter = sen.match(/[a-z0-9]+/gi);

    const sorted = filter.sort((a, b) => {
        return b.length - a.length
    })
    console.log(sorted[0]);
    return sorted[0];
}
     
// keep this function call here 
LongestWord("123456789 98765432");
// output: 123456789