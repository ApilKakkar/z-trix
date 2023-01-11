import * as THREE from 'three'
import Experience from "./Experience";

export default class Particles
{
    experience: Experience;
    particlesCount: number;
    positions: Float32Array;
    par: Iterable<number>;
    particlesGeometry: any;
    particlesMaterial: any;
    datgui: import("/Users/apilkakkar/Personal/z-trix/src/Experience/DatGui").default;
    scene: any;
    particles: any;
    geometries: import("/Users/apilkakkar/Personal/z-trix/src/Experience/Geometries").default;
    constructor(){
        this.experience = new Experience(HTMLCanvasElement)
        this.scene = this.experience.scene
        this.datgui = this.experience.datgui
        this.geometries = this.experience.geometries

        this.particlesCount = this.geometries.sectionMeshes.length * 125
        this.positions = new Float32Array(this.particlesCount * 3)

        for(let i=0; i<this.particlesCount; i++){
            this.positions[i * 3 + 0] = (Math.random() - 0.5) * 10
            this.positions[i * 3 + 1] = (this.geometries.objectsDistance * 0.5) - Math.random() * this.geometries.objectsDistance * this.geometries.sectionMeshes.length
            this.positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        }

        this.particlesGeometry = new THREE.BufferGeometry()
        this.particlesGeometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3))

        this.particlesMaterial = new THREE.PointsMaterial({
            color: this.datgui.parameters.particlesMaterialColor,
            sizeAttenuation: true,
            size: 0.05
        })

        this.particles = new THREE.Points(this.particlesGeometry, this.particlesMaterial)
        this.scene.add(this.particles)
    }

    datguichange() {
        this.particlesMaterial.color.set(this.datgui.parameters.particlesMaterialColor)
    }
}