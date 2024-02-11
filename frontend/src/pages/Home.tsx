import './Home.scss';
import { Link } from 'react-router-dom';

const societies = [
    { link: "/clubs?Society=Cultural", img: "https://assets.weforum.org/article/image/l_RiiEHQmsBGeqHMNFw5VH632eeb-r8JE4L7i0LnXaU.jpg", name: "Cultural Society" },
    { link: "/clubs?Society=Technical", img: "https://www.iamthecode.org/wp-content/uploads/2021/03/florian-olivo-4hbJ-eymZ1o-unsplash-scaled-e1616631053918.jpg", name: "Technical Society" },
    { link: "/clubs?Society=Literary", img: "https://www.history.uk.com/wp-content/uploads/2018/03/Making-a-quill-pen.jpg", name: "Literary Society" },
    { link: "/clubs?Society=Sports", img: "https://cdn.britannica.com/52/139052-131-7A7975D1/Balls-shapes-colors-sizes-sports.jpg", name: "Sports Society" },
    { link: "/clubs?Society=Research", img: "https://www.tatsachen-ueber-deutschland.de/files/styles/style_image/public/2023-02/AdobeStock_175487856.jpg?itok=Y2EyLOu5", name: "Research Society" },
]

const Home = () => {
    return (
        <>
            <div id={"home"}>
                <div id={"about"}>
                    <div id={"about-title"}>
                        About us
                    </div>
                    <div id={"about-text"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu tortor orci. Maecenas non justo mollis, tristique velit eu, maximus nunc. Etiam bibendum quam non felis volutpat tincidunt. Vivamus vitae ornare quam. Etiam purus dolor, condimentum ac blandit vitae, fermentum nec orci. Integer eleifend nec est fermentum consequat. Cras ut lorem non nunc imperdiet mollis. Suspendisse scelerisque feugiat eros, ut porttitor metus luctus eget. Vivamus dui elit, convallis non est sit amet, commodo faucibus augue.
                        </div>
                </div>
                <div id={"image-container"}>
                    <img src={"/mandi.jpg"} alt={"Image"} />
                </div>
                <div id={"societies"}>
                    <div id={"societies-heading"}>
                        Our societies
                    </div>
                    <div id={"society-logos-container"}>
                        {
                            societies.map((society, index) => {
                                return (
                                    <div className={"society-card"} key={index}>
                                        <div className={"society-logo"}>
                                            <Link to={society.link} title={society.name}>
                                                <img src={society.img} alt={society.name} loading="lazy" />
                                            </Link>
                                        </div>
                                        <div className={"society-name"}>
                                            <Link to={society.link} title={society.name}>
                                                {society.name}
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
