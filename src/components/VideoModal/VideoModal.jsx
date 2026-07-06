import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./VideoModal.css";

function VideoModal({ isOpen, onClose, project }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="video-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <video
          key={project.primaryButton.video}
          controls
          autoPlay
          className="demo-video"
        >
          <source src={project.primaryButton.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoModal;
