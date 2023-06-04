import * as React from 'react';
import {useState} from 'react';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';
import {GrFormAdd} from 'react-icons/gr';
import {v4 as uuid} from 'uuid';
import {OrderDetails} from '../../Components/OrderDetails';
import {CartContainer, TitleContainer} from '../Cart/Cart.style';
import {AddressContainer, Title, AddressWrapper} from './Address.style';
import {Modal} from '../../Components/Modal';
import {IconButton} from '../../Components/IconButton';
import {AddressForm} from './AddressForm';
import {Button} from '../../Components/Button';

const initialAddress = [
  {
    _id: uuid(),
    name: 'Rucha Kathar',
    addressLine1: 'D63-Matruchya,Balaji Nagar',
    city: 'Aurangabad',
    state: 'Maharashtra',
    pinCode: '431001',
    mobileNo: '9876543211',
  },
];

export function Address() {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState(initialAddress);
  const [selectedAddress, setSelectedAddress] = useState(initialAddress[0]);

  const insertAddress = (obj) => {
    setAddress(address.concat({...obj, _id: uuid()}));
  };

  const saveEditedAddress = (obj) => {
    setAddress(address.map((item) => (item._id === obj._id ? obj : {...item})));
  };

  const deleteAddress = (idValue) => {
    setAddress(address.filter((item) => item._id !== idValue));
    if (idValue === selectedAddress._id) {
      setSelectedAddress(address[0]);
    }
  };

  const openEditModal = (idValue) => {
    setAddress(address.map((item) => (item._id === idValue ? {...item, isEdit: true} : {...item})));
  };

  const closeEditModal = (idValue) => {
    setAddress((prevAddress) =>
      prevAddress.map((item) => (item._id === idValue ? {...item, isEdit: false} : {...item})),
    );
  };

  return (
    <>
      <TitleContainer>
        <h2> Select Address</h2>
      </TitleContainer>
      <CartContainer>
        <AddressWrapper>
          {address.map((item) => (
            <>
              <AddressContainer>
                <Title>
                  <div style={{display: 'flex', gap: '4px'}}>
                    <input
                      type="radio"
                      name="radio"
                      checked={selectedAddress._id === item._id}
                      onClick={() => setSelectedAddress(item)}
                    />
                    <h3>{item.name}</h3>
                  </div>
                  <div>
                    <IconButton onClick={() => openEditModal(item._id)} style={{border: 'none'}}>
                      <BiEdit size={18} />
                    </IconButton>
                    <IconButton onClick={() => deleteAddress(item._id)} style={{border: 'none'}}>
                      <AiOutlineDelete size={18} />
                    </IconButton>
                  </div>
                </Title>

                <p>{item.addressLine1}</p>
                <p>{`${item.city}, ${item.state}, ${item.pinCode}`}</p>
                <p>{item.mobileNo}</p>
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
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button
              varient="outlined"
              icon={<GrFormAdd size={20} />}
              onClick={() => setShowModal(true)}
            >
              Add Address
            </Button>
          </div>
        </AddressWrapper>

        <OrderDetails showOrderDetails address={selectedAddress} />

        <Modal open={showModal} closeModal={() => setShowModal(false)}>
          <AddressForm onSave={insertAddress} closeModal={() => setShowModal(false)} />
        </Modal>
      </CartContainer>
    </>
  );
}
