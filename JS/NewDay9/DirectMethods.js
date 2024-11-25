//To write any content on web-page
//document.write
// document.writeln

document.write("hello-world")
document.writeln("hello-world")
document.writeln("hello-world")
document.writeln("hello-world")
document.writeln("hello-world")
document.writeln("<h1>Hello</h1>")

//direct Access

console.log(document.URL);
console.log(document.baseURI);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);

//for changing the title name in js

document.title="Flipkart"

console.log(document.body);

//for links 

// console.log(document.links);
// console.log(document.links[0]);

//if we have 100 no. of links then we use

let link=document.links
console.log(link);
console.log(link.length);
link[0].id="demo1"
link[0].href="http://www.netflix.com"
link[1].class="demo2"
link[1].href="https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_16_mkw_symCJqBmk-dc?mrntrk=pcrid_657901934582_slid__pgrid_84577172528_pgeo_1007740_x__adext__ptid_kwd-339065342343"

for (let i=0; i<link.length; i++)
{
    console.log(link[i]);
    link[i].className="demo"
}

//ATTRIBUTES 

//set-attribute()
link[0].setAttribute("target","blank")
link[1].setAttribute("target","blank")
//get-attribute()
console.log(link[0].getAttribute("target"));
console.log(link[1].getAttribute("target"));
//remove-attribute
//for remove any attribute
// link[0].removeAttribute("target")