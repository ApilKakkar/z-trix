import EventEmitter from './EventEmitter.js'

export default class Time extends EventEmitter
{
    [x: string]: any
    start: number
    current: number
    elapsed: number
    delta: number
    constructor(){
        super()

        // setup
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16


        //waiting one frame befor calling tick function
        window.requestAnimationFrame(() =>{
            this.tick()
        })
    }

    tick()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        this.trigger("tick")

        window.requestAnimationFrame(() => {
            this.tick()
        })  
    }
}