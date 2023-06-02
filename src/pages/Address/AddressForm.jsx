import * as React from 'react';
import {useState} from 'react';
import styled from '@emotion/styled';
import {InputContainer, Input} from '../Login/SignIn';
import {Button} from '../../Components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: 'center';
  padding: 16px 20px;
  gap: 16px;
`;

export function AddressForm({onSave, closeModal, initialValues}) {
  const [addressObject, setAddressObject] = useState(initialValues ?? {});

  const handleOnChange = (event) => {
    setAddressObject({...addressObject, [event.target.name]: event.target.value});
  };

  return (
    <form>
      <Container>
        {initialValues ? <h1>Edit Address</h1> : <h1>Add Address</h1>}
        <InputContainer>
          Name
          <Input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={addressObject.name}
            required
            onChange={handleOnChange}
          />
        </InputContainer>
        <InputContainer>
          Address
          <Input
            type="text"
            placeholder="Enter HouseNo, Road ,Colony."
            name="addressLine1"
            value={addressObject.addressLine1}
            required
            onChange={handleOnChange}
          />
        </InputContainer>
        <InputContainer>
          City
          <Input
            type="text"
            placeholder="Enter city"
            name="city"
            value={addressObject.city}
            required
            onChange={handleOnChange}
          />
        </InputContainer>
        <InputContainer>
          State
          <Input
            type="text"
            placeholder="Enter State"
            name="state"
            value={addressObject.state}
            required
            onChange={handleOnChange}
          />
        </InputContainer>
        <InputContainer>
          Pin Code
          <Input
            type="number"
            placeholder="Enter Postal Code"
            name="pinCode"
            value={addressObject.pinCode}
            pattern="[1-9]{1}[0-9]{5}"
            required
            onChange={handleOnChange}
          />
        </InputContainer>
        <InputContainer>
          Mobile Number
          <Input
            type="tel"
            placeholder="Enter Mobile Number"
            name="phone"
            value={addressObject.mobileNo}
            pattern="[7-9]{2}[0-9]{8}"
            required
            onChange={handleOnChange}
          />
        </InputContainer>

        <div style={{display: 'flex', gap: '10px', justifyContent: 'right'}}>
          <Button
            type="button"
            style={{width: 'fit-content', padding: '5px 5px'}}
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            style={{width: 'fit-content', padding: '5px 5px'}}
            onClick={(event) => {
              event.preventDefault();
              onSave(addressObject);
              closeModal();
            }}
          >
            Save
          </Button>
        </div>
      </Container>
    </form>
  );
}
