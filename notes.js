const fs=require('fs')
const chalk=require('chalk')

const getNotes=()=>`Your notes...`

const addNote=(title,body)=>{
   const notes=loadNotes() 
    const duplicateNote=notes.find(note=>{
        note.title===title
    })

    debugger
    //in the end, you have debugging links

    if(!duplicateNote){
    notes.push({
    title:title,
    body:body,
   })

   saveNotes(notes)
   console.log('New note added!');
}
else{
    console.log('Note title taken!');
}
}

const removeNote=function(title){
const notes=loadNotes();

const notesToKeep=notes.filter(function(note){
    return note.title!==title
})

saveNotes(notesToKeep);

if(notes.length===notesToKeep.length){
console.log(chalk.red.inverse('No such Note present'));
}
else{
    console.log(chalk.green.inverse('Note removed'));
}
}

const listNotes=function(){
    console.log(chalk.inverse('Your notes'));
    const notes=loadNotes();
    notes.forEach(note=>{
        console.log(note.title);
    })
}

const readNote=function(title){
    const notes=loadNotes();
    const note=notes.find(note=>note.title===title)
    if(note){
        console.log(chalk.inverse(note.title,note.body));
    }else{
        console.log(chalk.inverse.red('No note by this title!'));
    }
}

const saveNotes=function(notes){
const dataJSON=JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
      return[]  
    }
//if there is no notes data then it ctaches error and load function returns an empty array in which data can be added 
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote,
}

//NODE DEBUGGER:
//in chrome write-        chrome://inspect
//in terminal write-        node inspect app add --title t --body b
//if a pbl comes and u nee to restart, restart
