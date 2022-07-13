export function getSrcImage(src){
    let srcImage = ""; 
    if(src===null) srcImage = "https://images.gameinfo.io/pokemon/256/p201.png";
    else srcImage = src;

    return srcImage;
}
