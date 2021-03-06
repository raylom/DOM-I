const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


// let tagElements = document.getElementsByTagName('a');

// let homeTag = document.getElementById("home-tag")
// console.log(homeTag)
// // CSS Selector Styles
// element = document.querySelector(selectors);

// element = document.querySelectorAll(selectors);

// document.createElement('elementName'); Takes a string of the element you want to create (eg, ‘div’, ‘span’, ‘p’, etc.).

// End of Examples

const ATag = document.querySelectorAll('a');
//undefined
ATag[0].innerText = siteContent["nav"]["nav-item-1"];
//"Services"

ATag[1].innerText = siteContent["nav"]["nav-item-2"]

ATag[2].innerText = siteContent["nav"]["nav-item-3"]

ATag[3].innerText = siteContent["nav"]["nav-item-4"]

ATag[4].innerText = siteContent["nav"]["nav-item-5"]

ATag[5].innerText = siteContent["nav"]["nav-item-6"]

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let domIsGreat = document.querySelector('h1');
domIsGreat.innerText = siteContent['cta']['h1']

let button = document.querySelector("button");
button.innerText = siteContent["cta"]["button"]

let codeSnippet = document.getElementById("cta-img");
logo.setAttribute('src', siteContent["cta"]["img-src"])

textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];

let features = document.querySelector("main-content");
features.innerText = siteContent["main-content"]["features-h4"]



let mainContent = document.getElementsByTagName("main-content");

let contant = document.getElementsByTagName("contact");

let footer = document.getElementsByTagName("footer");