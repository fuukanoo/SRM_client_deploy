import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import StepNavigator from "./components/StepNavigator";
import ProfileScreen from "./components/ProfileScreen";
import EntryAdjustmentScreen from "./components/EntryAdjustmentScreen";
import CasualScreen from "./components/CasualScreen";
import CasualAdjustmentScreen from "./components/CasualAdjustmentScreen";
import FirstInterviewScreen from "./components/FirstInterviewScreen";
import FirstInterviewAdjustmentScreen from "./components/FirstInterviewAdjustmentScreen";
import HRInterviewScreen from "./components/HRInterviewScreen";
import HRInterviewAdjustmentScreen from "./components/HRInterviewAdjustmentScreen";
import SecondInterviewScreen from "./components/SecondInterviewScreen";
import SecondInterviewAdjustmentScreen from "./components/SecondInterviewAdjustmentScreen";
import FinalInterviewScreen from "./components/FinalInterviewScreen";
import FinalInterviewAdjustmentScreen from "./components/FinalInterviewAdjustmentScreen";
import OfferInterviewScreen from "./components/OfferInterviewScreen";
import OtherScreens from "./components/OtherScreens";
import CandidateList from "./components/CandidateList";
import CandidateDetail from "./components/CandidateDetail";
// import Header from "./components/Header";
import Layout from "./Layout";
import Fab from "@mui/material/Fab";
import {
  TextField,
  Button,
  Card,
  Typography,
  Box,
  Grid,
  Container,
  Divider,
  Link,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle 
} from "@mui/material";

// ★ 環境変数からバックエンドの URL を取得 ★
const BACKEND_URL = process.env.REACT_APP_API_BASE_URL;

// Azure Blob Storage 用アップロード処理関数
async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(`${BACKEND_URL}/upload_resume/`, {
    method: "POST",
    body: formData
  });
  if (!response.ok) {
    throw new Error("アップロードエラー");
  }
  const data = await response.json();
  return data.url;
}

function App() {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: "",
    furigana: "",
    photo: null,
    photo_url: null,
    education: "",
    career: "",
    resume: null,
    resume_url: null,
    careerSheet: null,
    career_sheet_url: null,
    route: "",
    birthdate: "",
    address: "",
    origin: "",
    employmentStatus: "",
    university: "",
    highSchool: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [casualData, setCasualData] = useState({
    interview_data: "",
    interviewer: "",
    result: "",
    personality: "",
    character: "",
    remarks: ""
  });
  const [firstInterviewData, setFirstInterviewData] = useState({
    interview_data: "",
    interviewer: "",
    result: "",
    skill: "",
    personality: "",
    character: "",
    values: "",
    culture: "",
    remarks: ""
  });
  const [HRInterviewData, setHRInterviewData] = useState({
    interview_data: "",
    interviewer: "",
    values: "",
    culture: "",
    remarks: ""
  });
  const [secondInterviewData, setSecondInterviewData] = useState({
    interview_data: "",
    interviewer: "",
    result: "",
    skill: "",
    personality: "",
    character: "",
    values: "",
    culture: "",
    remarks: ""
  });
  const [finalInterviewData, setFinalInterviewData] = useState({
    interview_data: "",
    result: "",
    skill: "",
    personality: "",
    character: "",
    values: "",
    culture: "",
    remarks: ""
  });


  const [offerInterviewData, setOfferInterviewData] = useState({
    interview_data: "",
    interviewer: "",
    result: "",
    remarks: ""
  });
  const [followupDataMap, setFollowupDataMap] = useState({});


  const [currentStep, setCurrentStep] = useState(0);
  const [stepLabels, setStepLabels] = useState([
    "エントリー",
    "調整中",
    "カジュアル",
    "調整中",
    "1次面接",
    "調整中",
    "人事面談",
    "調整中",
    "2次面接",
    "調整中",
    "最終面接",
    "調整中",
    "オファー面談"
  ]);
  const [steps, setSteps] = useState([
    { id: 1, type: "profile" },
    { id: 2, type: "entryAdjustment" },
    { id: 3, type: "casual" },
    { id: 4, type: "casualAdjustment" },
    { id: 5, type: "firstInterview" },
    { id: 6, type: "firstInterviewAdjustment" },
    { id: 7, type: "HRInterview" },
    { id: 8, type: "HRInterviewAdjustment" },
    { id: 9, type: "secondInterview" },
    { id: 10, type: "secondInterviewAdjustment" },
    { id: 11, type: "finalInterview" },
    { id: 12, type: "finalInterviewAdjustment" },
    { id: 13, type: "offerInterview" },
    { id: 14, type: "other" }
  ]);

  // フォロー面談追加（両ブランチでほぼ同じ）
  const handleAddStep = () => {
    const followupCount = steps.filter((step) =>
      step.type.startsWith("followUp")
    ).length;
    const followupNumber = followupCount + 1;
    const newStepName = `フォロー面談 ${followupNumber}`;
    setStepLabels((prev) => [...prev, newStepName]);
    setSteps((prev) => [
      ...prev,
      { id: prev.length + 1, type: `followUpInterview${followupNumber}` }
    ]);
    setCurrentStep(steps.length);
  };

  const [scale, setScale] = useState(1);

  {/*辞退確認画面*/}
  const [open, setOpen] = useState(false)
  {/*辞退確認画面を開ける*/}
  const handleOpen = () => {
    setOpen(true);
  }
  {/*辞退確認画面を閉じる*/}
  const handleClose = () => {
    setOpen(false);
  }
  {/*辞退確認画面で辞退ボタンを押したときの処理*/}
  const handleConfirm = () => {
    console.log("辞退しました");
    setOpen(false);
  }

  useEffect(() => {
    const updateScale = () => {
      const fixedWidth = 1280;
      const fixedHeight = 720;
      const scaleX = window.innerWidth / fixedWidth;
      const scaleY = window.innerHeight / fixedHeight;
      setScale(Math.min(scaleX, scaleY, 1));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const fileInputRef = useRef(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  // 写真アップロード用
  const handlePhotoUpload = async (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      try {
        const uploadedUrl = await uploadFile(files[0]);
        setProfileData((prev) => ({
          ...prev,
          photo_url: uploadedUrl,
          photo: files[0]
        }));
      } catch (error) {
        console.error("写真アップロードに失敗:", error);
      }
    }
  };

  // 履歴書アップロード用
  const handleResumeUpload = async (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      try {
        const uploadedUrl = await uploadFile(files[0]);
        setProfileData((prev) => ({
          ...prev,
          resume_url: uploadedUrl,
          resume: files[0]
        }));
      } catch (error) {
        console.error("履歴書アップロードに失敗:", error);
      }
    }
  };

  // 職務経歴書アップロード用
  const handleCareerSheetUpload = async (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      try {
        const uploadedUrl = await uploadFile(files[0]);
        setProfileData((prev) => ({
          ...prev,
          career_sheet_url: uploadedUrl,
          careerSheet: files[0]
        }));
      } catch (error) {
        console.error("職務経歴書アップロードに失敗:", error);
      }
    }
  };

  const handleRegister = async () => {
    const candidateData = {
      name: profileData.name,
      furigana: profileData.furigana,
      photo_url: profileData.photo_url,
      education: profileData.education,
      career: profileData.career,
      resume_url: profileData.resume_url,
      career_sheet_url: profileData.career_sheet_url,
      route: profileData.route,
      birthdate: profileData.birthdate,
      address: profileData.address,
      origin: profileData.origin,
      employment_status: profileData.employmentStatus,
      university: profileData.university,
      high_school: profileData.highSchool
    };
  
    try {
      if (profileData.id) {
        // 既存の候補者情報を更新
        const response = await fetch(`${BACKEND_URL}/candidates/${profileData.id}`, {
          method: "PUT", // または PATCH（バックエンドの仕様に合わせる）
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(candidateData)
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Candidate更新成功", data);
          setProfileData(data);
          setIsSubmitted(true);
        } else {
          console.error("更新エラー:", response.statusText);
        }
      } else {
        // 新規登録
        const response = await fetch(`${BACKEND_URL}/candidates/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(candidateData)
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Candidate登録成功", data);
          setProfileData((prev) => ({ ...prev, id: data.id }));
          setIsSubmitted(true);
        } else {
          console.error("登録エラー:", response.statusText);
        }
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
    }
  };
  

  // プレビュー用URL（写真の場合はアップロード済みの photo_url を利用）
  const photoPreviewUrl = profileData.photo_url;

  return (
    <>
      <Routes>
        {/* 候補者一覧は全画面表示（共通コンテンツなし） */}
        <Route path="/candidates" element={<CandidateList />} />
        <Route path="/" element={<CandidateList />} />

        {/* 候補者詳細はLayoutでラップして左側のプロフィールフォームとステップナビゲーションを表示 */}
        <Route
          path="/candidate/:candidateId/*"
          element={
            <Layout
              profileData={profileData}
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
              handleInputChange={handleInputChange}
              fileInputRef={fileInputRef}
              handlePhotoUpload={handlePhotoUpload}
              handleResumeUpload={handleResumeUpload}
              handleCareerSheetUpload={handleCareerSheetUpload}
              handleRegister={handleRegister}
              stepLabels={stepLabels}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              handleAddStep={() => {
                // 追加のフォロー面談処理など
                const followupCount = stepLabels.filter((label) => label.startsWith("フォロー面談")).length;
                const newLabel = `フォロー面談 ${followupCount + 1}`;
                setStepLabels((prev) => [...prev, newLabel]);
                setCurrentStep(stepLabels.length);
              }}
              photoPreviewUrl={profileData.photo_url}
            >
              <CandidateDetail
                profileData={profileData}
                setProfileData={setProfileData}
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
                casualData={casualData}
                setCasualData={setCasualData}
                firstInterviewData={firstInterviewData}
                setFirstInterviewData={setFirstInterviewData}
                HRInterviewData={HRInterviewData}
                setHRInterviewData={setHRInterviewData}
                secondInterviewData={secondInterviewData}
                setSecondInterviewData={setSecondInterviewData}
                finalInterviewData={finalInterviewData}
                setFinalInterviewData={setFinalInterviewData}
                followupDataMap={followupDataMap}
                setFollowupDataMap={setFollowupDataMap}
              />
            </Layout>
          }
        />

        {/* 未定義のパスは候補者一覧へリダイレクト */}
        <Route path="*" element={<Navigate to="/candidates" />} />
      </Routes>

      {/* FAB候補者一覧ボタンは全画面共通 */}
      <Fab
        variant="extended"
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          zIndex: 1000,
          backgroundColor: "red",
          color: "black",
        }}
        onClick={handleOpen}
      >
        辞退
      </Fab>
      {/*確認用モーダル*/}
      <Dialog
        open={open} // モーダルの開閉状態
        onClose={handleClose} // モーダル外をクリックしたら閉じる
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title">辞退の確認</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            本当に辞退しますか？この操作は取り消せません。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleConfirm} color="error">
            辞退する
          </Button>
        </DialogActions>
      </Dialog>

      <Fab
        variant="extended"
        color="primary"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}
        onClick={() => navigate("/candidates")}
      >
        候補者一覧
      </Fab>
    </>
  );
}

export default App;
