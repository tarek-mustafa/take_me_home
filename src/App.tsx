import React from 'react';
import styled from "styled-components"


const Container = styled.div`
  display:flex;
`


const App: React.FC = () => {

const [file, setFile] = 
React.useState<{file: File, imagePreviewUrl: any }>()

 const  _handleSubmit = (e: any) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
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

    
      <Container >
        <form onSubmit={(e)=>_handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>_handleImageChange(e)} 
            />

          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>_handleSubmit(e)}>Submit image
            </button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </Container>
  )

}

export default App;
