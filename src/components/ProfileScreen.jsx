import React from "react";

function ProfileScreen() {
  return null;
}

export default ProfileScreen;


// import React, { useRef } from "react";
// import {
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Grid,
//   Container,
//   Divider,
//   Link,
// } from "@mui/material";
// import "./ProfileScreen.css";

// function ProfileScreen({ profileData, setProfileData }) {
//   const fileInputRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileUpload = (e) => {
//     const { name, files } = e.target;
//     setProfileData((prev) => ({ ...prev, [name]: files[0] }));
//   };

//   const photoPreviewUrl = profileData.photo
//     ? URL.createObjectURL(profileData.photo)
//     : null;

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       <Grid container spacing={4}>
//         <Grid item xs={12}>
//           <Card sx={{ p: 3, boxShadow: 3 }}>
//             <CardContent>

//               {/* 写真と名前の入力欄 */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "flex-end",
//                   gap: 2,
//                   mb: 2,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: 120,
//                     height: 160,
//                     flexShrink: 0,
//                     backgroundColor: "#f5f5f5",
//                     borderRadius: "8px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     backgroundImage: photoPreviewUrl
//                       ? `url(${photoPreviewUrl})`
//                       : "none",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     border: "2px solid #ddd",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => fileInputRef.current.click()}
//                 >
//                   {!photoPreviewUrl && (
//                     <Typography variant="body2">写真未挿入</Typography>
//                   )}
//                 </Box>
//                 <Box sx={{ flex: 1 }}>
//                   <TextField
//                     fullWidth
//                     label="ふりがな"
//                     name="furigana"
//                     value={profileData.furigana}
//                     onChange={handleInputChange}
//                     placeholder="やまだ たろう"
//                     variant="outlined"
//                   />
//                   <TextField
//                     fullWidth
//                     label="名前"
//                     name="name"
//                     value={profileData.name}
//                     onChange={handleInputChange}
//                     placeholder="山田 太郎"
//                     variant="outlined"
//                     sx={{ mt: 2 }}
//                   />
//                 </Box>
//               </Box>
//               <input
//                 type="file"
//                 name="photo"
//                 accept="image/*"
//                 ref={fileInputRef}
//                 style={{ display: "none" }}
//                 onChange={handleFileUpload}
//               />

//               <Divider sx={{ my: 2 }} />

//               {/* それ以降の入力項目 */}
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="職務経歴"
//                     name="career"
//                     value={profileData.career || ""}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button variant="contained" component="label" fullWidth>
//                     履歴書
//                     <input
//                       type="file"
//                       name="resume"
//                       hidden
//                       onChange={handleFileUpload}
//                     />
//                   </Button>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button variant="contained" component="label" fullWidth>
//                     職務経歴書
//                     <input
//                       type="file"
//                       name="careerSheet"
//                       hidden
//                       onChange={handleFileUpload}
//                     />
//                   </Button>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="経路"
//                     name="route"
//                     value={profileData.route || ""}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="生年月日"
//                     name="birthdate"
//                     value={profileData.birthdate || ""}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="住所"
//                     name="address"
//                     value={profileData.address || ""}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="出身"
//                     name="origin"
//                     value={profileData.origin || ""}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="就業状況"
//                     name="employmentStatus"
//                     value={profileData.employmentStatus || ""}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="大学"
//                     name="university"
//                     value={profileData.university || ""}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="高校"
//                     name="highSchool"
//                     value={profileData.highSchool || ""}
//                     onChange={handleInputChange}
//                     variant="outlined"
//                   />
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default ProfileScreen;
