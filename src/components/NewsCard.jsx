// 뉴스 카드 컴포넌트: 이미지, 제목, 내용(요약) 표시
function NewsCard({ image, title, summary }) {
  return (
    <article className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden flex flex-col">
      <img src={image} alt="뉴스 이미지" className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-900 truncate">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{summary}</p>
      </div>
    </article>
  );
}

export default NewsCard;
