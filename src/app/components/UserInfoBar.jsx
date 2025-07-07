import '../../css/userInfoBar.css'
import { CgPlayButton } from "react-icons/cg";
/*componente para o perfil do utilizador*/
function UserInfoBar(props) {

    return (
        <div className="infoBar1">
            <CgPlayButton className="ib-icon" />
            <div className="ib-text">
                 <p>Reproduções: prop</p>
            </div>
        </div>
    )
}
export default UserInfoBar;

//Faixas ouvidas:
//Tempo de Reprodução