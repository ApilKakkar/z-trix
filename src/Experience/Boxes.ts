import * as THREE from 'three'
import Experience from "./Experience";

export default class Boxes
{
    experience: Experience;
    scene: any;
    material: any;
    boxes_count: number;
    boxes_collection: any[];
    geometry: any;
    box_width: number;
    sizes: import("/Users/apilkakkar/Personal/z-trix/src/Experience/Utils/sizes").default;
    datgui: import("/Users/apilkakkar/Personal/z-trix/src/Experience/DatGui").default;
    time: import("/Users/apilkakkar/Personal/z-trix/src/Experience/Utils/Time").default;
    random_collection: any[];
    colors: Float32Array;
    constructor(){
        this.experience = new Experience(HTMLCanvasElement)
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.time = this.experience.time
        this.datgui = this.experience.datgui

        this.boxes_count = 50

        this.colors = new Float32Array(this.boxes_count * 3)
        for(let i=0; i< this.boxes_count * 3; i++){
            this.colors[i] = Math.random()
        }

        this.material = new THREE.PointsMaterial({
            color: this.datgui.parameters.particlesMaterialColor,
            vertexColors: true,
        })
        this.box_width = 0.1;

        this.geometry = new THREE.BoxGeometry(this.box_width,0.5,0)
        this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3))

        console.log(this.geometry)
        this.boxes_collection = []

        this.random_collection = []
        for(let i=0; i<this.boxes_count; i++){
            this.random_collection.push(Math.random()*10)
        }

        let x_initial = 0
        for(let i=0 ; i<this.boxes_count; i++){
            this.create_box({x: (x_initial) - 5 ,y: 3,z: 0})
            x_initial += this.box_width * 2
        }
    }

    create_box(position){
        const mesh = new THREE.Mesh(
            this.geometry,
            this.material
        )
        mesh.position.x = position.x
        mesh.position.y = position.y
        mesh.position.z = position.z
        // this.datgui.gui.add(mesh.position, 'x', -10, 10)
        
        this.scene.add(mesh)
        this.boxes_collection.push(mesh)
    }

    update(){
        let elapsed_secs = this.time.elapsed / 200

        for(let i=0 ; i<this.boxes_collection.length ; i++){
            const box = this.boxes_collection[i]

            // boxes scaling animation

            box.scale.y = 2 + ( Math.sin(elapsed_secs) * 0.3 - (Math.sin(elapsed_secs+(i*this.random_collection[i])) * 0.5) )
            // scaling animation option 2
            // box.scale.y = 2 + ( Math.sin(elapsed_secs) * 0.3 - (Math.sin(elapsed_secs+(i*1)) * 0.5) )
            

            // box.position.x += (Math.sin(elapsed_secs) * 0.1)
            // box.rotation.z -= Math.PI * 0.005

            const i3 = i * 3
            // this.geometry.attributes.color.array[i3] = Math.random()
        }

        // this.geometry.attributes.color.needsUpdate = true

    }
}