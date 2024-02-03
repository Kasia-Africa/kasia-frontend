
  export interface Product {
    name: string;
    price: any;
    src: string;
    alt: string;
    width?: number;
    link?:string;
    height?: number;
    slug?: string;
    product_count?: any;
    description?: string;
  }

  export interface TProductResponse {
    name: string, 
    slug: string,
    data: Product[]
  }
  
  export interface KasiaItem {
    fruits?: TProductResponse;
    meatsAndPoultry?: TProductResponse;
    vegetables?: TProductResponse;
    tubers?: TProductResponse;
    spices?: TProductResponse;
    flours?: TProductResponse;
  }
  
export const kasia: TProductResponse[]  = [
    {
        name: 'Fruits',
        slug: 'fruits',
        data : [
            {
                slug: 'fruits',
                name: "Papaya",
                price: "500",
                src: "/papaya.svg",
                alt: "papaya",
                width: 115,
                height: 86,
                product_count: 0,
            }, {
                slug: 'fruits',
                name: "Lychee",
                price: "500",
                src: "/lychee.svg",
                alt: "lychee",
                width: 115,
                height: 86,
                product_count: 0,
                description: 'The avocado, a tree with probable origin in south-central Mexico, is classified as a member of the flowering plant family Lauraceae. The fruit of the plant, also called an avocado, is botanically a large berry containing a single large seed',
                link: 'lychee'
            }, {
                slug: 'fruits',
                name: "Papaya",
                price: "500",
                src: "/papaya.svg",
                alt: "papaya",
                width: 115,
                height: 86,
                description: 'The avocado, a tree with probable origin in south-central Mexico, is classified as a member of the flowering plant family Lauraceae. The fruit of the plant, also called an avocado, is botanically a large berry containing a single large seed',
                link: 'papaya',
                product_count: 0,
            }, {
                name: "Water Melon",
                price: "500",
                src: "/watermelon.svg",
                alt: "water melon",
                width: 115,
                height: 86
            }, {
                name: "Papaya",
                price: "500",
                src: "/papaya.svg",
                alt: "papaya",
                width: 115,
                height: 86
            }, {
                name: "Water Melon",
                price: "500",
                src: "/watermelon.svg",
                alt: "water melon",
                width: 115,
                height: 86
            }, {
                name: "Soursop",
                price: "200",
                src: "/papaya.svg",
                alt: "papaya",
                width: 115,
                height: 86
            }, {
                name: "Soursop",
                price: "200",
                src: "/papaya.svg",
                alt: "papaya",
                width: 115,
                height: 86
            }, {
                name: "Soursop",
                price: "200",
                src: "/papaya.svg",
                alt: "papaya",
                width: 115,
                height: 86
            },
            {
                name: "Water Melon",
                price: "N500",
                src: "/watermelon.svg",
                alt: "water melon",
                width: 115,
                height: 86
            },{
                name: "Water Melon",
                price: "N500",
                src: "/watermelon.svg",
                alt: "water melon",
                width: 115,
                height: 86
            },{
                name: "Water Melon",
                price: "N500",
                src: "/watermelon.svg",
                alt: "water melon",
                width: 115,
                height: 86
            },{
                name: "Water Melon",
                price: "N500",
                src: "/watermelon.svg",
                alt: "water melon",
                width: 115,
                height: 86
            }
        ]
    },
    {
        name: 'Meats and Poultry',
        slug: 'meatsandpoultry',
        data: [
        {
            name: "Fresh Meat",
            price: "500",
            src: "/meats.svg",
            alt: "papaya",
            width: 90,
            height: 66,
            description: 'The avocado, a tree with probable origin in south-central Mexico, is classified as a member of the flowering plant family Lauraceae. The fruit of the plant, also called an avocado, is botanically a large berry containing a single large seed',
            link: 'fresh_meat',
            slug: 'Meats\And\Poultry'
        },   {
            name: "Fresh Meat",
            price: "500",
            src: "/meats.svg",
            alt: "papaya",
            width: 90,
            height: 66
        },{
            name: "Red Meat",
            price: "500",
            src: "/redmeat.svg",
            alt: "lychee",
            width: 90,
            height: 66,
            link: 'red_meat'
        },{
            name: "Red Meat",
            price: "N500",
            src: "/redmeat.svg",
            alt: "lychee",
            width: 90,
            height: 66
        },{
            name: "Red Meat",
            price: "N500",
            src: "/redmeat.svg",
            alt: "lychee",
            width: 90,
            height: 66
        },{
            name: "Fresh Meat",
            price: "N200",
            src: "/meats.svg",
            alt: "papaya",
            width: 90,
            height: 66
        },{
            name: "Red Meat",
            price: "N500",
            src: "/redmeat.svg",
            alt: "lychee",
            width: 90,
            height: 66
        },{
            name: "Red Meat",
            price: "N500",
            src: "/redmeat.svg",
            alt: "lychee",
            width: 90,
            height: 66
        },{
            name: "Red Meat",
            price: "N500",
            src: "/redmeat.svg",
            alt: "lychee",
            width: 90,
            height: 66
        },{
            name: "Red Meat",
            price: "N500",
            src: "/redmeat.svg",
            alt: "lychee",
            width: 90,
            height: 66
        },{
            name: "Fresh Meat",
            price: "N200",
            src: "/meats.svg",
            alt: "papaya",
            width: 90,
            height: 66
        },{
            name: "Fresh Meat",
            price: "N200",
            src: "/meats.svg",
            alt: "papaya",
            width: 90,
            height: 66
        },
        ]
    },
    {
        name: 'Vegetables',
        slug: 'vegetables',
        data : [
        {
            name: "lettuce",
            price: "N500",
            src: "/lettuce.svg",
            alt: "lettuce",
            width: 90,
            height: 66,
            link: 'lettuce',
            slug: 'vegetables'
        }, {
            name: "Sour Sop",
            price: "500",
            src: "/soursop.svg",
            alt: "sour sop",
            width: 90,
            height: 66
        }, {
            name: "Park Choy",
            price: "500",
            src: "/choy.svg",
            alt: "choy",
            width: 90,
            height: 66
        }, {
            name: "Lettuce",
            price: "N200",
            src: "/lettuce.svg",
            alt: "papaya",
            width: 90,
            height: 66
        }, {
            name: "Sour Sop",
            price: "N200",
            src: "/soursop.svg",
            alt: "papaya",
            width: 90,
            height: 66
        },
    ]
},
{
    name: 'Tubers',
    slug: 'tubers',
    data: [
    {
        name: "Potatoes",
        price: "500",
        src: "/potatoes.svg",
        alt: "potatoes",
        width: 120,
        height: 120,
        link: 'potatoes',
        slug: 'tubers'
    },  {
        name: "Sweet Apple",
        price: "200",
        src: "/yam.svg",
        alt: "sweet apple",
        width: 100,
        height: 100
    }, {
        name: "Potatoes",
        price: "500",
        src: "/potatoes.svg",
        alt: "potatoes",
        width: 120,
        height: 120
    }, {
        name: "Sweet Apple",
        price: "N200",
        src: "/yam.svg",
        alt: "sweet apple",
        width: 100,
        height: 100
    },  {
        name: "Potatoes",
        price: "N500",
        src: "/potatoes.svg",
        alt: "potatoes",
        width: 120,
        height: 120
    },
]
},
{
    name: 'Spices',
    slug: 'spices',
    data: [
    {
        name: "Tumeric",
        price: "N500",
        src: "/tumeric.svg",
        alt: "tumeric",
        width: 115,
        height: 86,
        link: 'tumeric',
        slug: 'spices'
    }, {
        name: "Chilly",
        price: "N500",
        src: "/chilly.svg",
        alt: "chilly",
        width: 115,
        height: 86
    }, {
        name: "Tumeric",
        price: "N500",
        src: "/tumeric.svg",
        alt: "tumeric",
        width: 115,
        height: 86
    }, {
        name: "CHilly",
        price: "N200",
        src: "/chilly.svg",
        alt: "tumeric",
        width: 115,
        height: 86
    }, {
        name: "Tumeric",
        price: "N200",
        src: "/tumeric.svg",
        alt: "tumeric",
        width: 115,
        height: 86
    },
]
},
{
    name: 'Flours',
    slug: 'flours',
    data: [
    {
        name: "Wheat",
        price: "500",
        src: "/wheat.svg",
        alt: "wheat",
        width: 115,
        height: 86,
        link: 'wheat',
        slug: 'flours'
    }, {
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    }, {
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Wheat",
        price: "N500",
        src: "/wheat.svg",
        alt: "wheat",
        width: 115,
        height: 86
    }, {
        name: "Corn",
        price: "N200",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    }, {
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },{
        name: "Corn",
        price: "N500",
        src: "/corn.svg",
        alt: "corn",
        width: 115,
        height: 86
    },
]
}
]