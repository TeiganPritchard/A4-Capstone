Overview:

For my capstone I did a website that lets users create cards with information about movies including ratings which they can sort by name, rating, year, and category in asc or desc.



Map:

- / - Home page  
- /list - List view (search, filter, sort)  
- /item/:id - Detail view for a single movie  
- /new - Create a new movie  
- /edit/:id - Edit an existing movie  
- * → 404 Not Found
  
Home page: https://teiganpritchard.github.io/A4-Capstone/
ListView: https://teiganpritchard.github.io/A4-Capstone/#/list
CreateForm: https://teiganpritchard.github.io/A4-Capstone/#/new
Error: https://teiganpritchard.github.io/A4-Capstone/#/test
Edit: https://teiganpritchard.github.io/A4-Capstone/#/edit/ae38026a-5546-45ff-8534-123b764f23d0 (example from clicking edit on one of my created movies)
View: https://teiganpritchard.github.io/A4-Capstone/#/item/ae38026a-5546-45ff-8534-123b764f23d0 (example from clicking view on one of my created movies)

Data map

id: string,
name: string,
category: string,
rating: number,
year: number,
description: string

data persists after refresh 

Storage Key: 'a4_items'

