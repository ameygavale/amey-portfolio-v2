const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.ogg']

export function resolveMediaUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const base = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, '')

  if (base) {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return `${base}/${cleanPath}`
  }

  if (path.startsWith('/')) {
    return path
  }

  return `/videos/${path}`
}

export function isHostedVideoUrl(url: string): boolean {
  try {
    const parsed = new URL(url, 'http://localhost')
    const pathname = parsed.pathname.toLowerCase()
    return VIDEO_EXTENSIONS.some((extension) => pathname.endsWith(extension))
  } catch {
    return VIDEO_EXTENSIONS.some((extension) => url.toLowerCase().endsWith(extension))
  }
}

export function getEmbeddedVideoUrl(url: string): string | null {
  try {
    const parsed = new URL(url)
    const host = parsed.hostname.replace('www.', '')

    if (host === 'youtu.be') {
      const videoId = parsed.pathname.replace('/', '')
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }

    if (host === 'youtube.com') {
      if (parsed.pathname === '/watch') {
        const videoId = parsed.searchParams.get('v')
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null
      }

      if (parsed.pathname.startsWith('/embed/')) {
        return url
      }

      if (parsed.pathname.startsWith('/shorts/')) {
        const segments = parsed.pathname.split('/')
        const videoId = segments[segments.length - 1]
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null
      }
    }

    return isHostedVideoUrl(url) ? url : null
  } catch {
    return null
  }
}

export function normalizeMediaPaths(media?: string | string[] | null): string[] {
  if (!media) {
    return []
  }

  return (Array.isArray(media) ? media : [media]).filter(Boolean)
}
