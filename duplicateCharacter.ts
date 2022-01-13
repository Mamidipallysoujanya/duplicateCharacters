const string="tech.at.core";
var count=0;
for(let i=0;i<string.length;i++){
    for(let j=i+1;j<string.length;j++){
        if(string[i]==string[j]){
            console.log(string[j]);
            count++;
             break;
        }
    }
}
