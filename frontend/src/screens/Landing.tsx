import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pt-8 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src="/chesss.webp" className="max-w-lg" />
          </div>
          <div className="pt-16">
            <div className="flex">
              <h1 className="text-6xl font-bold text-white">
                Play Chess Online <br />
                <center>on #3rd site!</center>
              </h1>
            </div>
            <div className=" flex ml-36 mt-14">
              <Button
                onClick={() => {
                  navigate("/game");
                }}
              >
                Play Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
