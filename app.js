const express = require('express');
const path =require('path');
const app =express();
const contactUs=require('./models/contactUs');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('js'))
app.use(express.static('css'))
app.use(express.static('images'))
app.use(express.static('fonts'))


app.listen(process.env.PORT, () => {
    //console.log(process.env.PORT);
})


app.get('/', (req,res)=> {
     res.render("index")
 })

 app.get('/index', (req,res)=> {
     res.render("index")
 })


 app.get('/404', (req,res)=> {
     res.render("404")
 })

 app.get('/503', (req,res)=> {
     res.render("503")
 })

 app.get('/about', (req,res)=> {
     res.render("about")
 })

 app.get('/blog-classic', (req,res)=> {
     res.render("blog-classic")
 })

 app.get('/blog-grid', (req,res)=> {
     res.render("blog-grid")
 })

 app.get('/blog-masonry', (req,res)=> {
     res.render("blog-masonry")
 })

 app.get('/blog-modern', (req,res)=> {
     res.render("blog-modern")
 })


 app.get('/buttons', (req,res)=> {
     res.render("buttons")
 })

 app.get('/careers', (req,res)=> {
     res.render("careers")
 })

 app.get('/clients', (req,res)=> {
     res.render("clients")
 })

 app.get('/cobbles-gallery', (req,res)=> {
     res.render("cobbles-gallery")
 })

 app.get('/coming-soon', (req,res)=> {
     res.render("coming-soon")
 })

 app.get('/contacts', (req,res)=> {
     res.render("contacts")
 })

 app.get('/departments', (req,res)=> {
     res.render("departments")
 })

 app.get('/forms', (req,res)=> {
     res.render("forms")
 })

 app.get('/grid-gallery-no-padding', (req,res)=> {
     res.render("grid-gallery-no-padding")
 })

 app.get('/grid-gallery', (req,res)=> {
     res.render("grid-gallery")
 })

 app.get('/grid-system', (req,res)=> {
     res.render("blog-modern")
 })

 app.get('/icons', (req,res)=> {
     res.render("icons")
 })

 app.get('/maintenance', (req,res)=> {
     res.render("maintenance")
 })

 app.get('/make-an-appointment', (req,res)=> {
     res.render("make-an-appointment")
 })

 app.get('/masonry-gallery', (req,res)=> {
     res.render("masonry-gallery")
 })

 app.get('/partners', (req,res)=> {
     res.render("partners")
 })

 app.get('/pricing', (req,res)=> {
     res.render("pricing")
 })

 app.get('/privacy-policy', (req,res)=> {
     res.render("privacy-policy")
 })

 app.get('/progress-bars', (req,res)=> {
     res.render("progress-bars")
 })

 app.get('/search-results', (req,res)=> {
     res.render("search-results")
 })

 app.get('/single-post', (req,res)=> {
     res.render("single-post")
 })

 app.get('/tables', (req,res)=> {
     res.render("tables")
 })

 app.get('/pricitabs-and-accordions', (req,res)=> {
     res.render("pricitabs-and-accordions")
 })

 app.get('/team-member', (req,res)=> {
     res.render("team-member")
 })

 app.get('/team', (req,res)=> {
     res.render("team")
 })

 app.get('/timetable', (req,res)=> {
     res.render("timetable")
 })

 app.get('/typography', (req,res)=> {
     res.render("typography")
 })

 app.get('/services', (req,res)=> {
    res.render("services")
})

app.get('/faq', (req,res)=> {
    res.render("faq")
})

app.get('/make-an-appointment', (req,res)=> {
    res.render("make-an-appointment")
})

app.get('/under-construction', (req,res)=> {
    res.render("under-construction")
})

app.post('/contactUs',(req,res)=>{
   contactUs.insertContactUsData(req,res);
});

app.post('/subscribe', (req,res)=>{
    contactUs.subscribe(req,res)
    
})