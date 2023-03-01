import { Container } from "@mui/material";

export default function AboutMePage() {
    const openNewPage = (url) => {
      window.open(url, "_blank", "noopener, noreferrer");
    };

    return (
      <Container maxWidth="md" style={{backgroundColor: "#DCE2F0", marginTop: "80px"}}> 
        <h2 className="text-center" style={{fontSize: "40px", color: "#195190", marginTop: "30px"}}>About Me</h2>
        <article style={{marginTop: "40px"}}>
        안녕하세요. 이곳은 제가 어떤 사람인지 적어 놓는 공간입니다.
        <br />
        현재까지 경력과 개발을 시작한 계기, 가치관, 저의 장점을 적고,
        <br />
        마지막에는 이력서 pdf를 연결하는 링크 버튼을 삽입할 계획입니다. 
        <br />
        안녕하세요. 이곳은 제가 어떤 사람인지 적어 놓는 공간입니다.현재까지 경력과 개발을 시작한 계기, 가치관, 저의 장점을 적고,마지막에는 이력서 pdf를 연결하는 링크 버튼을 삽입할 계획입니다. 
        안녕하세요. 이곳은 제가 어떤 사람인지 적어 놓는 공간입니다.
        현재까지 경력과 개발을 시작한 계기, 가치관, 저의 장점을 적고,
        마지막에는 이력서 pdf를 연결하는 링크 버튼을 삽입할 계획입니다. 
        </article>
        <br />
        <button onClick={() => openNewPage("")} style={{color:"#195190"}}>RESUME</button>
      </Container> 
    );
 }


