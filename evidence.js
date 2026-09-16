// Presentation-only additions: original project records remain in script.js.
projects.drum.tools = 'JavaScript, Web Audio, Web MIDI, Vite';
projects.drum.status = 'Playable browser prototype';
projects.cricket.artifact = 'Two innings, twelve deliveries, wickets, ball flight, fielders, and super-over logic. Solo prototype; no multiplayer or saved progress.';
projects.omakasea.role = 'Community Manager → Chief Operating Officer';
projects.oct7.tools = 'WordPress, Mailchimp, Canva, technical support';
const evidence = {
  drone: [['Read the case study', 'samples/drone-fields/case-study.html'], ['Watch the 24-second demo', 'samples/drone-fields/demo.mp4']],
  hymnal: [['Watch the 15-second performance', 'samples/hymnal-engine/demo.mp4'], ['View the independent output', 'samples/hymnal-engine/output.png']],
  omakasea: [['Workshop deck · 2022', 'samples/nft-workshop-2022.pdf'], ['PokeGAN / Geomint', 'samples/pokegan/case-study.html'], ['Writing, design + production', 'supporting-work.html']],
  crypto: [['ETH Gobblers technical documentation', 'samples/eth-gobblers-documentation.pdf'], ['PokeGAN / Geomint', 'samples/pokegan/case-study.html']],
  pokegan: [['Read the case study', 'samples/pokegan/case-study.html'], ['Gameplay excerpt · archived recording', 'samples/pokegan/gameplay.mp4']],
  drum: [['Play the instrument', 'samples/drum-machine/index.html']],
  oct7: [['Newsletter sample', 'newsletter.html']]
};
const previews = {drone:'samples/drone-fields/local.png',hymnal:'samples/hymnal-engine/hero.png',omakasea:'samples/nft-workshop.png',crypto:'samples/eth-gobblers.png'};
previews.pokegan = 'samples/pokegan/world.png';
const links = document.createElement('div');
previews.obs = 'samples/obs-toolkit/dashboard.png';
previews['obs-dashboard'] = previews.obs;
links.className = 'sample-links';
fields.source.before(links);
document.querySelectorAll('button[data-project]').forEach(button => button.addEventListener('click', () => {
  const key = button.dataset.project;
  fields.media.replaceChildren();
  if(previews[key]) {
    const img=document.createElement('img'); img.src=previews[key]; img.alt=projects[key].title+' work sample'; fields.media.append(img);
  }
  links.replaceChildren();
  for(const [label,url] of evidence[key] || []) {
    const a=document.createElement('a'); a.textContent=label+' ↗'; a.href=url; links.append(a);
  }
  fields.source.href='project.html?work='+encodeURIComponent(key);
  fields.source.textContent='Read project details ↗';
}));
// Close only on the actual backdrop, not on empty space inside the dialog.
dialog.addEventListener('click', event => {
  if(event.target!==dialog) return;
  const r=dialog.getBoundingClientRect();
  if(event.clientX>=r.left && event.clientX<=r.right && event.clientY>=r.top && event.clientY<=r.bottom) event.stopImmediatePropagation();
}, true);
