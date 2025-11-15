import style from './Header.module.css';

const Header = () => (
<>
        <div className={style.header}>
            <h1>Filmes</h1>
        </div>
        <div className={style.banner}>
           <img src="/images/header.png" alt="Capa de filmes" />
        </div>
</>
)

export default Header;