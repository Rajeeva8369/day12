async function my_fetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
my_fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528');
