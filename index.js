// Take user input from search box
// Loop through the acronyms.json data
// Items should start to display when user types (on keyup?) need event listener
// if there is a partial or full match, display results in results section.  use regex for key
// if no matches, display visual feedback to user of no matches.

const search = document.querySelector("#searchBar");
const results = document.querySelector(".results");

const searchDept = async search => {
    const res = await fetch ('./acronyms.json');
    const departments = await res.json();  // returns everything from json file.

    let matches = departments.filter(dept => {
        const regex = new RegExp (`${search}`, 'gi');
        return dept.acronym.match(regex) || dept.name.match(regex);
    });

    //clear out the search results if search box has no characters
    // and show an error if no matches
    if(search.length === 0) {
        matches = [];
        results.textContent = '';
    } else {
        results.innerHTML = `<div class="error">
        <p>Sorry, we couldnt find what you were looking for.  Please check spelling</p>
        </div>`
    }
    output(matches);
}

function output (matches)  {
    if(matches.length>0) {
        const html = matches.map(match => `<div class="data">
        <h4>${match.acronym} : &nbsp &nbsp ${match.name}</h4>
        </div>`).join('');

        results.innerHTML = html;
        // Need to create a dropdown list for matches

    }
}

search.addEventListener("keyup", () => {
    searchDept(search.value)})



