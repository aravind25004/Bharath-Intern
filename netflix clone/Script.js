const navigation = document.getElementById('navigation');

window.addEventListener('scroll',()=>
{
	if(window.scrollY >=100)
	{
		navigation.classList.add('nav_black');
	}
	else
	{
		navigation.classList.remove('nav_black')
	}
});