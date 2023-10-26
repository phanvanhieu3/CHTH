import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function CustomModal({ isOpen, onClose, children }) {
  return (
    <StyledModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ width: 400, bgcolor: "background.paper", boxShadow: 24, p: 4 }}>{children}</Box>
    </StyledModal>
  );
}

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

CustomModal.defaultProps = {
  children: null, // Giá trị mặc định cho children
};

export default CustomModal;
