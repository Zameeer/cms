import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import './SignInModal.css';

interface SignInModalProps {
  show: boolean;
  handleClose: () => void;
  signInAs: string;
}

const SignInModal: React.FC<SignInModalProps> = ({ show, handleClose, signInAs }) => {
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleSignIn = () => {
    // Perform any authentication logic here (optional)
    handleClose();  // Close the modal first
    navigate('/dashboard');  // Redirect to dashboard after signing in
  };

  return (
    <Modal show={show} onHide={handleClose} centered dialogClassName="custom-signin-modal">
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>Sign In as {signInAs}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label className="input-label">User ID</Form.Label>
            <Form.Control type="email" placeholder="Enter user ID" className="input-field" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label className="input-label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="input-field" />
          </Form.Group>

          <Form.Text className="text-muted forgot-password-link">
            <a href="#">Forgot password?</a>
          </Form.Text>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer-custom">
        <Button variant="secondary" onClick={handleClose} className="btn-cancel">
          Close
        </Button>
        <Button variant="primary" onClick={handleSignIn} className="btn-signin">
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignInModal;
