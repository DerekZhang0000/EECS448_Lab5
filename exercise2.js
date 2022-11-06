index = 0;
const picList = ["https://images.unsplash.com/photo-1666730501852-189f6139d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
		 "https://images.unsplash.com/photo-1656381620321-bddff61435c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
		 "https://images.unsplash.com/photo-1656530320088-7d2c402a1e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
		 "https://images.unsplash.com/photo-1667153831573-dc8ef43816b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
		 "https://images.unsplash.com/photo-1666846366866-35dd42f57b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"]
function previous()
{	
	index -= 1;
	if (index < 0)
	{
		index = 4;
	}
	document.getElementsByName("picture")[0].setAttribute("src", picList[index]);
}

function next()
{
	index += 1;
	if (index > 4)
	{
		index = 0;
	}
	document.getElementsByName("picture")[0].setAttribute("src", picList[index]);
}
