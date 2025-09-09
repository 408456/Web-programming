document.getElementById('bt').addEventListener('click', function () {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  const n3 = parseFloat(document.getElementById('n3').value);
  const n4 = parseFloat(document.getElementById('n4').value);
  const n5 = parseFloat(document.getElementById('n5').value);
  const n6 = parseFloat(document.getElementById('n6').value);

  const D = n1 * n5 - n2 * n4;

  if (D !== 0) {
    const x = (n3 * n5 - n2 * n6) / D;
    const y = (n1 * n6 - n3 * n4) / D;
    document.getElementById('result1').value = x;
    document.getElementById('result2').value = y;
  } else {
    document.getElementById('result1').value = 'Нет решения';
    document.getElementById('result2').value = 'Нет решения';
  }
});
