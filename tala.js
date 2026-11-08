/* Tap-along tala demo for SvaraScience.
   Adi tala has 8 beats. Each tap moves to the next beat and locks
   three digits of Pi onto it (groups of 3, like Thisra Gathi).
   Runs only on pages that have an element with id="tala-dial". */
(function () {
  var dial = document.getElementById('tala-dial');
  if (!dial) return;

  var CHUNKS = ['314', '159', '265', '358', '979', '323', '846', '264'];
  var NS = 'http://www.w3.org/2000/svg';
  var C = 170, R_DOT = 115, R_TEXT = 152;   // circle centre and radii (in a 340 x 340 box)

  var big = document.getElementById('tala-big');
  var small = document.getElementById('tala-small');
  var trail = document.getElementById('tala-trail');
  var hideBtn = document.getElementById('tala-hide');

  var beat = -1, cycles = 0, hidden = false;
  var beats = [];

  var svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 340 340');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Adi tala circle with 8 beats');
  var ring = document.createElementNS(NS, 'circle');
  ring.setAttribute('class', 'tala-ring');
  ring.setAttribute('cx', C); ring.setAttribute('cy', C); ring.setAttribute('r', R_DOT);
  svg.appendChild(ring);

  CHUNKS.forEach(function (digits, i) {
    var a = (-90 + i * 45) * Math.PI / 180;
    var g = document.createElementNS(NS, 'g');
    var dot = document.createElementNS(NS, 'circle');
    dot.setAttribute('cx', C + R_DOT * Math.cos(a));
    dot.setAttribute('cy', C + R_DOT * Math.sin(a));
    var label = document.createElementNS(NS, 'text');
    label.setAttribute('x', C + R_TEXT * Math.cos(a));
    label.setAttribute('y', C + R_TEXT * Math.sin(a));
    label.textContent = digits;
    g.appendChild(dot); g.appendChild(label); svg.appendChild(g);
    beats.push({ g: g, dot: dot, label: label });
  });
  dial.insertBefore(svg, dial.firstChild);

  function draw() {
    beats.forEach(function (b, i) {
      var seen = cycles > 0 || i <= beat;
      var cls = 'tala-beat';
      if (i === 0) cls += ' is-sam';
      if (seen) cls += ' is-seen';
      if (i === beat) cls += ' is-on';
      b.g.setAttribute('class', cls);
      b.dot.setAttribute('r', i === beat ? 15 : (i === 0 ? 11 : 8));
      b.label.style.opacity = (seen && !hidden) ? 1 : 0;
    });
    if (beat < 0) {
      big.textContent = 'Ready';
      small.textContent = 'Tap to start';
    } else {
      big.textContent = hidden ? '• • •' : CHUNKS[beat];
      small.textContent = (beat === 0 ? 'Sam, beat 1' : 'Beat ' + (beat + 1)) + ' of 8';
    }
    var count = cycles > 0 ? CHUNKS.length : beat + 1;
    if (hidden) trail.textContent = 'Digits hidden. Say them with the beat.';
    else trail.textContent = count > 0 ? '3.' + CHUNKS.slice(0, count).join(' ').slice(1) : '';
  }

  document.getElementById('tala-tap').addEventListener('click', function () {
    if (beat === 7) cycles++;
    beat = (beat + 1) % 8;
    draw();
  });
  hideBtn.addEventListener('click', function () {
    hidden = !hidden;
    hideBtn.setAttribute('aria-pressed', String(hidden));
    hideBtn.textContent = hidden ? 'Show digits' : 'Hide digits';
    draw();
  });
  document.getElementById('tala-reset').addEventListener('click', function () {
    beat = -1; cycles = 0; hidden = false;
    hideBtn.setAttribute('aria-pressed', 'false');
    hideBtn.textContent = 'Hide digits';
    draw();
  });
  draw();
})();
