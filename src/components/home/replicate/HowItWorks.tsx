import type { SvgIconComponent } from '@mui/icons-material';
import { AssignmentTurnedIn, CloudUpload, MedicalServices, Monitor } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { HomeSection } from './HomeSection';

const steps: { Icon: SvgIconComponent; title: string; body: string }[] = [
  { Icon: CloudUpload, title: 'Scan & Submit', body: 'Send CBCT + intraoral scan through our portal.' },
  { Icon: Monitor, title: 'Review & Approve', body: 'We design your custom tooth replacement.' },
  { Icon: MedicalServices, title: 'Extract & Place', body: 'Remove the tooth and place immediately.' },
  { Icon: AssignmentTurnedIn, title: 'Heal & Restore', body: 'Osseointegrates naturally. Restore with confidence.' },
];

export function HowItWorks() {
  return (
    <HomeSection
      title="How It Works"
      titleAlign="center"
      backgroundColor="#FFFFFF"
      sectionSx={{ py: { xs: 10, md: 13 } }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          columnGap: { xs: 3, md: 4 },
          rowGap: { xs: 3, sm: 3.5 },
        }}
      >
        {steps.map(({ Icon, title, body }, index) => (
          <Box key={title} sx={{ minWidth: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 2 }}>
              <Box
                sx={{
                  flexShrink: 0,
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  bgcolor: '#000000',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {index + 1}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 1.75, flex: 1, minWidth: 0 }}>
                <Icon sx={{ flexShrink: 0, fontSize: 40, color: '#55B4DF', mt: 0.15 }} />
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ color: '#0A2359', fontWeight: 700, mb: 0.6, fontSize: '0.95rem', lineHeight: 1.35 }}>
                    {title}
                  </Typography>
                  <Typography sx={{ color: '#4C5F7E', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    {body}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </HomeSection>
  );
}
