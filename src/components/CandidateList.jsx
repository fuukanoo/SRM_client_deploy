import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

// ADDED: 環境変数からバックエンドのURLを取得する
const BACKEND_URL = process.env.REACT_APP_API_BASE_URL;  // ADDED

function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BACKEND_URL}/candidates/`)
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error("Error fetching candidates:", error));
  }, []);

  // 行クリックで候補者詳細へ遷移
  const handleRowClick = (candidateId) => {
    navigate(`/candidate/${candidateId}/profile`);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        候補者一覧
      </Typography>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>ステータス</TableCell>
              <TableCell>エントリー日</TableCell>
              <TableCell>応募経路</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>高校</TableCell>
              <TableCell>大学</TableCell>
              <TableCell>最終職歴</TableCell>
              <TableCell>選考状況</TableCell>
              <TableCell>対応状況</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow
                key={candidate.id}
                onClick={() => handleRowClick(candidate.id)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell>{candidate.id}</TableCell>
                <TableCell>{candidate.status}</TableCell>
                <TableCell>{candidate.created_at}</TableCell>
                <TableCell>{candidate.route}</TableCell>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.high_school}</TableCell>
                <TableCell>{candidate.university}</TableCell>
                <TableCell>{candidate.employment_status}</TableCell>
                <TableCell>{candidate.education}</TableCell>
                <TableCell>{candidate.career}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default CandidateList;
