const path = 'src/img/cartas-agrofloresta/'

const arvores = [{
    id: 1,
    nome: 'Açoita-Cavalo-Miúdo',
    card: path +'açoita-cavalo-miudo.png',
    imgReal: ''
}, {
    id: 2,
    nome: 'Andiroba',
    card: path + 'andiroba.png',
    imgReal: ''
},{
    id: 3,
    nome: 'Angico-Branco',
    card: path + 'angico-branco' + '.png',
    imgReal: ''
},{
    id: 4,
    nome: 'Araucária',
    card: path + 'araucaria' + '.png',
    imgReal: ''
},
{
    id: 5,
    nome: 'Babosa-Branca',
    card: path + 'babosa-branca' + '.png',
    imgReal: ''
},{
    id: 6,
    nome: 'Cambuca',
    card: path + 'cambuca' + '.png',
    imgReal: ''
},{
    id: 7,
    nome: 'Canela-Louro',
    card: path + 'canela-louro' + '.png',
    imgReal: ''
},{
    id: 8,
    nome: 'Cerejeira',
    card: path + 'cerejeira' + '.png',
    imgReal: ''
},{
    id: 9,
    nome: 'Garapeira',
    card: path + 'garapeira' + '.png',
    imgReal: ''
},{
    id: 10,
    nome: 'Grumixama',
    card: path + 'grumixama' + '.png',
    imgReal: ''
},{
    id: 11,
    nome: 'Guabiroba',
    card: path + 'guabiroba' + '.png',
    imgReal: ''
},{
    id: 12,
    nome: 'Imbuia',
    card: path + 'imbuia' + '.png',
    imgReal: ''
},{
    id: 13,
    nome: 'Ipê-Amarelo',
    card: path + 'ipe-amarelo' + '.png',
    imgReal: ''
},{
    id: 14,
    nome: 'Ipê-Branco',
    card: path + 'ipe-branco' + '.png',
    imgReal: ''
},{
    id: 15,
    nome: 'Jacarandá-de-Minas',
    card: path + 'jacaranda-de-minas' + '.png',
    imgReal: ''
},{
    id: 16,
    nome: 'Jacaranda-Paulista',
    card: path + 'jacaranda-paulista' + '.png',
    imgReal: ''
},{
    id: 17,
    nome: 'Manacá-da-Serra',
    card: path + 'manaca-da-serra' + '.png',
    imgReal: ''
},{
    id: 18,
    nome: 'Pau-Amarelo',
    card: path + 'pau-amarelo' + '.png',
    imgReal: ''
},{
    id: 19,
    nome: 'Pau-Brasil',
    card: path + 'pau-brasil' + '.png',
    imgReal: ''
},{
    id: 20,
    nome: 'Quaresmeira',
    card: path + 'quaresmeira' + '.png',
    imgReal: ''
},{
    id: 21,
    nome: 'Sapuva',
    card: path + 'sapuva' + '.png',
    imgReal: ''
},{
    id: 22,
    nome: 'Sibipiruna',
    card: path + 'sibipiruna' + '.png',
    imgReal: ''
},
]

const body = document.getElementById('cartas')
const input = document.getElementById('search')

input.addEventListener("input", ()=>{
    for (let j = 0; j < body.childElementCount; j++) {
        body.firstChild.remove()
        
    }


    const container = document.createElement('div')
    container.className = "container"
    let arvoresSelecionadas = arvores.filter(a => a.nome.toLowerCase().startsWith(input.value.toLocaleLowerCase()) )

    if(input.value === '') return
    for (let i = 0; i < arvoresSelecionadas.length; i++) {
        
        const imgCard = document.createElement('img')
        imgCard.src = arvoresSelecionadas[i].card
        imgCard.className = 'img-thumbnail'
        imgCard.alt = `${arvoresSelecionadas[i].nome.toLocaleLowerCase()}`
        imgCard.width = '200'
        container.append(imgCard)

    }
    body.append(container)
})

