const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern")

const addManager = Manager => {
    return `
    <!--card 1-->
    <div class=" max-w-sm bg-blue-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
        
    <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(650px, 3020.5px, 0px);">
        <ul class="py-1" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
        
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
        
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
        </ul>
        </div>
    </div>
        
    <div class="flex flex-col items-center pb-10">
        <img class="bg-white mb-3 w-24 h-24 rounded-full shadow-lg"  alt="add photo">
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${Manager.name}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Manager  ????????????????? ??????? ?????????????? </span>
       
    <div class="flex mt-4 space-x-3 lg:mt-6">
        <div class="card-body">
            <div class="text-sm text-gray-500 dark:text-gray-400">
                <p class="id">${Manager.id}</p>
                <p class="office">${Manager.officeNumber}</p>
            </div>
        </div>
    
        <a href="mailto:${Manager.email}" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Email</a>
        
            </div>
        </div>
    </div>
    `
}

const addEngineer = Engineer => {
    
    return `
    <!--card 2 -->
    <div class="max-w-sm bg-blue-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
        
    <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(650px, 3020.5px, 0px);">
        <ul class="py-1" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
        
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
        
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
        </ul>
        </div>
    </div>
        
    <div class="flex flex-col items-center pb-10">
        <img class="bg-white mb-3 w-24 h-24 rounded-full shadow-lg"  alt="add photo">
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${Engineer.name}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Engineer ???? ???? ???? </span>
       
    <div class="flex mt-4 space-x-3 lg:mt-6">
        <div class="card-body">
            <div class="text-sm text-gray-500 dark:text-gray-400">
                <p class="id">${Engineer.id}</p>
            </div>
        </div>
    
        <a href="mailto:${Engineer.email}" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Email</a>
        <a href="https://github.com"${Engineer.githubUser} class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GitHub</a>
            </div>
        </div>
    </div>
    `
}

const addIntern = Intern => {

    return `
    <!--card 3-->
    <div class=" max-w-sm bg-blue-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
        
    <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(650px, 3020.5px, 0px);">
        <ul class="py-1" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
        
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
        
            <li>
                <a href="#" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
        </ul>
        </div>
    </div>
        
    <div class="flex flex-col items-center pb-10">
        <img class="bg-white mb-3 w-24 h-24 rounded-full shadow-lg" alt="add photo">
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${Intern.name}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Intern ???? ???? ??????</span>
       
    <div class="flex mt-4 space-x-3 lg:mt-6">
        <div class="card-body">
            <div class="text-sm text-gray-500 dark:text-gray-400">
                <p class="id">${Intern.id}</p>
                <p class="school">${Intern.school}</p>
            </div>
        </div>
    
        <p class="Email">Email<a href="mailto:${Intern.email}" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Email</a></p>
        <p class="GitHub">GitHub<a href="https://github.com"${Intern.githubUser} class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GitHub</a></p>
            </div>
        </div>
    </div>
    `
}

const generateHTML = (data) => {
    pageArr = [];
    for (let i = 0 ; i <data.length; i++) {
        const teamMems = data[i];
        const role = teamMems.role;

        if (role === "Manager") {
            const managerProfile = addManager(teamMems);

            pageArr.push(managerProfile);
        }

        if (role === "Engineer") {
            const engineerProfile = addEngineer(teamMems);
            pageArr.push(engineerProfile);
        }

        if (role === "Intern") {
            const internProfile = addIntern(teamMems);
            pageArr.push(internProfile);
        }
    }
}

const generateProfileHTML = (teamMemsProfile) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>

    <body>
        <!-- navigation -->
    <nav class="bg-blue-100">
        <div class="container mx-auto">
        <div class="sm:flex justify-around">
        
            <a href="#" class="text-white text-3xl font-bold p-3">My Team IceBreaker</a>

        </div>
        </div>
    </nav>
    <div class="p-20 grid xl:grid-cols-3 gap-5">  
    </div>
    </body>
    </html>

    ${addManager(teamMemsProfile)}
    ${addEngineer(teamMemsProfile)}
    ${addIntern(teamMemsProfile)}
        `;
}
module.exports = generateHTML;

