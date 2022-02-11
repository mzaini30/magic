# Magic

<p align="center">
<img src="https://i.postimg.cc/C5mymjjF/cd37629be2697c4c497ff3c8bcd560af.jpg">
</p>

## Cara Menggunakan

1. Download [`magic.min.js`](https://raw.githubusercontent.com/mzaini30/magic/master/magic.min.js)
2. Letakkan `magic.min.js` secara inline dan di atas `</body>`. Seperti ini:

	```html
	<script>
		// Isi magic.min.js di sini
	</script>
	</body>
	```
	
3. Ubah semua `<script>` menjadi `<script type="magic">`

## Konfigurasi

Letakkan kode ini di atasnya `magic.min.js`. Boleh diletakkan berdekatan atau berjauhan:

```javascript
const magic = {
  versi: 2
}
```

## Register Attribute

Untuk register attribute (selain `src`), gunakan prefix `data-`. Contoh:

_Before:_

```html
<script src="fake.js" type="module" async="async" crossorigin="anonymous">
```

_After:_

```html
<script src="fake.js" type="magic" data-type="module" data-async="async" data-crossorigin="anonymous">
```

## Compress

Install Uglify JS

```bash
npm i -g uglify-js
```

Compress

```bash
uglifyjs magic.js --compress --mangle > magic.min.js
```
