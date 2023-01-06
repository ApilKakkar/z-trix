import Experience from "./Experience";

export default class DatGui
{
    experience: Experience;
    constructor(){
        this.experience = new Experience(HTMLCanvasElement,{})
        console.log('dat')
    }
}