'use client'

import { useEffect, useRef, useState } from 'react'
import { Instagram, ExternalLink } from 'lucide-react'

interface InstagramEmbedProps {
  url: string
  className?: string
}

// 대체 컴포넌트 - 임베드가 실패했을 때 사용
function InstagramFallback({ url }: { url: string }) {
  return (
    <div className="flex h-96 w-full max-w-sm flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-pink-400 hover:bg-pink-50">
      <Instagram className="mb-4 h-16 w-16 text-pink-500" />
      <p className="mb-2 text-center text-sm font-medium text-gray-600">인스타그램 포스트</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-600"
      >
        <ExternalLink className="h-4 w-4" />
        인스타그램에서 보기
      </a>
    </div>
  )
}

export function InstagramEmbed({ url, className = '' }: InstagramEmbedProps) {
  const embedRef = useRef<HTMLDivElement>(null)
  const [embedLoaded, setEmbedLoaded] = useState(false)
  const [embedFailed, setEmbedFailed] = useState(false)

  useEffect(() => {
    // 임베드 로딩 타이머
    const timer = setTimeout(() => {
      if (!embedLoaded) {
        setEmbedFailed(true)
      }
    }, 5000) // 5초 후 실패로 간주

    // Instagram embed script 로드
    if (typeof window !== 'undefined') {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
        setEmbedLoaded(true)
      } else {
        const script = document.createElement('script')
        script.src = '//www.instagram.com/embed.js'
        script.async = true
        script.onload = () => {
          setEmbedLoaded(true)
          if (window.instgrm) {
            window.instgrm.Embeds.process()
          }
        }
        script.onerror = () => {
          setEmbedFailed(true)
        }
        document.body.appendChild(script)
      }
    }

    return () => clearTimeout(timer)
  }, [embedLoaded])

  if (embedFailed) {
    return <InstagramFallback url={url} />
  }

  return (
    <div ref={embedRef} className={`instagram-embed ${className}`}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: '100%',
        }}
      />
    </div>
  )
}

interface InstagramSectionProps {
  posts: string[]
  title?: string
  subtitle?: string
  id?: string
}

export function InstagramSection({
  posts,
  title = '인스타그램',
  subtitle = '도시연대의 최신 소식을 인스타그램에서 확인하세요',
  id,
}: InstagramSectionProps) {
  return (
    <section id={id} className="bg-white py-20">
      <div className="border-t border-gray-200"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 font-mono text-xs text-gray-500">instagram-embed section</div>
          <div className="mt-4 pt-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Instagram className="h-8 w-8 text-pink-600" />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
            </div>
            <p className="text-lg text-gray-600">{subtitle}</p>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/urbanactionnetwork/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-medium text-white transition-all hover:from-purple-600 hover:to-pink-600 hover:shadow-lg"
              >
                <Instagram className="h-5 w-5" />
                @urbanactionnetwork의 더 많은 게시물 보기
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((postUrl, index) => (
            <div key={index} className="flex justify-center">
              <InstagramEmbed url={postUrl} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Instagram embed script를 위한 타입 선언
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}
