import React from 'react';
import styled from "styled-components"
import UploadForm from './components/upload_form';


const Container = styled.div`
  display:flex;
  padding: 20px;

`


const App: React.FC = () => {


  return (
      <Container >
        <UploadForm />
      </Container>
  )

}

export default App;
