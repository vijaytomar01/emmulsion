const head = document.getElementById('head');

console.log(head);

head.style.color= "red";
head.style.border ="4px solid green"

head.addEventListener('click',()=>{
    console.log('h1 tag clicked!');
    head.style.backgroundColor="green"
})

const btn = document.getElementById('btn');
let x = 0;
btn.addEventListener('click',()=>{
    const inner = document.getElementById('inner');
    x = x+10
    if(x<=100){
       inner.style.width = x +"%"
    }
    
});

const searchInput = document.getElementById('product-search');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        alert('Search input cannot be empty.');
        return;
    }
    // Implement product search logic here
    console.log(`Searching for: ${searchTerm}`);
    // Example: Displ