
export default function AboutMePage() {
    const openNewPage = (url) => {
      window.open(url, "_blank", "noopener, noreferrer");
    };

    return (
      <div className="textarea" style={{backgroundColor: "#C5D7F2", margin: "30px"}}>
        <h2 className="aboutMeTitle" style={{fontSize: "40px", color: "#E26559"}}>About Me</h2>
        <h1>
        안녕하세요. 이곳은 제가 어떤 사람인지 적어 놓는 공간입니다.
        <br />
        현재까지 경력과 개발을 시작한 계기, 가치관, 저의 장점을 적고,
        <br />
        마지막에는 이력서 pdf를 연결하는 링크 버튼을 삽입할 계획입니다. 
        </h1>
        <button onClick={() => openNewPage("")} style={{color:"#2B7799"}}>RESUME</button>
      </div>
    );
 }


