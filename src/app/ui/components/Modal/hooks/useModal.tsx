import { useRef, useState, useEffect } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsVideoPlaying(true);
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowModal(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return {
    showModal,
    closeModal,
    handleBackdropClick,
    playVideo,
    setShowModal,
    pauseVideo,
    videoRef,
    isVideoPlaying,
  };
};
