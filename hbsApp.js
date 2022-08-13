const express = require('express')
const app = express() //invoking the express
const hbs = require('hbs')

app.set('view engine', 'hbs') //setting viewing file ejs
app.set('views','views1') // setting to views1

hbs.registerPartials('./views1/components')//to use different component

app.use(express.static('./styles'))
app.use(express.static('./images'))


app.get('/', (req, res) => {
    let db = [
      {
        img: '/1.avif',
        name: 'Vikrant Rona',
        genre: 'Mystery/thriller/adventure',
      },
  
      {
        img: '/2.avif',
        name: 'Laal Singh Chaddah',
        genre: 'Mystery/thriller/adventure',
      },
      {
        img: '/3.avif',
        name: 'Bhimsa',
        genre: 'Mystery/thriller/adventure',
      },
      {
        img: '/4.avif',
        name: 'Sita raman',
        genre: 'Mystery/thriller/adventure',
      },
      {
          img: '/5.avif',
          name: 'Raksha Bandhan',
          genre: 'Mystery/thriller/adventure',
        }
    ]
  
    //to send the file we use res.render
    res.render('home', { name: 'home page', db,  
    img1:'/d1.avif',
    img2:'/d2.avif',
    img3:'/d3.avif',
    img4:'/d4.avif',
    img5:'/d5.avif',
    img6:'/t1.avif',
    img7:'/t2.avif',
    img8:'/t3.avif',
    img9:'/t4.avif',
    img10:'/t5.avif'
  })
  })

app.listen(3000, () => {
  console.log('listening')
})
