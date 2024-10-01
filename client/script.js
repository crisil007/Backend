async function addMovie(event){
    event.preventDefault();
    console.log ("reached here....");


    let title=document.getElementById('title').value;
    console.log("title:",title)

    let language=document.getElementById('language').value;
    console.log("language:",language);

    let genere=document.getElementById('genere').value;
    console.log("genere:",genere);




    let datas={
        title,
        language,
        genere,
    }

    

}