import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ekkos Technologies Inc. — AI Memory Infrastructure';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0a0f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'monospace',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            display: 'flex',
          }}
        />

        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '24px' }}>
          <span style={{ fontSize: '72px', fontWeight: 700, color: '#00f0ff', letterSpacing: '-2px' }}>
            ekkOS
          </span>
          <span style={{ fontSize: '72px', fontWeight: 700, color: '#ffb800' }}>_</span>
        </div>

        <div
          style={{
            fontSize: '24px',
            color: '#e8e8f0',
            fontWeight: 600,
            marginBottom: '12px',
            display: 'flex',
          }}
        >
          Ekkos Technologies Inc.
        </div>

        <div
          style={{
            fontSize: '18px',
            color: '#6a6a7e',
            maxWidth: '550px',
            textAlign: 'center',
            lineHeight: 1.6,
            display: 'flex',
          }}
        >
          The cognitive substrate and memory infrastructure for agents, robotics, and enterprise AI systems.
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '18px',
            color: '#3a3a4e',
            letterSpacing: '3px',
            display: 'flex',
          }}
        >
          ekkos.ca
        </div>
      </div>
    ),
    { ...size }
  );
}
