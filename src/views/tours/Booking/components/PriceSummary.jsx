import { currency } from '@/states';
import { Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap';
const PriceSummary = () => {
  return <Card className="border">
      <CardHeader className="border-bottom">
        <h5 className="card-title mb-0">Price Summary</h5>
      </CardHeader>
      <CardBody>
        <ul className="list-group list-group-borderless">
          <li className="list-group-item d-flex justify-content-between align-items-center pt-0">
            <span className="h6 fw-light mb-0">Base Price</span>
            <span className="fs-5">{currency}28,660</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">
              Total Discount<span className="badge text-bg-danger smaller mb-0 ms-2">10% off</span>
            </span>
            <span className="fs-5 text-success">-{currency}2,560</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center pb-0">
            <span className="h6 fw-light mb-0">Taxes % Fees</span>
            <span className="fs-5">{currency}350</span>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="border-top">
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">Payable Now</span>
          <span className="h5 mb-0">{currency}22,500</span>
        </div>
      </CardFooter>
    </Card>;
};
export default PriceSummary;