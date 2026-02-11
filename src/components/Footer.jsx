// 푸터: 즐겨찾기, 타임라인, 프로필 아이콘 네비게이션
function Footer() {
  return (
    <footer style={{position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#23180f', borderTop: '1.5px solid #ff9800', color: '#ff9800', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 64, zIndex: 10}}>
      <button style={{background: 'none', border: 'none', color: '#ff9800', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer'}}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 21l7-5 7 5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/></svg>
        <span style={{fontSize: '0.8em', marginTop: 4}}>즐겨찾기</span>
      </button>
      <button style={{background: 'none', border: 'none', color: '#ff9800', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer'}}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        <span style={{fontSize: '0.8em', marginTop: 4}}>타임</span>
      </button>
      <button style={{background: 'none', border: 'none', color: '#ff9800', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer'}}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg>
        <span style={{fontSize: '0.8em', marginTop: 4}}>프로필</span>
      </button>
    </footer>
  );
}

export default Footer;
