import { Loading } from "./Loading";
import srcImage from "../../../assets/images/ring-preloader.gif"

describe('<Loading>', () => {
    it('displays an image when loading', () => {
        const loading = shallow(<Loading loading={true}/>);

        expect(loading.find("img").prop("src")).toEqual(srcImage);
    })

    it('renders nothing when not loading', () => {
        const loading = shallow(<Loading loading={false}/>);
        
        expect(loading.type()).toEqual(null)
    })

})
