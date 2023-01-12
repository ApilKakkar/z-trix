<script lang="ts">
import { onMount } from "svelte";
import Experience from "./Experience/Experience";

let experience = null

onMount(async () => {
    // Main Exeperience
    experience = new Experience(document.querySelector('.ztrix'))

});

const handleMoveCameraLeft = () => {
    experience.camera.rotateCameraLeft()
}

const handleMoveCameraRight = () => {
    experience.camera.rotateCameraRight()
}

</script>


<canvas class="ztrix"></canvas>

<section class="section">
    <span>Z-TRIX</span>
</section>
<section class="section">
    <span> 3D Web Experience</span>
</section>
<section class="section">
    <span>Thanks for your time.</span>
</section>
<div class="camera_controls">
    <button class="btn btn-primary" on:click={()=>handleMoveCameraLeft()}>&larr;</button>
    <button class="btn btn-primary" on:click={()=>handleMoveCameraRight()}>&rarr;</button>
</div>