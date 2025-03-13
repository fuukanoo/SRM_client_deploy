import React, { useEffect, useState } from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import ProfileScreen from "./ProfileScreen";
import EntryAdjustmentScreen from "./EntryAdjustmentScreen";
import CasualScreen from "./CasualScreen";
import CasualAdjustmentScreen from "./CasualAdjustmentScreen";
import FirstInterviewScreen from "./FirstInterviewScreen";
import FirstInterviewAdjustmentScreen from "./FirstInterviewAdjustmentScreen";
import HRInterviewScreen from "./HRInterviewScreen";
import HRInterviewAdjustmentScreen from "./HRInterviewAdjustmentScreen";
import SecondInterviewScreen from "./SecondInterviewScreen";
import SecondInterviewAdjustmentScreen from "./SecondInterviewAdjustmentScreen";
import FinalInterviewScreen from "./FinalInterviewScreen";
import FinalInterviewAdjustmentScreen from "./FinalInterviewAdjustmentScreen";
import OtherScreens from "./OtherScreens";

const BACKEND_URL = process.env.REACT_APP_API_BASE_URL;

function CandidateDetail({ profileData, setProfileData, casualData, setCasualData, firstInterviewData, setFirstInterviewData, HRInterviewData, setHRInterviewData, secondInterviewData, setSecondInterviewData, finalInterviewData, setFinalInterviewData, followupDataMap, setFollowupDataMap, isSubmitted, setIsSubmitted }) {
    const { candidateId } = useParams();
  
    useEffect(() => {

      const fetchCandidateData = async () => {
        try {
          const response = await fetch(`${BACKEND_URL}/candidate_details/${candidateId}`);
          if (!response.ok) {
            console.error('候補者データの取得に失敗しました:', response.statusText);
            return;
          }

          const data = await response.json();

          setProfileData({
            ...data,
            id: candidateId,
          });
    
          setCasualData({
            interview_date: data.casual_interview?.interview_date || "",
            interviewer: data.casual_interview?.interviewer || "",
            result: data.casual_interview?.result || "",
            personality: data.casual_interview?.personality || "",
            character: data.casual_interview?.character || "",
            remarks: data.casual_interview?.remarks || "",
          });
    
          setFirstInterviewData({
            interview_date: data.first_interview?.interview_date || "",
            interviewer: data.first_interview?.interviewer || "",
            result: data.first_interview?.result || "",
            skill: data.first_interview?.skill || "",
            personality: data.first_interview?.personality || "",
            character: data.first_interview?.character || "",
            values: data.first_interview?.values || "",
            culture: data.first_interview?.culture || "",
            remarks: data.first_interview?.remarks || "",
          });
    
          setHRInterviewData({
            interview_date: data.hr_interview?.interview_date || "",
            interviewer: data.hr_interview?.interviewer || "",
            values: data.hr_interview?.values || "",
            culture: data.hr_interview?.culture || "",
            remarks: data.hr_interview?.remarks || "",
          });
    
          setSecondInterviewData({
            interview_date: data.second_interview?.interview_date || "",
            interviewer: data.second_interview?.interviewer || "",
            result: data.second_interview?.result || "",
            skill: data.second_interview?.skill || "",
            personality: data.second_interview?.personality || "",
            character: data.second_interview?.character || "",
            values: data.second_interview?.values || "",
            culture: data.second_interview?.culture || "",
            remarks: data.second_interview?.remarks || "",
          });
    
          setFinalInterviewData({
            interview_date: data.final_interview?.interview_date || "",
            result: data.final_interview?.result || "",
            skill: data.final_interview?.skill || "",
            personality: data.final_interview?.personality || "",
            character: data.final_interview?.character || "",
            values: data.final_interview?.values || "",
            culture: data.final_interview?.culture || "",
            remarks: data.final_interview?.remarks || "",
          });

          setOfferInterviewData(data.offer_interview || {
            interview_date: "",
            interviewer: "",
            result: "",
            remarks: ""
          });
    
          setFollowupDataMap(data.followup_interviews || []);
        } catch (error) {
          console.error("Error fetching candidate details:", error);
        }
      };

      if (candidateId) {
        fetchCandidateData();
      }
    }, [candidateId, setProfileData, setCasualData, setFirstInterviewData, setHRInterviewData, setSecondInterviewData, setFinalInterviewData, setFollowupDataMap, setIsSubmitted]);
  


    return (
      <>
        {/* 共通のナビゲーションなどをここに置くことも可能 */}
        <Routes>
          <Route
            path="profile"
            element={<ProfileScreen profileData={profileData} setProfileData={setProfileData} />}
          />
          <Route
            path="entryAdjustment"
            element={<EntryAdjustmentScreen profileData={profileData} setProfileData={setProfileData} />}
          />
          <Route
            path="casual"
            element={<CasualScreen profileData={profileData} casualData={casualData} setCasualData={setCasualData} />}
          />
          <Route
            path="casualAdjustment"
            element={<CasualAdjustmentScreen profileData={profileData} casualData={casualData} />}
          />
          <Route
            path="firstInterview"
            element={<FirstInterviewScreen profileData={profileData} firstInterviewData={firstInterviewData} setFirstInterviewData={setFirstInterviewData} />}
          />
          <Route
            path="firstInterviewAdjustment"
            element={<FirstInterviewAdjustmentScreen profileData={profileData} casualData={casualData} firstInterviewData={firstInterviewData}/>}
          />
          <Route
            path="HRInterview"
            element={<HRInterviewScreen profileData={profileData} HRInterviewData={HRInterviewData} setHRInterviewData={setHRInterviewData}/>}
          />
          <Route
            path="HRInterviewAdjustment"
            element={<HRInterviewAdjustmentScreen profileData={profileData} casualData={casualData} firstInterviewData={firstInterviewData} HRInterviewData={HRInterviewData}/>}
          />
          <Route
            path="secondInterview"
            element={<SecondInterviewScreen profileData={profileData} secondInterviewData={secondInterviewData} setSecondInterviewData={setSecondInterviewData}/>}
          />
          <Route
            path="secondInterviewAdjustment"
            element={<SecondInterviewAdjustmentScreen profileData={profileData} casualData={casualData} firstInterviewData={firstInterviewData} HRInterviewData={HRInterviewData} secondInterviewData={secondInterviewData}/>}
          />
          <Route
            path="finalInterview"
            element={<FinalInterviewScreen profileData={profileData} finalInterviewData={finalInterviewData} setFinalInterviewData={setFinalInterviewData}/>}
          />
          <Route
            path="finalInterviewAdjustment"
            element={<FinalInterviewAdjustmentScreen profileData={profileData} casualData={casualData} firstInterviewData={firstInterviewData} HRInterviewData={HRInterviewData} secondInterviewData={secondInterviewData} finalInterviewData={finalInterviewData}/>}
          />
          <Route
            path="followup/:followupId"
            element={<OtherScreens profileData={profileData} followupDataMap={followupDataMap} setFollowupDataMap={setFollowupDataMap}/>}
          />
          {/* URL が候補者詳細内で該当しない場合は profile へリダイレクト */}
          <Route path="*" element={<Navigate to="profile" />} />
        </Routes>
      </>
    );
}

export default CandidateDetail;
