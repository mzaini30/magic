<!doctype html>
<html>
	<head>
		<title>Hello</title>
		<meta charset="utf8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
	<body>
		<script>const nama = "Zen"</script>
		<script>console.log(`Hello ${nama}`)</script>

<script  src="https://unpkg.com/vue@3.2.30/dist/vue.global.js"></script>

<div class="app">
        <p>Hai {{ nama }}</p>
</div>

<script type="module">
        Vue.createApp({
                data(){
                        return {
                                nama: "Zen"
                        }
                }
        }).mount(".app")
</script>

		
		<script>
			<?php include "magic.min.js" ?>
		</script>
	</body>
</html>
