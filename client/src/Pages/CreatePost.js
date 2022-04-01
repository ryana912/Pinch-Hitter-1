import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import Header from "../Components/header";
import {
  SelectBoxLocation,
  SelectBoxJob,
  SelectBoxPay,
  Calenda,
  WrapperDiv,
  Head,
  Body,
  SectorWrapper,
  TitleDiv,
  TitleInput,
  IndexDiv,
  ContentTextarea,
  CompleteButton,
<<<<<<< HEAD
} from "../Components/CreatePostComponents";

let url = "https://localhost:4000";
=======
} from '../Components/CreatePostComponents';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4

export const CreatPost = (props) => {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [selectLocation, setSelectLocation] = useState("");
  const [pickerDate, setPickerDate] = useState("");
  const [selectJob, setSelectJob] = useState("");
  const [selectPay, setSelectPay] = useState("");
  const [textareaContent, setTextareaContent] = useState("");

  // 입력되는 제목, 지역, 날짜, 직종, 급여, 내용
  const handleInputValue = (e) => {
<<<<<<< HEAD
    console.log("제목 실행");
=======
    console.log('제목 실행');
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
    setInputTitle(e.target.value);
  };

  const handleSelectValue = (e) => {
<<<<<<< HEAD
    console.log("셀렉트 실행");
    if (e.target.name === "location") {
=======
    console.log('셀렉트 실행');
    if (e.target.name === 'location') {
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
      setSelectLocation(e.target.value);
    } else if (e.target.name === "job") {
      setSelectJob(e.target.value);
    } else if (e.target.name === "pay") {
      setSelectPay(e.target.value);
    }
  };

  const handlePikerValue = (date) => {
<<<<<<< HEAD
    console.log("날짜 실행");
=======
    console.log('날짜 실행');
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
    console.log(date);
    setPickerDate(date);
  };

  const handleTextareaValue = (e) => {
<<<<<<< HEAD
    console.log("내용 실행");
=======
    console.log('내용 실행');
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
    setTextareaContent(e.target.value);
  };

  // 작성 완료 버튼
  // 작성한 게시물 정보 -> 서버로
  const postCompleteButton = () => {
<<<<<<< HEAD
    console.log("작성완료 버튼 클릭");
=======
    console.log('작성완료 버튼 클릭');
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
    console.log(props.isLogin);

    if (inputTitle.length > 0 && textareaContent.length > 0) {
      axios({
<<<<<<< HEAD
        url: `${process.env.PinchHitterUrl}/notice_board`,
        method: "post",
        data: {
          user_id: props.userinfo.id,
=======
        url: `${process.env.REACT_APP_SERVER_URI}/boards`,
        method: 'post',
        data: {
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
          title: inputTitle,
          occupation: selectJob,
          wage: selectPay,
          work_date: pickerDate,
          work_place: selectLocation,
          content: textareaContent,
        },
        withCredentials: true,
      })
        .then(() => {
<<<<<<< HEAD
          alert("작성을 완료하셨습니다.");
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      alert("제목과 내용을 모두 입력해주세요.");
=======
          alert('작성을 완료하셨습니다.');
          navigate('/');
        })
        .catch((err) => console.log(err));
    } else {
      alert('제목과 내용을 모두 입력해주세요.');
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
    }
  };

  return (
    <>
      <Header
        hadleLoginVerification={props.hadleLoginVerification}
        isLogin={props.isLogin}
      />
      <WrapperDiv>
        <Body>
          <TitleDiv>게시글 작성</TitleDiv>
          <SectorWrapper>
            <IndexDiv>제목</IndexDiv>
            <TitleInput
              placeholder="간략하게 나타내 주세요!"
              type="text"
              name="title"
              onChange={handleInputValue}
            />
            <IndexDiv>지역</IndexDiv>
            <SelectBoxLocation name="location" onChange={handleSelectValue} />
            <IndexDiv>날짜</IndexDiv>
            <Calenda name="date" onChange={handlePikerValue} />
            <IndexDiv>직종</IndexDiv>
            <SelectBoxJob name="job" onChange={handleSelectValue} />
            <IndexDiv>시급</IndexDiv>

            <SelectBoxPay name="pay" onChange={handleSelectValue} />
          </SectorWrapper>
          <IndexDiv>내용</IndexDiv>
          <ContentTextarea
            placeholder="근무시간 및 주요사항에 대해 설명해 주세요!"
            type="text"
            name="content"
            onChange={handleTextareaValue}
          />
          <CompleteButton onClick={postCompleteButton}>
            작 성 완 료
          </CompleteButton>
        </Body>
      </WrapperDiv>
    </>
  );
};

export default CreatPost;
