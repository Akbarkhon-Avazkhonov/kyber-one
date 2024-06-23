'use client';
import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SearchIcon from '@mui/icons-material/Search';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BlockIcon from '@mui/icons-material/Block';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CopyText from '@/components/ui/CopyText';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded';
import KyberOneIcon from '@/components/ui/KyberOneIcon';
import { testStudentsData } from '../testData';
import { FormLabel, Select } from '@mui/joy';
import Option from '@mui/joy/Option';
import SortIcon from '@mui/icons-material/Sort';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

import SwapVertRounded from '@mui/icons-material/SwapVertRounded';
export default function OrderTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(testStudentsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSearch = (event:any) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredData(
      testStudentsData.filter((student) =>
        student.customer.name.toLowerCase().includes(query)
      )
    );
    setCurrentPage(1); // Reset to first page on search
  };

  const handlePageChange = (newPage:any) => {
    setCurrentPage(newPage);
  };

  const handleRecordsPerPageChange = (
    event: React.SyntheticEvent | null,
    newValue: number | null,
  ) => {
    setRecordsPerPage(parseInt(String(newValue), 10));
    console.log(newValue);
    setCurrentPage(1); // Reset to first page on records per page change
  };

  const handleSort = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);

    const sortedData = [...filteredData].sort((a:any, b:any) => {
      const kyberA = a.kyberones || 0;
      const kyberB = b.kyberones || 0;

      if (newDirection === 'asc') {
        return kyberA - kyberB;
      } else {
        return kyberB - kyberA;
      }
    });

    setFilteredData(sortedData);
  };

  const totalPages = Math.max(1, Math.ceil(filteredData.length / recordsPerPage)); // Ensure totalPages is at least 1
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + recordsPerPage);

  return (
    <>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: 'sm',
          py: 2,
          display: { xs: 'none', sm: 'flex' },
          flexWrap: 'wrap',
          gap: 1.5,
          '& > *': {
            minWidth: { xs: '120px', md: '160px' },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <Input
            size="sm"
            placeholder="Поиск студента"
            startDecorator={<SearchIcon />}
            value={searchQuery}
            onChange={handleSearch}
            sx={{ borderColor: '#00A4A6' }}
          />
        </FormControl>
      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: 'none', sm: 'initial' },
          width: '100%',
          borderRadius: 'sm',
          flexShrink: 1,
          overflow: 'auto',
          minHeight: 0,
          // borderColor: '#00A4A6',
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          stickyFooter
          hoverRow
          sx={{
            '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
            '--Table-headerUnderlineThickness': '1px',
            '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
            '--TableCell-paddingY': '8px',
            '--TableCell-paddingX': '8px',
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 64, textAlign: 'center', padding: '12px 6px' }}>
                <NumbersRoundedIcon />
              </th>
              <th style={{ width: 140, padding: '12px 6px' }}>
                Ф.И.О.
              </th>
              <th style={{ width: 140, padding: '12px 6px' }}>Логин</th>
              <th style={{ width: 40, padding: '12px 6px' }}></th>
              <th style={{ width: 140, padding: '12px 6px' }}>Статус</th>
              <th style={{ width: 140, padding: '12px 6px', cursor: 'pointer' }} onClick={handleSort}>
                Киберваны  <SwapVertRounded />
              </th>
              <th style={{ width: 140, padding: '12px 6px' }}>Группа</th>
              <th style={{ width: 140, padding: '12px 6px' }}>Родители</th>
              <th style={{ width: 80, padding: '12px 6px', textAlign: 'center' }}>
                <SettingsRoundedIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row) => (
              <tr key={row.id}>
                <td style={{ textAlign: 'center', width: 120 }}>
                  {row.id}
                </td>
                <td>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Avatar size="sm">{row.customer.name[0]}</Avatar>
                    <Typography level="body-xs">{row.customer.name}</Typography>
                  </Box>
                </td>
                <td>
                  <Typography level="body-xs">{row.customer.email}</Typography>
                </td>
                <td >
                  <Typography level="body-xs"><CopyText textToCopy={row.customer.email} /></Typography>
                </td>
                <td>
                  <Chip
                    size="sm"
                    variant={row.isActive ? 'soft' : 'outlined'}
                    color={row.isActive ? 'success' : 'danger'}
                    startDecorator={row.isActive ? <CheckRoundedIcon /> : <BlockIcon />}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {row.isActive ? 'Активен' : 'Неактивен'}
                  </Chip>
                </td>
                <td>
                  <KyberOneIcon />
                  <strong> {row.kyberones}</strong>
                </td>
                <td>
                  <Typography level="body-xs">ИМЯ ГРУППЫ</Typography>
                </td>
                <td>
                  <Typography level="body-xs">ИМЯ РОДИТЕЛЕЙ</Typography>
                </td>
                <td style={{
                  textAlign: 'center',
                }}>
                  <EditRoundedIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <Box
        className="Pagination"
        sx={{
          pt: 2,
          gap: 1,
          display: {
            xs: 'none',
            md: 'flex',
          },
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          bottom: 0,
          borderTop: '1px solid #ccc',
          p: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Показать:</Typography>
          <Select
            size="sm"
            value={recordsPerPage}
            defaultValue = {25}
            onChange={handleRecordsPerPageChange}
            indicator = {
              <SwapVertRounded sx={{color:'white'}}/>
            }
            sx={{ ml: 2, minWidth: 80,  color: 'white',
              backgroundColor: '#00A4A6',
              ':hover': {
                backgroundColor: '#008284',
              },
            }}
            
          >
            {[5, 10, 25, 50].map((option) => (
              <Option key={option} value={option}>{option}</Option>
            ))}
          </Select>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            startDecorator={<KeyboardArrowLeftIcon />}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            sx={{
              color: '#00A4A6',
              borderColor: '#00A4A6',
            }}
          >
            До
          </Button>

          <Box sx={{ mx: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            {Array.from({ length: totalPages }, (_, index) => index + 1).slice(0, 10).map((page) => (
              <IconButton
                key={page}
                size="sm"
                variant={page === currentPage ? 'solid' : 'outlined'}
                color="neutral"
                onClick={() => handlePageChange(page)}
                sx={{
                  color: page === currentPage ? 'white' : '#00A4A6',
                  borderColor: '#00A4A6',
                  backgroundColor: page === currentPage ? '#00A4A6' : 'inherit',
                }}
              >
                {page}
              </IconButton>
            ))}
          </Box>

          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            endDecorator={<KeyboardArrowRightIcon />}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            sx={{
              color: '#00A4A6',
              borderColor: '#00A4A6',
            }}
          >
            После
          </Button>
        </Box>
      </Box>
    </>
  );
}
