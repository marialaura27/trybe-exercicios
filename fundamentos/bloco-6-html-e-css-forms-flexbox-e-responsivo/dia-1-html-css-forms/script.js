const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const estado = document.getElementById('estado');

for (let i = 0; i < estados.length; i += 1) {
    let item = document.createElement('option');
    item.innerHTML = estados[i];
    estado.appendChild(item);
}