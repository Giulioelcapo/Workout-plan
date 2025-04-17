import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../components/ui/select";

// Dati dei video
const videoData = [
  { id: 1, category: "lower", title: "Bulgarian Split Squat", youtubeUrl: "https://youtube.com/shorts/IY4wsj-iCMk" },
  { id: 2, category: "lower", title: "Nordic Hamstring Curl", youtubeUrl: "https://www.youtube.com/watch?v=EihDptzGZ5c" },
  { id: 3, category: "lower", title: "Trap Bar Deadlift", youtubeUrl: "https://www.youtube.com/watch?v=LA3DXUOeecE" },
  { id: 4, category: "upper", title: "Push Press", youtubeUrl: "https://www.youtube.com/watch?v=iaBVSJm78ko" },
];

const Strength = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e2025] p-6">
      <div className="space-y-6 w-full max-w-5xl">
        <Typography variant="h4" className="text-white font-bold text-center">
          Strength Training Videos
        </Typography>
        <StrengthVideoGallery />
      </div>
    </div>
  );
};

const StrengthVideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredVideos = videoData.filter((video) => video.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="space-y-2 max-w-xs mx-auto">
        <Label className="text-white text-sm">Select Category</Label>
        <Select onValueChange={(val) => setSelectedCategory(val)}>
          <SelectTrigger className="bg-[#2f323a] text-white border border-green-600 rounded-2xl px-6 py-3 hover:bg-green-600 hover:text-black transition-all duration-300 font-semibold shadow-md focus:ring-2 focus:ring-green-500 focus:outline-none">
            <SelectValue placeholder="Choose category..." />
          </SelectTrigger>
          <SelectContent className="bg-[#2a2d34] text-white border-[#444] rounded-b-2xl">
            <SelectItem value="lower">Lower Body</SelectItem>
            <SelectItem value="upper">Upper Body</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {selectedCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              className="bg-[#2a2d34] text-white p-4 rounded-2xl shadow-2xl border border-[#444] hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:shadow-xl transition-all duration-500 transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src={video.youtubeUrl.replace("watch?v=", "embed/")}
                  title={video.title}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Strength;
