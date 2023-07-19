import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../Assets/logo.png';
import './../App.css';


function TextLinkExample({ onSearch }) {
const handleSearch = (e) => {
const query = e.target.value;
onSearch(query); // Call the search function from the prop
};

return (
<Navbar className="" style={{ backgroundColor: '#03001C', boxShadow: '0 8px 4px rgba(0, 0, 0, 0.2)' }}>
    <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <form class="form">
                    <button>
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"
                            aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                stroke="currentColor" stroke-width="1.333" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <input class="input" placeholder="Seacrh Any Movie..." onChange={handleSearch} required="" type="text" />
                    <button class="reset" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>

            </Navbar.Text>
        </Navbar.Collapse>
    </Container>
</Navbar>
);
}

export default TextLinkExample;