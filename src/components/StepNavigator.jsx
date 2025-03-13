import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./StepNavigator.css";

function StepNavigator({ steps, onAddStep }) {
  // URL から candidateId を取得（候補者詳細画面でのみ存在するはず）
  const { candidateId } = useParams();

  return (
    <div className="step-navigator">
      <div className="step-container">
        {steps.map((step, index) => (
          <NavLink
            key={index}
            to={getRouteByStep(candidateId, index)}
            className={({ isActive }) =>
              `step-button ${isActive ? "active" : ""}`
            }
          >
            {step}
          </NavLink>
        ))}
        <button className="add-button" onClick={onAddStep}>
          ＋ フォロー面談追加
        </button>
      </div>
    </div>
  );
}


// candidateId が存在する場合は、各ステップのパスに candidateId を含める
function getRouteByStep(candidateId, index) {
  if (candidateId) {
    switch (index) {
      case 0:
        return `/candidate/${candidateId}/profile`;
      case 1:
        return `/candidate/${candidateId}/entryAdjustment`;
      case 2:
        return `/candidate/${candidateId}/casual`;
      case 3:
        return `/candidate/${candidateId}/casualAdjustment`;
      case 4:
        return `/candidate/${candidateId}/firstInterview`;
      case 5:
        return `/candidate/${candidateId}/firstInterviewAdjustment`;
      case 6:
        return `/candidate/${candidateId}/HRInterview`;
      case 7:
        return `/candidate/${candidateId}/HRInterviewAdjustment`;
      case 8:
        return `/candidate/${candidateId}/secondInterview`;
      case 9:
        return `/candidate/${candidateId}/secondInterviewAdjustment`;
      case 10:
        return `/candidate/${candidateId}/finalInterview`;
      case 11:
        return `/candidate/${candidateId}/finalInterviewAdjustment`;
      default:
        return `/candidate/${candidateId}/followup/${index - 9}`;
    }
  } else {
    // candidateId が無い場合は、デフォルトのパス（一覧画面など用）を返す
    switch (index) {
      case 0:
        return "/";
      case 1:
        return "/entryAdjustment";
      case 2:
        return "/casual";
      case 3:
        return "/casualAdjustment";
      case 4:
        return "/firstInterview";
      case 5:
        return "/firstInterviewAdjustment";
      case 6:
        return "/HRInterview";
      case 7:
        return "/HRInterviewAdjustment";
      case 8:
        return "/secondInterview";
      case 9:
        return "/secondInterviewAdjustment";
      case 10:
        return "/finalInterview";
      case 11:
        return "/finalInterviewAdjustment";
      default:
        return `/followup/${index - 9}`;
    }

  }
}

export default StepNavigator;
