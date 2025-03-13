import React from "react";
import { Grid, Card, Typography, TextField, FormControl, Select, MenuItem } from "@mui/material";
import { SMaxContainer, SCard, SItemsBox, SLeftGridItem, SEachItemBox, SRightGridItem, InterviewItemTypography, SNoteBox, SSubmitButton, SBottomGrid, SWithdrawButton } from "../styles/Interview-StyledComponents";

function FirstInterviewScreen({profileData, firstInterviewData, setFirstInterviewData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFirstInterviewData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  // 「保存」ボタン押下時の処理
  const handleSaveFirstInterview = async () => {
    // candidate_id は profileData.id がセットされている前提
    const firstInterviewPayload = {
      candidate_id: profileData.id,
      interview_date: firstInterviewData.interview_date,
      interviewer: firstInterviewData.interviewer,
      result: firstInterviewData.result,
      skill: firstInterviewData.skill,
      personality: firstInterviewData.personality,
      character: firstInterviewData.character,
      values: firstInterviewData.values,
      culture: firstInterviewData.culture,
      remarks: firstInterviewData.remarks,
    };

    console.log("送信前の一次面接データ:", firstInterviewPayload);
    try {
      const response = await fetch("http://localhost:3001/first_interviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(firstInterviewPayload),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("一次面接データ登録成功", data);
        // 成功時のフィードバックなど
      } else {
        console.error("一次面接データ登録エラー:", response.statusText);
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
    }
  };

  // 各評価項目の入力欄のスタイルを「追加の項目群」の例に合わせる
  const fieldSx = {
    '& .MuiInputBase-input': {
      fontSize: { xs: '0.8rem', md: '0.8rem' },
      padding: { xs: '6px 8px', md: '6px 8px' },
    },
    '& .MuiInputLabel-root': {
      fontSize: { xs: '0.8rem', md: '0.8rem' },
    },
    '& .MuiOutlinedInput-root': {
      height: { xs: '40px', md: '30px' },
    },
  };

  return (
    <SMaxContainer
      maxWidth={false}
      disableGutters
    >
      <SCard>
        <Grid container spacing={0} alignItems={{ xs: "center", md: "flex-start" }} sx = {{height: "100%" }}>
          <SLeftGridItem item xs={12} md={4}>
          <SItemsBox>
            {/* 実施日 */}
            <SEachItemBox>
              <InterviewItemTypography>実施日</InterviewItemTypography>
              <TextField
                size="small"
                type = "date"
                sx={{ width: 180 }}
                name="interview_date"
                value={firstInterviewData.interview_date || ""}
                onChange={handleInputChange}
                variant="outlined"
              />
            </SEachItemBox>
            {/* 担当者 */}
            <SEachItemBox>
              <InterviewItemTypography>担当者</InterviewItemTypography>
              <TextField
                size="small"
                sx={{ width: 180 }}
                name="interviewer"
                value={firstInterviewData.interviewer || ""}
                onChange={handleInputChange}
                variant="outlined"
              />
            </SEachItemBox>
            {/* 合否 */}
            <SEachItemBox>
              <InterviewItemTypography>合否</InterviewItemTypography>
              <FormControl size="small" sx={{ width: 180 }}>
                <Select
                  name="result"
                  value={firstInterviewData.result || ""}
                  onChange={handleInputChange}
                >
                  <MenuItem value="合格">合格</MenuItem>
                  <MenuItem value="不合格">不合格</MenuItem>
                </Select>
              </FormControl>
            </SEachItemBox>
            {/* スキル */}
            <SEachItemBox>
              <InterviewItemTypography>スキル</InterviewItemTypography>
              <FormControl size="small" sx={{ width: 180 }}>
                <Select
                  name="skill"
                  value={firstInterviewData.skill || ""}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="不明">不明</MenuItem>
                </Select>
              </FormControl>
            </SEachItemBox>
            {/* 人間性 */}
            <SEachItemBox>
              <InterviewItemTypography>人間性</InterviewItemTypography>
              <FormControl size="small" sx={{ width: 180 }}>
                <Select
                  name="personality"
                  value={firstInterviewData.personality || ""}
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
              <FormControl size="small" sx={{ width: 180 }}>
                <Select
                  name="character"
                  value={firstInterviewData.character || ""}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="不明">不明</MenuItem>
                </Select>
              </FormControl>
            </SEachItemBox>
            {/* 価値観 */}
            <SEachItemBox>
              <InterviewItemTypography>価値観</InterviewItemTypography>
              <FormControl size="small" sx={{ width: 180 }}>
                <Select
                  name="values"
                  value={firstInterviewData.values || ""}
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
              <FormControl size="small" sx={{ width: 180 }}>
                <Select
                  name="culture"
                  value={firstInterviewData.culture || ""}
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

          {/* 右側セクション: 備考 */}
          <SRightGridItem item xs={12} md={8}>
            <SNoteBox>
              <Typography variant="h6" gutterBottom>
                備考
              </Typography>
              <TextField
                fullWidth
                name="remarks"
                value={firstInterviewData.remarks || ""}
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
              onClick={handleSaveFirstInterview}
            >
              保存
            </SSubmitButton>
          </SBottomGrid>
        </Grid>
      </SCard>
    </SMaxContainer>
  );
}

export default FirstInterviewScreen;
