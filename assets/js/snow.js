// Simple snow effect for HTML5 UP Editorial

(function () {
  const MAX_SNOWFLAKES = 80;      // Limit for performance
  const SPAWN_INTERVAL = 250;     // ms between flakes

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Use a snowflake character (you can add more and pick randomly)
    const chars = ['❄', '❅', '❆'];
    snowflake.textContent = chars[Math.floor(Math.random() * chars.length)];

    // Random horizontal position
    snowflake.style.left = Math.random() * 100 + 'vw';

    // Random size
    const size = 8 + Math.random() * 18; // 8px – 26px
    snowflake.style.fontSize = size + 'px';

    // Random duration & delay
    const duration = 6 + Math.random() * 8; // 6s – 14s
    const delay = Math.random() * 5;        // 0s – 5s
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.animationDelay = delay + 's';

    // Slight horizontal drift
    const drift = (Math.random() - 0.5) * 40; // -20vw – +20vw
    snowflake.style.setProperty('--drift', drift + 'vw');

    document.body.appendChild(snowflake);

    // Remove from DOM after it finishes (duration + delay + a small buffer)
    const totalLife = (duration + delay + 1) * 1000;
    setTimeout(() => {
      snowflake.remove();
    }, totalLife);
  }

  function startSnow() {
    let currentCount = 0;

    setInterval(() => {
      if (currentCount >= MAX_SNOWFLAKES) return;
      createSnowflake();
      currentCount++;
    }, SPAWN_INTERVAL);
  }

  // Wait until the page is ready (HTML5 UP uses window load)
  window.addEventListener('load', startSnow);
})();
