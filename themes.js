(() => {
  const palettes = [
    ['#f5f9f1','#dbf1d0','#9737f1','#a82e73','#082110'],
    ['#ecd4df','#e6ceb7','#9737f1','#a82e73','#220f24']
  ];
  function luminance(hex) {
    const channels = [1,3,5].map(i => parseInt(hex.slice(i,i+2),16)/255)
      .map(c => c <= 0.04045 ? c/12.92 : ((c+0.055)/1.055)**2.4);
    return channels.reduce((sum,c,i) => sum+c*[0.2126,0.7152,0.0722][i],0);
  }
  function contrast(a,b) {
    const values = [luminance(a),luminance(b)].sort((x,y)=>x-y);
    return (values[1]+0.05)/(values[0]+0.05);
  }
  function foreground(background,palette) {
    const best = [...palette].sort((a,b)=>contrast(b,background)-contrast(a,background))[0];
    if (contrast(best,background)>=4.5) return best;
    return ['#1d1523','#f5f9f1'].sort((a,b)=>contrast(b,background)-contrast(a,background))[0];
  }
  function apply(index) {
    document.documentElement.dataset.theme = String(index === 0 ? 1 : 12);
    const p = palettes[index];
    const [paper,surface,primary,secondary,preferredInk] = p;
    const ink = contrast(preferredInk,paper)>=4.5 ? preferredInk : foreground(paper,p);
    // Keep accent text readable on both the page and inset surfaces.
    const textAccent = [secondary,primary,ink].find(c => contrast(c,paper)>=4.5 && contrast(c,surface)>=4.5) || ink;
    const primaryBackground = contrast(foreground(primary,p),primary)>=4.5 ? primary : secondary;
    const line = `rgba(${[1,3,5].map(i=>parseInt(ink.slice(i,i+2),16)).join(',')},.3)`;
    const vars = {'on-surface':foreground(surface,p),'surface-accent':contrast(textAccent,surface)>=4.5 ? textAccent : foreground(surface,p),paper,surface,ink,muted:ink,rust:textAccent,violet:primary,acid:surface,blue:surface,line,
      secondary,'primary-background':primaryBackground,'on-primary':foreground(primaryBackground,p),'on-secondary':foreground(secondary,p),
      headline:contrast(secondary,paper)>=3 ? secondary : textAccent};
    Object.entries(vars).forEach(([name,value])=>document.documentElement.style.setProperty('--'+name,value));
  }
  // Choose between the two favorites on each page load.
  const favorites = [0, 1];
  apply(favorites[Math.floor(Math.random() * favorites.length)]);
})();
