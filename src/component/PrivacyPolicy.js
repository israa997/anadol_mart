
import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import { Modal} from 'react-bootstrap';  //Button,

function Example() {
    const [privacy_policy, setprivacy_policy] = useState();
    const getPrivacyPolicy = useCallback( async _=>{
        const { data } = await axios.get('http://192.168.1.49:5000/api/home/privacy_policy');
        setprivacy_policy(data);
    } ,[] 
      );
    useEffect(()=> {
        getPrivacyPolicy();
    }, [getPrivacyPolicy])
    const [show, setShow] = useState(false);
  
    const toggle =() => {
        setShow(!show)
    }
return(
    <>
   
      <input type="checkbox" onClick={toggle}/>
        Privacy Policy
     {!privacy_policy ? (<p>loading....</p>): (
         <Modal show={show} onHide={toggle} >
         <Modal.Header closeButton>
 
           <Modal.Title>{privacy_policy[0].header}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
             {privacy_policy[0].content}
         </Modal.Body>
         {/* <Modal.Footer>
         <Button variant="secondary" onClick={toggle}>
             Close
           </Button>
         </Modal.Footer> */}
       </Modal>
     )}

      
    </>
)};
export {Example};
