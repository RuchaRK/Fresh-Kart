import * as React from 'react';
import {useState} from 'react';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';
import {GrFormAdd} from 'react-icons/gr';
import {PriceDetail} from '../Components/PriceDetail';
import {CartContainer, PrimaryButton, ProductContainer, ProductDetails} from './Cart/Cart.style';
import {AddressContainer, Title, AddressWrapper} from './Address.style';
import {Modal} from '../Components/Modal';
import {IconButton} from '../Components/IconButton';

export function Address() {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState([
    {
      name: 'bubish kathal',
      addressLine1: 'D63, jvgkjbnfbknlk',
      city: 'bubish chya kushit',
      state: 'mah',
      pinCode: '431001',
      mobileNo: '9876543211',
    },
    {
      name: 'bubish kathal',
      addressLine1: 'D63, jvgkjbnfbknlk',
      city: 'bubish chya kushit',
      state: 'mah',
      pinCode: '431001',
      mobileNo: '9876543211',
    },
  ]);

  return (
    <CartContainer>
      <AddressWrapper>
        {address.map((item) => (
          <AddressContainer>
            <Title>
              <h3>{item.name}</h3>
              <div>
                <IconButton onClick={() => setShowModal(true)} style={{border: 'none'}}>
                  <BiEdit size={18} />
                </IconButton>
                <IconButton onClick={() => setShowModal(true)} style={{border: 'none'}}>
                  <AiOutlineDelete size={18} />
                </IconButton>
              </div>
            </Title>

            <p style={{textAlign: 'initial'}}>{item.addressLine1}</p>
            <p style={{textAlign: 'initial'}}>{`${item.city}, ${item.state}, ${item.pinCode}`}</p>
            <p style={{textAlign: 'initial'}}>{item.mobileNo}</p>
            <Modal open={showModal} closeModal={() => setShowModal(false)}>
              hello
            </Modal>
          </AddressContainer>
        ))}
        <PrimaryButton
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            width: 'fit-content',
            alignSelf: 'end',
          }}
        >
          <GrFormAdd size={20} /> Add Address
        </PrimaryButton>
      </AddressWrapper>

      <PriceDetail />
    </CartContainer>
  );
}
