import page from '../../styles/modules/page/page.module.css';

const HomePage = () => {

    let pageStyles = `${page.wrapper}`;

    return (
        <div className={pageStyles}>
            Home
        </div>
    );
};
export default HomePage;