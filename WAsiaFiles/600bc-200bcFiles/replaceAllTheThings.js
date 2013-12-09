(function()
{
  var forEach = Array.prototype.forEach;  

  document.ROO_URL = "http://www.me.wpi.edu/research/IMDC/IQP%20Website";var replaceLinks = function(elem, ind, arr)
  {
    if (elem.hasAttribute("src")) 
    { 
        if (elem.getAttribute("src").substring(0,1) == "/") 
        {
            elem.setAttribute("src", document.ROOT_URL+elem.getAttribute("src")); 
        }
    };

    if (elem.hasAttribute("href")) 
    { 
        if (elem.getAttribute("href").substring(0,1) == "/") 
        {
            elem.setAttribute("href", document.ROOT_URL+elem.getAttribute("href"));
        }
    };
  };

  document.observe("dom:loaded", function()
  {
    forEach.call(document.getElementsByTagName("a"), replaceLinks);
    forEach.call(document.getElementsByTagName("img"), replaceLinks);
  });
}
)();