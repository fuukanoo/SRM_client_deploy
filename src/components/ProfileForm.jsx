import React, { useState } from "react";
import axios from "axios";

const ProfileForm = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    education: "",
    career: "",
  });
  const [profileId, setProfileId] = useState(null);
  const [resume, setResume] = useState(null);
  const [careerSheet, setCareerSheet] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreateProfile = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/profiles", form);
      setProfileId(response.data.id);
      alert("プロフィールが作成されました！");
    } catch (error) {
      console.error(error);
      alert("プロフィール作成に失敗しました。");
    }
  };

  const handleFileUpload = async (file, type) => {
    if (!profileId || !file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);
    try {
      await axios.post(`http://localhost:3001/api/profiles/${profileId}/upload`, formData);
      alert(`${type === "resume" ? "履歴書" : "職務経歴書"}がアップロードされました！`);
    } catch (error) {
      console.error(error);
      alert("ファイルアップロードに失敗しました。");
    }
  };

  return (
    <div>
      <h2>個人プロフィール作成</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>氏名: </label>
        <input type="text" name="name" value={form.name} onChange={handleInputChange} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>年齢: </label>
        <input type="number" name="age" value={form.age} onChange={handleInputChange} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>最終学歴: </label>
        <input type="text" name="education" value={form.education} onChange={handleInputChange} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>職務経歴: </label>
        <input type="text" name="career" value={form.career} onChange={handleInputChange} />
      </div>
      <button onClick={handleCreateProfile}>プロフィール作成</button>

      {profileId && (
        <div>
          <h3>ファイルアップロード</h3>
          <div style={{ marginBottom: "10px" }}>
            <label>履歴書: </label>
            <input type="file" onChange={(e) => setResume(e.target.files[0])} />
            <button onClick={() => handleFileUpload(resume, "resume")}>アップロード</button>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>職務経歴書: </label>
            <input type="file" onChange={(e) => setCareerSheet(e.target.files[0])} />
            <button onClick={() => handleFileUpload(careerSheet, "careerSheet")}>アップロード</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
