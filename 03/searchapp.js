var daumSearchAPI = 'https://apis.daum.net/search/web?apikey=39561f0a539d9eff4af3f079ecdc460a&q=카카오프렌즈 -네오&output=json';
var listTemplate = $('listTemplate').innerHTML;

getJSON(daumSearchAPI , function(daumSearchData){

  console.log(daumSearchData)
  var html = tmpl(listTemplate, {list: daumSearchData.channel.item});
  $('divSearch').innerHTML = html;

});