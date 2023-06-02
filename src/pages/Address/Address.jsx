import * as React from 'react';
import {useState} from 'react';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';
import {GrFormAdd} from 'react-icons/gr';
import {v4 as uuid} from 'uuid';
import {PriceDetail} from '../../Components/PriceDetail';
import {CartContainer, PrimaryButton} from '../Cart/Cart.style';
import {AddressContainer, Title, AddressWrapper} from './Address.style';
import {Modal} from '../../Components/Modal';
import {IconButton} from '../../Components/IconButton';
import {AddressForm} from './AddressForm';

const initialAddress = [
  {
    _id: uuid(),
    name: 'bubish kathal',
    addressLine1: 'D63, jvgkjbnfbknlk',
    city: 'bubish chya kushit',
    state: 'mah',
    pinCode: '431001',
    mobileNo: '9876543211',
  },
  {
    _id: uuid(),
    name: 'bubish kathal',
    addressLine1: 'D63, jvgkjbnfbknlk',
    city: 'bubish chya kushit',
    state: 'mah',
    pinCode: '431001',
    mobileNo: '9876543211',
  },
];

export function Address() {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState(initialAddress);

  const insertAddress = (obj) => {
    setAddress(address.concat({...obj, _id: uuid()}));
  };

  const saveEditedAddress = (obj) => {
    setAddress(address.map((item) => (item._id === obj._id ? obj : {...item})));
  };

  const deleteAddress = (idValue) => {
    setAddress(address.filter((item) => item._id !== idValue));
  };

  const openEditModal = (idValue) => {
    setAddress(address.map((item) => (item._id === idValue ? {...item, isEdit: true} : {...item})));
  };

  const closeEditModal = (idValue) => {
    setAddress((prevAddress) =>
      prevAddress.map((item) => (item._id === idValue ? {...item, isEdit: false} : {...item})),
    );
  };

  console.log({address});

  return (
    <CartContainer>
      <AddressWrapper>
        {address.map((item) => (
          <>
            <AddressContainer>
              <Title>
                <h3>{item.name}</h3>
                <div>
                  <IconButton onClick={() => openEditModal(item._id)} style={{border: 'none'}}>
                    <BiEdit size={18} />
                  </IconButton>
                  <IconButton onClick={() => deleteAddress(item._id)} style={{border: 'none'}}>
                    <AiOutlineDelete size={18} />
                  </IconButton>
                </div>
              </Title>
              <p style={{textAlign: 'initial'}}>{item.addressLine1}</p>
              <p style={{textAlign: 'initial'}}>{`${item.city}, ${item.state}, ${item.pinCode}`}</p>
              <p style={{textAlign: 'initial'}}>{item.mobileNo}</p>
            </AddressContainer>

            <Modal open={item.isEdit} closeModal={() => closeEditModal(item._id)}>
              <AddressForm
                initialValues={item}
                onSave={saveEditedAddress}
                closeModal={() => closeEditModal(item._id)}
              />
            </Modal>
          </>
        ))}

        <PrimaryButton
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            width: 'fit-content',
            alignSelf: 'end',
          }}
          onClick={() => setShowModal(true)}
        >
          <GrFormAdd size={20} /> Add Address
        </PrimaryButton>
      </AddressWrapper>

      <PriceDetail />
      <Modal open={showModal} closeModal={() => setShowModal(false)}>
        <AddressForm onSave={insertAddress} closeModal={() => setShowModal(false)} />
      </Modal>
    </CartContainer>
  );
}
