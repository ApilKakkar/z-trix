import * as THREE from 'three'
import Experience from "./Experience";

export default class Boxes
{
    experience: Experience;
    scene: any;
    material: any;
    boxes_count: number;
    boxes_collection: any[];
    geometry: any[];
    box_width: number;
    sizes: import("/Users/apilkakkar/Personal/z-trix/src/Experience/Utils/sizes").default;
    datgui: import("/Users/apilkakkar/Personal/z-trix/src/Experience/DatGui").default;
    time: import("/Users/apilkakkar/Personal/z-trix/src/Experience/Utils/Time").default;
    random_collection: any[];
    constructor(){
        this.experience = new Experience(HTMLCanvasElement)
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.time = this.experience.time
        this.datgui = this.experience.datgui

        this.material = new THREE.MeshBasicMaterial({
            color : 'green',
        })
        this.box_width = 0.1;
        console.log(this.box_width)
        this.geometry = new THREE.BoxGeometry(this.box_width,0.5,0)
        this.boxes_collection = []
        this.boxes_count = 50
        this.random_collection = []
        for(let i=0; i<this.boxes_count; i++){
            this.random_collection.push(Math.random()*10)
        }

        let x_initial = 0
        for(let i=0 ; i<this.boxes_count; i++){
            this.create_box({x: (x_initial + this.box_width) - 3.5 ,y: 1.9,z: 0})
            x_initial += this.box_width
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
        // console.log(this.time.elapsed)
        let elapsed_secs = this.time.elapsed / 200
        for(let i=0 ; i<this.boxes_collection.length ; i++){
            const box = this.boxes_collection[i]
            box.scale.y = 2 + ( Math.sin(elapsed_secs) * 0.3 - (Math.sin(elapsed_secs+(i*this.random_collection[i])) * 0.5) )
            // box.scale.y = 2 + ( Math.sin(elapsed_secs) * 0.3 - (Math.sin(elapsed_secs+(i*1)) * 0.5) )
        }
    }
}