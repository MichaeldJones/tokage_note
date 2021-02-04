var url;
var note;

document.getElementById("uniButton").onclick = function()
{
	note = document.getElementById("universal").value;

	if(!note)
	{
		return;
	}

	chrome.storage.sync.set({'universal': note});
}

document.getElementById("locButton").onclick = function()
{
	note = document.getElementById("local").value;

	if(!note)
	{
		return;
	}

	chrome.storage.sync.set({[url]: note});
}

chrome.tabs.query({active: true, currentWindow: true}, tabs => {

	url = tabs[0].url.split("/")[2];
});

chrome.storage.sync.get(function(saved) {

	note = saved.universal;

	if(!note)
	{
		return;
	}

	document.getElementById("universal").defaultValue = note;
});

chrome.storage.sync.get(function(saved) {

	note = saved[url];

	if(!note)
	{
		return;
	}

	document.getElementById("local").defaultValue = note;
});
