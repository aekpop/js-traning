var x = new test()
setInterval(function() {
    console.log('x.name=', x.name)
},3000)

function test() {
    console.log('test')
    this.name = 'aeknofear'
    setInterval(() => {
        this.name += '*'
    },1000)
}
