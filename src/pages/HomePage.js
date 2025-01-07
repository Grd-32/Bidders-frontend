import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTenders } from '../services/api';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Button,
  TextField,
  MenuItem,
  Divider,
  Pagination,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[4],
  },
}));

const StyledTenderBrief = styled(Typography)(({ theme }) => ({
  transition: 'color 0.2s',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const HomePage = () => {
  const [tenders, setTenders] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [filteredTenders, setFilteredTenders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    title: '',
    category: '',
    country: '',
    method: '',
    startDate: '',
    endDate: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const tendersPerPage = 20;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTendersData = async () => {
      setLoading(true);
      try {
        const { data } = await fetchTenders();
        setTenders(data);
        setFilteredTenders(data);

        const uniqueCategories = [...new Set(data.map((tender) => tender.Tender_Category))];
        setCategories(uniqueCategories);

        const uniqueCountries = [...new Set(data.map((tender) => tender.Country))];
        setCountries(uniqueCountries);
      } catch (err) {
        setError('Error loading tenders.');
      } finally {
        setLoading(false);
      }
    };

    fetchTendersData();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilters = () => {
    let filtered = [...tenders];

    if (filters.title) {
      filtered = filtered.filter((tender) =>
        tender.Tender_Brief.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter(
        (tender) => tender.Tender_Category === filters.category
      );
    }

    if (filters.method) {
      filtered = filtered.filter(
        (tender) => tender.CompetitionType === filters.method
      );
    }

    if (filters.country) {
      filtered = filtered.filter((tender) => tender.Country === filters.country);
    }

    if (filters.startDate) {
      filtered = filtered.filter(
        (tender) => new Date(tender.Tender_Expiry) >= new Date(filters.startDate)
      );
    }

    if (filters.endDate) {
      filtered = filtered.filter(
        (tender) => new Date(tender.Tender_Expiry) <= new Date(filters.endDate)
      );
    }

    setFilteredTenders(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const renderPagination = () => (
    <Box display="flex" justifyContent="center" my={2}>
      <Pagination
        count={Math.ceil(filteredTenders.length / tendersPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </Box>
  );

  const indexOfLastTender = currentPage * tendersPerPage;
  const indexOfFirstTender = indexOfLastTender - tendersPerPage;
  const currentTenders = filteredTenders.slice(
    indexOfFirstTender,
    indexOfLastTender
  );

  const Filters = () => (
    <Box
      sx={{
        width: isSmallScreen ? 300 : '20%',
        backgroundColor: '#f5f5f5',
        padding: 3,
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <TextField
        label="Search by Keyword"
        name="title"
        variant="outlined"
        size="small"
        fullWidth
        value={filters.title}
        onChange={handleFilterChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Category"
        name="category"
        select
        variant="outlined"
        size="small"
        fullWidth
        value={filters.category}
        onChange={handleFilterChange}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">All Categories</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Procurement Method"
        name="method"
        select
        variant="outlined"
        size="small"
        fullWidth
        value={filters.method}
        onChange={handleFilterChange}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">All Methods</MenuItem>
        <MenuItem value="ICB">ICB</MenuItem>
        <MenuItem value="NCB">NCB</MenuItem>
      </TextField>
      <TextField
        label="Country"
        name="country"
        select
        variant="outlined"
        size="small"
        fullWidth
        value={filters.country}
        onChange={handleFilterChange}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">All Countries</MenuItem>
        {countries.map((country) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        size="small"
        fullWidth
        value={filters.startDate}
        onChange={handleFilterChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="End Date"
        name="endDate"
        type="date"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        size="small"
        fullWidth
        value={filters.endDate}
        onChange={handleFilterChange}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleApplyFilters}
      >
        Apply Filters
      </Button>
    </Box>
  );

  if (loading) return <Typography>Loading tenders...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box display="flex" flexDirection="row" minHeight="100vh">
      {isSmallScreen ? (
        <>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Filters />
          </Drawer>
          <IconButton
            color="primary"
            onClick={() => setDrawerOpen(true)}
            sx={{ m: 2, top: 0 }}
          >
            <FilterAltIcon />
          </IconButton>
        </>
      ) : (
        <Filters />
      )}

      <Box
        sx={{
          flex: 1,
          padding: 3,
          overflowY: 'auto',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Available Tenders {tenders.length}
        </Typography>

        {renderPagination()}

        <Grid container spacing={2}>
          {currentTenders.map((tender, index) => (
            <Grid item xs={12} key={tender.BDR_No}>
              <StyledCard>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    Tender - {String(indexOfFirstTender + index + 1).padStart(3, '0')}
                  </Typography>
                  <StyledTenderBrief variant="h6">
                    {tender.Tender_Brief}
                  </StyledTenderBrief>
                  <Typography variant="body2" color="textSecondary">
                    Reference: {tender.BDR_No}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Country: {tender.Country}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Method: {tender.CompetitionType}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Category: {tender.Tender_Category}
                  </Typography>
                  <Typography variant="body2" color="error" fontWeight="bold">
                    Closing: {new Date(tender.Tender_Expiry).toLocaleString()}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/checkout/${tender.BDR_No}`)}
                  >
                    Ksh 402 - Get Tender Information
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {renderPagination()}
      </Box>
    </Box>
  );
};

export default HomePage;
