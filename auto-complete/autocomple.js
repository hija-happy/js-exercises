let keywords = [
   'Html', 'Css', 'JavaScript',  
'React', 'TailwindCss', 'Next.js',  
'Node.js', 'Express.js', 'MongoDB',  
'Solidity', 'Hardhat', 'Ethereum',  
'Flutter', 'Dart', 'Firebase',  
'Python', 'Django', 'PostgreSQL',  
'Vue.js', 'Pinia', 'Vite',  
'Angular', 'TypeScript', 'RxJS',  
'Swift', 'SwiftUI', 'CoreData',  
'Kotlin', 'JetpackCompose', 'RoomDB',  
'GraphQL', 'Apollo', 'Prisma',  
'Rust', 'Actix', 'Diesel',  
'Go', 'Fiber', 'GORM',  
'PHP', 'Laravel', 'MySQL',  
'Java', 'Spring Boot', 'Hibernate',  
'Ruby', 'Rails', 'SQLite',  
'Elixir', 'Phoenix', 'Ecto',  
'C#', '.NET Core', 'MSSQL',  
'Svelte', 'SvelteKit', 'Supabase',  
'TensorFlow', 'Keras', 'PyTorch',
];

const searchResult = document.querySelector(".search-result");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    console.log("Key Pressed...")
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = keywords.filter(
            (keyword)=>{
                return keyword.toLowerCase().includes(input.toLowerCase());
            }
        );
        console.log(result);
    }
    display(result);
}

function display(result){
    const data = result.map((list)=>{
        return `<li onClick= "applyData('${list}')"> ${list} </li>`;
    }).join("");
   
    searchResult.innerHTML = "<ul>" + data+ "</ul>";

}

function applyData(data){
    inputBox.value = data;
    searchResult.innerHTML= "";
}


// PS: 
// Event Handling → onkeyup, onclick
// Array Methods → .filter(), .map(), .join("")
// String Manipulation → .toLowerCase() Template Literals
// DOM Manipulation → innerHTML, querySelector(), getElementById()
// Function Calls → Passing selected item to selectItem()
// Dynamic Event Binding → onclick inside .map()
// Real-time Search → Updates results as user types

