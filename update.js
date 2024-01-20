var update=false;
let version=1;
let NewsVersion=2;
document.getElementById('version').style.display='none';
function verif(){
    if(update===true){
        document.getElementById('result').innerHTML = "Mise à jour disponible";
        document.getElementById('version').style.display='block';
        document.getElementById('version').innerHTML = "V2.0";
    } else{
        document.getElementById('result').innerHTML = "Jeux est à jour";
    }
}