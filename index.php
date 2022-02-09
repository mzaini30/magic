<!doctype html>
<html>
	<head>
		<script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
		<script>
		        new VConsole
		</script>
		<title>Hello</title>
		<meta charset="utf8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
	<body>
		<script type="magic">const nama = "Zen"</script>
		<script type="magic">console.log(`Hello ${nama}`)</script>

<script type="magic" src="https://unpkg.com/vue@3.2.30/dist/vue.global.js"></script>

<div class="app">
        <p>Hai {{ nama }}</p>
</div>

<script type="magic">
        Vue.createApp({
                data(){
                        return {
                                nama: "Zen"
                        }
                }
        }).mount(".app")
</script>

		
		<script>
			<?php include "magic.js" ?>
		</script>
	</body>
</html>
