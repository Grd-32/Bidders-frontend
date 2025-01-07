import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, Modal, Box, TextField } from '@mui/material';
import axios from 'axios';

const Tenders = () => {
  const [tenders, setTenders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    BDR_No: '',
    Tender_No: '',
    Tender_Brief: '',
    Purchasing_Authority: '',
    Work_Detail: '',
    CompetitionType: '',
    Tender_Value: '',
    Tender_Category: '',
    Funding: '',
    Geographical_Addresses: '',
    Country: '',
    Tender_Expiry: '',
    FileUrl: '',
    EntryDate: '',
    TUID: '',
  });

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await axios.get('/api/admin/tenders');
        setTenders(res.data);
      } catch (err) {
        console.error('Error fetching tenders', err);
      }
    };

    fetchTenders();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTender = async () => {
    try {
      await axios.post('/api/admin/tenders', formData);
      setTenders([...tenders, formData]);
      setOpenModal(false);
      setFormData({
        BDR_No: '',
        Tender_No: '',
        Tender_Brief: '',
        Purchasing_Authority: '',
        Work_Detail: '',
        CompetitionType: '',
        Tender_Value: '',
        Tender_Category: '',
        Funding: '',
        Geographical_Addresses: '',
        Country: '',
        Tender_Expiry: '',
        FileUrl: '',
        EntryDate: '',
        TUID: '',
      });
    } catch (err) {
      console.error('Error adding tender', err);
    }
  };

  return (
    <div>
      <Typography variant="h4">Manage Tenders</Typography>
      <Button variant="contained" color="primary" onClick={() => setOpenModal(true)} sx={{ mb: 2 }}>
        Add Tender
      </Button>
      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>BDR No</TableCell>
            <TableCell>Tender Brief</TableCell>
            <TableCell>Purchasing Authority</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Tender Expiry</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenders.map((tender) => (
            <TableRow key={tender.TUID}>
              <TableCell>{tender.BDR_No}</TableCell>
              <TableCell>{tender.Tender_Brief}</TableCell>
              <TableCell>{tender.Purchasing_Authority}</TableCell>
              <TableCell>{tender.Tender_Category}</TableCell>
              <TableCell>{tender.Country}</TableCell>
              <TableCell>{new Date(tender.Tender_Expiry).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary">Edit</Button>
                <Button variant="contained" color="error" sx={{ ml: 1 }}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal for Adding Tenders */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{ p: 4, backgroundColor: 'white', margin: 'auto', mt: '10%', width: 600, borderRadius: 2 }}>
          <Typography variant="h6">Add New Tender</Typography>
          <TextField
            label="BDR No"
            name="BDR_No"
            value={formData.BDR_No}
            onChange={handleInputChange}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Tender Brief"
            name="Tender_Brief"
            value={formData.Tender_Brief}
            onChange={handleInputChange}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Purchasing Authority"
            name="Purchasing_Authority"
            value={formData.Purchasing_Authority}
            onChange={handleInputChange}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Category"
            name="Tender_Category"
            value={formData.Tender_Category}
            onChange={handleInputChange}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Country"
            name="Country"
            value={formData.Country}
            onChange={handleInputChange}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Tender Expiry"
            name="Tender_Expiry"
            type="date"
            value={formData.Tender_Expiry}
            onChange={handleInputChange}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="File URL"
            name="FileUrl"
            value={formData.FileUrl}
            onChange={handleInputChange}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="TUID"
            name="TUID"
            value={formData.TUID}
            onChange={handleInputChange}
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} onClick={handleAddTender}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Tenders;
