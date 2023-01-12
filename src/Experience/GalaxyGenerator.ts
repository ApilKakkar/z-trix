import Experience from "./Experience"

export default class GalaxyGenerator{
    experience: Experience
    constructor(){
        console.log('galaxy')
        this.experience = new Experience(HTMLCanvasElement)
    }
}