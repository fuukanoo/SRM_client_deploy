// Layout.jsx
import React from "react";
import { Container, Grid, Typography, Divider, Card, Box, TextField, Button, Link } from "@mui/material";
import StepNavigator from "./components/StepNavigator";

function Layout({
  profileData,
  isSubmitted,
  setIsSubmitted,
  handleInputChange,
  fileInputRef,
  handlePhotoUpload,
  handleResumeUpload,
  handleCareerSheetUpload,
  handleRegister,
  stepLabels,
  currentStep,
  setCurrentStep,
  handleAddStep,
  photoPreviewUrl,
  children
}) {
  return (
    <Container
      maxWidth={false}
      sx={{
        position: "absolute",
        top: "5%",
        bottom: "5%",
        left: "2%",
        right: "5%",
        width: "95%",
        overflow: "auto",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Grid container spacing={4}>
        {/* タイトル部分 */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ fontSize: "1.2rem" }}>
            個人プロフィール
          </Typography>
          <Divider sx={{ mb: 1.25 }} />
        </Grid>

        {/* 左側：プロフィールフォーム */}
        <Grid item xs={12} md={4} sx={{ display: "flex", pt: 2, pl: 2, pr: 2 }}>
          <Card
            sx={{
              width: "100%",
              boxShadow: 3,
              padding: { xs: 1, md: 2 }
            }}
          >
            {/* 写真と名前の部分 */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                pr: 3,
                pl: 3
              }}
            >
              <Box
                sx={{
                  width: { xs: 77.8, md: 77.8 },
                  height: { xs: 100, md: 100 },
                  flexShrink: 0,
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: photoPreviewUrl ? `url(${photoPreviewUrl})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "2px solid #ddd",
                  cursor: isSubmitted ? "default" : "pointer"
                }}
                onClick={isSubmitted ? undefined : () => fileInputRef.current.click()}
              >
                {!photoPreviewUrl && (
                  <Typography variant="body2" sx={{ fontSize: { xs: "0.7rem", md: "0.8rem" } }}>
                    写真未挿入
                  </Typography>
                )}
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {isSubmitted ? (
                  <>
                    <Typography
                      
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.7rem", md: "0.7rem" },
                        padding: "4px"
                      }}
                    >
                      {profileData.furigana || "ふりがな"}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "1rem", md: "2rem" },
                        padding: "4px"
                      }}
                    >
                      {profileData.name || "名前"}
                    </Typography>
                  </>
                ) : (
                  <>
                    <TextField
                      fullWidth
                      label="ふりがな"
                      name="furigana"
                      value={profileData.furigana}
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{
                        "& .MuiInputBase-input": {
                          fontSize: { xs: "0.7rem", md: "0.7rem" },
                          padding: "8px"
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.7rem", md: "0.7rem" }
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="名前"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{
                        mt: { xs: 0.5, md: 1 },
                        "& .MuiInputBase-input": {
                          fontSize: { xs: "1rem", md: "2rem" },
                          padding: "8px"
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "1rem", md: "1rem" }
                        }
                      }}
                    />
                  </>
                )}
              </Box>
            </Box>
            <input
              type="file"
              name="photo"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handlePhotoUpload}
            />
            <Divider sx={{ my: 1 }} />
            <Box>
              <Container sx={{ mt: 3, mb: 1 }}>
                {isSubmitted ? (
                  <Typography variant="body1">
                    <strong>職務経歴:</strong> {profileData.career || "未入力"}
                  </Typography>
                ) : (
                  <TextField
                    fullWidth
                    label="職務経歴"
                    name="career"
                    value={profileData.career}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" },
                        padding: { xs: "6px 8px", md: "6px 8px" }
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" }
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", md: "40px" }
                      }
                    }}
                  />
                )}
              </Container>
              <Container sx={{ mt: 1, mb: 1 }}>
                {isSubmitted ? (
                  <Typography variant="body1">
                    <strong>履歴書:</strong>{" "}
                    {profileData.resume_url ? (
                      <Link
                        onClick={() => window.open(profileData.resume_url, "_blank")}
                        sx={{ cursor: "pointer", color: "#007bff" }}
                      >
                        📎 {profileData.resume ? profileData.resume.name : "ファイル"}
                      </Link>
                    ) : (
                      "未アップロード"
                    )}
                  </Typography>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      component="label"
                      fullWidth
                      sx={{ fontSize: { xs: "0.8rem", md: "0.8rem" } }}
                    >
                      履歴書をアップロード
                      <input
                        type="file"
                        name="resume"
                        hidden
                        onChange={handleResumeUpload}
                      />
                    </Button>
                    {profileData.resume_url && (
                      <Typography variant="body2" sx={{ mt: 0.5 }}>
                        アップロード済み: {profileData.resume ? profileData.resume.name : ""}
                      </Typography>
                    )}
                  </>
                )}
              </Container>
              <Container sx={{ mt: 1, mb: 1 }}>
                {isSubmitted ? (
                  <Typography variant="body1">
                    <strong>職務経歴書:</strong>{" "}
                    {profileData.career_sheet_url ? (
                      <Link
                        onClick={() => window.open(profileData.career_sheet_url, "_blank")}
                        sx={{ cursor: "pointer", color: "#007bff" }}
                      >
                        📎 {profileData.careerSheet ? profileData.careerSheet.name : "ファイル"}
                      </Link>
                    ) : (
                      "未アップロード"
                    )}
                  </Typography>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      component="label"
                      fullWidth
                      sx={{ fontSize: { xs: "0.8rem", md: "0.8rem" } }}
                    >
                      職務経歴書をアップロード
                      <input
                        type="file"
                        name="careerSheet"
                        hidden
                        onChange={handleCareerSheetUpload}
                      />
                    </Button>
                    {profileData.career_sheet_url && (
                      <Typography variant="body2" sx={{ mt: 0.5 }}>
                        アップロード済み: {profileData.careerSheet ? profileData.careerSheet.name : ""}
                      </Typography>
                    )}
                  </>
                )}
              </Container>
              <Container sx={{ mt: 1, mb: 1 }}>
                {isSubmitted ? (
                  <Typography variant="body1">
                    <strong>経路:</strong> {profileData.route || "未入力"}
                  </Typography>
                ) : (
                  <TextField
                    fullWidth
                    label="経路"
                    name="route"
                    value={profileData.route}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" },
                        padding: { xs: "6px 8px", md: "6px 8px" }
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" }
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", md: "40px" }
                      }
                    }}
                  />
                )}
              </Container>
              <Container sx={{ mt: 1, mb: 1 }}>
                {isSubmitted ? (
                  <Typography variant="body1">
                    <strong>生年月日:</strong> {profileData.birthdate || "未入力"}
                  </Typography>
                ) : (
                  <TextField
                    fullWidth
                    label="生年月日"
                    name="birthdate"
                    value={profileData.birthdate}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" },
                        padding: { xs: "6px 8px", md: "6px 8px" }
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" }
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", md: "40px" }
                      }
                    }}
                  />
                )}
              </Container>
              <Container sx={{ mt: 1, mb: 1 }}>
                {isSubmitted ? (
                  <Typography variant="body1">
                    <strong>住所:</strong> {profileData.address || "未入力"}
                  </Typography>
                ) : (
                  <TextField
                    fullWidth
                    label="住所"
                    name="address"
                    value={profileData.address}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" },
                        padding: { xs: "6px 8px", md: "6px 8px" }
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" }
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", md: "40px" }
                      }
                    }}
                  />
                )}
              </Container>
              <Container sx={{ mt: 1, mb: 1 }}>
                {isSubmitted ? (
                  <Typography variant="body1">
                    <strong>出身:</strong> {profileData.origin || "未入力"}
                  </Typography>
                ) : (
                  <TextField
                    fullWidth
                    label="出身"
                    name="origin"
                    value={profileData.origin}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" },
                        padding: { xs: "6px 8px", md: "6px 8px" }
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" }
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", md: "40px" }
                      }
                    }}
                  />
                )}
              </Container>
              <Container sx={{ mt: 1, mb: 1 }}>
                {isSubmitted ? (
                  <Typography variant="body1">
                    <strong>就業状況:</strong> {profileData.employment_status || "未入力"}
                  </Typography>
                ) : (
                  <TextField
                    fullWidth
                    label="就業状況"
                    name="employment_status"
                    value={profileData.employment_status}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" },
                        padding: { xs: "6px 8px", md: "6px 8px" }
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" }
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", md: "40px" }
                      }
                    }}
                  />
                )}
              </Container>
              <Container sx={{ mt: 1, mb: 1 }}>
                {isSubmitted ? (
                  <Typography variant="body1">
                    <strong>大学:</strong> {profileData.university || "未入力"}
                  </Typography>
                ) : (
                  <TextField
                    fullWidth
                    label="大学"
                    name="university"
                    value={profileData.university}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" },
                        padding: { xs: "6px 8px", md: "6px 8px" }
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" }
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", md: "40px" }
                      }
                    }}
                  />
                )}
              </Container>
              <Container sx={{ mt: 1, mb: 1 }}>
                {isSubmitted ? (
                  <Typography variant="body1">
                    <strong>高校:</strong> {profileData.high_school || "未入力"}
                  </Typography>
                ) : (
                  <TextField
                    fullWidth
                    label="高校"
                    name="high_school"
                    value={profileData.high_school}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" },
                        padding: { xs: "6px 8px", md: "6px 8px" }
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: { xs: "0.8rem", md: "0.8rem" }
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", md: "40px" }
                      }
                    }}
                  />
                )}
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                  <Button variant="outlined" onClick={() => setIsSubmitted(false)} sx={{ fontSize: { xs: "0.8rem", md: "0.8rem" }, ml: 1 }}>
                    編集
                  </Button>
                  <Button variant="contained" onClick={handleRegister} sx={{ fontSize: { xs: "0.8rem", md: "0.8rem" }, ml: 1 }}>
                    登録
                  </Button>
                </Box>
              </Container>
            </Box>
          </Card>
        </Grid>

        {/* 右側：ステップナビゲーション＋子コンテンツ（候補者詳細の各画面） */}
        <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column", pt: 2, pl: 2, pr: 2 }}>
          <StepNavigator
            steps={stepLabels}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            onAddStep={handleAddStep}
          />
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;
