import * as THREE from 'three'
import Experience from "./Experience";

export default class Lights
{
    experience: Experience;
    scene: any;
    constructor(){
        this.experience = new Experience(HTMLCanvasElement)
        this.scene = this.experience.scene

        const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
        directionalLight.position.set(1, 1, 0)
        this.scene.add(directionalLight)
    }
}