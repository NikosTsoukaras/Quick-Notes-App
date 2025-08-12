import NoDataImg from "../../assets/No-data.svg";

export default function NoData({ title, text }) {
    return (
        <div className="no-data">
            <img src={NoDataImg} alt="no data icon" />
            <h2 className="no-data__title title-1">{title}</h2>
            {text && <p className="no-data__text title-2">{text}</p>}
        </div>
    );
}
