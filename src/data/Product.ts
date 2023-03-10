export interface Product {
    title: string;
    description: string;
    img: string;
}

export interface ProductData {
    [key: string]: Product[];
}

export const ProductDummy: ProductData = {
    en: [
        {
            title: 'Conveyor Systems',
            description: 'WSA designs and manufactures a wide array of modular plastic belt and roller conveyor systems for some of the most automated corrugated smart factories in the world. Full Plant Systems are controlled by the WSA IFAS Intelligent Factory Automation System.',
            img: 'img/product1.jpg'
        },
        {
            title: 'Bundle Line Systems',
            description: 'The WSA-USA AS/AR Vertical Storage System is a fully automated corrugated WIP handling system designed to maximize storage capacity and plant efficiency while reducing the overall footprint.',
            img: 'img/product2.jpg',
        },
        {
            title: ' Prefeeders',
            description: 'At WSA USA, we are committed to our customersâ€™ success. Our unique design and planning processes allow you to maximize productivity and efficiency while maintaining a safe working environment.',
            img: 'img/product3.jpg',
        },
        {
            title: 'Pallet Inserters',
            description: 'WSA designs and manufactures a wide array of modular plastic belt and roller conveyor systems for some of the most automated corrugated smart factories in the world. Full Plant Systems are controlled by the WSA IFAS Intelligent Factory Automation System.',
            img: 'img/product1.jpg'
        },
        {
            title: 'Robotic Palletizers',
            description: 'WSA designs and manufactures a wide array of modular plastic belt and roller conveyor systems for some of the most automated corrugated smart factories in the world. Full Plant Systems are controlled by the WSA IFAS Intelligent Factory Automation System.',
            img: 'img/product1.jpg'
        },
        {
            title: 'Loadformers',
            description: 'WSA designs and manufactures a wide array of modular plastic belt and roller conveyor systems for some of the most automated corrugated smart factories in the world. Full Plant Systems are controlled by the WSA IFAS Intelligent Factory Automation System.',
            img: 'img/product1.jpg'
        },
    ],


    kr: [
        {
            title: 'Conveyor Systems',
            description: 'WSAëŠ” ě„¸ęł„ě—?ě„ś ę°€ěžĄ ěž?ëŹ™í™”ë?ś íŚŚí?• ěŠ¤ë§?íŠ¸ ęłµěžĄěť„ ěś„í•ś ë‹¤ě–‘í•ś ëŞ¨ë“?ě‹ť í”ŚëťĽěŠ¤í‹± ë˛¨íŠ¸ ë°Ź ëˇ¤ëź¬ ě»¨ë˛ ěť´ě–´ ě‹śěŠ¤í…śěť„ ě„¤ęł„í•?ęł  ě śěˇ°í•©ë‹?ë‹¤. í’€ í”ŚëžśíŠ¸ ě‹śěŠ¤í…śěť€ WSA IFAS ě§€ëŠĄí?• ęłµěžĄ ěž?ëŹ™í™” ě‹śěŠ¤í…śě—? ěť?í•´ ě śě–´ë?©ë‹?ë‹¤.',
            img: 'img/product1.jpg'
        },
        {
            title: 'Bundle Line Systems',
            description: 'WSA-USA AS/AR ě??ě§? ěŠ¤í† ë¦¬ě§€ ě‹śěŠ¤í…śěť€ ě „ě˛´ ě„¤ěą? ęłµę°„ěť„ ě¤„ěť´ëŠ” ëŹ™ě‹śě—? ěŠ¤í† ë¦¬ě§€ ěš©ëź‰ęłĽ í”ŚëžśíŠ¸ íš¨ěś¨ěť„ ę·ąëŚ€í™”í•?ëŹ„ëˇť ě„¤ęł„ë?ś ě™„ě „ ěž?ëŹ™í™”ë?ś íŚŚí?• WIP ě˛?ë¦¬ ě‹śěŠ¤í…śěž…ë‹?ë‹¤.',
            img: 'img/product2.jpg'
        },
        {
            title: ' Prefeeders',
            description: 'WSA USAě—?ě„śëŠ” ęł ę°ťěť? ě„±ęłµěť„ ěś„í•´ ěµśě„ ěť„ ë‹¤í•?ęł  ěž?ěŠµë‹?ë‹¤. NATěť? ęł ěś í•ś ě„¤ęł„ ë°Ź ęł„íšŤ í”„ëˇśě„¸ěŠ¤ëĄĽ í†µí•´ ě•?ě „í•ś ěž‘ě—… í™?ę˛˝ěť„ ěś ě§€í•?ë©´ě„ś ě?ťě‚°ě„±ęłĽ íš¨ěś¨ě„±ěť„ ę·ąëŚ€í™”í•  ě?? ěž?ěŠµë‹?ë‹¤.',
            img: 'img/product3.jpg',
        },
        {
            title: 'Pallet Inserters',
            description: 'WSAëŠ” ě„¸ęł„ě—?ě„ś ę°€ěžĄ ěž?ëŹ™í™”ë?ś íŚŚí?• ěŠ¤ë§?íŠ¸ ęłµěžĄěť„ ěś„í•ś ë‹¤ě–‘í•ś ëŞ¨ë“?ě‹ť í”ŚëťĽěŠ¤í‹± ë˛¨íŠ¸ ë°Ź ëˇ¤ëź¬ ě»¨ë˛ ěť´ě–´ ě‹śěŠ¤í…śěť„ ě„¤ęł„í•?ęł  ě śěˇ°í•©ë‹?ë‹¤. í’€ í”ŚëžśíŠ¸ ě‹śěŠ¤í…śěť€ WSA IFAS ě§€ëŠĄí?• ęłµěžĄ ěž?ëŹ™í™” ě‹śěŠ¤í…śě—? ěť?í•´ ě śě–´ë?©ë‹?ë‹¤.',
            img: 'img/product1.jpg'
        },
        {
            title: 'Robotic Palletizers',
            description: 'WSAëŠ” ě„¸ęł„ě—?ě„ś ę°€ěžĄ ěž?ëŹ™í™”ë?ś íŚŚí?• ěŠ¤ë§?íŠ¸ ęłµěžĄěť„ ěś„í•ś ë‹¤ě–‘í•ś ëŞ¨ë“?ě‹ť í”ŚëťĽěŠ¤í‹± ë˛¨íŠ¸ ë°Ź ëˇ¤ëź¬ ě»¨ë˛ ěť´ě–´ ě‹śěŠ¤í…śěť„ ě„¤ęł„í•?ęł  ě śěˇ°í•©ë‹?ë‹¤. í’€ í”ŚëžśíŠ¸ ě‹śěŠ¤í…śěť€ WSA IFAS ě§€ëŠĄí?• ęłµěžĄ ěž?ëŹ™í™” ě‹śěŠ¤í…śě—? ěť?í•´ ě śě–´ë?©ë‹?ë‹¤.',
            img: 'img/product1.jpg'
        },
        {
            title: 'Loadformers',
            description: 'WSAëŠ” ě„¸ęł„ě—?ě„ś ę°€ěžĄ ěž?ëŹ™í™”ë?ś íŚŚí?• ěŠ¤ë§?íŠ¸ ęłµěžĄěť„ ěś„í•ś ë‹¤ě–‘í•ś ëŞ¨ë“?ě‹ť í”ŚëťĽěŠ¤í‹± ë˛¨íŠ¸ ë°Ź ëˇ¤ëź¬ ě»¨ë˛ ěť´ě–´ ě‹śěŠ¤í…śěť„ ě„¤ęł„í•?ęł  ě śěˇ°í•©ë‹?ë‹¤. í’€ í”ŚëžśíŠ¸ ě‹śěŠ¤í…śěť€ WSA IFAS ě§€ëŠĄí?• ęłµěžĄ ěž?ëŹ™í™” ě‹śěŠ¤í…śě—? ěť?í•´ ě śě–´ë?©ë‹?ë‹¤.',
            img: 'img/product1.jpg'
        },
    ],
};