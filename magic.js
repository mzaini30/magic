(() => {
	function buat(isi, dataset) {
		// buat elemen script
		let script = document.createElement("script");

		// ambil attribute data-
		if (dataset){
			for (let n in dataset){
				script[n] = dataset[n]
			}
		}

		// diisi scriptnya
		script.innerHTML = isi;

		// tanam ke body
		return document.body.appendChild(script);
	}

	async function jalankan() {
		// ambil semua elemen di page
		let isi = "";
		isi += document.head.innerHTML;
		isi += document.body.innerHTML;

		// ubah jadi dom
		const parser = new DOMParser();
		const dom = parser.parseFromString(isi, "text/html");

		// ambil yang type magic
		const semua_magic = dom.querySelectorAll("script[type='magic']");

		// ambil versi
		let versi = 'base'
		if (typeof magic != 'undefined') {
			if (magic.versi) {
				versi = magic.versi
			}
		}

		// ringkasan
		/*
			{
				versi: 'base',
				link: [
					'satu.js',
					'dua.js'
				]	
			}
		*/
		let ringkasan = {
			versi: '',
			link: []
		}
		ringkasan.versi = versi

		// loop semua magic
		for (let el of semua_magic) {

			// linknya jadi key localStorage
			let namanya = `${el.src}-${versi}`;

			// jika ada src
			if (el.src) {

				ringkasan.link = [...ringkasan.link, namanya]

				if (localStorage[namanya]) {
					buat(localStorage[namanya], el.dataset);
				} else {
					let data = await fetch(el.src).then(x => x.text()).catch(x => console.log(x))
					if (data) {
						buat(data, el.dataset);
						localStorage[namanya] = data;
					}
				}
			} else {
				// kalau nggak ada src, pakai inner html nya script
				buat(el.innerHTML, el.dataset);
			}
		}

		// bersih-bersih localStorage
		if (localStorage.data_magic){
			let data_magic = JSON.parse(localStorage.data_magic)
			if (data_magic.versi != ringkasan.versi){
				for (let x of data_magic.link){
					localStorage.removeItem(x)
				}
			}
		}
		localStorage.data_magic = JSON.stringify(ringkasan)

	}
	jalankan();
})();
