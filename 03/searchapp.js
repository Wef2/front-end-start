
var count;
var keyword;
var searchButton = $('searchButton');
var searchInput = $('searchInput');

searchButton.addEventListener('click',showResult);
searchButton.addEventListener('click',showMoreButton);

function showJSON(){
	var daumSearchAPI = 'https://apis.daum.net/search/web?apikey=39561f0a539d9eff4af3f079ecdc460a&q='+keyword+'&output=json&result='+count;
	var listTemplate = $('listTemplate').innerHTML;

	getJSON(daumSearchAPI , function(daumSearchData){
	var str = tmpl(listTemplate, {list: daumSearchData.channel.item});	
	str1 = str.replace(/&lt;/g, "<");
	html = str1.replace(/&gt;/g, ">");

	$('divResult').innerHTML = html;
	});

}

function showResult(){

	count = 10;	
	keyword = searchInput.value;

	showJSON();
}

function showMoreButton(){

	var divMore = $('divMore');
	if (divMore.hasChildNodes()) {
    divMore.removeChild(divMore.childNodes[0]);
	}
	var moreButton = document.createElement('button');
	moreButton.addEventListener("click",showMore);
	moreButton.style.margin = "10px 350px 10px 350px"
	moreButton.style.width = "100px";
	moreButton.style.height = "30px";
	moreButton.innerHTML = "더 보기"

	divMore.appendChild(moreButton);
}

function showMore(){

	count = count + 10;
	showJSON();

}
