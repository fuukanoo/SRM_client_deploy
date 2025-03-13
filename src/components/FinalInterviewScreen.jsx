import React from "react";
import { Grid, Card, Typography, TextField, FormControl, Select, MenuItem } from "@mui/material";
import { SMaxContainer, SCard, SItemsBox, SLeftGridItem, SEachItemBox, SRightGridItem, InterviewItemTypography, SNoteBox, SSubmitButton, SBottomGrid, SWithdrawButton } from "../styles/Interview-StyledComponents";


function FinalInterviewScreen({ profileData, finalInterviewData, setFinalInterviewData }) {
  // 入力変更時
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFinalInterviewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 「保存」ボタン押下時の処理
  const handleSaveFinalInterview = async () => {
    // profileData.id に候補者登録時のIDがセットされている前提
    const finalInterviewPayload = {
      candidate_id: profileData.id,
      interview_date: finalInterviewData.interview_date,
      result: finalInterviewData.result,                 
      skill: finalInterviewData.skill,                   
      personality: finalInterviewData.personality,       
      character: finalInterviewData.character,           
      values: finalInterviewData.values,                 
      culture: finalInterviewData.culture,               
      remarks: finalInterviewData.remarks,               
    };

    console.log("送信前の最終面接データ:", finalInterviewPayload);
    try {
      const response = await fetch("http://localhost:3001/final_interviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalInterviewPayload),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("最終面接データ登録成功", data);
        // 必要に応じて、成功時の通知表示や画面遷移の処理を追加
      } else {
        console.error("最終面接データ登録エラー:", response.statusText);
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
              {/* 実施日（type="date"） */}
              <SEachItemBox>
                <InterviewItemTypography>実施日</InterviewItemTypography>
                <TextField
                  type="date"
                  size="small"
                  sx={{ width: 180 }}
                  name="interview_date"
                  value={finalInterviewData.interview_date || ""}
                  onChange={handleInputChange}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </SEachItemBox>

              {/* 合否: プルダウン（内定など） */}
              <SEachItemBox>
                <InterviewItemTypography>合否</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="result"
                    value={finalInterviewData.result || ""}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="内定">内定</MenuItem>
                    <MenuItem value="不内定">不内定</MenuItem>
                  </Select>
                </FormControl>
              </SEachItemBox>

              {/* スキル: 1/2/3/不明 */}
              <SEachItemBox>
                <InterviewItemTypography>
                  スキル
                </InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="skill"
                    value={finalInterviewData.skill || ""}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="不明">不明</MenuItem>
                  </Select>
                </FormControl>
              </SEachItemBox>

              {/* 人間性: 1/2/3/不明 */}
              <SEachItemBox>
                <InterviewItemTypography>人間性</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="personality"
                    value={finalInterviewData.personality || ""}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="不明">不明</MenuItem>
                  </Select>
                </FormControl>
              </SEachItemBox>

              {/* 性格: 1/2/3/不明 */}
              <SEachItemBox>
                <InterviewItemTypography>性格</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="character"
                    value={finalInterviewData.character || ""}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="不明">不明</MenuItem>
                  </Select>
                </FormControl>
              </SEachItemBox>

              {/* 価値観: 1/2/3/不明 */}
              <SEachItemBox>
                <InterviewItemTypography>価値観</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="values"
                    value={finalInterviewData.values || ""}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="不明">不明</MenuItem>
                  </Select>
                </FormControl>
              </SEachItemBox>

              {/* カルチャー: 1/2/3/不明 */}
              <SEachItemBox>
                <InterviewItemTypography>カルチャー</InterviewItemTypography>
                <FormControl size="small" sx={{ width: 180 }}>
                  <Select
                    name="culture"
                    value={finalInterviewData.culture || ""}
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
                value={finalInterviewData.remarks || ""}
                onChange={handleInputChange}
                multiline
                rows={16}
                variant="outlined"
              />
            </SNoteBox>
          </SRightGridItem>

          {/* 下部 ボタン */}
          <SBottomGrid item xs={12} md={12}>
            <SSubmitButton variant="contained" onClick={handleSaveFinalInterview}>
              保存
            </SSubmitButton>
          </SBottomGrid>
        </Grid>
      </SCard>
    </SMaxContainer>
  );
}

export default FinalInterviewScreen;
