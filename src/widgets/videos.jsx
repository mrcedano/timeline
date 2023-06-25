import '../styles/videos.css';
import propTypes from "prop-types";

export function Videos() {
    return (
      <div id="VideosContainer">
        <div className="head">Videos</div>

        <div id="Interviews">
          <YoutubeVideo
            youtube_link={"https://www.youtube.com/embed/vlMvAf-1RKc"}
          />
          <YoutubeVideo
            youtube_link={"https://www.youtube.com/embed/h-Nd0v6VZg8"}
          />
          <YoutubeVideo
            youtube_link={"https://www.youtube.com/embed/7CyAw2_b8W0"}
          />
        </div>
      </div>
    );
}

function YoutubeVideo({youtube_link}) {
    return (
      <iframe
        src={youtube_link}
        title="Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    );
}

YoutubeVideo.propTypes = {
    youtube_link: propTypes.string
}