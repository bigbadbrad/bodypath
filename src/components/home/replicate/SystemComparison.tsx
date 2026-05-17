import { CheckCircleOutline, Remove } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { HomeSection } from './HomeSection';

const criteria = [
  'Drilling Required',
  'Damage to Healthy Teeth',
  'Surgeries Required',
  'Treatment Time',
  'Tooth-Like Natural Shape',
  'Preserves Bone',
  'Patient Experience',
];

const columns = [
  { title: 'Traditional Bridge', values: ['No', 'Yes', '1-2+', 'Weeks', 'Moderate', 'No', 'Involves grinding healthy teeth'] },
  { title: 'Conventional Implant', values: ['Yes', 'No', '2-3+', 'Months', 'Moderate', 'Yes', 'Surgical, longer recovery'] },
  { title: 'Replicate System', values: ['No', 'No', '0-1', 'One visit', 'High', 'Yes', 'Minimally invasive, faster return to life'], emphasize: true },
];

export function SystemComparison() {
  return (
    <HomeSection backgroundColor="#FFFFFF">
      <Box sx={{ border: '1px solid #DDE8F7', borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.15fr 1fr 1fr 1fr' } }}>
          <Box sx={{ p: 2.2, backgroundColor: '#F8FBFF' }}>
            {/* Matches column header height + mb so criteria align with value rows (md+). */}
            <Typography
              variant="body1"
              aria-hidden
              sx={{
                fontWeight: 700,
                mb: 1.2,
                color: 'transparent',
                display: { xs: 'none', md: 'block' },
                lineHeight: 1.43,
              }}
            >
              Traditional Bridge
            </Typography>
            {criteria.map((row) => (
              <Typography key={row} sx={{ color: '#4C5F7E', fontSize: '0.9rem', py: 0.8 }}>{row}</Typography>
            ))}
          </Box>
          {columns.map((column) => (
            <Box key={column.title} sx={{ p: 2.2, borderLeft: { md: '1px solid #DDE8F7' }, background: column.emphasize ? 'linear-gradient(180deg, #0C2A69 0%, #2699D8 100%)' : '#FFFFFF' }}>
              <Typography sx={{ fontWeight: 700, color: column.emphasize ? '#FFFFFF' : '#0A2359', mb: 1.2 }}>{column.title}</Typography>
              {column.values.map((value, valueIndex) => (
                <Box key={`${column.title}-${valueIndex}`} sx={{ py: 0.65, display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  {column.emphasize ? <CheckCircleOutline sx={{ fontSize: 17, color: '#7BE0FF' }} /> : <Remove sx={{ fontSize: 17, color: '#9AB0CE' }} />}
                  <Typography sx={{ color: column.emphasize ? '#FFFFFF' : '#4C5F7E', fontSize: '0.9rem', fontWeight: column.emphasize ? 600 : 400 }}>{value}</Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </HomeSection>
  );
}
