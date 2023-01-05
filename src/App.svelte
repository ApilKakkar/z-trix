<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
    import ZTrix from "./_ZTrix.svelte";
	export let url = "";
</script>

<Router url="{url}">
	<Route path=""><ZTrix /></Route>
</Router>

