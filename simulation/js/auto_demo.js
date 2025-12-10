// AUTO-DEMO PATCH: Full automatic demo for AND gate
// Save this file as auto_demo.js and include it AFTER your existing script.js in the HTML.
// It will auto-fill the observation table, set weights/biases and switch to ANALYZE automatically.

(function() {
  // Toggle this to true/false to enable/disable auto demo
  const demoMode = true;
  if (!demoMode) return;

  // Predefined AND demo dataset (S.No, x1, x2, t, yin, y, dw1, dw2, db, w1, w2, b)
  const demoDataAND = [
    { x1: -1, x2: -1, t: -1, yin: -1.01, y: -1, w1: 0.35, w2: 0.68, b: 0.67 },
    { x1: -1, x2:  1, t: -1, yin: -0.21, y: -1, w1: 0.35, w2: 0.68, b: 0.67 },
    { x1:  1, x2: -1, t: -1, yin: -0.32, y: -1, w1: 0.75, w2: 0.68, b: 0.67 },
    { x1:  1, x2:  1, t:  1, yin:  0.43, y:  1, w1: 0.75, w2: 0.68, b: 1.67 }
  ];

  // Wait until page and original script have initialized
  function waitForReady(cb, timeout=5000) {
    const start = Date.now();
    (function check(){
      if (document.getElementById('myTable') && typeof Swal !== 'undefined') {
        cb();
      } else if (Date.now() - start < timeout) {
        setTimeout(check, 100);
      } else {
        console.warn("Auto-demo: page not ready within timeout.");
      }
    })();
  }

  function runAutoDemo() {
    const table = document.getElementById('myTable');
    if (!table) {
      console.error("Auto-demo: myTable not found.");
      return;
    }

    // Clear existing rows (keep header)
    while (table.rows.length > 1) table.deleteRow(1);

    // Insert demo rows
    demoDataAND.forEach((row, i) => {
      const tr = table.insertRow(-1);
      tr.insertCell(0).innerHTML = i + 1;
      tr.insertCell(1).innerHTML = row.x1;
      tr.insertCell(2).innerHTML = row.x2;
      tr.insertCell(3).innerHTML = row.t;
      tr.insertCell(4).innerHTML = row.yin;
      tr.insertCell(5).innerHTML = row.y;
      tr.insertCell(6).innerHTML = 0; // dw1
      tr.insertCell(7).innerHTML = 0; // dw2
      tr.insertCell(8).innerHTML = 0; // db
      tr.insertCell(9).innerHTML = row.w1;
      tr.insertCell(10).innerHTML = row.w2;
      tr.insertCell(11).innerHTML = row.b;
    });

    // Set UI controls (if present)
    const w1Input = document.getElementById('weight-one');
    const w2Input = document.getElementById('weight-two');
    const bInput = document.getElementById('bias');
    if (w1Input) w1Input.value = demoDataAND[0].w1;
    if (w2Input) w2Input.value = demoDataAND[0].w2;
    if (bInput)  bInput.value  = demoDataAND[0].b;

    // Disable interactive controls to make it purely demo
    const elemsToDisable = ['submit','generateWeight','activation','check','update','graph'];
    elemsToDisable.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.disabled = true;
    });

    // Set header & analyze-ready
    const networkHeader = document.getElementById('network-header');
    if (networkHeader) networkHeader.innerText = 'AND NETWORK (Auto Demo)';

    // Plot & switch to analyze tab if plot function exists
    const analyzeTab = document.getElementById('analyze');
    if (analyzeTab) {
      // visually enable analyze tab then click it (simulate user)
      analyzeTab.style.cursor = "pointer";
      analyzeTab.click();
    }

    // If Plotly exists, re-run the existing plotting code by triggering the plot button if present
    const plotBtn = document.querySelector('.plot-btn');
    if (plotBtn) {
      plotBtn.click();
    }

    // Show a success popup
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        icon: 'success',
        title: 'Full Auto Demo Ready',
        html: 'The AND gate demo has been auto-loaded and the Analyze tab has been opened.',
        confirmButtonText: 'OK'
      });
    } else {
      alert('Full Auto Demo Ready - Please open ANALYZE tab.');
    }
  }

  waitForReady(runAutoDemo, 8000);
})();
