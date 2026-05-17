import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowForward,
  AssignmentOutlined,
  AutoAwesomeOutlined,
  BedtimeOutlined,
  FavoriteBorderOutlined,
  LockOutlined,
  PersonOutline,
  PsychologyOutlined,
  ScienceOutlined,
  ShieldOutlined,
  TrackChangesOutlined,
} from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';

const ACCENT = '#B02A24';
const INK = '#1A1A1A';
const MUTED = '#5C6470';

const features = [
  { icon: PsychologyOutlined, label: 'AI-Powered Insights' },
  { icon: ShieldOutlined, label: 'Evidence-Based Recommendations' },
  { icon: PersonOutline, label: 'Curated Provider Matching' },
  { icon: ScienceOutlined, label: 'Lab & Biomarker Guidance' },
] as const;

const priorities = [
  { icon: AutoAwesomeOutlined, label: 'Improve Energy' },
  { icon: PersonOutline, label: 'Hormone Balance' },
  { icon: BedtimeOutlined, label: 'Sleep Quality' },
] as const;

const bodyPathSteps = [
  { icon: PersonOutline, label: 'Understand', active: true },
  { icon: TrackChangesOutlined, label: 'Analyze', active: false },
  { icon: AssignmentOutlined, label: 'Plan', active: false },
  { icon: FavoriteBorderOutlined, label: 'Connect', active: false },
] as const;

function HealthScoreCard() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: { xs: 8, md: 16 },
        right: { xs: 8, md: 24 },
        bgcolor: '#fff',
        borderRadius: 2.5,
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        px: 2,
        py: 1.75,
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        zIndex: 2,
        minWidth: 200,
      }}
    >
      <Box sx={{ position: 'relative', width: 52, height: 52, flexShrink: 0 }}>
        <Box
          component="svg"
          viewBox="0 0 52 52"
          sx={{ width: 52, height: 52, transform: 'rotate(-90deg)' }}
        >
          <circle cx="26" cy="26" r="22" fill="none" stroke="#F0E8E6" strokeWidth="5" />
          <circle
            cx="26"
            cy="26"
            r="22"
            fill="none"
            stroke={ACCENT}
            strokeWidth="5"
            strokeDasharray={`${0.82 * 2 * Math.PI * 22} ${2 * Math.PI * 22}`}
            strokeLinecap="round"
          />
        </Box>
        <Typography
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: INK,
          }}
        >
          82
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: '0.7rem', color: MUTED, fontWeight: 500, lineHeight: 1.3 }}>
          Overall Health Score
        </Typography>
        <Typography sx={{ fontSize: '0.95rem', color: ACCENT, fontWeight: 700, lineHeight: 1.3 }}>
          Good
        </Typography>
      </Box>
    </Box>
  );
}

function TopPrioritiesCard() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: { xs: 88, md: 108 },
        right: { xs: 8, md: 32 },
        bgcolor: '#fff',
        borderRadius: 2.5,
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        px: 2,
        py: 1.75,
        zIndex: 2,
        minWidth: 188,
      }}
    >
      <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: INK, mb: 1.25 }}>
        Top Priorities
      </Typography>
      <Stack spacing={1}>
        {priorities.map(({ icon: Icon, label }) => (
          <Stack key={label} direction="row" alignItems="center" spacing={1}>
            <Icon sx={{ fontSize: 18, color: ACCENT }} />
            <Typography sx={{ fontSize: '0.82rem', color: INK, fontWeight: 500 }}>{label}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

function YourBodyPathCard() {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: { xs: 12, md: 20 },
        right: { xs: 8, md: 20 },
        left: { xs: 8, md: 'auto' },
        bgcolor: '#2B2B2B',
        borderRadius: 2.5,
        boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
        px: 2.5,
        py: 2,
        zIndex: 3,
        maxWidth: 320,
        width: { xs: 'calc(100% - 16px)', md: 300 },
      }}
    >
      <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 1.75 }}>
        Your BodyPath
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.5, position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 14,
            left: '12%',
            right: '12%',
            height: 2,
            bgcolor: 'rgba(255,255,255,0.15)',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 14,
            left: '12%',
            width: '28%',
            height: 2,
            bgcolor: ACCENT,
            zIndex: 0,
          }}
        />
        {bodyPathSteps.map(({ icon: Icon, label, active }) => (
          <Box key={label} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.75, flex: 1, zIndex: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: active ? ACCENT : 'rgba(255,255,255,0.12)',
                color: active ? '#fff' : 'rgba(255,255,255,0.55)',
              }}
            >
              <Icon sx={{ fontSize: 17 }} />
            </Box>
            <Typography sx={{ fontSize: '0.62rem', color: active ? '#fff' : 'rgba(255,255,255,0.55)', fontWeight: active ? 600 : 400, textAlign: 'center' }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography sx={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.78rem', lineHeight: 1.5 }}>
        We turn your health data into clear answers and personalized next steps.
      </Typography>
    </Box>
  );
}

export function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#ffffff',
        pt: { xs: 4, md: 6 },
        pb: { xs: 4, lg: 0 },
        overflow: 'visible',
      }}
    >
      <Box
        sx={{
          maxWidth: 1220,
          width: '100%',
          mx: 'auto',
          px: { xs: 2, md: 3 },
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: { lg: 'stretch' },
          gap: { xs: 5, lg: 2 },
          pb: { xs: 4, lg: 4 },
        }}
      >
        <Box sx={{ width: { xs: '100%', lg: '42%' }, flex: { lg: '0 0 42%' }, minWidth: 0, pr: { lg: 1 }, pt: { lg: 2 } }}>
          <Typography
            sx={{
              color: ACCENT,
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              mb: 1.5,
            }}
          >
            AI-Powered. Expert-Guided. Personalized for You.
          </Typography>
          <Typography
            component="h1"
            sx={{
              color: INK,
              fontSize: { xs: '2.25rem', md: '3.15rem' },
              lineHeight: 1.12,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              maxWidth: 560,
            }}
          >
            Understand your body.
            <br />
            Find your best path forward.
          </Typography>
          <Typography sx={{ color: MUTED, fontSize: { xs: '1rem', md: '1.05rem' }, lineHeight: 1.65, mt: 2.5, maxWidth: 520 }}>
            BodyPath combines AI and medical expertise to analyze your symptoms, labs, and goals—then connects you with the
            right tests, treatments, and providers for you.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'stretch', sm: 'center' }} spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: ACCENT,
                borderRadius: 999,
                px: 3,
                py: 1.35,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#96231E', boxShadow: 'none' },
              }}
            >
              Get Your Personalized BodyPath
            </Button>
            <Typography
              component={Link}
              href="#how-it-works"
              sx={{
                color: INK,
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': { color: ACCENT },
              }}
            >
              How It Works
              <ArrowForward sx={{ fontSize: 18, color: ACCENT }} />
            </Typography>
          </Stack>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
              gap: { xs: 2.5, md: 2 },
              mt: 5,
              pt: 4,
              borderTop: '1px solid #E8E4DF',
            }}
          >
            {features.map(({ icon: Icon, label }) => (
              <Box key={label}>
                <Icon sx={{ fontSize: 28, color: ACCENT, mb: 1 }} />
                <Typography sx={{ fontSize: '0.88rem', fontWeight: 600, color: INK, lineHeight: 1.35 }}>{label}</Typography>
              </Box>
            ))}
          </Box>
          <Stack direction="row" alignItems="center" spacing={0.75} sx={{ mt: 3 }}>
            <LockOutlined sx={{ fontSize: 16, color: MUTED }} />
            <Typography sx={{ fontSize: '0.82rem', color: MUTED }}>
              Private. Secure. Your data is always protected.
            </Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', lg: '58%' },
            flex: { lg: '1 1 58%' },
            minWidth: 0,
            position: 'relative',
            minHeight: { xs: 480, sm: 560 },
            overflow: 'visible',
          }}
        >
          <Box
            sx={{
              position: { xs: 'relative', lg: 'absolute' },
              bottom: { lg: 0 },
              right: { md: -32, lg: -56 },
              zIndex: 1,
              width: { xs: '100%', sm: 520, md: 640, lg: 760 },
              maxWidth: 'none',
              mx: { xs: 'auto', lg: 0 },
              transform: {
                xs: 'scale(1.08)',
                sm: 'scale(1.15)',
                md: 'scale(1.28)',
                lg: 'scale(1.42) translateX(20px)',
              },
              transformOrigin: { xs: 'bottom center', lg: 'bottom right' },
              lineHeight: 0,
              '& img': {
                width: '100%',
                height: 'auto',
                display: 'block',
              },
            }}
          >
            <Image
              src="/hero-brunette.png"
              alt="Woman smiling — BodyPath personalized health guidance"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1200px) 100vw, 58vw"
            />
          </Box>
          <Box sx={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', '& > *': { pointerEvents: 'auto' } }}>
            <HealthScoreCard />
            <TopPrioritiesCard />
            <YourBodyPathCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
