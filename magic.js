(() => {

function buat(isi, module){
	let script = document.createElement("script")
	if (module){
		script.type = "module"
	}
	script.innerHTML = isi
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
		if (magic != null){
			if (magic.versi){
				namanya = `${el.src}-${magic.versi}`
			}
		}
		let module = false
		if (el.dataset.type == "module"){
			module = true
		}
		if (el.src){
			if (localStorage[namanya]){
				buat(localStorage[namanya], module)
			} else {
				let data = await fetch(el.src)
				data = await data.text()
				localStorage[namanya] = data
				buat(data, module)
			}
		} else {
			buat(el.innerHTML, module)
		}
	}
}
jalankan()

})()
