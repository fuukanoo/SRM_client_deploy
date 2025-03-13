import React from "react";
import { Grid, Card, Typography, TextField, FormControl, Select, MenuItem } from "@mui/material";
import { SMaxContainer, SCard, SItemsBox, SLeftGridItem, SEachItemBox, InterviewItemTypography, SRightGridItem, SNoteBox, SSubmitButton, SBottomGrid, SWithdrawButton } from "../styles/Interview-StyledComponents";

function CasualScreen({ profileData, casualData, setCasualData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCasualData((prev) => ({ ...prev, [name]: value }));
  };


  // 「保存」ボタン押下時の処理
  const handleSaveCasual = async () => {
    // candidate_id はprofileData.idがセットされている前提
    const casualInterviewData = {
      candidate_id: profileData.id, // 必須フィールド。候補者登録後に得たIDを使う
      interview_date: casualData.interview_date,
      interviewer: casualData.interviewer,
      result: casualData.result,
      personality: casualData.personality,
      character: casualData.character,
      remarks: casualData.remarks,
    };

    console.log("送信前のカジュアル面接データ:", casualInterviewData);
    try {
      const response = await fetch("http://localhost:3001/casual_interviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(casualInterviewData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log("カジュアル面接データ登録成功", data);
        // 必要に応じて、成功時のフィードバック（例：通知表示など）を追加
      } else {
        console.error("カジュアル面接データ登録エラー:", response.statusText);
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
    }
  };


  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

  return (
    <SMaxContainer
      maxWidth={false} 
      disableGutters>
      <SCard>
        <Grid container spacing={0} alignItems={{ xs: "center", md: "flex-start" }} sx = {{height: "100%" }}>
          <SLeftGridItem item xs={12} md={4}>
          <SItemsBox>
            {/* 実施日*/}
            <SEachItemBox>
              <InterviewItemTypography>実施日</InterviewItemTypography>
              <TextField
                sx={{ width: 180 }}
                type="date"
                name="interview_date"
                value={casualData.interview_date || ""}
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
                value={casualData.interviewer || ""}
                onChange={handleInputChange}
                variant="outlined"
              />
            </SEachItemBox>

            {/* 合否 */}
            <SEachItemBox>
              <InterviewItemTypography>合否</InterviewItemTypography>
              <FormControl sx={{ width: 180 }}>
                <Select
                  name="result"
                  value={casualData.result || ""}
                  onChange={handleInputChange}
                >
                  <MenuItem value="合格">合格</MenuItem>
                  <MenuItem value="不合格">不合格</MenuItem>
                </Select>
              </FormControl>
            </SEachItemBox>

            {/* 人間性 */}
            <SEachItemBox>
              <InterviewItemTypography>人間性</InterviewItemTypography>
              <FormControl sx={{ width: 180 }}>
                <Select
                  name="personality"
                  value={casualData.personality || ""}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="不明">不明</MenuItem>
                </Select>
              </FormControl>
            </SEachItemBox>

            {/* 性格 */}
            <SEachItemBox>
              <InterviewItemTypography>性格</InterviewItemTypography>
              <FormControl sx={{ width: 180 }}>
                <Select
                  name="character"
                  value={casualData.character || ""}
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
  
          {/* 右側セクション: 備考入力欄 */}
          <SRightGridItem item xs={12} md={8}>
            <SNoteBox>
              <Typography variant="h6" gutterBottom>
                備考
              </Typography>
              <TextField
                fullWidth
                name="remarks"
                value={casualData.remarks || ""}
                onChange={handleInputChange}
                multiline
                rows={16}
                variant="outlined"
              />
            </SNoteBox>
            </SRightGridItem>
            <SBottomGrid item xs={12} md={12}>
              {/* 右下に固定配置する保存ボタン */}
              <SSubmitButton
                variant="contained"
                onClick={handleSaveCasual}
              >
                保存
              </SSubmitButton>
            </SBottomGrid>
        </Grid>
      </SCard>
    </SMaxContainer>
  );
}

export default CasualScreen;
