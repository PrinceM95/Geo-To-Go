import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;

// import Modal from "react-bootstrap/Modal";

// const Popup = () => {

//     return ( 
//     <div>
//         <Modal.Dialog>
//             <Modal.Header>This is header</Modal.Header>
//             <Modal.Body>Body</Modal.Body>
//             <Modal.Footer><button>Okay</button></Modal.Footer>
//         </Modal.Dialog>
//     </div>
//     );
// }
// export default Popup;