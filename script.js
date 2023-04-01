function Hamburger(x) 
{
    x.classList.toggle("change");
}

function showPage(pageName) 
{
    // Ukryj wszystkie strony
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) 
    {
      pages[i].style.display = 'none';
    }
  
    // Pokaż tylko wybraną stronę
    var page = document.querySelector('#' + pageName);
    if (page) 
    {
      page.style.display = 'block';
    }
}