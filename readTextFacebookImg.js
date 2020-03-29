/*
Creating a google chrome extension. 

Will either go with the creation of a dual-facebook which opens in another tab and collects
the alt part of all img tags on facebook. Otherwise I will change the actual tags to <p>
and inline the alt to replace the images altogether. Perhaps these can be options on the 
extension. 
*/

var imgCollect = document.getElementsByTagName('img');

for (let img of imgCollect) {
    img.outerHTML = '<p>' + img.alt + '</p>';
}
