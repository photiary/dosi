'use client'

import { Button } from '@workspace/ui/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Separator } from '@workspace/ui/components/separator'
import { NewsCard } from '@/components/news-card'
import { SkeletonCard } from '@/components/skeleton-card'
import { useEffect, useRef, useState } from 'react'
import { animate } from 'animejs'
import { Users, Home, Palette, MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react'

// 정적 자산 경로를 올바르게 처리하는 유틸리티 함수
const getAssetPath = (path: string) => {
  return process.env.NODE_ENV === 'production' ? `/dosi${path}` : path
}

// 샘플 새소식 데이터
const newsData = [
  {
    title: '"역삼에서 만나요" 공개공지 유람단',
    subtitle: '<공개공지 유람단>을 모집합니다🙋‍♀️!🚩',
    location: '서울시 역삼역',
    period: '2025.9.25 (목) 신청마감',
    description:
      '지난 6월 진행된 <도시연대의 도시산책: 공개공지>에 이어, 도시연대와 예술하는모양이 함께하는 건축×조경×예술 투어〈공개공지 유람단〉을 시작합니다.',
    thumbnail: 'https://img2.stibee.com/3418_2987290_1757311316140156849.png',
    link: 'https://stibee.com/api/v1.0/emails/share/w1spUm4Z_4uvT9HJkxtHsUYYGeay4nc',
    backgroundPattern: getAssetPath('/patterns/card-bg-1.svg'),
  },
  {
    title: '보행권 확보 캠페인 - 안전한 보행로 만들기',
    subtitle: '시민 참여형 도시 개선 프로젝트',
    location: '강남구 테헤란로 일대',
    period: '2024.12.20 (금) 10:00-16:00',
    description:
      '자동차 중심의 도로를 사람 중심의 보행로로 바꾸는 캠페인입니다. 현장 조사와 시민 의견 수렴을 통해 구체적인 개선안을 제시합니다.',
    thumbnail: getAssetPath('/placeholder.svg'),
    backgroundPattern: getAssetPath('/patterns/card-bg-2.svg'),
  },
  {
    title: '마을만들기 워크숍 - 우리 동네 이야기',
    subtitle: '지역사회 주민 참여 프로그램',
    location: '마포구 연남동 커뮤니티센터',
    period: '2024.12.22 (일) 13:00-18:00',
    description:
      '우리가 살고 있는 마을의 역사와 문화를 되돌아보고, 앞으로 어떤 마을을 만들어갈지 함께 고민하는 시간입니다.',
    thumbnail: getAssetPath('/placeholder.svg'),
    backgroundPattern: getAssetPath('/patterns/card-bg-3.svg'),
  },
]

export default function Page() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initAnimations = async () => {
      // 타이틀 애니메이션
      if (titleRef.current) {
        animate(titleRef.current, {
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutExpo',
        })
      }

      // 부제목 애니메이션
      if (subtitleRef.current) {
        animate(subtitleRef.current, {
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: 300,
          easing: 'easeOutExpo',
        })
      }

      // 버튼 애니메이션
      if (buttonRef.current) {
        animate(buttonRef.current, {
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: 600,
          easing: 'easeOutExpo',
        })
      }

      // 로딩 완료 후 카드 애니메이션
      setTimeout(() => {
        setIsLoading(false)

        // 새소식 카드 애니메이션 - 더 빠르고 부드럽게
        if (newsRef.current?.children) {
          const children = Array.from(newsRef.current.children)
          children.forEach((child, index) => {
            animate(child as HTMLElement, {
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 600,
              delay: index * 100, // 더 빠른 순차 로딩
              easing: 'easeOutCubic',
            })
          })
        }
      }, 800) // 초기 로딩 시간
    }

    initAnimations()
  }, [])

  return (
    <div
      className="text-optimized min-h-screen scroll-smooth bg-white"
      style={{
        backgroundImage: `
        linear-gradient(45deg, transparent 48%, rgba(251, 146, 60, 0.03) 49%, rgba(251, 146, 60, 0.03) 51%, transparent 52%),
        linear-gradient(-45deg, transparent 48%, rgba(251, 146, 60, 0.03) 49%, rgba(251, 146, 60, 0.03) 51%, transparent 52%)
      `,
        backgroundSize: '12px 12px',
        backgroundPosition: '0 0, 0 6px',
      }}
    >
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-900">걷고싶은도시만들기시민연대</div>
            <div className="hidden space-x-8 md:flex">
              <a href="#intro" className="font-medium text-gray-600 transition-colors hover:text-gray-900">
                소개
              </a>
              <a href="#news" className="font-medium text-gray-600 transition-colors hover:text-gray-900">
                새소식
              </a>
              <a href="#activities" className="font-medium text-gray-600 transition-colors hover:text-gray-900">
                활동소개
              </a>
              <a href="#support" className="font-medium text-gray-600 transition-colors hover:text-gray-900">
                도시연대후원하기
              </a>
            </div>
            <Button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
              정기후원하기
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="intro"
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-0 top-0 font-mono text-xs text-gray-400">
              bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
            </div>
            <div className="text-center">
              <h1 ref={titleRef} className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                걷고 싶은 도시가
                <span className="block text-blue-400">살고 싶은 도시다</span>
              </h1>
              <p ref={subtitleRef} className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
                도시에 다양한 사람들이 함께 오래 살아갈 수 있는 인간환경을 회복함으로써 삶의 질을 개선하고
                <br />
                도시문화 역사를 보존, 창조해 나가는 시민운동입니다.
              </p>
              <div ref={buttonRef} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  정기후원하기
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg border-white px-8 py-4 font-medium text-white transition-colors hover:bg-white hover:text-slate-900"
                >
                  활동 참여하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section
        id="news"
        className="relative overflow-hidden bg-gray-50/50 py-12"
        style={{
          backgroundImage: `url(${getAssetPath('/pattern-diagonal.svg')})`,
          backgroundSize: '20px 20px',
          backgroundRepeat: 'repeat',
        }}
      >
        {/* 그라데이션 레이어 */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(251, 146, 60, 0.15) 0%,
                rgba(251, 146, 60, 0.05) 20%,
                rgba(59, 130, 246, 0.1) 40%,
                rgba(168, 85, 247, 0.08) 60%,
                rgba(236, 72, 153, 0.1) 80%,
                rgba(251, 146, 60, 0.15) 100%
              )
            `,
            filter: 'blur(8px)',
            transform: 'rotate(3deg)',
            transformOrigin: 'center center',
            width: '110%',
            height: '110%',
            left: '-5%',
            top: '-5%',
            zIndex: 0,
          }}
        />

        <div className="border-t border-gray-200"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-8">
            <div className="absolute left-0 top-0 font-mono text-xs text-gray-500">
              grid gap-8 md:grid-cols-2 lg:grid-cols-3
            </div>
            <div className="mt-2 pt-4 text-center">
              <div className="space-y-1">
                <h2
                  className="text-optimized text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                  style={{
                    lineHeight: '1.1',
                    letterSpacing: '-0.025em',
                  }}
                >
                  새소식
                </h2>
                <p
                  className="text-optimized text-lg font-medium text-gray-600"
                  style={{
                    lineHeight: '1.2',
                    letterSpacing: '-0.025em',
                  }}
                >
                  도시연대의 최신 활동과 소식을 확인하세요
                </p>
              </div>
            </div>
          </div>

          <div ref={newsRef} className="card-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? // 스켈레톤 로딩 상태
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={`skeleton-${index}`} className="card-item group relative">
                    <SkeletonCard />
                  </div>
                ))
              : // 실제 카드 데이터
                newsData.map((news, index) => (
                  <div key={index} className="card-item group relative">
                    <NewsCard
                      title={news.title}
                      subtitle={news.subtitle}
                      location={news.location}
                      period={news.period}
                      description={news.description}
                      thumbnail={news.thumbnail}
                      link={news.link}
                      backgroundPattern={news.backgroundPattern}
                      onViewDetails={() => console.log('상세보기 클릭:', news.title)}
                    />
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="bg-white/80 py-20">
        <div className="border-t border-gray-200"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-16">
            <div className="absolute left-0 top-0 font-mono text-xs text-gray-500">grid gap-8 md:grid-cols-3</div>
            <div className="mt-4 pt-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">주요 활동</h2>
              <p className="mt-4 text-lg text-gray-600">도시연대의 세 가지 핵심 활동 영역</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative">
              <div className="absolute left-0 top-0 z-10 font-mono text-xs text-gray-500">
                hover:shadow-xl hover:-translate-y-1
              </div>
              <Card className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">보행권 확보 운동</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    인간이 중심이 되는 도시를 만들기 위한 보행권 확보 운동
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    자동차 중심의 도시에서 사람 중심의 도시로 변화시키기 위한 보행환경 개선과 보행권 확보를 위한 다양한
                    활동을 전개합니다.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 z-10 font-mono text-xs text-gray-500">
                bg-white rounded-2xl shadow-lg
              </div>
              <Card className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Home className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">마을만들기 운동</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    주민이 주체가 되어 살기 좋은 마을을 만드는 운동
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    지역사회에 밀착한 현장운동으로 주민들이 직접 참여하여 자신이 살고 있는 마을을 더 살기 좋은 곳으로
                    만들어갑니다.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 z-10 font-mono text-xs text-gray-500">
                transition-all duration-300
              </div>
              <Card className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                    <Palette className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">생활문화 운동</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    사람들의 삶을 소중히 생각하는 생활문화 운동
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    도시에서 살아가는 사람들의 일상과 문화를 존중하고, 삶의 질을 높이는 다양한 문화 활동을 지원합니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="bg-gray-50/50 py-20">
        <div className="border-t border-gray-200"></div>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-0 top-0 font-mono text-xs text-gray-500">bg-gray-50 py-20</div>
            <div className="mt-4 pt-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">도시연대와 함께하세요</h2>
              <p className="mt-4 text-lg text-gray-600">더 나은 도시를 만들기 위한 시민운동에 참여하고 후원해주세요</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  정기후원하기
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg border-gray-300 px-8 py-4 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  자원봉사 참여
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">걷고싶은도시만들기시민연대</h3>
              <p className="text-sm text-gray-600">인간이 중심이 되는 도시를 만들기 위한 시민운동</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-gray-900">메뉴</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#intro" className="transition-colors hover:text-blue-600">
                    소개
                  </a>
                </li>
                <li>
                  <a href="#news" className="transition-colors hover:text-blue-600">
                    새소식
                  </a>
                </li>
                <li>
                  <a href="#activities" className="transition-colors hover:text-blue-600">
                    활동소개
                  </a>
                </li>
                <li>
                  <a href="#support" className="transition-colors hover:text-blue-600">
                    후원하기
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-gray-900">연락처</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>info@walkablecity.kr</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>02-1234-5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>서울특별시 중구 세종대로 110</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-gray-900">소셜미디어</h4>
              <div className="flex space-x-4">
                <a href="#" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600">
                  <Facebook className="h-4 w-4" />
                  <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-pink-600">
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-600">© 2024 걷고싶은도시만들기시민연대. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
