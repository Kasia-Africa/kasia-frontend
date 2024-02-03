
export interface TProductTesting {
    id?: number,
    title: string;
    slug: string;
    description: string;
    price: any;
    featured_image: string;
    product_count: number;
    main_product_category_id?: number;
  }
export const TestData: TProductTesting =
    { 
        id: 1,
        slug: 'fruits',
        title: "lychee",
        price: "500",
        description: 'The papaya, a tree with probable origin in south-central Mexico, is classified as a member of the flowering plant family Lauraceae. The fruit of the plant, also called an avocado, is botanically a large berry containing a single large seed',
        product_count: 0,
        featured_image: "/papaya.svg"
    }
   