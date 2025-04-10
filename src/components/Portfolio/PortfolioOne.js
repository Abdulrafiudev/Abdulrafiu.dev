const PortfolioOne = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "/img/amazon-clone1.png",
      title: "Amazon Clone: A Full-Stack E-Commerce Website Replica",
      categories: [
        {
          categoryName: "Ecommerce",
        },
      ],
    },
    {
      id: 2,
      image: "/img/towsheart.png",
      title: "Towsheart: Engaging & Modern Dating Site Landing Page",
      categories: [
        {
          categoryName: "Frontend web development",
        },
      ],
    },
    {
      id: 3,
      image: "/img/poem-generator.png",
      title: "PoetAI: A Creative & Dynamic Poem Generator Landing Page",
      categories: [
        {
          categoryName: "Frontend web development",
        },
      ],
    },
    {
      id: 4,
      image: "/img/abdulrafiu.ai-chatbot.png",
      title: "A custom made chatbot",
      categories: [
        {
          categoryName: "A Gemini Api driven web app",
        },
      ],
    },
    ,
  ];
  return (
    <div className="row">
      <div className="stack-wrapper">
        {portfolioItems.map((item, index) => (
          <div className="stack-item" key={index}>
            <div className="card portfolio-item layout-2 scale has-shadow">
              <div className="image-holder">
                <a
                  className="card-thumb"
                  href={`/project-single?id=${item.id}`}
                >
                  <img src={item.image} alt={item.title} />
                </a>
                <div className="card-overlay">
                  <div className="heading">
                    <h4 className="title mt-2 mt-md-3 mb-3">{item.title}</h4>
                    <div className="show-project">
                      <div className="card-terms">
                        {item.categories.map((category, index) => (
                          <a
                            className="terms badge outlined"
                            href="/projects"
                            key={index}
                          >
                            {category.categoryName}
                          </a>
                        ))}
                      </div>
                      <div className="project-link">
                        <a href={`/project-single?id=${item.id}`}>
                          Show Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioOne;
