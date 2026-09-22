// A convenience screen only; this does not secure publicly hosted files.
(() => {
  const expected = 'e2e7d3d809e7a12b8f08bd7d328f04e31698ead8a4e7ed4b4e7409c57f1afe0a';
  const storageKey = 'portfolio-access';
  try { if (sessionStorage.getItem(storageKey) === expected) return; } catch {}
  document.documentElement.classList.add('password-locked');

  document.addEventListener('DOMContentLoaded', () => {
    const gate = document.createElement('section');
    gate.id = 'password-gate';
    gate.setAttribute('role', 'dialog');
    gate.setAttribute('aria-modal', 'true');
    gate.setAttribute('aria-labelledby', 'password-label');
    gate.innerHTML = `<form><label id="password-label" for="portfolio-password">Password</label>
      <input id="portfolio-password" type="password" autocomplete="current-password" required aria-describedby="password-error">
      <button type="submit">Enter</button><p id="password-error" role="status"></p></form>`;
    const hiddenElements = [...document.body.children];
    const previousInert = hiddenElements.map(el => el.inert);
    hiddenElements.forEach(el => { el.inert = true; });
    document.body.append(gate);
    const input = gate.querySelector('input');
    const button = gate.querySelector('button');
    const error = gate.querySelector('p');
    input.focus();
    gate.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      if (event.shiftKey && document.activeElement === input) {
        event.preventDefault(); button.focus();
      } else if (!event.shiftKey && document.activeElement === button) {
        event.preventDefault(); input.focus();
      }
    });
    gate.querySelector('form').addEventListener('submit', async event => {
      event.preventDefault();
      const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input.value));
      const actual = [...new Uint8Array(bytes)].map(byte => byte.toString(16).padStart(2, '0')).join('');
      if (actual !== expected) {
        input.setAttribute('aria-invalid', 'true');
        error.textContent = 'Incorrect password';
        input.focus(); input.select();
        return;
      }
      try { sessionStorage.setItem(storageKey, expected); } catch {}
      hiddenElements.forEach((el, index) => { el.inert = previousInert[index]; });
      document.documentElement.classList.remove('password-locked');
      gate.remove();
      document.querySelector('a, button, input')?.focus({preventScroll: true});
    });
  });
})();
