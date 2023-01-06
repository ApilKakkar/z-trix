import Experience from "./Experience"
import * as THREE from 'three'

export default class Geometries
{
    experience: Experience
    scene: any
    material: any
    datgui: any
    constructor(){

        this.experience = new Experience(HTMLCanvasElement)
        this.scene = this.experience.scene
        this.datgui = this.experience.datgui


        //objects
        this.material = new THREE.MeshToonMaterial({color : this.datgui.parameters.materialColor})

        const mesh1 = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.4, 16, 60),
            this.material
        )
        const mesh2 = new THREE.Mesh(
            new THREE.ConeGeometry(1, 2, 32),
            this.material
        )
        const mesh3 = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
            this.material
        )
        this.scene.add(mesh1, mesh2, mesh3)
    }

    datguichange() {
        this.material.color.set(this.datgui.parameters.materialColor)
    }
}