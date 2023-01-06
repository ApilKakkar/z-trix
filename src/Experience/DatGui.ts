import * as dat from 'dat.gui'
import EventEmitter from './Utils/EventEmitter.js'

export default class DatGui extends EventEmitter
{
    [x: string]: any   
    
    constructor(){
        super()

        this.gui = new dat.GUI()

        this.parameters = {
            materialColor: '#ffeded'
        }

        this.gui
        .addColor(this.parameters, 'materialColor')
        .onChange(()=>{
            this.trigger('materialColorChange')
        })

    }
}