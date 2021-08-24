const ecommerceData =[
    {
        category:'Ropa y conjuntos',
        items: [
            {
                id:1,
                name: 'Camisa cuello chino',
                price: 96.50,
                src: 'src/pictures/camisa-cuello-chino.jpg',
                description: "Bebida gaseosa fabricado por 'The Coca Cola Company'",
                colors:['rgb(55, 63, 54)'],
                discount: [true, '%20']
            },
            {
                id:2,
                name: 'Camisa BH moda',
                price: 30,
                src: 'src/pictures/camisa-bh-moda.jpg',
                description: "Bebida gaseosa fabricado por 'The Coca Cola Company'",
                colors:['rgb(47, 93, 153)'],
                discount: [true, '%20']
            },
            {
                id:3,
                name: 'Conjunto multiple Moda',
                price: 70,
                src: 'src/pictures/conjunto2.jpg',
                description: "Bebida gaseosa fabricado por 'The Coca Cola Company'",
                colors:['black','rgb(251, 255, 199)'],
                discount: [false, '%50']
            },
            {
                id:4,
                name: 'Blusa Robalino & Robalino',
                price: 36,
                src: 'src/pictures/blusa-robalino.jpg',
                description: "Bebida gaseosa fabricado por 'The Coca Cola Company'",
                colors:['rgb(55, 216, 203)'],
                discount: [true, '%40']
            },
            {
                id:5,
                name: 'Blusa Beyonce',
                price: 31,
                src: 'src/pictures/blusa-beyonce.jpg',
                description: "Bebida gaseosa fabricado por 'The Coca Cola Company'",
                colors:['rgb(244, 245, 245)'],
                discount: [false, '%40']
            }
        ]
    },
    {
        category:'Accesorios',
        items: [
            {
                id:6,
                name: 'Gafas playeras',
                price: 5.00,
                src: 'src/pictures/gafas.jpg',
                description: "Bebida alcoholica con 40 grados de alcohol",
                colors:['rgb(228, 56, 56)'],
                discount: [false, '%50']
            },
            {
                id:7,
                name: 'Pendientes de aro & cruz',
                price: 5.50,
                src:'src/pictures/pendientes-aro.jpg',
                description: "Bebida alcoholica con 25 grados de alcohol",
                colors:['rgb(231, 231, 231)'],
                discount: [true, '%30']
            },
            {
                id:8,
                name: 'Aretes de Dinosaurio',
                price: 4.50,
                src:'src/pictures/arete-dinosaurio.jpg',
                description: "Bebida alcoholica con 40 grados de alcohol",
                colors:['rgb(231, 231, 231)'],
                discount: [false, '%50']
            },
            {
                id:9,
                name: 'Cartera Pantera Negra',
                price: 40,
                src:'src/pictures/cartera-pantera-negra.jpg',
                description: "Bebida alcoholica con 5 grados de alcohol",
                colors:['black'],
                discount: [false, '%50']
            }
        ]
    },
    {
        category:'Zapatos',
        items: [
            {
                id:10,
                name: 'Zapatos Puma',
                price: 120,
                src: 'src/pictures/zapatos-puma.jpg',
                description: "Cereal crocante de 500 gramos",
                colors:['#f7f7f7'],
                discount: [true, '%5']
            },
            {
                id:11,
                name: 'Zapatos Air Jordan',
                price: 90,
                src:'src/pictures/zapatos-air-jordan.jpg',
                description: "Paquete de de avena entera de 1kg",
                colors:['#000','#f7f7f7'],
                discount: [false, '%50']
            },{
                id:12,
                name: 'Zapatos Ferrari',
                price: 112,
                src:'src/pictures/zapatos-ferrari.jpg',
                description: "Arroz flor integral, funda de 1kg",
                colors:['#000'],
                discount: [true, '%50']
            }
        ]
    },
];


let root = document.querySelector('.container');
createSections();

function createSections(){
    ecommerceData.forEach(({category,items}) => {
        let section = document.createElement('div');
        section.classList.add('section');
        let sectionTitle = document.createElement('div');
        sectionTitle.classList.add('section-title');
        sectionTitle.innerHTML = category;
        let sectionCards = document.createElement('div');
        sectionCards.classList.add('cards');

        items.forEach(({name,price,src, colors, discount}) =>{
            let card = document.createElement('div');
            card.classList.add('card');
            let cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header');
            let cardHeaderImage = document.createElement('img');
            cardHeaderImage.classList.add('card-img');
            cardHeaderImage.setAttribute('alt',name);
            cardHeaderImage.setAttribute('src',src);

            cardHeader.append(cardHeaderImage);

            if(discount[0]){
                let cardHeaderStock = document.createElement('div');
                cardHeaderStock.classList.add('card-stock');
                cardHeaderStock.innerHTML = `<div class="">${discount[1]}</div>
                                             <div class="card-stock-percent">Desc.</div>`
                cardHeader.append(cardHeaderStock);
            }
                                    
            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            //Add card title
            let cardTitle = document.createElement('div');
            cardTitle.classList.add('card-title');
            cardTitle.innerHTML = name;
            cardBody.append(cardTitle);

            //Add card info
            let cardInfo =  document.createElement('div');
            cardInfo.classList.add('card-info');

            let cardColors = document.createElement('div');
            cardColors.classList.add('card-colors');

            let cardColorsTitle = document.createElement('div');
            cardColorsTitle.classList.add('card-colors-title');
            cardColorsTitle.innerHTML = 'Color:'
            let cardColorsBlock = document.createElement('div');
            cardColorsBlock.classList.add('card-colors-block');

            cardColors.append(cardColorsTitle);

            colors.forEach(color =>{
                let cardColor = document.createElement('div');
                cardColor.classList.add('card-color');
                cardColor.style.background = color;
                cardColorsBlock.append(cardColor);
            })

            cardColors.append(cardColorsBlock);
            cardInfo.append(cardColors);

            //add card size
            let cardSizes = document.createElement('div');
            cardSizes.classList.add('card-sizes');
            let cardSizeTitle = document.createElement('div');
            cardSizeTitle.classList.add('card-size-title');
            cardSizeTitle.innerHTML = 'Talla:';

            cardSizes.append(cardSizeTitle);

            let cardSizeBlock = document.createElement('div');
            cardSizeBlock.classList.add('card-size-block');
            cardSizeBlock.innerHTML = `<div class="card-size">S</div>
                                        <div class="card-size">M</div>
                                        <div class="card-size">L</div>`
            
            cardSizes.append(cardSizeBlock);
            cardInfo.append(cardSizes);
            cardBody.append(cardInfo);

            let cardBlock = document.createElement('div');
            cardBlock.classList.add('card-block');
            cardBlock.innerHTML = `<div class="card-price">$${price.toFixed(2)}</div>
                                    <div class="card-btn">Comprar</div>`
            
            cardBody.append(cardBlock);                     
            card.append(cardHeader);
            card.append(cardBody);
            sectionCards.append(card);
            
        })
        section.append(sectionTitle);
        section.append(sectionCards);
        root.append(section);
    })

}
