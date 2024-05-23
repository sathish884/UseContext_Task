import React, { useContext, useState } from 'react'
import { theme, Card, Col, Row, Image, Typography, Divider, Select, Flex, Popconfirm } from 'antd';
import { ProductContext } from '../App';
import './Card_Component.css';
const { Title } = Typography;

function Card_Component() {

    const productData = useContext(ProductContext)

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [data, setData] = useState(productData);

    const quantity = (selectedOption, index) => {
        const selectedValue = parseInt(selectedOption);
        if (selectedValue) {
            const updatedProducts = data.products.map((product, i) => {
                if (i === index) {
                    const updatedPrice = product.price * selectedValue;
                    return { ...product, totalPrice: updatedPrice };
                }
                return product;
            });
            setData({ products: updatedProducts });
        } else {
            setData(productData);
        }
    };

    const handleDeleteCard = (id) => {
        const updatedProducts = data.products.filter(product => product.id !== id);
        setData({ products: updatedProducts })
    }

    return (
        <>
            <div
                style={{
                    background: colorBgContainer,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                {data.products.map((product, index) => (
                    <Card className='card' key={product.id}>
                        <Row>
                            <Col span={6} style={{ textAlign: "center" }}>
                                <div>
                                    <Image
                                        width={200}
                                        height={200}
                                        src={product.image_url}
                                        fallback="data:image/png;base64,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"
                                    />
                                </div>
                            </Col>
                            <Col span={14}>
                                <div>
                                    <Title level={2}>h2. Ant Design</Title>
                                    <p><b>Details & Core</b></p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maxime eligendi magnam culpa molestiae id corporis rem. Labore, aliquid sint qui quis, distinctio, mollitia corrupti dolor assumenda ipsam animi laborum.</p>
                                    <p><b>Sustainability</b></p>
                                </div>

                            </Col>
                            <Col span={4}>
                                <div className='select-dropdown'>
                                    <Flex gap={8}>
                                        <Select
                                            placeholder="1"
                                            variant="borderless"
                                            style={{ flex: 1, fontWeight: "900" }}
                                            options={[
                                                { value: '1', label: '1' },
                                                { value: '2', label: '2' },
                                                { value: '3', label: '3' },
                                            ]}
                                            onChange={(value) => quantity(value, index)}
                                        />

                                    </Flex>
                                    <p><b>{`$${product.price}.00`}</b></p>
                                </div>
                                <div>
                                    <Popconfirm title="Are you sure delete this Card?" okText="Yes" cancelText="No" onConfirm={() => handleDeleteCard(product.id)}>
                                        <p className='delet-card'><b>Remove</b></p>
                                    </Popconfirm>
                                </div>
                            </Col>
                        </Row>
                        <Divider />
                        <Row>
                            <Col span={24}>
                                <div>
                                    <p className='price-counts'><span style={{ color: "darkgray" }}>SUBTOTAL : </span> <span>{`$${product.totalPrice}.00`}</span></p>
                                    <p className='price-counts'><span style={{ color: "darkgray" }}>SHIPPING : </span> <span>FREE</span></p>
                                </div>
                            </Col>
                        </Row>
                        <Divider />
                        <Row>
                            <Col span={24}>
                                <div>
                                    <p className='price-counts'><span><b>Total</b> : </span> <span>{`$${product.totalPrice}.00`}</span></p>
                                    <p className='cash-content'><b>Daily Cash With Nespola Card</b> </p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Card_Component