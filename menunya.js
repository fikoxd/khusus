const chalk = require('chalk')
const fs = require('fs')

global.menunya = (pushname, prefix, hituet) =>{
	return `╭─❒ 「 *INFO MENU* 」
│
│○ !owner  
│○ !sc  
│○ !ping  
│○ !tqto  
│○ !sewa  
│○ !q  
│○ !sewa  
│○ !runtime
│○ !developer  
│
╰❒ 

╭─❒ 「  *OWNER MENU*  」
│
│○ !addsewa  
│○ !delsewa  
│○ !listsewa  
│
╰❒

╭─❒ 「  *STORE MENU*  」
│
│○ !list  
│○ !addlist  
│○ !updatelist  
│○ !dellist  
│○ !jeda  
│○ !tambah  
│○ !kurang  
│○ !kali  
│○ !bagi  
│○ !setproses  
│○ !changeproses  
│○ !delsetproses  
│○ !setdone  
│○ !changedone  
│○ !delsetdone  
│○ !proses  
│○ !done  
│○ !setwelcome  
│○ !changewelcome  
│○ !delsetwelcome  
│○ !setleft  
│○ !changeleft  
│○ !delsetleft  
│
╰❒

╭─❒ 「 *GROUP MENU* 」 
│
│○ !antiwame  [on/off]
│○ !antiwame2  [on/off]
│○ !antilink  [on/off]
│○ !antilink2  [on/off]
│○ !welcome  [on/off]
│○ !goodbye  [on/off]
│○ !group open
│○ !group close
│○ !hidetag  
│○ !kick  
│○ !linkgc  
│○ !resetlinkgc  
│○ !delete  
│○ !setnamegc  
│○ !setdesc  
│○ !listsewa  
│○ !add  
│○ !promote  
│○ !demote  
│○ !antilinkall  
│○ !sendlinkgc  
│○ !tagall  
│○ !mute [on/off]
│○ !nsfw [on/off]
│○ !setppgroup
│
╰❒

╭─❒ 「 *OTHER MENU* 」 
│
│○ !afk
│
╰❒

╭─❒ 「 *STICKER MENU* 」 
│
│○ !sticker  
│○ !toimage  
│○ !pinterest  
│○ !ttp  
│○ !smeme  
│○ !attp  
│○ !emojimix  
│○ !wm  
│○ !qc
│
╰❒

╭─❒ 「 *CEK ID MENU* 」 
│
│○ !cekidff
│○ !cekidml
│
╰❒

╭─❒ 「 *THANKS TO* 」 
│
│○ Allah Swt.
│○ Myparents
│○ Hads
│○ VinzDev
│○ Misel
│○ Fatih Arridho
│○ Ferdiz
│○ Zeeoneofc
│○ Jer Ofc
│○ All Creator Bot
│
╰❒

📝 LINK GRUP :https://chat.whatsapp.com/Hs2CAXVEJ1g9Fubb14F2a5
`
}

/*

JANGAN HAPUS THANKS TO DEKS :V
KALO MAU NARUH NAMA LU TARUH AJA

*/

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})