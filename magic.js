function buat(isi){
	let script = document.createElement("script")
	script.innerHTML = isi
	document.body.appendChild(script)
}

async function jalankan(){
	let isi = ""
	isi += document.head.innerHTML
	isi += document.body.innerHTML

	const parser = new DOMParser
	const dom = parser.parseFromString(isi, 'text/html')

	const semua_magic = dom.querySelectorAll("script[type='magic']")
	for (let el of semua_magic){
		if (el.src){
			if (localStorage[el.src]){
				buat(localStorage[el.src])
			} else {
				let data = await fetch(el.src)
				data = await data.text()
				localStorage[el.src] = data
				buat(data)
			}
		} else {
			buat(el.innerHTML)
		}
	}
}
jalankan()
