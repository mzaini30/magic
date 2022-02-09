(() => {

function buat(isi){
	let script = document.createElement("script")
	script.innerHTML = isi
	if ("magic" in Object){
		if (magic.module){
			if (magic.module == true){
				script.type = "module"
			}
		}
	}
	return document.body.appendChild(script)
}

async function jalankan(){
	let isi = ""
	isi += document.head.innerHTML
	isi += document.body.innerHTML

	const parser = new DOMParser
	const dom = parser.parseFromString(isi, 'text/html')

	const semua_magic = dom.querySelectorAll("script[type='magic']")
	for (let el of semua_magic){
		let namanya = el.src
		if ("magic" in Object){
			if (magic.versi){
				namanya = `${el.src}-${magic.versi}`
			}
		}
		if (namanya){
			if (localStorage[namanya]){
				buat(localStorage[namanya])
			} else {
				let data = await fetch(namanya)
				data = await data.text()
				localStorage[namanya] = data
				buat(data)
			}
		} else {
			buat(el.innerHTML)
		}
	}
}
jalankan()

})()
