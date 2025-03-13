import React from "react";
import { Grid, Card, Typography, TextField, FormControl, Select, MenuItem } from "@mui/material";
import { SMaxContainer, SCard, SItemsBox, SLeftGridItem, SEachItemBox, InterviewItemTypography, SRightGridItem, SNoteBox, SSubmitButton, SBottomGrid, SWithdrawButton } from "../styles/Interview-StyledComponents";

function HRInterviewScreen({ profileData, HRInterviewData, setHRInterviewData,}) {
  // 入力変更時
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHRInterviewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 「保存」ボタン押下時の処理
  const handleSaveHRInterview = async () => {
    // profileData.id に候補者登録時のIDがセットされている前提
    const HRInterviewPayload = {
      candidate_id: profileData.id,
      interview_date: HRInterviewData.interview_date,  
      interviewer: HRInterviewData.interviewer,              
      values: HRInterviewData.values,               
      culture: HRInterviewData.culture,           
      remarks: HRInterviewData.remarks,           
    };

    console.log("送信前の人事面接データ:", HRInterviewPayload);
    try {
      const response = await fetch("http://localhost:3001/hr_interviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(HRInterviewPayload),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("人事面接データ登録成功", data);
        // 必要に応じて、成功時の通知表示や画面遷移の処理を追加
      } else {
        console.error("人事面接データ登録エラー:", response.statusText);
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
    }
  };

  return (
    <SMaxContainer maxWidth={false} disableGutters>
      <SCard>
        <Grid container
          spacing={0}
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{ height: "100%" }}
        >
          {/* 左カラム: 実施日～カルチャー */}
          <SLeftGridItem item xs={12} md={4}>
          <SItemsBox>
            {/* 実施日 */}
            <SEachItemBox>
              <InterviewItemTypography>実施日</InterviewItemTypography>
              <TextField
                type = "date"
                sx={{ width: 180 }}
                name="interview_date"
                value={HRInterviewData.interview_date || ""}
                onChange={handleInputChange}
                variant="outlined"
              />
            </SEachItemBox>
            {/*　担当者 */}
            <SEachItemBox>
              <InterviewItemTypography>担当者</InterviewItemTypography>
              <TextField
                sx={{ width: 180 }}
                name="interviewer"
                value={HRInterviewData.interviewer || ""}
                onChange={handleInputChange}
                variant="outlined"
              />
            </SEachItemBox>
            {/* 価値観 */}
            <SEachItemBox>
              <InterviewItemTypography>価値観</InterviewItemTypography>
              <FormControl sx={{ width: 180 }}>
                <Select
                  name="values"
                  value={HRInterviewData.values || ""}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="不明">不明</MenuItem>
                </Select>
              </FormControl>
            </SEachItemBox>
            {/* カルチャー */}
            <SEachItemBox>
              <InterviewItemTypography>カルチャー</InterviewItemTypography>
              <FormControl sx={{ width: 180 }}>
                <Select
                  name="culture"
                  value={HRInterviewData.culture || ""}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="不明">不明</MenuItem>
                </Select>
              </FormControl>
            </SEachItemBox>
          </SItemsBox>
          </SLeftGridItem>

          {/* 右カラム: 備考 */}
          <SRightGridItem item xs={12} md={8}>
            <SNoteBox>
              <Typography variant="h6" gutterBottom>
                備考
              </Typography>
              <TextField
                fullWidth
                name="remarks"
                value={HRInterviewData.remarks || ""}
                onChange={handleInputChange}
                multiline
                rows={16}
                variant="outlined"
              />
            </SNoteBox>
          </SRightGridItem>

          {/* 下部 ボタン */}
          <SBottomGrid item xs={12} md={12}>
            <SSubmitButton variant="contained" onClick={handleSaveHRInterview}>
              保存
            </SSubmitButton>
          </SBottomGrid>
        </Grid>
      </SCard>
    </SMaxContainer>
  );
}

export default HRInterviewScreen;
