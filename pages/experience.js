import React, { useState } from "react";
import Certificate from "../components/common/Certificate";
import { Icon } from "@iconify/react";
import certificateList from "../components/home/certificateList";
import styles from "../styles/experience.module.scss";

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  const data = expanded ? certificateList : certificateList.slice(0, 3);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={`${styles.experience_page_div} container-fluid`}>
        <div className={`${styles.experience_page_container} container`}>
          <div className={`${styles.experience_description}`}>
            <h1 className={styles.experience_title}>About My Education</h1>
            <div className={`${styles.experience_content_div} row`}>
              <div className={`${styles.experience_col} col-lg-8 col-md-8`}>
                <p className={styles.experience_content}>
                  Talking about my college, Nepal College of Information
                  Technology – NCIT, established in 2001, runs Pokhara
                  University-affiliated Bachelor’s and Master’s programs – BE,
                  BBA, BCA, ME, MSc & MCIS. Our Engineering Degrees are approved
                  by the Nepal Engineering Council. It has produced over a
                  thousand engineers since its establishment. It is one of the
                  best IT College in Nepal.
                  <br /> <br />
                  I am a recent IT graduate of Nepal College of Information
                  Technology located in Lalitpur, Nepal, where I earned my
                  degree in Bachelors Of Engineering in Information Technology
                  (BE-IT).I started in 2018 and completed in 2022. I am now a
                  proud holder of a 4-year degree and I am looking to put it to
                  use in the field of IT. Spending four years at this college
                  has been an amazing experience of my life.
                  <br /> <br />
                </p>
              </div>
              <div
                className={`${styles.experience_col_desp} col-lg-4 col-md-4`}
              >
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
              <h1 className={`${styles.stack_title}`}>Frontend Technologies</h1>

              <ul className={styles.experience_list}>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <li className={`${styles.frontend_list_items}`}>HTML5</li>
                    <li className={`${styles.frontend_list_items}`}>CSS3</li>
                    <li className={`${styles.frontend_list_items}`}>
                      Bootstrap
                    </li>
                    <li className={`${styles.frontend_list_items}`}>
                      Javascript
                    </li>
                  </div>
                  <div className="col-lg-6 col-sm-2">
                    <li className={`${styles.frontend_list_items}`}>Jquery</li>
                    <li className={`${styles.frontend_list_items}`}>
                      React JS
                    </li>
                    <li className={`${styles.frontend_list_items}`}>Next Js</li>
                    <li className={`${styles.frontend_list_items}`}>Figma</li>
                  </div>
                </div>
              </ul>
            </div>
            <div className={`${styles.experience_tech_col} col-lg-4 col-md-6`}>
              <h1 className={`${styles.stack_title}`}>Backend Technologies</h1>
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
                  <p className={styles.college_name}>
                    <i> Sifal, Kathmandu</i>
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
                    Deerhold is a healthcare product, services and analytics
                    company based in Lexington, Massachusetts, USA with a major
                    offshore office in Nepal and development center in Tokyo,
                    Japan.
                    <br /> <br />I became a fellow at this company after being
                    chosen for the 6 months fellowship program. I was allocated
                    to this fellowship program as a React/Node Js Developer. I
                    gained knowledge about typescript, project management tool
                    (JIRA), and most importantly how to collaborate with a team.
                    This fellowship program caters to both non-technical and
                    technical skills. Being a part of this fellowship program
                    has been an incredible experience.
                  </p>
                </div>
              </div>
              <hr className={styles.hr_line} />
              <div className={`${styles.experience_content_div} row`}>
                <div className={`${styles.experience_col} col-lg-8 col-md-8`}>
                  <h2 className={styles.company_title}>Creatu Developers</h2>
                  <p className={styles.experience_content}>
                    Creatu Developers was established in 2016 and since its
                    establishment, it is one of the well renowned IT service
                    providing company in Nepal.
                    <br /> <br />I began my career with this company as a
                    two-month internship. During my internship, I became
                    acquainted with the javascript library React JS.Following
                    the completion of my internship, I was promoted to React Js
                    Developer and assigned to client projects.
                    <br /> <br />
                    Along with the projects, I am improving my teamwork and
                    research skills. It was an incredible experience to work for
                    this company for 8 months.
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
              <hr className={styles.hr_line} />
            </div>
          </div>

          <div
            className={`${styles.container_certificate_container} container`}
          >
            <h1 className={styles.experience_title}>
              Training and Certifications
            </h1>

            {data.map((list, index) => {
              return (
                <div className={`${styles.training_row} row`} key={index}>
                  <Certificate list={list} />
                </div>
              );
            })}

            <div className={styles.show_more_btn_div}>
              <button className={styles.show_more_btn} onClick={handleExpand}>
                {expanded ? (
                  <>
                    Show Less <Icon className={styles.show_more_icon} icon="ic:baseline-expand-less" />{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    Show More <Icon className={styles.show_more_icon} icon="ic:baseline-expand-more" />{" "}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
