(() => {
  const search = document.getElementById('retreat-search');
  if (!search) return;
  const region = document.getElementById('retreat-region');
  const country = document.getElementById('retreat-country');
  const state = document.getElementById('retreat-state');
  const cards = [...document.querySelectorAll('.retreat-item')];
  const groups = [...document.querySelectorAll('.retreat-group')];
  const count = document.getElementById('retreat-count');
  const empty = document.getElementById('retreat-empty');
  const params = new URLSearchParams(location.search);
  if ([...region.options].some(o => o.value === params.get('region'))) region.value = params.get('region');
  function update() {
    const words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const card of cards) {
      const tags = card.dataset.tags.split(' ');
      const matches = (region.value === 'all' || tags.includes(region.value)) && (country.value === 'all' || tags.includes(country.value)) && (state.value === 'all' || tags.includes(state.value)) && words.every(w => card.dataset.search.includes(w));
      card.hidden = !matches;
      if (matches) shown++;
    }
    for (const group of groups) group.hidden = !group.querySelector('.retreat-item:not([hidden])');
    count.textContent = `Showing ${shown} retreat center${shown === 1 ? '' : 's'}`;
    empty.hidden = shown !== 0;
  }
  for (const el of [search, region, country, state]) el.addEventListener(el === search ? 'input' : 'change', update);
  document.getElementById('retreat-reset').addEventListener('click', () => { search.value = ''; region.value = 'all'; country.value = 'all'; state.value = 'all'; history.replaceState(null, '', location.pathname); update(); search.focus(); });
  update();
})();
