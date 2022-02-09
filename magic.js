async function jalankan(){
	let isi = ""
	isi += document.head.innerHTML
	isi += document.body.innerHTML

	const parser = new DOMParser
	const dom = parser.parseFromString(isi, 'text/html')

	const semua_magic = dom.querySelectorAll("script[type='magic']")
	for (let el of semua_magic){
		if (el.src){
			let script = document.createElement("script")
			if (localStorage[el.src]){
				script.innerHTML = localStorage[el.src]
				document.body.appendChild(script)
			} else {
				let data = await fetch(el.src)
				data = await data.text()
				localStorage[el.src] = data
				script.innerHTML = data
				document.body.appendChild(script)
			}
		} else {
			const script = document.createElement("script")
			script.innerHTML = el.innerHTML
			document.body.appendChild(script)
		}
	}
}
jalankan()
