document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').textContent = 'Convert';

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const camelCase =
      first + second.replace(second[0], second[0].toUpperCase());

    console.log(`${camelCase.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
//dữ liệu test
// underscore_case 
// first_name 
// Some_Variable  
// calculate_AGE 
// delayed_departure 
