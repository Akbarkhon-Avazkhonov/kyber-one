import { Box, Button, Typography } from "@mui/joy";
import PersonAddAlt from '@mui/icons-material/PersonAddAlt1Rounded';
import OrderTable from "./OrderTable";
export default function Page() {
    return (   
      <Box
        component="main"
        className="MainContent"
        sx={{
          px: { xs: 2, md: 6 },
          pt: {
            xs: 'calc(12px + var(--Header-height))',
            sm: 'calc(12px + var(--Header-height))',
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          height: '100dvh',
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            mb: 1,
            gap: 1,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'start', sm: 'center' },
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
            <Typography level="h2" component="h1">
              Студенты
            </Typography>
            <Button
              startDecorator={<PersonAddAlt />}
              size="sm"
              sx={{
                backgroundColor: '#00A4A6',
                ':hover': {
                  backgroundColor: '#008284'
                }
              }}
            >
              Добавить куратора
            </Button>
        </Box>
        <OrderTable />
    </Box>
    );
    }