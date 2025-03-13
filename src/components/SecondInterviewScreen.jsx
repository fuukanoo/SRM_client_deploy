import React from "react";
import { Grid, Card, Typography, TextField, FormControl, Select, MenuItem } from "@mui/material";
import { SMaxContainer, SCard, SItemsBox, SLeftGridItem, SEachItemBox, InterviewItemTypography, SRightGridItem, SNoteBox, SSubmitButton, SBottomGrid, SWithdrawButton } from "../styles/Interview-StyledComponents";

function SecondInterviewScreen({ profileData, secondInterviewData, setSecondInterviewData }) {
  // フォームの入力変更
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSecondInterviewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 「保存」ボタン押下時の処理
  const handleSaveSecondInterview = async () => {
    // candidate_id は profileData.id がセットされている前提
    const secondInterviewPayload = {
      candidate_id: profileData.id,
      interview_date: secondInterviewData.interview_date,
      interviewer: secondInterviewData.interviewer,      
      result: secondInterviewData.result,                
      skill: secondInterviewData.skill,                   
      personality: secondInterviewData.personality,       
      character: secondInterviewData.character,          
      values: secondInterviewData.values,                
      culture: secondInterviewData.culture,               
      remarks: secondInterviewData.remarks,               
    };

    console.log("送信前の二次面接データ:", secondInterviewPayload);
    try {
      const response = await fetch("http://localhost:3001/second_interviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(secondInterviewPayload),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("二次面接データ登録成功", data);
        // 必要に応じて成功時の処理を追加
      } else {
        console.error("二次面接データ登録エラー:", response.statusText);
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
    }
  };

  return (
    <SMaxContainer maxWidth={false} disableGutters>
      <SCard>
        <Grid
          container
          spacing={0}
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{ height: "100%" }}
        >
          {/* 左カラム: 実施日～カルチャー */}
          <SLeftGridItem item xs={12} md={4}>
            <SItemsBox>
              {/* 実施日（カレンダー選択） */}
              <SEachItemBox>
                <InterviewItemTypography>実施日</InterviewItemTypography>
                <TextField
                  type="date"
                  size="small"
                  sx={{ width: 180 }}
                  name="interview_date"
                  value={secondInterviewData.interview_date || ""}
                  onChange={handleInputChange}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </SEachItemBox>

              {/* 担当者（テキスト入力） */}
              <SEachItemBox>
                <InterviewItemTypography>担当者</InterviewItemTypography>
                <TextField
                  size="small"
                  sx={{ width: 180 }}
                  name="interviewer"
                  value={secondInterviewData.interviewer || ""}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </SEachItemBox>

              {/* 合否（プルダウン: 合格/不合格） */}
              <SEachItemBox>
                <InterviewItemTypography>合否</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="result"
                    value={secondInterviewData.result || ""}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="合格">合格</MenuItem>
                    <MenuItem value="不合格">不合格</MenuItem>
                  </Select>
                </FormControl>
              </SEachItemBox>

              {/* スキル（1/2/3/不明） */}
              <SEachItemBox>
                <InterviewItemTypography>スキル</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="skill"
                    value={secondInterviewData.skill || ""}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="不明">不明</MenuItem>
                  </Select>
                </FormControl>
              </SEachItemBox>

              {/* 人間性（1/2/3/不明） */}
              <SEachItemBox>
                <InterviewItemTypography>人間性</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="personality"
                    value={secondInterviewData.personality || ""}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="不明">不明</MenuItem>
                  </Select>
                </FormControl>
              </SEachItemBox>

              {/* 性格（1/2/3/不明） */}
              <SEachItemBox>
                <InterviewItemTypography>性格</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="character"
                    value={secondInterviewData.character || ""}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="不明">不明</MenuItem>
                  </Select>
                </FormControl>
              </SEachItemBox>

              {/* 価値観（1/2/3/不明） */}
              <SEachItemBox>
                <InterviewItemTypography>価値観</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="values"
                    value={secondInterviewData.values || ""}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="不明">不明</MenuItem>
                  </Select>
                </FormControl>
              </SEachItemBox>

              {/* カルチャー（1/2/3/不明） */}
              <SEachItemBox>
                <InterviewItemTypography>カルチャー</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="culture"
                    value={secondInterviewData.culture || ""}
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
                value={secondInterviewData.remarks || ""}
                onChange={handleInputChange}
                multiline
                rows={16}
                variant="outlined"
              />
            </SNoteBox>
          </SRightGridItem>

          {/* 下部: 保存ボタン */}
          <SBottomGrid item xs={12} md={12}>
            <SSubmitButton variant="contained" onClick={handleSaveSecondInterview}>
              保存
            </SSubmitButton>
          </SBottomGrid>
        </Grid>
      </SCard>
    </SMaxContainer>
  );
}

export default SecondInterviewScreen;
