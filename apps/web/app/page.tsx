'use client'

import { Button } from '@workspace/ui/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Separator } from '@workspace/ui/components/separator'
import { NewsCard } from '@/components/news-card'
import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { Users, Home, Palette, MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react'

// 샘플 새소식 데이터
const newsData = [
  {
    title: '걷고 싶은 도시 만들기 시민연대 정기총회',
    subtitle: '2024년 활동 보고 및 2025년 계획 수립',
    location: '서울시청 시민청',
    period: '2024.12.15 (일) 14:00-17:00',
    description:
      '도시연대의 2024년 활동을 돌아보고, 2025년 새로운 비전과 계획을 함께 세워가는 자리입니다. 시민 여러분의 많은 참여를 바랍니다.',
    thumbnail: '/placeholder.svg',
  },
  {
    title: '보행권 확보 캠페인 - 안전한 보행로 만들기',
    subtitle: '시민 참여형 도시 개선 프로젝트',
    location: '강남구 테헤란로 일대',
    period: '2024.12.20 (금) 10:00-16:00',
    description:
      '자동차 중심의 도로를 사람 중심의 보행로로 바꾸는 캠페인입니다. 현장 조사와 시민 의견 수렴을 통해 구체적인 개선안을 제시합니다.',
    thumbnail: '/placeholder.svg',
  },
  {
    title: '마을만들기 워크숍 - 우리 동네 이야기',
    subtitle: '지역사회 주민 참여 프로그램',
    location: '마포구 연남동 커뮤니티센터',
    period: '2024.12.22 (일) 13:00-18:00',
    description:
      '우리가 살고 있는 마을의 역사와 문화를 되돌아보고, 앞으로 어떤 마을을 만들어갈지 함께 고민하는 시간입니다.',
    thumbnail: '/placeholder.svg',
  },
]

export default function Page() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef<HTMLDivElement>(null)

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

      // 새소식 카드 애니메이션
      if (newsRef.current?.children) {
        const children = Array.from(newsRef.current.children)
        children.forEach((child, index) => {
          animate(child as HTMLElement, {
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: index * 200,
            easing: 'easeOutExpo',
          })
        })
      }
    }

    initAnimations()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-12">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold text-green-700 dark:text-green-400">걷고싶은도시만들기시민연대</div>
            <div className="hidden space-x-8 md:flex">
              <a href="#intro" className="text-slate-700 transition-colors hover:text-green-600 dark:text-slate-300">
                소개
              </a>
              <a href="#news" className="text-slate-700 transition-colors hover:text-green-600 dark:text-slate-300">
                새소식
              </a>
              <a
                href="#activities"
                className="text-slate-700 transition-colors hover:text-green-600 dark:text-slate-300"
              >
                활동소개
              </a>
              <a href="#support" className="text-slate-700 transition-colors hover:text-green-600 dark:text-slate-300">
                도시연대후원하기
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Title Section */}
      <section id="intro" className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1
              ref={titleRef}
              className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100"
            >
              걷고 싶은 도시가
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                살고 싶은 도시다
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              도시에 다양한 사람들이 함께 오래 살아갈 수 있는 인간환경을 회복함으로써 삶의 질을 개선하고
              <br />
              도시문화 역사를 보존, 창조해 나가는 시민운동입니다.
            </p>
            <div ref={buttonRef} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-green-600 px-8 text-white hover:bg-green-700">
                정기후원하기
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 px-8 text-green-600 hover:bg-green-50">
                활동 참여하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* News Section */}
      <section id="news" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">새소식</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">도시연대의 최신 활동과 소식을 확인하세요</p>
          </div>

          <div ref={newsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsData.map((news, index) => (
              <NewsCard
                key={index}
                title={news.title}
                subtitle={news.subtitle}
                location={news.location}
                period={news.period}
                description={news.description}
                thumbnail={news.thumbnail}
                onViewDetails={() => console.log('상세보기 클릭:', news.title)}
              />
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* Activities Section */}
      <section id="activities" className="bg-green-50 px-6 py-20 sm:px-8 lg:px-12 dark:bg-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
              주요 활동
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">도시연대의 세 가지 핵심 활동 영역</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group text-center transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">보행권 확보 운동</CardTitle>
                <CardDescription className="text-base">
                  인간이 중심이 되는 도시를 만들기 위한 보행권 확보 운동
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  자동차 중심의 도시에서 사람 중심의 도시로 변화시키기 위한 보행환경 개선과 보행권 확보를 위한 다양한
                  활동을 전개합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <Home className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">마을만들기 운동</CardTitle>
                <CardDescription className="text-base">주민이 주체가 되어 살기 좋은 마을을 만드는 운동</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  지역사회에 밀착한 현장운동으로 주민들이 직접 참여하여 자신이 살고 있는 마을을 더 살기 좋은 곳으로
                  만들어갑니다.
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">생활문화 운동</CardTitle>
                <CardDescription className="text-base">사람들의 삶을 소중히 생각하는 생활문화 운동</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  도시에서 살아가는 사람들의 일상과 문화를 존중하고, 삶의 질을 높이는 다양한 문화 활동을 지원합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
            도시연대와 함께하세요
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            더 나은 도시를 만들기 위한 시민운동에 참여하고 후원해주세요
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-green-600 px-8 text-white hover:bg-green-700">
              정기후원하기
            </Button>
            <Button variant="outline" size="lg" className="border-green-600 px-8 text-green-600 hover:bg-green-50">
              자원봉사 참여
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 dark:bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                걷고싶은도시만들기시민연대
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                인간이 중심이 되는 도시를 만들기 위한 시민운동
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">메뉴</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#intro" className="transition-colors hover:text-green-600">
                    소개
                  </a>
                </li>
                <li>
                  <a href="#news" className="transition-colors hover:text-green-600">
                    새소식
                  </a>
                </li>
                <li>
                  <a href="#activities" className="transition-colors hover:text-green-600">
                    활동소개
                  </a>
                </li>
                <li>
                  <a href="#support" className="transition-colors hover:text-green-600">
                    후원하기
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">연락처</h4>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-green-600" />
                  <span>info@walkablecity.kr</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span>02-1234-5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span>서울특별시 중구 세종대로 110</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">소셜미디어</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300"
                >
                  <Facebook className="h-4 w-4" />
                  <span>Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-slate-600 transition-colors hover:text-pink-600 dark:text-slate-300"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              © 2024 걷고싶은도시만들기시민연대. 모든 권리 보유.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
