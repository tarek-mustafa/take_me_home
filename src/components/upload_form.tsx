import React from 'react';
import styled from 'styled-components';
import axios from "axios"

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
const [image, setImage] = React.useState<File>()
const [url, setImageUrl] = 
React.useState<string>()

const _handleSubmit = (e: any) => {
  e.preventDefault();
  
    const imageFromObj = new FormData()
    imageFromObj.append("image", image!);
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    };

    axios.post("http://localhost:3000/upload",imageFromObj, config)
    .then((res) =>
    {
      console.log(res)
     setImageUrl(`http://localhost:3000/images/${res.data.filename}`)
    }
    )
  }
  
    const _handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    e.preventDefault();
  
    let reader = new FileReader();
    let file: File | undefined
    if( e.target && e.target.files  && e.target.files.length > 0){
      
      file = e.target.files[0];
      reader.onloadend = () => {

        setImage(file);
  
        setImageUrl( reader.result as string ) 
      }
    
      reader.readAsDataURL(file)
    }
  
  }
  

  let $imagePreview = null;
  if (url) {
    $imagePreview = (<img alt="cat" style={{width: "200px"}} src={url} />);
  } else {
    $imagePreview = (<div >Please select an Image for Preview</div>);
  }

  return (

    
      < Container>
        <Form onSubmit={(e)=>_handleSubmit(e)}>
          <Input 
            name="image"
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
