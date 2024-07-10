// este componente es para agregar un video en la pagina web
// importacion de la hoja de estilos
import "../css/video.css";
// esta constante permite  que tanto el titulo como la URL puedan ser cambiados en a pagina que se quiere utilizar
const VideoCard = ({ videoUrl, title }) => {
  return (
    <div className="card-video">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <video className="video-player" autoPlay muted loop playsInline>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoCard;
