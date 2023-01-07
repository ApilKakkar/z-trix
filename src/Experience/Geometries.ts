import * as THREE from 'three'
import gsap from 'gsap'
import Experience from "./Experience"

export default class Geometries
{
    experience: Experience
    scene: any
    material: any
    datgui: any
    textureLoader: any
    gradientTexture: any
    sectionMeshes: any[]
    delta: number
    objectsDistance: number
    currentSection: number
    newSection: number
    camera: import("/Users/apilkakkar/Personal/z-trix/src/Experience/Camera").default
    sizes: import("/Users/apilkakkar/Personal/z-trix/src/Experience/Utils/sizes").default
    constructor(){

        this.experience = new Experience(HTMLCanvasElement)
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.sizes = this.experience.sizes
        this.datgui = this.experience.datgui

        //textures
        this.textureLoader = new THREE.TextureLoader()
        this.gradientTexture = this.textureLoader.load('static/textures/gradients/3.jpg')
        this.gradientTexture.magFilter = THREE.NearestFilter

        //objects
        this.objectsDistance = 4
        this.material = new THREE.MeshToonMaterial({
            color : this.datgui.parameters.materialColor,
            gradientMap : this.gradientTexture
        })

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

        mesh1.position.y = - this.objectsDistance * 0
        mesh2.position.y = - this.objectsDistance * 1
        mesh3.position.y = - this.objectsDistance * 2

        mesh1.position.x = 2
        mesh2.position.x = - 2
        mesh3.position.x = 2

        this.scene.add(mesh1, mesh2, mesh3)

        this.sectionMeshes = [mesh1,mesh2,mesh3]

        this.currentSection = 0
    }

    datguichange() {
        this.material.color.set(this.datgui.parameters.materialColor)
    }   

    scroll() {
        this.newSection = Math.round(this.camera.scrollY / this.sizes.height)
        if(this.newSection != this.currentSection){
            this.currentSection = this.newSection
            gsap.to(this.sectionMeshes[this.currentSection].rotation,{
                duration: 1.5,
                x: '+=6',
                // y: '+=3'
            })
        }
    }

    update() {
        // rotation variables
        this.delta = this.experience.time.delta / 1000

        for( const mesh of this.sectionMeshes){
            mesh.rotation.x += this.delta * 0.1
            mesh.rotation.y += this.delta * 0.12
        }
    }
}