module.exports = {
   async main(req, res){
      var talia = await res.render('index',{
	 title: "About Language",
	 layout: 'mainLayouts'
      }) 
   },
   async options(req, res){
      try{
	 var talia = await res.render('gameOptions', {
	    title: "Options",
	    layout: "mainLayouts"
	 })
      }catch(err){
	 console.error(err)
      }
   } 
}
