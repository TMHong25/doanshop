import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { formatter } from 'utils/formater';

import product1 from './img/product1.png';
import product12 from './img/product12.png';
import product13 from './img/product13.png';
import product14 from './img/product14.png';
import product2 from './img/product2.png';
import product22 from './img/product22.png';
import product23 from './img/product23.png';
import product24 from './img/product24.png';
import product3 from './img/product3.png';
import product32 from './img/product32.png';
import product33 from './img/product33.png';
import product34 from './img/product34.png';
import product4 from './img/product4.png';
import product42 from './img/product42.png';
import product43 from './img/product43.png';
import product44 from './img/product44.png';

export const renderFeaturedProducts = (data) => {
    // Lấy danh sách tiêu đề từ dữ liệu
    const tabTitles = Object.keys(data).map(key => data[key].title);
    
    return (
        <Tabs onSelect={(index) => console.log('âbc')}>
            <TabList>
                {tabTitles.map((title, index) => (
                    <Tab key={index}>{title}</Tab>
                ))}
            </TabList>

            {Object.keys(data).map((key, index) => (
                <TabPanel key={index}>
                    {/* <h3>{data[key].title}</h3> */}
                    <ul>
                        {data[key].products.map((product, i) => (
                            <li key={i} onSelect={(index) => console.log('1234')}>
                                <img src={product.img} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p>{formatter(product.price)}</p>
                            </li>
                        ))}
                    </ul>
                </TabPanel>
            ))}
        </Tabs>
    );
};

const featProducts = {
    all: {
        title: 'Toàn Bộ',
        products: [
            { img: product1, name: 'Chuột Capybara Rút Dưa Hấu', price: 240000 },
            { img: product12 , name: 'Móc Khóa Raisca Rái Cá', price: 65000 },
            { img: product13, name: 'Búp Bê Mũ Kuromi', price: 275000 },
            { img: product14, name: 'Shin Cosplay Kuromi Tím', price: 150000 },
        ],
    },
    teddyBear: {
        title: 'Gấu Teddy',
        products: [
            { img: product2, name: 'Teddy áo len mặt cười', price: 660000 },
            { img: product22, name: 'Teddy head lông xoắn áo len', price: 120000 },
            { img: product23, name: 'Bộ đôi gấu cáo ôm bánh sinh nhật ', price: 375000 },
            { img: product24, name: 'TNB head áo big love', price: 175000 },
        ],
    },
    bear: {
        title: 'Thú Bông',
        products: [
            { img: product3, name: 'Heo Ong ôm hũ mật', price: 335000 },
            { img: product32, name: 'Stitch ôm vịt', price: 195000 },
            { img: product33, name: 'Gấu bông dái cá Raisca', price: 325000 },
            { img: product34, name: 'Cánh cụt ôm cá đội mũ sao', price: 255000 },
        ],
    },
    bearFilm: {
        title: 'Gấu Hoạt Hình',
        products: [
            { img: product4, name: 'Đoraemon hồng', price: 120000 },
            { img: product42, name: 'Set bó hoa hồng', price: 385000 },
            { img: product43, name: 'Gấu Butter Bear', price: 150000 },
            { img: product44, name: 'Rắn baby đội quả', price: 145000 },
        ],
    },
    
};

export default featProducts;
