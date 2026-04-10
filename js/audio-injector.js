(function() {
  var allData = {};

  if (window._AUDIO_DATA_VOCAB) Object.assign(allData, window._AUDIO_DATA_VOCAB);
  if (window._AUDIO_DATA_VERBES) Object.assign(allData, window._AUDIO_DATA_VERBES);

  // Inject into global maps
  ['AUDIO_MAP','MP3_MAP','audioMap','mp3Map'].forEach(function(n) {
    if (!window[n]) window[n] = {};
    if (typeof window[n] === 'object') {
      Object.keys(allData).forEach(function(k) {
        if (allData[k].indexOf('data:') === 0) window[n][k] = allData[k];
      });
    }
  });

  function lu(src) {
    if (!src || typeof src !== 'string') return null;
    var b = '';
    try { b = decodeURIComponent(src); } catch(e) { b = src; }
    b = b.replace(/\?.*$/, '').replace(/.*[\/]/, '').replace(/\.[^.]+$/, '');
    if (!b) return null;
    var k = b.toLowerCase().replace(/_/g, ' ');
    return allData[b] || allData[b.toLowerCase()] || allData[b.replace(/_/g, ' ')] || allData[k] || null;
  }

  // Intercept new Audio(src)
  var OrigAudio = window.Audio;
  window.Audio = function(src) {
    var d = lu(src);
    var inst = d ? new OrigAudio(d) : (src !== undefined ? new OrigAudio(src) : new OrigAudio());
    return inst;
  };
  window.Audio.prototype = OrigAudio.prototype;

  // Intercept <audio>.src = "..."
  var srcProp = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'src');
  if (srcProp && srcProp.set) {
    var origSet = srcProp.set;
    Object.defineProperty(HTMLMediaElement.prototype, 'src', {
      set: function(v) {
        var d = lu(v);
        origSet.call(this, d || v);
      },
      get: srcProp.get,
      configurable: true
    });
  }
})();
