import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ArticleIcon from "@mui/icons-material/Article";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import FeedIcon from "@mui/icons-material/Feed";
const SideBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#151E27",
          color: "#9DA2A5",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "start",
          paddingTop: "60px",
          paddingLeft: "60px",
          fontWeight: "bold",
          width: "275px",
          position: "fixed",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="50"
            viewBox="0 0 142 30"
            fill="#ffffff"
          >
            <path
              d="M11.52 29.48C9.28 29.48 7.13333 29.1867 5.08 28.6C3.02667 27.9867 1.37333 27.2 0.12 26.24L2.32 21.36C3.52 22.2133 4.93333 22.92 6.56 23.48C8.21333 24.0133 9.88 24.28 11.56 24.28C12.84 24.28 13.8667 24.16 14.64 23.92C15.44 23.6533 16.0267 23.2933 16.4 22.84C16.7733 22.3867 16.96 21.8667 16.96 21.28C16.96 20.5333 16.6667 19.9467 16.08 19.52C15.4933 19.0667 14.72 18.7067 13.76 18.44C12.8 18.1467 11.7333 17.88 10.56 17.64C9.41333 17.3733 8.25333 17.0533 7.08 16.68C5.93333 16.3067 4.88 15.8267 3.92 15.24C2.96 14.6533 2.17333 13.88 1.56 12.92C0.973333 11.96 0.68 10.7333 0.68 9.24C0.68 7.64 1.10667 6.18667 1.96 4.88C2.84 3.54666 4.14667 2.49333 5.88 1.72C7.64 0.919999 9.84 0.52 12.48 0.52C14.24 0.52 15.9733 0.733332 17.68 1.16C19.3867 1.56 20.8933 2.17333 22.2 3L20.2 7.92C18.8933 7.17333 17.5867 6.62667 16.28 6.28C14.9733 5.90667 13.6933 5.72 12.44 5.72C11.1867 5.72 10.16 5.86667 9.36 6.16C8.56 6.45333 7.98667 6.84 7.64 7.32C7.29333 7.77333 7.12 8.30667 7.12 8.92C7.12 9.64 7.41333 10.2267 8 10.68C8.58667 11.1067 9.36 11.4533 10.32 11.72C11.28 11.9867 12.3333 12.2533 13.48 12.52C14.6533 12.7867 15.8133 13.0933 16.96 13.44C18.1333 13.7867 19.2 14.2533 20.16 14.84C21.12 15.4267 21.8933 16.2 22.48 17.16C23.0933 18.12 23.4 19.3333 23.4 20.8C23.4 22.3733 22.96 23.8133 22.08 25.12C21.2 26.4267 19.88 27.48 18.12 28.28C16.3867 29.08 14.1867 29.48 11.52 29.48ZM47.0278 0.999998H53.5078V29H47.0278V0.999998ZM34.3078 29H27.8278V0.999998H34.3078V29ZM47.5078 17.52H33.8278V12.04H47.5078V17.52ZM56.4525 29L68.9325 0.999998H75.3325L87.8525 29H81.0525L70.8125 4.28H73.3725L63.0925 29H56.4525ZM62.6925 23L64.4125 18.08H78.8125L80.5725 23H62.6925ZM90.7575 29V0.999998H102.878C105.384 0.999998 107.544 1.41333 109.358 2.24C111.171 3.04 112.571 4.2 113.558 5.72C114.544 7.24 115.038 9.05333 115.038 11.16C115.038 13.24 114.544 15.04 113.558 16.56C112.571 18.0533 111.171 19.2 109.358 20C107.544 20.8 105.384 21.2 102.878 21.2H94.3575L97.2375 18.36V29H90.7575ZM108.557 29L101.558 18.84H108.478L115.558 29H108.557ZM97.2375 19.08L94.3575 16.04H102.518C104.518 16.04 106.011 15.6133 106.998 14.76C107.984 13.88 108.478 12.68 108.478 11.16C108.478 9.61333 107.984 8.41333 106.998 7.56C106.011 6.70667 104.518 6.28 102.518 6.28H94.3575L97.2375 3.2V19.08ZM126.132 12.28H139.612V17.32H126.132V12.28ZM126.612 23.8H141.852V29H120.172V0.999998H141.332V6.2H126.612V23.8Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        <div
          className="menuItem"
          style={{ marginTop: "30px" }}
          onClick={() => navigate("/profile")}
        >
          <PermIdentityIcon />
          Мой профиль
        </div>
        <div className="menuItem" onClick={() => navigate("/feed")}>
          <DynamicFeedIcon />
          Лента
        </div>
        <div className="menuItem">
          <ArticleIcon />
          Статьи
        </div>

        <div className="menuItem" onClick={() => navigate("/mentorship")}>
          <CastForEducationIcon />
          Менторство
        </div>
        <div className="menuItem" onClick={() => navigate("/training")}>
          <FeedIcon />
          Обучение
        </div>
      </div>
    </>
  );
};
export default SideBar;
