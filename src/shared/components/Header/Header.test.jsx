import Header from './Header'
import Logo from '../../../assets/images/Logo.svg'

describe('<Header>', () => {
    it("renders properly", () => {
        const header = shallow(<Header/>)
        expect(header.containsMatchingElement(
            <header className="Header">
                <img src={Logo} width="120" alt="Bossjob" />
            </header>
        )).toBeTruthy()
    })
})
