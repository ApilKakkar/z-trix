import * as dat from 'dat.gui'
import EventEmitter from './Utils/EventEmitter.js'

export default class DatGui extends EventEmitter
{
    [x: string]: any   
    
    constructor(){
        super()

        this.gui = new dat.GUI()

        this.parameters = {
            materialColor: '#8c0d28',
            particlesMaterialColor: '#ffe100',
        }

        this.gui
        .addColor(this.parameters, 'materialColor')
        .onChange(()=>{
            this.trigger('materialColorChange')
        })

        this.gui
        .addColor(this.parameters, 'particlesMaterialColor')
        .onChange(()=>{
            this.trigger('particlesMaterialColorChange')
        })

    }
}