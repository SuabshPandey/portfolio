import React from "react";
import Card from "../components/common/Card";
import experienceList from "../components/home/experienceList";
import styles from "../styles/experience.module.scss";

const Experience = () => {
  return (
    <>
      <div className={`${styles.experience_page_div} container-fluid`}>
        <div className={`${styles.experience_page_container} container`}>
          <div className={`${styles.experience_description}`}>
            <h1 className={styles.experience_title}>
              Talking About My Education
            </h1>
            <div className={`${styles.experience_content_div} row`}>
              <div className={`${styles.experience_col} col-lg-8 col-md-8`}>
                <p className={styles.experience_content}>
                  I have completed 4 years Bachelors Program in Information
                  Technology. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Ullam, iste. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Consequatur, id. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Ratione,
                  debitis. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Accusamus, assumenda? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Delectus, modi quas reiciendis
                  quam iusto quisquam neque, odio mollitia velit tenetur sit,
                  impedit itaque deleniti. <br /> <br /> Tenetur adipisci libero
                  qui quia molestias enim molestiae similique obcaecati rerum a?
                  Doloribus nobis fugit cumque obcaecati ipsam totam natus porro
                  odio nam aliquid facere, commodi mollitia labore deserunt
                  beatae hic sunt ex amet quibusdam aut quis sit et fugiat!
                  Molestiae accusamus quia architecto voluptatem quaerat, culpa
                  minus voluptatum sequi incidunt deserunt vel dolorum nostrum
                  ducimus hic ipsam illo suscipit consequatur. Et reprehenderit
                  nam soluta distinctio velit, quia provident culpa possimus
                  sapiente facere nostrum nemo aperiam? Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Dolorem voluptate nemo
                  dolor quas itaque tempore tenetur eius aliquam debitis
                  doloribus!
                </p>
              </div>
              <div className={`${styles.experience_col_img} col-lg-4 col-md-4`}>
                <div className={`${styles.college_img_div}`}>
                  <img className={styles.college_img} src="/images/ncit.jpg" />
                </div>
                <p className={styles.college_name}>
                  <i> Nepal College of Information Technology(NCIT)</i>
                </p>
                <p className={styles.college_date}>
                  <i> ( 2018-2022 )</i>
                </p>
              </div>
            </div>
          </div>

          <h1 className={styles.experience_title}>About My Skills/Expertise</h1>
          <p className={styles.experience_page_sub_title}>
            I have been using the following language/tools/frameworks/libray for
            the last two years. And I have developed several client projects,
            college projects as well as personal projects using following tools.
          </p>

          <div className={`${styles.experience_tech_div} row`}>
            <div className={`${styles.experience_tech_col} col-lg-4 col-md-6`}>
              <h1 className={`${styles.stack_title}`}>
                Frontend Tools/Frameworks
              </h1>
              <ul className={styles.experience_list}>
                <li className={styles.frontend_list_items}>HTML5</li>
                <li className={styles.frontend_list_items}>CSS3</li>
                <li className={styles.frontend_list_items}>Bootstrap</li>
                <li className={styles.frontend_list_items}>Javascript</li>
                <li className={styles.frontend_list_items}>Jquery</li>
                <li className={styles.frontend_list_items}>React JS</li>
                <li className={styles.frontend_list_items}>Next Js</li>
                <li className={styles.frontend_list_items}>Figma</li>
              </ul>
            </div>
            <div className={`${styles.experience_tech_col} col-lg-4 col-md-6`}>
              <h1 className={`${styles.stack_title}`}>
                Backend Tools/Frameworks
              </h1>
              <ul className={styles.experience_list}>
                <li className={styles.backend_list_items}>Node Js</li>
                <li className={styles.backend_list_items}>Express Js</li>
                <li className={styles.backend_list_items}>Embedded JS (EJS)</li>
                <li className={styles.backend_list_items}>Python</li>
              </ul>
            </div>
            <div className={`${styles.experience_tech_col} col-lg-4 col-md-6`}>
              <h1 className={`${styles.stack_title}`}>Database/API's</h1>
              <ul className={styles.experience_list}>
                <li className={styles.database_list_items}>MongoDB</li>
                <li className={styles.database_list_items}>Mongoose</li>
                <li className={styles.database_list_items}>MySQL</li>
                <li className={styles.database_list_items}>Sequalize</li>
                <li className={styles.database_list_items}>RESTful API</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.experience_container_div} container`}>
            <div className={styles.recent_experience_div}>
              <h1 className={styles.experience_title}>
                Recent Work Expenrience{" "}
              </h1>
              <div className={`${styles.experience_content_div} row`}>
                <div className={`${styles.experience_col} col-lg-4 col-md-4`}>
                  <div className={styles.experince_img_div}>
                    <img
                      src="/images/skills/dh.jpg"
                      className={styles.experience_img}
                      alt="deerhold"
                    />
                  </div>
                  <p className={styles.college_name}>
                    <i> Deerhold Nepal Pvt. Ltd</i>
                  </p>
                  <p className={styles.college_date}>
                    <i> ( March 2022 - October 2022 )</i>
                  </p>
                </div>
                <div className={`${styles.experience_col} col-lg-8 col-md-8`}>
                  <h2 className={styles.company_title}>
                    Deerhold Nepal Pvt.Ltd
                  </h2>
                  <p className={styles.experience_content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quisquam, quae. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam,
                  </p>
                </div>
              </div>
              <hr />
              <div className={`${styles.experience_content_div} row`}>
                <div className={`${styles.experience_col} col-lg-8 col-md-8`}>
                  <h2 className={styles.company_title}>Creatu Developers</h2>
                  <p className={styles.experience_content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quisquam, quae. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam,
                  </p>
                </div>

                <div className={`${styles.experience_col} col-lg-4 col-md-4`}>
                  <div className={styles.experince_img_div}>
                    <img
                      src="/images/skills/cd.png"
                      className={styles.experience_img}
                      alt="deerhold"
                    />
                  </div>
                  <p className={styles.college_name}>
                    <i> Creatu Developers - Kathmandu, Nepal</i>
                  </p>
                  <p className={styles.college_date}>
                    <i> ( July 2021 - February 2022 )</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
