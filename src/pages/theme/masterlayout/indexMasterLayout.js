import {memo} from 'react';
import Header from '../header/indexHeader';
import Footer from '../footer/indexFooter';


const MasterLayout = ({children,...props}) => {
    return (
    <div {...props}>
    <Header />
    {children}
    <Footer />
    </div>
    );
};

export default memo(MasterLayout);