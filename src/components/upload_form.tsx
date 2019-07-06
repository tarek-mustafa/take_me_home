import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 4px;
`

const Form = styled.form`
    flex-direction: column;
    padding: 20px;
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
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>_handleImageChange(e)}
            accept="image/*"
            />

          <button
            type="submit" 
            onClick={(e)=>_handleSubmit(e)}
            >
                Submit image
            </button>
        </Form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </Container>
  )

}

export default UploadForm;
