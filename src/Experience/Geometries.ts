import Experience from "./Experience"
import * as THREE from 'three'

export default class Geometries
{
    experience: Experience
    scene: any
    constructor(){

        this.experience = new Experience(HTMLCanvasElement, {})
        this.scene = this.experience.scene

        //objects
        const material = new THREE.MeshToonMaterial({color : this.experience.parameters.materialColor})

        const mesh1 = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.4, 16, 60),
            material
        )
        const mesh2 = new THREE.Mesh(
            new THREE.ConeGeometry(1, 2, 32),
            material
        )
        const mesh3 = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
            material
        )
        this.scene.add(mesh1, mesh2, mesh3)
    }
}