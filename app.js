const path = 'src/img/cartas-agrofloresta/'
const pathArvoreReal = 'src/img/arvores-agrofloresta/'

const body = document.getElementById('cartas')
const input = document.getElementById('search')
const modalTitle = document.getElementById('modalTitleId')


input.addEventListener("input", () => {
    for (let j = 0; j < body.childElementCount; j++) {
        body.firstChild.remove()
    }

    const container = document.createElement('div')
    container.className = "container"
    let arvoresSelecionadas = arvores.filter(a => a.nome.toLowerCase().includes(input.value.toLocaleLowerCase()))

    if (input.value === '') return
    for (let i = 0; i < arvoresSelecionadas.length; i++) {
        const imgCard = document.createElement('img')
        const imgCardReal = document.createElement('img')

        imgCard.src = arvoresSelecionadas[i].card
        imgCard.className = 'object-fit-contains m-2'
        imgCard.alt = `${arvoresSelecionadas[i].nome.toLocaleLowerCase()}`
        imgCard.height = '640'
        imgCard.width = '500'
        container.append(imgCard)

        if (arvoresSelecionadas[i].imgReal === '') continue
        imgCardReal.src = arvoresSelecionadas[i].imgReal
        imgCardReal.className = 'object-fit-cover m-2'
        imgCardReal.alt = `${arvoresSelecionadas[i].nome.toLocaleLowerCase()}`
        imgCardReal.height = '640'
        imgCardReal.width = '500'
        container.append(imgCardReal)

    }
    body.append(container)
})


const arvores = [{
    id: 1,
    nome: 'Açoita-Cavalo-Miúdo',
    card: path + 'açoita-cavalo-miudo.png',
    imgReal: pathArvoreReal + 'açoita-cavalo-miudo.jpg'
}, {
    id: 2,
    nome: 'Andiroba',
    card: path + 'andiroba.png',
    imgReal: pathArvoreReal + 'andiroba.jpg'
}, {
    id: 3,
    nome: 'Angico-Branco',
    card: path + 'angico-branco' + '.png',
    imgReal: pathArvoreReal + 'angico_branco.jpg'
}, {
    id: 4,
    nome: 'Araucária',
    card: path + 'araucaria' + '.png',
    imgReal: pathArvoreReal + 'araucária.jpg'
},
{
    id: 5,
    nome: 'Babosa-Branca',
    card: path + 'babosa-branca' + '.png',
    imgReal: pathArvoreReal + 'babosa-branca.jpg'
}, {
    id: 6,
    nome: 'Cambucá',
    card: path + 'cambuca' + '.png',
    imgReal: pathArvoreReal + 'cambucá.png'
}, {
    id: 7,
    nome: 'Canela-Louro',
    card: path + 'canela-louro' + '.png',
    imgReal: pathArvoreReal + 'canela-louro.jpg'
}, {
    id: 8,
    nome: 'Cerejeira',
    card: path + 'cerejeira' + '.png',
    imgReal: pathArvoreReal + 'amburana_cearensis.jpg'
}, {
    id: 9,
    nome: 'Garapeira',
    card: path + 'garapeira' + '.png',
    imgReal: pathArvoreReal + 'garapeira.jpg'
}, {
    id: 10,
    nome: 'Grumixama',
    card: path + 'grumixama' + '.png',
    imgReal: pathArvoreReal + 'grumixama.jpg'
}, {
    id: 11,
    nome: 'Guabiroba',
    card: path + 'guabiroba' + '.png',
    imgReal: pathArvoreReal + 'guabiroba.jpg'
}, {
    id: 12,
    nome: 'Imbuia',
    card: path + 'imbuia' + '.png',
    imgReal: pathArvoreReal + 'imbuia.jpg'
}, {
    id: 13,
    nome: 'Ipê-Amarelo',
    card: path + 'ipe-amarelo' + '.png',
    imgReal: pathArvoreReal + 'ipê-amarelo.jpg'
}, {
    id: 14,
    nome: 'Ipê-Branco',
    card: path + 'ipe-branco' + '.png',
    imgReal: pathArvoreReal + 'ipê-branco.jpg'
}, {
    id: 15,
    nome: 'Jacarandá-de-Minas',
    card: path + 'jacaranda-de-minas' + '.png',
    imgReal: pathArvoreReal + 'jacaranda-de-minas.png'
}, {
    id: 16,
    nome: 'Jacarandá-Paulista Jacaranda-Paulista',
    card: path + 'jacaranda-paulista' + '.png',
    imgReal: pathArvoreReal + 'jacaranda-paulista.jpg'
}, {
    id: 17,
    nome: 'Manacá-da-Serra Manaca da Serra Manacá da Serra',
    card: path + 'manaca-da-serra' + '.png',
    imgReal: pathArvoreReal + 'manaca-da-serra.png'
}, {
    id: 18,
    nome: 'Pau-Amarelo pau amarelo',
    card: path + 'pau-amarelo' + '.png',
    imgReal: pathArvoreReal + 'pau-amarelo.jpg'
}, {
    id: 19,
    nome: 'Pau-Brasil pau brasil',
    card: path + 'pau-brasil' + '.png',
    imgReal: pathArvoreReal + 'pau-brasil.jpg'
}, {
    id: 20,
    nome: 'Quaresmeira',
    card: path + 'quaresmeira' + '.png',
    imgReal: pathArvoreReal + 'quaresmeira.jpg'
}, {
    id: 21,
    nome: 'Sapuva',
    card: path + 'sapuva' + '.png',
    imgReal: pathArvoreReal + 'sapuva.jpg'
}, {
    id: 22,
    nome: 'Sibipiruna',
    card: path + 'sibipiruna' + '.png',
    imgReal: pathArvoreReal + 'sibipiruna.jpg'
},
]

