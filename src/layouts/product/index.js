import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";
// import { Link } from "@mui/material";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import DataTable from "examples/Tables/DataTable";

import authorsTableData from "layouts/product/data/authorsTableData";
import CustomModal from "components/modal";
import { useState } from "react";

function Product() {
  const { columns, rows } = authorsTableData();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log("vao");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                bgColor="info"
                borderRadius="lg"
                pt={2}
                px={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" color="white">
                  Hàng hóa
                </MDTypography>
                <MDButton
                  // href="/HangHoa/Them"
                  onClick={openModal}
                  variant="gradient"
                  color="success"
                >
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  Thêm
                </MDButton>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2 id="modal-title">Nội dung modal ở đây</h2>
          <p id="modal-description">Mô tả modal.</p>
        </div>
      </CustomModal>
    </DashboardLayout>
  );
}

export default Product;
