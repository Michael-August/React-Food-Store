import '../index.css'

const SideBar = ({onFilter, cats}) => {
    return ( 
        <div className="side-items">
            <header className='mb-4'>FILTER</header>
            <div className="list">
                <ul className="list-unstyled">
                    {cats.map((cat) => <li className='mb-3 font-weight-bold' key={cat} onClick={() => onFilter(cat)}>{cat}</li>)}
                </ul>
            </div>
        </div>
     );
}
 
export default SideBar;