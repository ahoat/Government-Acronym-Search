# Government-Acronym-Search

This is a tool to allow users to search for government departments either by name or acronym.
The data is based on the first table here:
(https://www.instituteforgovernment.org.uk/publication/whitehall-monitor-2018/abbreviations)

## Screenshots

<img src="https://github.com/ahoat/Government-Acronym-Search/blob/main/image1.JPG" width="200px">
<img src="https://github.com/ahoat/Government-Acronym-Search/blob/main/error.JPG" width="200px">

## Method

Firstly I copied and pasted the table into a CSV file and then used a VS Code extension to convert 
this into JSON.  Small bit of data cleansing required to change heading names and unexpected special characters

Then I created a function to retrieve this data using promises.  This is working in my local environment but need to test on github pages.
I used regular expressions based on user input to filter for matches.  I chose to match both by acronym and department name to give the user more options.

Results are displayed depending if there is a match and visual feedback given if there are no matches.

## Consider the following user stories: 

When the user first loads the application, they are presented with a free text search
box
When they search for an acronym, the application displays the full organisation
name for that acronym if one exists
If no such acronym exists, an appropriate message is displayed
An autocomplete is available on the search box, so that as a user begins to type
acronyms that match the letters they entered are presented in a dropdown
Partial matching is available (e.g. if a user searches for “DC”, results are returned for
both “DCMS” and “DCLG”)

## Still to do:
Need to create the autocomplete functionality so that the result are displayed in a dropdown instead of in the results.
