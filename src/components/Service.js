const Service = ({id, icon, serviceTitle, serviceText}) => {
  return (
    <article className="service" key={id}>
                <span className="service-icon"><i className={icon}></i></span>
                <div className="service-info">
                  <h4 className="service-title">{serviceTitle}</h4>
                    <p className="service-text">
                    {serviceText}
                    </p>
                </div>
              </article>
  )
}
export default Service