import Card from 'react-bootstrap/Card';
import ProdListGrid from '../../product/card/ProdListGrid.jsx';
import Moment from 'react-moment';
import 'moment-timezone';

const SaleCard = ({ sale }) => {
    const { products, totalprice, createdAt } = sale;

    return (
        <>
            <Card className='saleCard'>
                <Card.Header className='headerCard'>
                    Purchase date:
                    <Moment format='DD/MM/YYYY'>
                        {createdAt}
                    </Moment>
                </Card.Header>
                <Card.Body className='bodyCard'>
                    <Card.Title className='titleCard'>List of selected products:</Card.Title>
                    <ProdListGrid products={products} />
                    <Card.Text className='text-center text-success textCard'>Total: ${totalprice}</Card.Text>
                </Card.Body>
                <Card.Footer className="footerCard">
                    <Moment fromNow>{createdAt}</Moment>
                </Card.Footer>
            </Card>
        </>
    );
};

export default SaleCard;