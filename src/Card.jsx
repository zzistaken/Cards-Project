import Zzistaken from "./assets/images/zzistaken.png";

export const Card = ({ image, title, description }) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-2by1">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img className="is-rounded" src={Zzistaken} alt="zzistaken" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">@zzistaken</p>
            </div>
          </div>
          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
};
