import ecommerce from '../../images/ecommerce.jpg'
import talent1 from '../../images/talent1.jpg'
import talent2 from '../../images/talent2.jpg'
import talent3 from '../../images/talent3.jpg'
import './Jobs.styles'

export const Jobs = () => {
    return (
        <>
            <section id="job-slide" className="job-slide">
                <div className="job-container">
                    <div className="job-img" />
                    <img src={ecommerce} className="ecommerce-image" alt="ecommerce-image" />
                </div>
                <h1>E-commerce Platform</h1>
                <p>
                    This is a software application that allows businesses to create
                    and manage an online store, process payments, and fulfill orders..{' '}
                </p>

            </section>

            <section>
                <div className="talent-container">
                    <div>
                        <h2>Talent-1</h2>
                        <img src={talent1} className="talent1-image" alt="talent1-image" />
                    </div>
                    <div>
                        <h2>Talent-2</h2>
                        <img src={talent2} className="talent2-image" alt="talent2-image" />
                    </div>
                    <div>
                        <h2>Talent-3</h2>
                        <img src={talent3} className="talent3-image" alt="talent3-image" />
                    </div>
                </div>
            </section>
        </>
    );
};