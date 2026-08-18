// ==========================================
// CONFIGURAÇÕES DA LOJA (EDITE AQUI)
// ==========================================
const whatsappNumber = "5512988168291";

// Banco de dados de produtos ampliado com os novos campos de controle
const produtos = {
    "sueter-nike-branco": {
        titulo: "Sueter Nike Branco",
        preco: "R$ 39,90",
        precoNum: 39.90,
        categoria: "moda-infantil",
        filtros: ["todos", "nike"],
        descricao: "Suéter infantil Nike branco, uma peça casual e confortável, ideal para compor looks estilosos no dia a dia",
        fotos: [
            "img/produtos/infantis/ef1e8006-197f-43b6-8bd4-61992d77ef66.JPG",
            "img/produtos/infantis/eb38d6b2-05b2-4b70-8fca-b9bd473bf20c.JPG",
            "img/produtos/infantis/20fc2843-d590-4371-be6e-8a872cf04011.JPG",
            "img/produtos/infantis/f436f47d-a220-46c2-8309-2efb821f1f37.JPG"
        ],
        mensagemZap: "Olá! Tenho interesse no sueter Nike branco infantil."
    },

    "conjunto-lacoste-infantil": {
        titulo: "Conjunto Lacoste Preto Listrado Infantil",
        preco: "R$ 99,90",
        precoNum: 99.90,
        categoria: "moda-infantil",
        filtros: ["todos", "lacoste"],
        descricao: "Conjunto infantil Lacoste preto com listras, uma opção confortável e estilosa para os pequenos usarem no dia a dia",
        fotos: [
            "img/produtos/infantis/d6c8bf20-025d-499b-be74-8ece93686c4d.JPG",
            "img/produtos/infantis/fe03ad36-5daa-43c7-af42-afb141fe256f.JPG",
            "img/produtos/infantis/6c7ee5eb-ae25-4c05-bbb2-3c50589c5d89.JPG",
            "img/produtos/infantis/c303cdbd-8c5d-4c70-8911-dc2ef5b28df9.JPG"
        ],
        mensagemZap: "Olá! Tenho interesse no conjunto Lacoste infantil preto."
    },

    "sueter-nike-verde": {
        titulo: "Suete Nike Verde",
        preco: "R$ 39,90",
        precoNum: 39.90,
        categoria: "moda-infantil",
        filtros: ["todos", "nike"],
        descricao: "Suéter infantil Nike verde, com estilo casual e confortável, perfeito para deixar os looks dos pequenos ainda mais modernos",
        fotos: [
            "img/produtos/infantis/3adf64dc-a996-4b17-8cf3-751655a86049.JPG",
            "img/produtos/infantis/2bc26e3f-8264-4ab4-aa43-bedab561806d.JPG",
            "img/produtos/infantis/b879b85e-7648-4c53-a8ad-f2073889c0f7.JPG",
            "img/produtos/infantis/c5243b9c-cc8c-44aa-95c2-4707c94e6cdd.JPG"
        ],
        mensagemZap: "Olá! Tenho interesse no sueter Nike verde infantil."
    },

    "conjunto-moletom-lacoste-infantil": {
        titulo: "Conjunto Moletom Lacoste Preto Infaltil",
        preco: "R$ 99,90",
        precoNum: 99.90,
        categoria: "moda-infantil",
        filtros: ["todos", "lacoste"],
        descricao: "Conjunto de moletom infantil Lacoste preto, confortável e quentinho, ideal para os dias frios com muito estilo",
        fotos: [
            "img/produtos/infantis/3bda7411-ff41-44c6-ad57-ef9acc2b6c6a.JPG",
            "img/produtos/infantis/4f6429a8-83fc-442e-b339-0254b7483daa.JPG",
            "img/produtos/infantis/6be385ca-9ce9-4193-bba4-4bb115a8982d.JPG",
            "img/produtos/infantis/e646f0d5-bc93-4437-906b-f29f9c9d322a.JPG",
            "img/produtos/infantis/f0c35e9a-5070-4de6-ae59-98dcd85b7149.JPG",
            "img/produtos/infantis/f32471ba-33f5-42dd-929f-d5bf31fbaa6f.JPG"
        ],
        mensagemZap: "Olá! Tenho interesse no conjunto Lacoste infantil preto."
    },

    "infantil2": {
        titulo: "Conjunto Lacoste Branco Listrado Infantil",
        preco: "R$ 99,90",
        precoNum: 99.90,
        categoria: "moda-infantil",
        filtros: ["todos", "lacoste"],
        descricao: "Conjunto infantil Lacoste branco com detalhes listrados, uma combinação leve e elegante para os pequenos",
        fotos: [
            "img/produtos/infantis/119632b6-0dea-4acc-b89d-cc08f0fc1da0.JPG",
            "img/produtos/infantis/e4425e6b-3308-4788-bb9e-9adeef23fb28.JPG",
            "img/produtos/infantis/0b3cb820-9f5b-4555-a734-d5f9830bfab0.JPG",
            "img/produtos/infantis/c01ae756-410a-479a-a991-a610e22cd594.JPG",
            "img/produtos/infantis/1c75991f-780f-42ed-b350-e18b6509e940.JPG",
            "img/produtos/infantis/cf4f52ab-141f-410a-b0e5-f6dae35c2af9.JPG"
        ],
        mensagemZap: "Olá! Tenho interesse no sueter Nike verde infantil."
    },

    "infantil1": {
        titulo: "Conjunto Lacoste Branco Listrado Infantil",
        preco: "R$ 99,90",
        precoNum: 99.90,
        categoria: "moda-infantil",
        filtros: ["todos", "lacoste"],
        descricao: "Conjunto infantil Lacoste branco listrado, com visual moderno e versátil para criar looks confortáveis e cheios de estilo",
        fotos: [
            "img/produtos/infantis/20e528b8-cc0b-4c17-abb0-d1b1dc5389c5.JPG",
            "img/produtos/infantis/40af6def-143b-4ee1-b3d1-f3faddf08f41.JPG",
            "img/produtos/infantis/7fd7c9f7-be01-4429-84a4-549620607e9e.JPG",
            "img/produtos/infantis/9e2a2684-f339-42b8-9840-06d9f7057bf4.JPG"
        ],
        mensagemZap: "Olá! Tenho interesse no sueter Nike verde infantil."
    },

    "casaco7": {
        titulo: "Corta Vento Adidas",
        preco: "R$ 149,90",
        precoNum: 149.90,
        categoria: "blusas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "adidas"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: [
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_8.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_11.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_12.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "casaco6": {
        titulo: "Jaqueta Tommy Hilfiger",
        preco: "R$ 149,90",
        precoNum: 149.90,
        categoria: "blusas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "tommy"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: [
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_10.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_9.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_5.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_3.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "casaco5": {
        titulo: "Moletom Hurley",
        preco: "R$ 149,90",
        precoNum: 149.90,
        categoria: "blusas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "hurley"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: [
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_6.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_7.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_4.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_2.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-52_1.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "casaco4": {
        titulo: "Moletom Quicksilver",
        preco: "R$ 149,90",
        precoNum: 149.90,
        categoria: "blusas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "Quicksilver"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: [
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_9.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_8.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_14.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_4.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "casaco3": {
        titulo: "Sueter Lacoste cinza",
        preco: "R$ 99,90",
        precoNum: 99.90,
        categoria: "blusas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "lacoste"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: [
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_15.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_13.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_11.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "casaco2": {
        titulo: "Sueter Lacoste preto",
        preco: "R$ 99,90",
        precoNum: 99.90,
        categoria: "blusas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "lacoste"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: [
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_5.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_16.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_3.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_4.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "casaco1": {
        titulo: "Sueter Lacoste preto",
        preco: "R$ 99,90",
        precoNum: 99.90,
        categoria: "blusas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "lacoste"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: [
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_7.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_2.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_6.jpg",
            "img/produtos/blusas/PHOTO-2026-08-10-15-49-07_1.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "bermuda3": {
        titulo: "Bermuda Jeans Diesel",
        preco: "R$ 79,90",
        precoNum: 79.90,
        categoria: "calcasebermudas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "bermudas", "diesel"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_29.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_33.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_32.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_26.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse nas bermudas da Use Marujo."
    },

    "calca5": {
        titulo: "Calça Preta",
        preco: "R$ 149,90",
        precoNum: 149.90,
        categoria: "calcasebermudas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "calcas"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_4.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_2.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_15.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse nas calças da Use Marujo."
    },


    "calca4": {
        titulo: "Calça Preta",
        preco: "R$ 149,90",
        precoNum: 149.90,
        categoria: "calcasebermudas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "calcas"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_21.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_23.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_1.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_6.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_13.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse nas calças da Use Marujo."
    },

    "calca3": {
        titulo: "Calça Jeans",
        preco: "R$ 149,90",
        precoNum: 149.90,
        categoria: "calcasebermudas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "calcas"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_12.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_24.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_25.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_30.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_34.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse nas calças da Use Marujo."
    },

    "calca2": {
        titulo: "Calça Modelo Tectel",
        preco: "R$ 149,90",
        precoNum: 149.90,
        categoria: "calcasebermudas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "calcas"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_7.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_22.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_9.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_14.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_19.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_20.jpg"

        ],
        mensagemZap: "Olá! Tenho interesse nas calças da Use Marujo."
    },

    "calca1": {
        titulo: "Calça Modelo Rasgada",
        preco: "R$ 149,90",
        precoNum: 149.90,
        categoria: "calcasebermudas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "calcas"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_31.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_16.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_17.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_18.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_28.jpg"

        ],
        mensagemZap: "Olá! Tenho interesse nas calças da Use Marujo."
    },

    "bermuda2": {
        titulo: "Bermuda Marrom",
        preco: "R$ 49,90",
        precoNum: 49.90,
        categoria: "calcasebermudas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "bermudas"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_3.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_5.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_10.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_11.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-43-29_27.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse nas bermudas da Use Marujo."
    },

    "bermuda1": {
        titulo: "Bermuda Use Marujo",
        preco: "R$ 49,90",
        precoNum: 49.90,
        categoria: "calcasebermudas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "bermudas"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/calcasebermudas/PHOTO-2026-08-10-16-41-25.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-41-25_2.jpg",
            "img/produtos/calcasebermudas/PHOTO-2026-08-10-16-41-25_1.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse nas bermudas da Use Marujo."
    },

    "polo-boss-preta": {
        titulo: "Polo Boss Preta",
        preco: "R$ 49,90",
        precoNum: 49.90,
        categoria: "camisas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "lacoste"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/WhatsApp Image 2026-08-05 at 20.18.20.jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.19 (1).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.18.jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.18 (1).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.19.jpeg"
        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "camisa-lacoste-logo-marrom": {
        titulo: "Camisa Lacoste Marrom",
        preco: "R$ 49,90",
        precoNum: 49.90,
        categoria: "camisas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "lacoste"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/WhatsApp Image 2026-08-05 at 20.18.15 (1).jpeg",
            "img/produtos/fotoetiqueta.jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.14.jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.12.jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.12 (2).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.12 (1).jpeg"

        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "camisa-lacoste-logo-marrom": {
        titulo: "Camisa Lacoste Marrom",
        preco: "R$ 49,90",
        precoNum: 49.90,
        categoria: "camisas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "lacoste"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/WhatsApp Image 2026-08-05 at 20.18.15 (1).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.14.jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.12.jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.12 (2).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.12 (1).jpeg"

        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "camisa-lacoste-logo-marrom": {
        titulo: "Camisa Lacoste Marrom",
        preco: "R$ 49,90",
        precoNum: 49.90,
        categoria: "camisas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "lacoste"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/WhatsApp Image 2026-08-05 at 20.18.15 (1).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.14.jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.12.jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.18.12 (2).jpeg"

        ],
        mensagemZap: "Olá! Tenho interesse na camisa Lacose marrom."
    },

    "camisa-boss-preta-listrada": {
        titulo: "Camisa Boss Preta Listrada",
        preco: "R$ 49,90",
        precoNum: 49.90,
        categoria: "camisas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "boss"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/WhatsApp Image 2026-08-05 at 20.17.09 (3).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.17.09 (1).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.17.09 (2).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.17.09.jpeg"

        ],
        mensagemZap: "Olá! Tenho interesse na camisa Boss preta."
    },

    "camisa-diesel-vermelha": {
        titulo: "Camisa Diesel Vermelha",
        preco: "R$ 49,90",
        precoNum: 49.90,
        categoria: "camisas", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo autêntico.",
        fotos: ["img/produtos/WhatsApp Image 2026-08-05 at 20.17.08 (3).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.17.08 (1).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.17.08 (2).jpeg",
            "img/produtos/WhatsApp Image 2026-08-05 at 20.17.08.jpeg"

        ],
        mensagemZap: "Olá! Tenho interesse na camisa Diesel vermelha."
    },

    "bobojaco-nike": {
        titulo: "Bobojaco Nike Preto",
        preco: "R$ 299,90",
        precoNum: 299.90,              // Campo numérico para ordenação de menor/maior preço
        categoria: "blusas",          // ID da seção/categoria à qual o produto pertence
        filtros: ["todos", "nike"], // Suas tags personalizadas de filtro
        descricao: "Blusa estilo bobojaco Nike preta, com tecido em estilo camurça, ideal para o curtir o frio em estilo",
        fotos: [
            "img/produtos/PHOTO-2026-08-03-14-08-36_4.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na Blusa bobojado da Nike preta."
    },

    "bobojaco-boss": {
        titulo: "Bobojaco Boss Marrom",
        preco: "R$ 349,90",
        precoNum: 349.90,              // Campo numérico para ordenação de menor/maior preço
        categoria: "blusas",          // ID da seção/categoria à qual o produto pertence
        filtros: ["todos", "boss"], // Suas tags personalizadas de filtro
        descricao: "Blusa estilo bobojaco Boss Marrom, com tecido em estilo tectel, ideal para o curtir o frio em estilo",
        fotos: [
            "img/produtos/PHOTO-2026-08-03-14-08-36_7.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na Blusa bobojado da Boss Marrom."
    },

    "bobojaco-camuflado-1": {
        titulo: "Bobojaco Camuflado Claro",
        preco: "R$ 199,90",
        precoNum: 199.90,              // Campo numérico para ordenação de menor/maior preço
        categoria: "blusas",          // ID da seção/categoria à qual o produto pertence
        filtros: ["todos", "camuflado"], // Suas tags personalizadas de filtro
        descricao: "Blusa estilo bobojaco camuflada, com tecido em estilo tectel, ideal para o curtir o frio em estilo",
        fotos: [
            "img/produtos/PHOTO-2026-08-03-14-08-36_3.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na Blusa bobojado camuflado."
    },

    "bobojaco-camuflado-2": {
        titulo: "Bobojaco Camuflado Escuro",
        preco: "R$ 199,90",
        precoNum: 199.90,              // Campo numérico para ordenação de menor/maior preço
        categoria: "blusas",          // ID da seção/categoria à qual o produto pertence
        filtros: ["todos", "camuflado"], // Suas tags personalizadas de filtro
        descricao: "Blusa estilo bobojaco camuflada, com tecido em estilo tectel, ideal para o curtir o frio em estilo",
        fotos: [
            "img/produtos/PHOTO-2026-08-03-14-08-36_6.jpg"
        ],
        mensagemZap: "Olá! Tenho interesse na Blusa bobojado camuflado."
    },

    "quicksilver-cinza": {
        titulo: "QuickSilver Logo Cinza",
        preco: "R$ 129,90",
        precoNum: 129.90,
        categoria: "oversized", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "malha-americana"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo oversized casual.",
        fotos: ["img/produtos/camisa-quick-cinza.png"],
        mensagemZap: "Olá! Tenho interesse na camisa QuickSilver Logo Cinza."
    }
};

// ==========================================
// 🚀 LÓGICA DE FILTROS E INJEÇÃO AUTOMÁTICA (INDEX)
// ==========================================
function renderizarProdutosPorCategoria(categoriaId, filtroSelecionado = "todos", ordenarPorPreco = false) {
    const grid = document.querySelector(`#${categoriaId} .carrossel-track`);
    if (!grid) return;

    // Limpa a track para re-renderizar os produtos filtrados
    grid.innerHTML = "";

    // 1. Filtra apenas os produtos que pertencem a esta categoria específica (ex: 'camisas' ou 'oversized')
    let listaFiltrada = Object.keys(produtos)
        .map(id => ({ id, ...produtos[id] }))
        .filter(p => p.categoria === categoriaId);

    // 2. Se o filtro selecionado NÃO for "todos", filtra pela tag específica (ex: 'tailandesa', 'peruana')
    if (filtroSelecionado !== "todos") {
        listaFiltrada = listaFiltrada.filter(p => p.filtros && p.filtros.includes(filtroSelecionado));
    }

    // 3. Ordena por menor preço se o usuário escolheu essa opção
    if (ordenarPorPreco) {
        listaFiltrada.sort((a, b) => a.precoNum - b.precoNum);
    }

    // 4. Renderiza os cards na tela
    listaFiltrada.forEach(p => {
        const card = document.createElement("div");
        card.className = "produto-card";
        card.innerHTML = `
    <div class="img-container">
        <img src="${p.fotos[0]}" alt="${p.titulo}">
    </div>
    <div class="produto-info">
        <h4>${p.titulo}</h4>
        <p class="preco">${p.preco}</p>
        <a href="produto.html?id=${p.id}" class="btn btn-block">Ver Detalhes</a>
    </div>
`;
        grid.appendChild(card);
    });
}

// Inicializador dos dropdowns de filtros na página Index
document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".categoria-filtro");

    dropdowns.forEach(select => {
        const categoriaId = select.getAttribute("data-categoria");

        // Renderização inicial padrão (mostra tudo da categoria)
        if (categoriaId) {
            renderizarProdutosPorCategoria(categoriaId, "todos", false);
        }

        // Monitora as escolhas do usuário no dropdown
        select.addEventListener("change", (e) => {
            const valorOpcao = e.target.value;
            if (valorOpcao === "menor-preco") {
                renderizarProdutosPorCategoria(categoriaId, "todos", true);
            } else {
                renderizarProdutosPorCategoria(categoriaId, valorOpcao, false);
            }
        });
    });
});

// ==========================================
// 🚀 LÓGICA DA PÁGINA DE PRODUTOS (GALERIA & SEMELHANTES)
// ==========================================
if (window.location.href.toLowerCase().includes("produto.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        const urlParams = new URLSearchParams(window.location.search);
        const produtoId = urlParams.get('id');

        if (produtoId && produtos[produtoId]) {
            const prod = produtos[produtoId];

            // Injeta dados de texto principais
            if (document.getElementById('prod-titulo')) document.getElementById('prod-titulo').innerText = prod.titulo;
            if (document.getElementById('prod-preco')) document.getElementById('prod-preco').innerText = prod.preco;
            if (document.getElementById('prod-desc')) document.getElementById('prod-desc').innerText = prod.descricao;

            const btnZap = document.getElementById('prod-btn-zap');
            if (btnZap) {
                btnZap.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prod.mensagemZap)}`;
            }

            // --- NOVO: CARROSSEL INTERNO DE IMAGENS DO PRODUTO ---
            const galeriaSlides = document.getElementById("prod-galeria-slides");
            if (galeriaSlides && prod.fotos) {
                galeriaSlides.innerHTML = "";
                prod.fotos.forEach((foto, index) => {
                    const slide = document.createElement("div");
                    slide.className = `prod-slide ${index === 0 ? 'active' : ''}`;
                    slide.innerHTML = `<img src="${foto}" alt="Foto ${index + 1}">`;
                    galeriaSlides.appendChild(slide);
                });

                // Controles de navegação do carrossel do produto
                const slidesProd = galeriaSlides.querySelectorAll(".prod-slide");
                let currentProdSlide = 0;

                function mudarSlideProduto(direcao) {
                    if (slidesProd.length <= 1) return;
                    slidesProd[currentProdSlide].classList.remove("active");
                    currentProdSlide = (currentProdSlide + direcao + slidesProd.length) % slidesProd.length;
                    slidesProd[currentProdSlide].classList.add("active");
                }

                const btnPrev = document.querySelector(".prod-carousel-btn.prev");
                const btnNext = document.querySelector(".prod-carousel-btn.next");

                if (btnPrev && btnNext) {
                    if (slidesProd.length > 1) {
                        btnPrev.addEventListener("click", () => mudarSlideProduto(-1));
                        btnNext.addEventListener("click", () => mudarSlideProduto(1));
                    } else {
                        // Esconde as setas se houver apenas uma foto cadastrada
                        btnPrev.style.display = "none";
                        btnNext.style.display = "none";
                    }
                }
            } else if (document.getElementById('prod-img-principal')) {
                // Mantém compatibilidade caso o layout antigo ainda esteja ativo
                document.getElementById('prod-img-principal').src = prod.fotos[0];
            }

            // --- NOVO: SEÇÃO DE PRODUTOS SEMELHANTES ---
            const gridSemelhantes = document.getElementById("produtos-semelhantes-grid");
            if (gridSemelhantes) {
                gridSemelhantes.innerHTML = "";

                // Filtra itens da mesma categoria, descartando o produto que já está aberto na tela
                const semelhantes = Object.keys(produtos)
                    .map(id => ({ id, ...produtos[id] }))
                    .filter(p => p.categoria === prod.categoria && p.id !== produtoId);

                if (semelhantes.length === 0) {
                    gridSemelhantes.innerHTML = "<p class='txt-muted'>Nenhum produto semelhante encontrado.</p>";
                } else {
                    semelhantes.forEach(p => {
                        const card = document.createElement("div");
                        card.className = "produto-card";
                        card.innerHTML = `
                            <div class="produto-img">
                                <a href="produto.html?id=${p.id}" class="btn btn-ver-detalhes">
                                <img src="${p.fotos[0]}" alt="${p.titulo}">
                            </div>
                            <div class="produto-info">
                                <h4>${p.titulo}</h4>
                                <p class="preco">${p.preco}</p>
                                Ver Detalhes</a>
                            </div>
                        `;
                        gridSemelhantes.appendChild(card);
                    });
                }
            }
        } else {
            if (document.getElementById('prod-titulo')) document.getElementById('prod-titulo').innerText = "Produto não encontrado";
        }
    });
}

// ==========================================
// 1. GERAÇÃO DE LINKS DO WHATSAPP (GERAL)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const waLinks = document.querySelectorAll(".wa-link");
    waLinks.forEach(link => {
        const customMsg = link.getAttribute("data-msg") || "Olá! Gostaria de mais informações.";
        link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMsg)}`;
    });
});

// ==========================================
// 2. MENU MOBILE TOGGLE
// ==========================================
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            if (mobileToggle.querySelector("i")) {
                mobileToggle.querySelector("i").className = "fas fa-bars";
            }
        });
    });
}

// ==========================================
// 3. CARROSSEL HERO (AUTOMÁTICO E MANUAL)
// ==========================================
const slides = document.querySelectorAll('.hero-carousel .slide');
const dots = document.querySelectorAll('.hero-indicators .dot');
const prevBtn = document.querySelector('.hero-prev');
const nextBtn = document.querySelector('.hero-next');
let currentSlide = 0;
let slideInterval;

if (slides.length > 0) {
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        if (dots.length > 0) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSlideShow() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => { nextSlide(); resetSlideShow(); });
        prevBtn.addEventListener('click', () => { prevSlide(); resetSlideShow(); });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetSlideShow();
        });
    });

    startSlideShow();
}

// ==========================================
// 4. CARROSSEL DE PRODUTOS (UNIVERSAL)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const conteineresProdutos = document.querySelectorAll('.carrossel-track, .produtos-grid, .carrossel-container, .produtos-carrossel');

    conteineresProdutos.forEach((grid) => {
        const secaoPai = grid.parentElement;

        if (secaoPai) {
            const btnPrev = secaoPai.querySelector('.carrossel-btn.prev, .carrossel-prev, .prev-btn, .produtos-prev');
            const btnNext = secaoPai.querySelector('.carrossel-btn.next, .carrossel-next, .next-btn, .produtos-next');

            if (btnPrev && btnNext) {
                const scrollStep = 320;

                btnNext.addEventListener('click', () => {
                    grid.scrollBy({ left: scrollStep, behavior: 'smooth' });
                });

                btnPrev.addEventListener('click', () => {
                    grid.scrollBy({ left: -scrollStep, behavior: 'smooth' });
                });
            }
        }
    });
});

// ==========================================
// 5. SISTEMA DE BALÃO INTELIGENTE
// ==========================================
const balloonMessages = [
    "👋 Procurando o caimento perfeito? Fale conosco!",
    "🔥 Frete fixo para a nossa região! Consulte no WhatsApp.",
    "⚡ Peças limitadas! Não perca seu tamanho.",
    "👕 Camisas premium com estampas exclusivas!",
    "⚓ Vista Use Marujo e navegue no estilo!"
];

const smartBalloon = document.getElementById("smartBalloon");
const balloonText = document.getElementById("balloonText");

function showBalloon() {
    if (smartBalloon && balloonText) {
        const randomMsg = balloonMessages[Math.floor(Math.random() * balloonMessages.length)];
        balloonText.innerText = randomMsg;
        smartBalloon.classList.add("show");

        setTimeout(() => {
            smartBalloon.classList.remove("show");
        }, 6000);
    }
}

// Ano atual do Rodapé
const yearEl = document.getElementById("year");
if (yearEl) yearEl.innerText = new Date().getFullYear();