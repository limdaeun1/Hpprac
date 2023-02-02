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
            title: 'Vertical Rack AS/RS Systems',
            description: 'The WSA-USA AS/AR Vertical Storage System is a fully automated corrugated WIP handling system designed to maximize storage capacity and plant efficiency while reducing the overall footprint.',
            img: 'img/product2.jpg',
        },
        {
            title: 'Plant Automation',
            description: 'At WSA USA, we are committed to our customers’ success. Our unique design and planning processes allow you to maximize productivity and efficiency while maintaining a safe working environment.',
            img: 'img/product3.jpg',
        },
    ],
    kr: [
        {
            title: '컨베이어 시스템',
            description: 'WSA는 세계에서 가장 자동화된 파형 스마트 공장을 위한 다양한 모듈식 플라스틱 벨트 및 롤러 컨베이어 시스템을 설계하고 제조합니다. 풀 플랜트 시스템은 WSA IFAS 지능형 공장 자동화 시스템에 의해 제어됩니다.',
            img: 'img/product1.jpg'
        },
        {
            title: '수직 랙 AS/RS 시스템',
            description: 'WSA-USA AS/AR 수직 스토리지 시스템은 전체 설치 공간을 줄이는 동시에 스토리지 용량과 플랜트 효율을 극대화하도록 설계된 완전 자동화된 파형 WIP 처리 시스템입니다.',
            img: 'img/product2.jpg'
        },
        {
            title: '플랜트 자동화',
            description: 'WSA USA에서는 고객의 성공을 위해 최선을 다하고 있습니다. NAT의 고유한 설계 및 계획 프로세스를 통해 안전한 작업 환경을 유지하면서 생산성과 효율성을 극대화할 수 있습니다.',
            img: 'img/product3.jpg',
        },
    ],
};