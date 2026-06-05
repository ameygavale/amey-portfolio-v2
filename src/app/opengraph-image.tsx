import { ImageResponse } from 'next/og'

import { SITE_CONFIG } from '@/lib/constants'

export const runtime = 'edge'
export const alt = `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a4f 45%, #0c4a6e 100%)',
          color: '#f8fafc',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '9999px',
              background: '#4ade80',
              boxShadow: '0 0 12px rgba(74, 222, 128, 0.6)',
            }}
          />
          <span style={{ fontSize: 22, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8 }}>
            stack online
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            {SITE_CONFIG.name}
          </div>
          <div style={{ fontSize: 34, color: '#7dd3fc', maxWidth: '820px' }}>{SITE_CONFIG.tagline}</div>
          <div style={{ fontSize: 24, color: '#cbd5e1', maxWidth: '900px', lineHeight: 1.4 }}>
            {SITE_CONFIG.hook}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {['ROS2', 'Perception', 'SLAM', 'Autonomy'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '10px 18px',
                borderRadius: '8px',
                border: '1px solid rgba(125, 211, 252, 0.35)',
                background: 'rgba(15, 23, 42, 0.45)',
                fontSize: 20,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
