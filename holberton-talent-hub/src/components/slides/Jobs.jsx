import ecommerce from '../../images/ecommerce.jpg'
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
                    </div>
                    <div>
                        <h2>Talent-2</h2>
                    </div>
                    <div>
                        <h2>Talent-3</h2>
                    </div>
                </div>
            </section>
        </>
    );
};