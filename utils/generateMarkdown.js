// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license=='Apache 2.0'){

        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
   
    }
    if(license=='IBM Public License Version 1.0'){

        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]";

    }
    if(license=='The MIT License'){

        return "[![License: IPL 1.0](https://img.shields.io/badge/License-MIT-yellow.svg)]";

    }
    if(license=='Mozilla Public License 2.0'){

        return "[![License: IPL 1.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";

    }
    if(license=='WTFPL'){

        return "[![License: IPL 1.0](https://img.shields.io/badge/license-Unlicense-blue.svg)]";

    }
    else{console.log("THERES NOTHING HERE")}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if(license=='Apache 2.0'){

        return "(https://opensource.org/licenses/Apache-2.0)";
   
    }
    if(license=='IBM Public License Version 1.0'){

        return "(https://opensource.org/licenses/IPL-1.0)";

    }
    if(license=='The MIT License'){

        return "(https://opensource.org/licenses/MIT)";

    }
    if(license=='Mozilla Public License 2.0'){

        return "(https://opensource.org/licenses/MPL-2.0)";

    }
    if(license=='WTFPL'){

        return "(http://www.wtfpl.net/about/)";

    } else{console.log("THERES NOTHING HERE")}


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;

}

module.exports = generateMarkdown;