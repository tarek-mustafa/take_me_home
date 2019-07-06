import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
`

const Form = styled.form`
    flex-direction: column;
    padding: 20px;
`

const Input = styled.input`
    font-size: 16px;
  outline: 0;
  width: 61%;
  cursor: pointer;
`

const Button = styled.button`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #fff;
  font-size: 16px;
  outline: 0;
  cursor: pointer;
`

const UploadForm: React.FC = () => {
const [file, setFile] = React.useState<{file: File, imagePreviewUrl: any }>()

 const  _handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('handle uploading-', file);
  }
  
    const _handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    e.preventDefault();
  
    let reader = new FileReader();
    let file = e.target.files![0];
  
    reader.onloadend = () => {
      setFile({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
  
    reader.readAsDataURL(file)
  }
  

  let $imagePreview = null;
  if (file && file.imagePreviewUrl) {
    $imagePreview = (<img alt="cat" style={{width: "200px"}} src={file.imagePreviewUrl} />);
  } else {
    $imagePreview = (<div >Please select an Image for Preview</div>);
  }

  return (

    
      < Container>
        <Form onSubmit={(e)=>_handleSubmit(e)}>
          <Input className="fileInput" 
            type="file" 
            onChange={(e)=>_handleImageChange(e)}
            accept="image/*"
            />

          <Button
            type="submit" 
            onClick={(e)=>_handleSubmit(e)}
            >
                Submit image
            </Button>
        </Form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </Container>
  )

}

export default UploadForm;
