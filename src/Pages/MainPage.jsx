import NewsCard from '../components/NewsCard'
import Footer from '../components/Footer'

const sampleNews = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: 'AI가 바꾸는 미래 사회',
    summary: '인공지능 기술이 우리의 일상과 사회 구조를 어떻게 변화시키고 있는지 알아봅니다.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    title: '기후 변화와 대응 전략',
    summary: '지구 온난화와 기후 변화에 대응하기 위한 각국의 정책과 최신 연구 동향을 소개합니다.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    title: '스포츠, 새로운 영웅의 탄생',
    summary: '국내외 스포츠계에서 떠오르는 신예 선수들과 그들의 활약상을 집중 조명합니다.'
  }
]

const HEADER_HEIGHT = 64; // px (h-16)
const FOOTER_HEIGHT = 64; // px (h-16)

function MainPage() {
  return (
    <div className="bg-[#F5F5F0] w-full min-h-screen">
      <header className="fixed top-0 left-0 w-full z-20 bg-[#F5F5F0] flex items-center justify-center border-b border-gray-100" style={{height: HEADER_HEIGHT}}>
        <h1 className="text-2xl font-extrabold text-[#22C55E] px-4">데일리 뉴스</h1>
      </header>
      <main
        className="absolute left-0 right-0 mx-auto max-w-md px-4 w-full overflow-y-auto"
        style={{
          top: HEADER_HEIGHT,
          bottom: FOOTER_HEIGHT,
          position: 'absolute',
          height: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`
        }}
      >
        {sampleNews.map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
        {/* 무한 스크롤 구현 시 이 아래에 추가 렌더링 */}
      </main>
      <Footer />
    </div>
  )
}

export default MainPage
