import { ContainerD, LogoImg } from "./Depoimento.style";
import Icon from "../../assets/images/avatarDepoimentos.png";

const Depoimentos = () => {
  return (
    <ContainerD>
      <div className="Titulo">
        <h3>Depoimentos</h3>
      </div>
      <div className="Row">
        <div className="Col">
          <LogoImg src={Icon} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptas blanditiis impedit nisi quis ratione nemo necessitatibus
            velit est doloribus. Aspernatur et quisquam possimus, rem soluta vel
            expedita vitae sequi!
          </p>
        </div>

        <div className="Col">
          <LogoImg src={Icon} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptas blanditiis impedit nisi quis ratione nemo necessitatibus
            velit est doloribus. Aspernatur et quisquam possimus, rem soluta vel
            expedita vitae sequi!
          </p>
        </div>
        <div className="Col">
          <LogoImg src={Icon} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptas blanditiis impedit nisi quis ratione nemo necessitatibus
            velit est doloribus. Aspernatur et quisquam possimus, rem soluta vel
            expedita vitae sequi!
          </p>
        </div>
      </div>
    </ContainerD>
  );
};

export default Depoimentos;
