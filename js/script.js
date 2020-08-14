// Global Variables
const list = document.querySelectorAll('li');
const itemsPerPage = 10; 


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/
const showPage = (list, page) => {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   for(let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = ''; 
      } else {
         list[i].style.display = 'none';
      }
   }
}




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   // determine total number of pages
   const numOfPages = list.length / itemsPerPage; 

   // Create the div element with a nested UL element
   const div = document.createElement('div'); 
   div.className = 'pagination'; 
   const page = document.querySelector('.page');
   page.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);

   // create the LIs 
   for(let i = 1; i < numOfPages; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = i;
      li.appendChild(a);
      ul.appendChild(li);

      // Remove the active class name when the pagination is clicked
      a.addEventListener('click', (e) => {
         const alinks = document.querySelectorAll('a');
         for(let i = 0; i < alinks.length; i++ ) {
            alinks[i].className = '';  
         }

         e.target.className = ' active';
         const pageLink = e.target.textContent; 
         showPage(list, pageLink); 
      });
   }

   // Add the active class name to the first pagination link initially.
   document.querySelector('a').className = 'active';
   
}

showPage(list, 1);
appendPageLinks(list);
